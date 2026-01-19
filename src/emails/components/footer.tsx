import { Hr, Link, Section, Text } from '@react-email/components';

export function EmailFooter() {
	const currentYear = new Date().getFullYear();

	return (
		<Section style={footerSection}>
			<Hr style={divider} />
			<Text style={footerText}>
				© {currentYear} Humam Kharbouch. All rights reserved.
			</Text>
			<Text style={footerLinks}>
				<Link href="https://humam.tech" style={link}>
					Website
				</Link>
				{' • '}
				<Link href="https://github.com/humaminho" style={link}>
					GitHub
				</Link>
				{' • '}
				<Link href="https://linkedin.com/in/humam-dev" style={link}>
					LinkedIn
				</Link>
			</Text>
		</Section>
	);
}

const footerSection = {
	padding: '24px 0 40px',
};

const divider = {
	borderColor: 'rgba(255, 255, 255, 0.1)',
	margin: '0 0 24px',
};

const footerText = {
	color: '#71717a',
	fontSize: '12px',
	lineHeight: '1.5',
	margin: '0 0 8px',
	textAlign: 'center' as const,
};

const footerLinks = {
	color: '#71717a',
	fontSize: '12px',
	lineHeight: '1.5',
	margin: '0',
	textAlign: 'center' as const,
};

const link = {
	color: '#a1a1aa',
	textDecoration: 'none',
};
