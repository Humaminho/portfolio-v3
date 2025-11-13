'use client';

import Link from 'next/link';
import { ArrowUpRight, Award, Code, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { aboutContent, spacing } from '@/constants';

export function AboutMiniSection() {
	return (
		<section id="about" className={spacing.section}>
			<div className={spacing.container}>
				<h2 className={spacing.heading}>{aboutContent.title}</h2>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left Column: Introduction & Stats */}
					<div className="space-y-6 animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-100">
						<p className="text-lg text-muted-foreground leading-relaxed">
							{aboutContent.description}
						</p>

						<div className="grid grid-cols-3 gap-4">
							{aboutContent.stats.map((stat, index) => {
								const IconComponent =
									stat.icon === 'Award'
										? Award
										: stat.icon === 'Sparkles'
										? Sparkles
										: stat.icon === 'Code'
										? Code
										: Award;
								return (
									<div
										key={index}
										className="text-center p-4 bg-card border border-border rounded-sm"
									>
										<IconComponent className="h-6 w-6 text-primary mx-auto mb-2" />
										<p className="text-xl font-bold">
											{stat.value}
										</p>
										<p className="text-xs text-muted-foreground">
											{stat.label}
										</p>
									</div>
								);
							})}
						</div>

						<Button asChild className="rounded-xs px-6 py-2 group">
							<Link href="/about">
								{aboutContent.cta.text}
								<ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Link>
						</Button>
					</div>

					{/* Right Column: Current Role Card */}
					<div className="animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-200 self-start">
						<div className="bg-card border border-border rounded-sm p-6">
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
							<h3 className="text-xl font-bold mb-3">
								{aboutContent.currentRole.title}
							</h3>
							<p className="text-sm text-muted-foreground mb-4">
								{aboutContent.currentRole.description[0]}
							</p>
							<div className="flex flex-wrap gap-2">
								{aboutContent.currentRole.technologies
									.map((tech) => (
										<Badge
											key={tech}
											variant="secondary"
											className="rounded-xs text-xs"
										>
											{tech}
										</Badge>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
