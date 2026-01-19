'use client';

import Link from 'next/link';
import {
	ArrowUpRight,
	GraduationCap,
	Award,
	Code,
	Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CvDownload } from '@/components/common/cv-download';
import CountUp from '@/components/common/animations/count-up';
import { aboutContent, techStack, spacing } from '@/constants';

import {
	siReact,
	siNextdotjs,
	siTypescript,
	siJavascript,
	siHtml5,
	siCss,
	siTailwindcss,
	siSass,
	siFramer,
	siFigma,
	siNodedotjs,
	siExpress,
	siDjango,
	siFastapi,
	siPostgresql,
	siMongodb,
	siRedis,
	siDocker,
	siVercel,
	siGit,
	siGithubactions,
	siLinux,
	siNginx,
	siNestjs,
	siPrisma,
	siFirebase,
} from 'simple-icons/icons';

function getTechIcon(techName: string) {
	const iconMap: { [key: string]: { hex: string; path: string } | null } = {
		React: siReact,
		'Next.js': siNextdotjs,
		TypeScript: siTypescript,
		JavaScript: siJavascript,
		HTML5: siHtml5,
		CSS3: siCss,
		'Tailwind CSS': siTailwindcss,
		Sass: siSass,
		'Framer Motion': siFramer,
		Figma: siFigma,
		'Node.js': siNodedotjs,
		'Express.js': siExpress,
		Express: siExpress,
		Django: siDjango,
		FastAPI: siFastapi,
		PostgreSQL: siPostgresql,
		MongoDB: siMongodb,
		Redis: siRedis,
		Docker: siDocker,
		AWS: null,
		Vercel: siVercel,
		Git: siGit,
		'GitHub Actions': siGithubactions,
		Linux: siLinux,
		Nginx: siNginx,
		NestJS: siNestjs,
		Prisma: siPrisma,
		Firebase: siFirebase,
	};

	return iconMap[techName] || null;
}

export function OverviewSection() {
	return (
		<section id="about" className={spacing.section}>
			<div className={spacing.container}>
				<h2 className={spacing.heading}>{aboutContent.title}</h2>

				<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
					{/* Introduction & Stats */}
					<div className="space-y-8 animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-100">
						<p className={spacing.description}>
							{aboutContent.description}
						</p>

						<div className="grid grid-cols-2 gap-6">
							{aboutContent.stats.map((stat, index) => {
								const IconComponent =
									stat.icon === 'Award'
										? Award
										: stat.icon === 'Sparkles'
											? Sparkles
											: stat.icon === 'Code'
												? Code
												: GraduationCap;
								return (
									<div
										key={index}
										className="flex items-center space-x-3"
									>
										<IconComponent className="h-6 w-6 text-primary" />
										<div>
											<p className="text-xl font-bold">
												<CountUp
													to={parseInt(stat.value)}
													duration={2}
												/>
												{stat.value.replace(
													/[0-9]/g,
													'',
												)}
											</p>
											<p className="text-sm text-muted-foreground">
												{stat.label}
											</p>
										</div>
									</div>
								);
							})}
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								asChild
								size="lg"
								className="rounded-xs px-8 h-11 group"
							>
								<Link href="/contact">
									Reach out
									<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
								</Link>
							</Button>
							<CvDownload
								variant="button"
								size="lg"
								className="px-8 h-11"
							/>
						</div>
					</div>

					{/* Current Role Card */}
					<div className="animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-200">
						<div className="bg-card border border-border rounded-xs p-6 h-full flex flex-col">
							<div className="flex items-start justify-between mb-4">
								<Badge
									variant="secondary"
									className="rounded-xs"
								>
									Current Role
								</Badge>
								<span className="text-sm text-muted-foreground">
									{aboutContent.currentRole.company}
								</span>
							</div>
							<h3 className="text-2xl font-bold mb-3">
								{aboutContent.currentRole.title}
							</h3>
							<div className="space-y-1 mb-6 flex-1">
								{aboutContent.currentRole.description.map(
									(item, idx) => (
										<p
											key={idx}
											className="text-sm text-muted-foreground"
										>
											{item}
										</p>
									),
								)}
							</div>
							<div className="flex flex-wrap gap-2 mt-auto">
								{aboutContent.currentRole.technologies.map(
									(tech) => (
										<Badge
											key={tech}
											variant="secondary"
											className="rounded-xs"
										>
											{tech}
										</Badge>
									),
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Tech Stack */}
				<div className="group relative w-full overflow-hidden py-8 bg-muted/30 rounded-sm animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-300">
					<div className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
					<div className="absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

					<div className="flex animate-marquee group-hover:[animation-play-state:paused]">
						{/* First set */}
						<div className="flex gap-6 shrink-0">
							{techStack.map((tech, index) => {
								const IconComponent = getTechIcon(tech.name);
								return (
									<div
										key={`first-${index}`}
										className="flex items-center justify-center px-6 py-3 bg-card border border-border rounded-full shadow-sm text-lg font-medium text-foreground shrink-0 min-w-37.5 hover:shadow-md transition-shadow duration-200"
									>
										{IconComponent ? (
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill={`#${IconComponent.hex}`}
												className="mr-3 shrink-0"
											>
												<path d={IconComponent.path} />
											</svg>
										) : (
											<span className="mr-3 text-2xl">
												{tech.icon}
											</span>
										)}
										{tech.name}
									</div>
								);
							})}
						</div>
						{/* Duplicate set */}
						<div className="flex gap-6 shrink-0">
							{techStack.map((tech, index) => {
								const IconComponent = getTechIcon(tech.name);
								return (
									<div
										key={`second-${index}`}
										className="flex items-center justify-center px-6 py-3 bg-card border border-border rounded-full shadow-sm text-lg font-medium text-foreground shrink-0 min-w-37.5 hover:shadow-md transition-shadow duration-200"
									>
										{IconComponent ? (
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill={`#${IconComponent.hex}`}
												className="mr-3 shrink-0"
											>
												<path d={IconComponent.path} />
											</svg>
										) : (
											<span className="mr-3 text-2xl">
												{tech.icon}
											</span>
										)}
										{tech.name}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
