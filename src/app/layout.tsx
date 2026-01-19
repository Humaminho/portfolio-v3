import type { Metadata } from 'next';
import { Montserrat, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Humam - Full Stack Developer',
	description:
		'Portfolio of Humam, a Full Stack Developer from Morocco specializing in modern web technologies, AI, and UI/UX design.',
	keywords: [
		'Full Stack Developer',
		'React',
		'Next.js',
		'TypeScript',
		'Morocco',
		'Web Development',
	],
	authors: [{ name: 'Humam' }],
	creator: 'Humam',
	openGraph: {
		title: 'Humam - Full Stack Developer',
		description:
			'Portfolio of Humam, a Full Stack Developer from Morocco',
		url: 'https://humam.tech',
		siteName: 'Humam Portfolio',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased`}
				suppressHydrationWarning
			>
				<ThemeProvider>
					<Header />
					<main>{children}</main>
					<Footer />
					<Toaster position="top-center" />
				</ThemeProvider>
			</body>
		</html>
	);
}
