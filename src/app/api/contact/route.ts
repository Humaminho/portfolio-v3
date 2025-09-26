import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
}

export async function POST(request: NextRequest) {
	try {
		const body: ContactFormData = await request.json();

		const { firstName, lastName, email, subject, message } = body;

		if (!firstName || !lastName || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'All fields are required' },
				{ status: 400 }
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: 'Please provide a valid email address' },
				{ status: 400 }
			);
		}

		const { google } = await import('googleapis');

		const auth = new google.auth.GoogleAuth({
			keyFile: './credentials/form-submission-service-account.json',
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		});

		const sheets = google.sheets({ version: 'v4', auth });
		const spreadsheetId = process.env.SPREADSHEET_ID;

		if (!spreadsheetId) {
			throw new Error('SPREADSHEET_ID environment variable is not set');
		}

		const timestamp = new Date().toISOString();
		const values = [
			[timestamp, firstName, lastName, email, subject, message],
		];

		await sheets.spreadsheets.values.append({
			spreadsheetId,
			range: 'Sheet1!A:F',
			valueInputOption: 'RAW',
			requestBody: {
				values,
			},
		});

		return NextResponse.json(
			{ message: 'Message sent successfully!' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error saving to Google Sheets:', error);

		return NextResponse.json(
			{ error: 'Failed to send message. Please try again later.' },
			{ status: 500 }
		);
	}
}
