import { Button as ReactEmailButton } from '@react-email/components';

interface EmailButtonProps {
	href: string;
	children: React.ReactNode;
}

export function EmailButton({ href, children }: EmailButtonProps) {
	return (
		<ReactEmailButton href={href} style={button}>
			{children}
		</ReactEmailButton>
	);
}

const button = {
	backgroundColor: '#ffffff',
	borderRadius: '6px',
	color: '#0a0a0a',
	display: 'inline-block',
	fontSize: '14px',
	fontWeight: '600',
	lineHeight: '1',
	padding: '12px 24px',
	textAlign: 'center' as const,
	textDecoration: 'none',
};
