import {
	Body,
	Container,
	Head,
	Html,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import { EmailHeader } from './components/header';
import { EmailFooter } from './components/footer';
import { EmailButton } from './components/button';

interface PortfolioContactEmailProps {
	firstName: string;
	lastName: string;
	email: string;
	company?: string;
	subject: string;
	message: string;
	timestamp: string;
}

export function PortfolioContactEmail({
	firstName,
	lastName,
	email,
	company,
	subject,
	message,
	timestamp,
}: PortfolioContactEmailProps) {
	const previewText = `New contact form submission from ${firstName} ${lastName}${company ? ` (${company})` : ''}`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Body style={main}>
				<Container style={container}>
					<EmailHeader title="New Contact Form Submission" />

					<Section style={content}>
						<Text style={label}>From</Text>
						<Text style={value}>
							{firstName} {lastName}
						</Text>

						{company && (
							<>
								<Text style={label}>Company</Text>
								<Text style={value}>{company}</Text>
							</>
						)}

						<Text style={label}>Email</Text>
						<Text style={value}>{email}</Text>

						<Text style={label}>Subject</Text>
						<Text style={value}>{subject}</Text>

						<Text style={label}>Message</Text>
						<Text style={messageBox}>{message}</Text>

						<Text style={timestampText}>
							Received on{' '}
							{new Date(timestamp).toLocaleString('en-US', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric',
								hour: '2-digit',
								minute: '2-digit',
							})}
						</Text>
					</Section>

					<Section style={buttonSection}>
						<EmailButton href={`mailto:${email}`}>
							Reply to {firstName}
						</EmailButton>
					</Section>

					<EmailFooter />
				</Container>
			</Body>
		</Html>
	);
}

export default PortfolioContactEmail;

const main = {
	backgroundColor: '#0a0a0a',
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
	backgroundColor: '#171717',
	borderRadius: '8px',
	margin: '40px auto',
	padding: '0 24px',
	maxWidth: '560px',
};

const content = {
	padding: '24px 0',
};

const label = {
	color: '#71717a',
	fontSize: '12px',
	fontWeight: '500',
	letterSpacing: '0.5px',
	lineHeight: '1',
	margin: '0 0 8px',
	textTransform: 'uppercase' as const,
};

const value = {
	color: '#fafafa',
	fontSize: '16px',
	lineHeight: '1.5',
	margin: '0 0 20px',
};

const messageBox = {
	backgroundColor: '#262626',
	borderRadius: '6px',
	color: '#fafafa',
	fontSize: '15px',
	lineHeight: '1.6',
	margin: '0 0 20px',
	padding: '16px',
	whiteSpace: 'pre-wrap' as const,
};

const timestampText = {
	color: '#52525b',
	fontSize: '12px',
	lineHeight: '1.5',
	margin: '0',
};

const buttonSection = {
	padding: '0 0 8px',
	textAlign: 'center' as const,
};
