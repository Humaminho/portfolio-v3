import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/constants/projects';

export const metadata: Metadata = {
	title: 'Work - Humam',
	description:
		'Explore the projects and work of Humam, a Full Stack Developer specializing in modern web applications.',
	keywords: [
		'Work',
		'Projects',
		'Portfolio',
		'Full Stack Developer',
		'Web Applications',
		'E-commerce',
		'FinTech',
		'Booking Systems',
		'React',
		'Next.js',
	],
	openGraph: {
		title: 'Work - Humam',
		description:
			'Explore the projects and work of Humam, a Full Stack Developer specializing in modern web applications.',
		type: 'website',
	},
};

export default function WorkPage() {
	return (
		<div className="min-h-screen pt-20 pb-20 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl font-bold mb-6">My Work</h1>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
						Showcasing a diverse range of projects, from e-commerce
						platforms to booking systems and FinTech solutions,
						demonstrating mastery in various domains and
						technologies.
					</p>
				</div>

				{/* Projects */}
				<div className="space-y-24">
					{projects.map((project, index) => (
						<div
							key={project.id}
							className="grid lg:grid-cols-2 gap-12 items-center"
						>
							{/* Screenshots */}
							<div
								className={`${
									index % 2 === 1 ? 'lg:order-2' : ''
								}`}
							>
								<Card className="overflow-hidden rounded-sm relative group p-0">
									{/* Scrollable */}
									<div className="relative h-150 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent hover:scrollbar-thumb-primary/50 transition-all duration-300">
										<Image
											src={`/img/projects/${project.title
												.toLowerCase()
												.replace(
													' ',
													'',
												)}_fullscreen.png`}
											alt={`${project.title} fullscreen screenshot`}
											width={800}
											height={2000}
											className="w-full h-auto object-cover transition-transform duration-500"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											priority={index === 0}
										/>
									</div>

									{/* Scroll */}
									<div className="absolute inset-0 pointer-events-none">
										<div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/40 via-black/20 to-transparent" />
										<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/90">
											<span className="text-xs mb-2 font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
												Scroll to explore
											</span>
											<ChevronDown className="w-5 h-5 animate-bounce" />
										</div>
									</div>

									{/* Hover */}
									<div className="absolute inset-0 bg-linear-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
								</Card>
							</div>

							{/* Details */}
							<div
								className={`${
									index % 2 === 1 ? 'lg:order-1' : ''
								}`}
							>
								<div className="space-y-6">
									<div>
										<h2 className="text-3xl font-bold mb-2">
											{project.title}
										</h2>
										<p className="text-lg text-muted-foreground leading-relaxed">
											{project.description}
										</p>
									</div>

									{/* Features */}
									<div>
										<h3 className="text-xl font-semibold mb-4">
											Key Features
										</h3>
										<ul className="space-y-2">
											{project.features.map(
												(feature, featureIndex) => (
													<li
														key={featureIndex}
														className="flex items-start"
													>
														<div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
														<span className="text-muted-foreground">
															{feature}
														</span>
													</li>
												),
											)}
										</ul>
									</div>

									{/* Stack */}
									<div>
										<h3 className="text-xl font-semibold mb-4">
											Technology Stack
										</h3>
										<div className="flex flex-wrap gap-2">
											{project.stack.map(
												(tech, techIndex) => (
													<Badge
														key={techIndex}
														variant="secondary"
													>
														{tech}
													</Badge>
												),
											)}
										</div>
									</div>

									{/* Links */}
									<div className="flex flex-wrap gap-4">
										<Button asChild className="rounded-xs">
											<Link
												href={project.live}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="w-4 h-4 mr-2" />
												View Live Site
											</Link>
										</Button>
										{project.hasGitRepo && (
											<Button
												variant="outline"
												asChild
												className="rounded-xs"
											>
												<Link
													href="https://github.com/Humaminho/shop.co"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github className="w-4 h-4 mr-2" />
													View Code
												</Link>
											</Button>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center mt-24">
					<div className="bg-muted/50 rounded-sm p-8">
						<h2 className="text-2xl font-bold mb-4">
							Interested in Working Together?
						</h2>
						<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
							I&apos;m always open to discussing new
							opportunities, interesting projects, and
							collaborations. Let&apos;s build something amazing
							together!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg" className="rounded-xs">
								<Link href="/contact">Get In Touch</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								asChild
								className="rounded-xs"
							>
								<Link href="/about">Learn More About Me</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
