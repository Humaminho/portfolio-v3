'use client';

import React from 'react';
import {
	Calendar,
	House,
	Building2,
	Users,
	Code2,
	Award,
	Hourglass,
	CheckCircle,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import CountUp from '@/components/common/animations/count-up';
import { experienceContent, experiences, spacing } from '@/constants';

function getExperienceIcon(iconName: string) {
	const iconMap: {
		[key: string]: React.ComponentType<{ className?: string }>;
	} = {
		Building2: Building2,
		Users: Users,
		Code2: Code2,
	};
	return iconMap[iconName] || Building2;
}

export function ExperienceSection() {
	return (
		<section id="experience" className={spacing.section + ' bg-muted/30'}>
			<div className={spacing.container}>
				<h2 className={spacing.heading}>{experienceContent.title}</h2>

				{/* Timeline */}
				<div className="relative">
					{/* Vertical Line */}
					<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-px" />

					{/* Experience Items */}
					<div className="space-y-12">
						{experiences.map((exp, index) => (
							<div
								key={exp.id}
								className={`relative flex items-start ${
									index % 2 === 0
										? 'md:flex-row'
										: 'md:flex-row-reverse'
								}`}
							>
								{/* Timeline Dot */}
								<div className="absolute left-0 md:left-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center md:transform md:-translate-x-4 z-10">
									<div
										className={`text-primary ${
											exp.current ? 'animate-pulse' : ''
										}`}
									>
										{React.createElement(
											getExperienceIcon(exp.icon),
											{ className: 'h-5 w-5' },
										)}
									</div>
								</div>

								{/* Content Card */}
								<div
									className={`ml-12 md:ml-0 ${
										index % 2 === 0
											? 'md:mr-8 '
											: 'md:ml-8 relative right-px'
									} md:w-1/2`}
								>
									<div className="bg-card border border-border rounded-sm p-6 shadow-sm">
										{/* Header */}
										<div className="mb-4">
											<div className="flex items-start justify-between mb-2">
												<div>
													<h3 className="text-xl font-semibold">
														{exp.title}
													</h3>
													<p className="text-primary font-medium">
														{exp.company}
													</p>
												</div>
												{exp.current && (
													<Badge
														variant="secondary"
														className="rounded-xs ml-2 md:ml-0"
													>
														Current
													</Badge>
												)}
											</div>

											<div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap md:justify-end">
												<div className="flex items-center gap-1">
													<Calendar className="h-4 w-4" />
													{exp.period}
												</div>
												<div className="flex items-center gap-1">
													<House className="h-4 w-4" />
													{exp.location}
												</div>
												<Badge
													variant="outline"
													className="text-xs rounded-xs"
												>
													{exp.type}
												</Badge>
											</div>
										</div>

										<p className="text-muted-foreground mb-4">
											{exp.description}
										</p>

										<div className="mb-4">
											<h4 className="font-medium mb-2">
												Key Responsibilities:
											</h4>
											<ul className="text-sm text-muted-foreground space-y-1">
												{exp.responsibilities
													.slice(0, 3)
													.map((resp, idx) => (
														<li key={idx}>
															• {resp}
														</li>
													))}
											</ul>
										</div>

										{/* Technologies */}
										<div>
											<div className="flex flex-wrap gap-2">
												{exp.technologies.map(
													(tech) => (
														<Badge
															key={tech}
															variant="outline"
															className="text-xs rounded-xs"
														>
															{tech}
														</Badge>
													),
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Bottom Summary Section */}
				<div className="mt-20 pt-12 border-t border-border text-center animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-500">
					<h3 className="text-3xl font-bold mb-6">
						{experienceContent.summary.title}
					</h3>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
						{experienceContent.summary.description}
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{experienceContent.summary.stats.map((stat, index) => {
							const IconComponent =
								stat.icon === 'Award'
									? Award
									: stat.icon === 'Hourglass'
										? Hourglass
										: stat.icon === 'Code'
											? Code2
											: CheckCircle;
							return (
								<div
									key={index}
									className="flex flex-col items-center"
								>
									<IconComponent className="h-8 w-8 text-primary mb-2" />
									<p className="text-2xl font-bold">
										<CountUp
											to={parseInt(stat.value)}
											duration={2}
										/>
										{stat.value.replace(/[0-9]/g, '')}
									</p>
									<p className="text-sm text-muted-foreground">
										{stat.label}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
