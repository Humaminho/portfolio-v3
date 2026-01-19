import { Heading, Img, Section } from '@react-email/components';

interface EmailHeaderProps {
	title: string;
	baseUrl?: string;
}

const IMAGE_BASE_URL = 'https://humam.tech';

export function EmailHeader({
	title,
	baseUrl = IMAGE_BASE_URL,
}: EmailHeaderProps) {
	return (
		<Section style={headerSection}>
			<Img
				src={`${baseUrl}/img/other/logo.png`}
				width="48"
				height="48"
				alt="Humam Logo"
				style={logoImage}
			/>
			<Heading as="h1" style={heading}>
				{title}
			</Heading>
		</Section>
	);
}

const headerSection = {
	padding: '40px 0 24px',
	textAlign: 'center' as const,
};

const logoImage = {
	margin: '0 auto 24px',
	borderRadius: '8px',
};

const heading = {
	color: '#ffffff',
	fontSize: '24px',
	fontWeight: '600',
	lineHeight: '1.3',
	margin: '0',
};
