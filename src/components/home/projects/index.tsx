'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CountUp from '@/components/common/animations/count-up';
import { projects, projectsContent, spacing } from '@/constants';

interface ProjectCardProps {
	project: {
		id: number;
		src: string;
		title: string;
		description: string;
		features: string[];
		github: string;
		live: string;
		stack: string[];
		hasGitRepo: boolean;
	};
}

function ProjectCard({ project }: ProjectCardProps) {
	return (
		<article className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
			{/* Project Image */}
			<div className="relative aspect-video overflow-hidden bg-muted/20">
				<Image
					src={project.src}
					alt={`${project.title} project preview`}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

				{/* Project Status Badge */}
				<div className="absolute top-3 left-3">
					<Badge
						variant={project.hasGitRepo ? 'secondary' : 'outline'}
						className="text-xs rounded-xs bg-background/90 backdrop-blur-sm border-background/20"
					>
						{project.hasGitRepo ? 'Open Source' : 'Client Work'}
					</Badge>
				</div>
			</div>

			{/* Project Content - Flex grow to push buttons to bottom */}
			<div className="p-6 flex flex-col flex-1">
				{/* Header Section */}
				<div className="mb-4">
					<div className="flex items-start justify-between mb-3">
						<h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors duration-200">
							{project.title}
						</h3>
					</div>
					<p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
						{project.description}
					</p>
				</div>

				{/* Key Features */}
				<div className="mb-5 flex-1">
					<h4 className="font-medium text-sm mb-3 text-foreground/80">
						Key Features
					</h4>
					<ul className="space-y-2">
						{project.features.slice(0, 2).map((feature, index) => (
							<li key={index} className="flex items-start gap-2">
								<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
								<span className="text-xs text-muted-foreground leading-relaxed">
									{feature}
								</span>
							</li>
						))}
					</ul>
				</div>

				{/* Tech Stack - Better visual hierarchy */}
				<div className="mb-6">
					<h4 className="font-medium text-sm mb-3 text-foreground/80">
						Technologies
					</h4>
					<div className="flex flex-wrap gap-2">
						{project.stack.map((tech) => (
							<Badge
								key={tech}
								variant="outline"
								className="text-xs rounded-xs px-2.5 py-1"
							>
								{tech}
							</Badge>
						))}
					</div>
				</div>

				{/* Action Buttons - Always at bottom with consistent spacing */}
				<div className="mt-auto pt-2">
					<div className="flex gap-3">
						<Button
							asChild
							size="sm"
							className="rounded-xs flex-1 h-9 group/btn"
						>
							<a
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`View ${project.title} live demo`}
							>
								<ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
								Live Demo
							</a>
						</Button>
						{project.hasGitRepo && (
							<Button
								asChild
								variant="outline"
								size="sm"
								className="rounded-xs h-9 px-4 group/btn"
								aria-label={`View ${project.title} source code`}
							>
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="h-4 w-4 transition-transform group-hover/btn:rotate-6" />
									<span className="sr-only">Source Code</span>
								</a>
							</Button>
						)}
					</div>
				</div>
			</div>

			{/* Subtle hover accent */}
			<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
		</article>
	);
}

export function ProjectsSection() {
	return (
		<section id="projects" className={spacing.section + ' bg-muted/30'}>
			<div className={spacing.container}>
				<h2 className={spacing.heading}>{projectsContent.title}</h2>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>

				<div className="text-center animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-300">
					<Button asChild className="rounded-xs px-8 py-3 group">
						<Link href={projectsContent.cta.href}>
							{projectsContent.cta.text}
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</Button>
				</div>

				{/* Project Statistics */}
				<div className="mt-20 pt-12 border-t border-border text-center animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-500">
					<h3 className="text-3xl font-bold mb-6">
						{projectsContent.summary.title}
					</h3>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
						{projectsContent.summary.description}
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{projectsContent.summary.stats.map((stat, index) => (
							<div
								key={index}
								className="flex flex-col items-center"
							>
								<span className="text-primary text-4xl font-bold">
									<CountUp
										to={parseInt(stat.value)}
										duration={2}
									/>
									{stat.value.replace(/[0-9]/g, '')}
								</span>
								<p className="text-sm text-muted-foreground">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
