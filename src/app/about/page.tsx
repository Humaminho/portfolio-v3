import type { Metadata } from 'next';

import { OverviewSection } from '@/components/about/overview';
import { ExperienceSection } from '@/components/about/experience';
import { TechSection } from '@/components/about/tech';

export const metadata: Metadata = {
	title: 'About - Humam',
	description:
		'Learn more about Humam, a passionate Full Stack Developer from Morocco. Discover my journey, experience, and technical expertise.',
	keywords: [
		'About',
		'Full Stack Developer',
		'Experience',
		'Technologies',
		'Morocco',
		'Web Development',
		'AI',
		'UI/UX',
		'Background',
		'Skills',
	],
	openGraph: {
		title: 'About - Humam',
		description:
			'Learn more about Humam, a passionate Full Stack Developer from Morocco.',
		type: 'website',
	},
};

export default function AboutPage() {
	return (
		<div className="min-h-screen">
			<OverviewSection />
			<ExperienceSection />
			<TechSection />
		</div>
	);
}
