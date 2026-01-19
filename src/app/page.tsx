import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/hero';
import { AboutMiniSection } from '@/components/home/about';
import { ProjectsSection } from '@/components/home/projects';
import { ContactSection } from '@/components/home/contact';

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
		'AI',
		'UI/UX',
		'Portfolio',
	],
	openGraph: {
		title: 'Humam - Full Stack Developer',
		description:
			'Portfolio of Humam, a Full Stack Developer from Morocco',
		type: 'website',
		url: 'https://humam.tech',
	},
};

export default function Home() {
	return (
		<div className="min-h-screen">
			<HeroSection />
			<AboutMiniSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
