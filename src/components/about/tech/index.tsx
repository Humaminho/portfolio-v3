'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { techStack, techCategories, spacing } from '@/constants';

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
	siStripe,
	siMapbox,
} from 'simple-icons/icons';

function getTechIcon(techName: string) {
	const iconMap: { [key: string]: any } = {
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
		Stripe: siStripe,
		Mapbox: siMapbox,
	};

	return iconMap[techName] || null;
}

export function TechSection() {
	return (
		<section id="technologies" className={spacing.section}>
			<div className={spacing.container}>
				<div className="text-center mb-16">
					<h2 className={spacing.heading}>Technologies & Tools</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						A comprehensive overview of the technologies,
						frameworks, and tools I work with to build modern,
						scalable applications.
					</p>
				</div>

				{/* Tech Stack Showcase */}
				<div className="mb-16">
					<h3 className="text-2xl font-bold text-center mb-8">
						Current Tech Stack
					</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{techStack.map((tech, index) => {
							const IconComponent = getTechIcon(tech.name);
							return (
								<div
									key={index}
									className="flex items-center gap-3 px-4 py-3 bg-card hover:brightness-125 border border-border rounded-xs shadow-sm hover:shadow-md transition-all duration-200"
								>
									{IconComponent ? (
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill={`#${IconComponent.hex}`}
											className="flex-shrink-0"
										>
											<path d={IconComponent.path} />
										</svg>
									) : (
										<span className="text-2xl">
											{tech.icon}
										</span>
									)}
									<span className="font-medium">
										{tech.name}
									</span>
								</div>
							);
						})}
					</div>
				</div>

				{/* Technology Categories */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{techCategories.map((category, index) => (
						<Card
							key={index}
							className="group rounded-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-in fade-in-0 zoom-in-95"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<CardHeader>
								<CardTitle className="flex items-center gap-3">
									<div
										className={`w-3 h-3 rounded-full ${
											category.color.split(' ')[0]
										}`}
									/>
									{category.title}
								</CardTitle>
								<p className="text-sm text-muted-foreground">
									{category.description}
								</p>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2">
									{category.technologies.map((tech) => (
										<Badge
											key={tech}
											variant="secondary"
											className="rounded-xs text-xs hover:bg-primary/10 hover:text-primary transition-colors"
										>
											{tech}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Learning & Growth */}
				<div className="mt-16 text-center">
					<Card className="max-w-2xl mx-auto rounded-sm bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
						<CardContent className="p-8">
							<h3 className="text-2xl font-bold mb-4">
								Always Learning
							</h3>
							<p className="text-muted-foreground mb-6">
								Technology evolves rapidly, and I'm committed to
								staying current with the latest trends and best
								practices. I'm always exploring new frameworks,
								tools, and methodologies to enhance my
								development capabilities.
							</p>
							<div className="flex flex-wrap justify-center gap-2">
								<Badge variant="outline" className="rounded-xs">
									Currently Learning
								</Badge>
								<Badge variant="outline" className="rounded-xs">
									Python
								</Badge>
								<Badge variant="outline" className="rounded-xs">
									UI/UX
								</Badge>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
