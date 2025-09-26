'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CvDownload } from '@/components/common/cv-download';
import { heroContent, heroTechStack } from '@/constants';

export function HeroSection() {
	return (
		<section className="min-h-screen flex items-center justify-center px-4 pt-14">
			<div className="max-w-4xl mx-auto text-center space-y-8">
				{/* Status Badge */}
				<div className="flex justify-center animate-in fade-in-0 zoom-in-95 duration-500 ease-out">
					<Badge
						variant="outline"
						className="px-4 py-2 text-sm font-medium"
					>
						<span className="relative flex h-2 w-2 mr-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
							<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
						</span>
						{heroContent.status}
					</Badge>
				</div>

				{/* Heading */}
				<div className="space-y-4 animate-in fade-in-0 slide-in-from-top-2 duration-700 ease-out">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
						Hey, I&apos;m{' '}
						<span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
							{heroContent.name}
						</span>
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground font-medium">
						{heroContent.title}
					</p>
				</div>

				<div className="space-y-6 animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-200">
					<div className="flex items-center justify-center text-muted-foreground text-lg">
						<MapPin className="h-5 w-5 mr-2" />
						<span>{heroContent.location}</span>
					</div>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
						{heroContent.description}
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
					{heroTechStack.map((tech) => (
						<Badge
							key={tech}
							variant="outline"
							className="text-xs px-3 py-1 rounded-xs"
						>
							{tech}
						</Badge>
					))}
				</div>

				{/* Call to Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-300">
					<Button asChild className="rounded-xs px-8 py-3 group">
						<Link href={heroContent.cta.primary.href}>
							{heroContent.cta.primary.text}
							<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</Button>
					<CvDownload
						variant="button"
						size="lg"
						className="px-8 py-3"
					/>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 ease-out delay-500 group cursor-pointer">
					<span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
						Scroll Down
					</span>
					<div className="relative">
						{/* Animated scroll line */}
						<div className="h-12 w-[1px] bg-gradient-to-b from-muted-foreground/30 to-transparent rounded-full overflow-hidden">
							<div className="h-4 w-full bg-gradient-to-b from-primary to-primary/60 rounded-full animate-scroll-indicator" />
						</div>
						{/* Mouse icon */}
						<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-5 border border-muted-foreground/50 rounded-full flex justify-center">
							<div className="w-1 h-1 bg-muted-foreground/70 rounded-full mt-1 animate-bounce" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
