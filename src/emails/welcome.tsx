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

interface WelcomeEmailProps {
	firstName: string;
	subject: string;
}

export function WelcomeEmail({ firstName, subject }: WelcomeEmailProps) {
	const previewText = `Thanks for reaching out, ${firstName}! I've received your message.`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Body style={main}>
				<Container style={container}>
					<EmailHeader title="Message Received!" />

					<Section style={content}>
						<Text style={greeting}>Hi {firstName},</Text>

						<Text style={paragraph}>
							Thank you for reaching out! I've received your
							message regarding{' '}
							<span style={highlight}>"{subject}"</span> and
							wanted to let you know it's in good hands.
						</Text>

						<Text style={paragraph}>
							I typically respond within 24-48 hours. In the
							meantime, feel free to check out my latest work or
							connect with me on social media.
						</Text>

						<Text style={paragraph}>
							Looking forward to connecting with you!
						</Text>

						<Text style={signoff}>
							Best regards,
							<br />
							<span style={name}>Humam Kharbouch</span>
							<br />
							<span style={title}>Full Stack Developer</span>
						</Text>
					</Section>

					<Section style={buttonSection}>
						<EmailButton href="https://humam.tech">
							Visit My Portfolio
						</EmailButton>
					</Section>

					<EmailFooter />
				</Container>
			</Body>
		</Html>
	);
}

export default WelcomeEmail;

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

const greeting = {
	color: '#fafafa',
	fontSize: '18px',
	fontWeight: '600',
	lineHeight: '1.5',
	margin: '0 0 16px',
};

const paragraph = {
	color: '#d4d4d8',
	fontSize: '15px',
	lineHeight: '1.7',
	margin: '0 0 16px',
};

const highlight = {
	color: '#ffffff',
	fontWeight: '500',
};

const signoff = {
	color: '#d4d4d8',
	fontSize: '15px',
	lineHeight: '1.7',
	margin: '24px 0 0',
};

const name = {
	color: '#ffffff',
	fontWeight: '600',
};

const title = {
	color: '#71717a',
	fontSize: '13px',
};

const buttonSection = {
	padding: '0 0 8px',
	textAlign: 'center' as const,
};
