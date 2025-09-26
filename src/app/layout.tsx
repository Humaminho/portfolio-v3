import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Humam - Full Stack Developer',
	description:
		'Portfolio of Humam, a passionate Full Stack Developer from Morocco specializing in modern web technologies, AI, and UI/UX design.',
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
			'Portfolio of Humam, a passionate Full Stack Developer from Morocco',
		url: 'https://humam.pro',
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning
			>
				<ThemeProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
