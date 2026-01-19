import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { PortfolioContactEmail } from '@/emails/portfolio-contact';
import { WelcomeEmail } from '@/emails/welcome';

interface ContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	company?: string;
	subject: string;
	message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = 'dev.humam@gmail.com';
const FROM_EMAIL = 'Humam <noreply@humam.tech>';

const SHEET_HEADER_STYLE = {
	backgroundColor: { red: 0.1, green: 0.1, blue: 0.1 },
	textFormat: {
		foregroundColor: { red: 1, green: 1, blue: 1 },
		bold: true,
		fontSize: 11,
	},
	horizontalAlignment: 'CENTER',
	verticalAlignment: 'MIDDLE',
};

const SHEET_HEADERS = [
	'Timestamp',
	'First Name',
	'Last Name',
	'Email',
	'Company',
	'Subject',
	'Message',
];

async function ensureSheetHeaders(
	sheets: Awaited<ReturnType<typeof import('googleapis').google.sheets>>,
	spreadsheetId: string,
) {
	try {
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId,
			range: 'Sheet1!A1:G1',
		});

		const existingHeaders = response.data.values?.[0];

		if (
			!existingHeaders ||
			existingHeaders.length !== SHEET_HEADERS.length
		) {
			await sheets.spreadsheets.values.update({
				spreadsheetId,
				range: 'Sheet1!A1:G1',
				valueInputOption: 'RAW',
				requestBody: {
					values: [SHEET_HEADERS],
				},
			});

			const sheetMetadata = await sheets.spreadsheets.get({
				spreadsheetId,
			});
			const sheetId =
				sheetMetadata.data.sheets?.[0]?.properties?.sheetId || 0;

			await sheets.spreadsheets.batchUpdate({
				spreadsheetId,
				requestBody: {
					requests: [
						{
							repeatCell: {
								range: {
									sheetId,
									startRowIndex: 0,
									endRowIndex: 1,
									startColumnIndex: 0,
									endColumnIndex: 7,
								},
								cell: {
									userEnteredFormat: {
										backgroundColor:
											SHEET_HEADER_STYLE.backgroundColor,
										textFormat:
											SHEET_HEADER_STYLE.textFormat,
										horizontalAlignment:
											SHEET_HEADER_STYLE.horizontalAlignment,
										verticalAlignment:
											SHEET_HEADER_STYLE.verticalAlignment,
									},
								},
								fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)',
							},
						},
						{
							updateSheetProperties: {
								properties: {
									sheetId,
									gridProperties: {
										frozenRowCount: 1,
									},
								},
								fields: 'gridProperties.frozenRowCount',
							},
						},
						{
							autoResizeDimensions: {
								dimensions: {
									sheetId,
									dimension: 'COLUMNS',
									startIndex: 0,
									endIndex: 7,
								},
							},
						},
						{
							updateDimensionProperties: {
								range: {
									sheetId,
									dimension: 'COLUMNS',
									startIndex: 6,
									endIndex: 7,
								},
								properties: {
									pixelSize: 400,
								},
								fields: 'pixelSize',
							},
						},
					],
				},
			});
		}
	} catch (error) {
		console.error('Error setting up sheet headers:', error);
	}
}

export async function POST(request: NextRequest) {
	try {
		const body: ContactFormData = await request.json();

		const { firstName, lastName, email, company, subject, message } = body;

		if (!firstName || !lastName || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'All fields are required' },
				{ status: 400 },
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: 'Please provide a valid email address' },
				{ status: 400 },
			);
		}

		const sanitizedData = {
			firstName: firstName.trim().slice(0, 100),
			lastName: lastName.trim().slice(0, 100),
			email: email.trim().toLowerCase().slice(0, 254),
			company: company?.trim().slice(0, 200) || '',
			subject: subject.trim().slice(0, 200),
			message: message.trim().slice(0, 5000),
		};

		const timestamp = new Date().toISOString();

		try {
			const { google } = await import('googleapis');

			const auth = new google.auth.GoogleAuth({
				credentials: {
					client_email:
						process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
					private_key:
						process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
							/\\n/g,
							'\n',
						),
				},
				scopes: ['https://www.googleapis.com/auth/spreadsheets'],
			});

			const sheets = google.sheets({ version: 'v4', auth });
			const spreadsheetId = process.env.SPREADSHEET_ID;

			if (spreadsheetId) {
				await ensureSheetHeaders(sheets, spreadsheetId);

				await sheets.spreadsheets.values.append({
					spreadsheetId,
					range: 'Sheet1!A:G',
					valueInputOption: 'RAW',
					requestBody: {
						values: [
							[
								timestamp,
								sanitizedData.firstName,
								sanitizedData.lastName,
								sanitizedData.email,
								sanitizedData.company,
								sanitizedData.subject,
								sanitizedData.message,
							],
						],
					},
				});
			}
		} catch (sheetError) {
			console.error('Error saving to Google Sheets:', sheetError);
		}

		const notificationResult = await resend.emails.send({
			from: FROM_EMAIL,
			to: OWNER_EMAIL,
			subject: `New Contact: ${sanitizedData.subject}`,
			replyTo: sanitizedData.email,
			react: PortfolioContactEmail({
				firstName: sanitizedData.firstName,
				lastName: sanitizedData.lastName,
				email: sanitizedData.email,
				company: sanitizedData.company,
				subject: sanitizedData.subject,
				message: sanitizedData.message,
				timestamp,
			}),
		});

		if (notificationResult.error) {
			console.error(
				'Error sending notification email:',
				notificationResult.error,
			);
			throw new Error('Failed to send notification email');
		}

		const confirmationResult = await resend.emails.send({
			from: FROM_EMAIL,
			to: sanitizedData.email,
			subject: "Thanks for reaching out! I've received your message",
			react: WelcomeEmail({
				firstName: sanitizedData.firstName,
				subject: sanitizedData.subject,
			}),
		});

		if (confirmationResult.error) {
			console.error(
				'Error sending confirmation email:',
				confirmationResult.error,
			);
		}

		return NextResponse.json(
			{ message: 'Message sent successfully!' },
			{ status: 200 },
		);
	} catch (error) {
		console.error('Error processing contact form:', error);

		return NextResponse.json(
			{ error: 'Failed to send message. Please try again later.' },
			{ status: 500 },
		);
	}
}
