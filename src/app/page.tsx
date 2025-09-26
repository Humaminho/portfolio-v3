import { HeroSection } from '@/components/home/hero';
import { AboutMiniSection } from '@/components/home/about';
import { ProjectsSection } from '@/components/home/projects';
import { ContactSection } from '@/components/home/contact';

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
