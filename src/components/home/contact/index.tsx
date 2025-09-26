'use client';

import Link from 'next/link';
import {
	Mail,
	Phone,
	MapPin,
	Github,
	Linkedin,
	Code2,
	ArrowRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
	contactInfo,
	contactContent,
	contactMethods,
	socialPlatforms,
	spacing,
} from '@/constants';

function getContactIcon(iconName: string) {
	const iconMap: {
		[key: string]: React.ComponentType<{ className?: string }>;
	} = {
		Mail: Mail,
		Phone: Phone,
		MapPin: MapPin,
	};
	return iconMap[iconName] || Mail;
}

function getSocialIcon(iconName: string) {
	const iconMap: {
		[key: string]: React.ComponentType<{ className?: string }>;
	} = {
		Github: Github,
		Linkedin: Linkedin,
		Code2: Code2,
	};
	return iconMap[iconName] || Github;
}

export function ContactSection() {
	return (
		<section id="contact" className={spacing.section}>
			<div className={spacing.container}>
				<h2 className={spacing.heading}>{contactContent.title}</h2>
				<p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-100">
					{contactContent.description}
				</p>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<div className="space-y-8">
						{/* Methods */}
						<div>
							<h3 className="text-xl font-semibold mb-6">
								Get In Touch
							</h3>
							<div className="space-y-4">
								{contactMethods.map((method) => {
									const IconComponent = getContactIcon(
										method.icon
									);
									const actualValue =
										method.label === 'Email'
											? contactInfo.email
											: method.label === 'Phone'
											? contactInfo.phone
											: contactInfo.location;
									const actualHref =
										method.label === 'Email'
											? `mailto:${contactInfo.email}`
											: method.label === 'Phone'
											? `tel:${contactInfo.phone}`
											: null;
									return (
										<div
											key={method.label}
											className="flex items-center gap-4 p-4 bg-card border border-border rounded-xs hover:shadow-md transition-all duration-200"
										>
											<div className="p-2 bg-primary/10 rounded-xs">
												<IconComponent className="h-5 w-5 text-primary" />
											</div>
											<div className="flex-1">
												<div className="flex items-center gap-2 mb-1">
													<span className="font-medium">
														{method.label}
													</span>
													{method.primary && (
														<Badge
															variant="secondary"
															className="text-xs rounded-xs"
														>
															Preferred
														</Badge>
													)}
												</div>
												{actualHref ? (
													<a
														href={actualHref}
														className="text-sm text-primary hover:underline font-medium"
													>
														{actualValue}
													</a>
												) : (
													<span className="text-sm font-medium">
														{actualValue}
													</span>
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>

						{/* Social Links */}
						<div>
							<h3 className="text-xl font-semibold mb-6">
								Connect With Me
							</h3>
							<div className="grid gap-4">
								{socialPlatforms.map((platform) => {
									const IconComponent = getSocialIcon(
										platform.icon
									);
									return (
										<a
											key={platform.platform}
											href={platform.url}
											target="_blank"
											rel="noopener noreferrer"
											className={`flex items-center gap-4 p-4 bg-card border border-border rounded-xs hover:shadow-md transition-all duration-200 group ${platform.color}`}
										>
											<div className="p-2 bg-muted rounded-xs group-hover:bg-primary/10 transition-colors">
												<IconComponent className="h-5 w-5" />
											</div>
											<div className="flex-1">
												<div className="font-medium capitalize">
													{platform.platform}
												</div>
												<p className="text-sm text-muted-foreground">
													{platform.description}
												</p>
											</div>
											<ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
										</a>
									);
								})}
							</div>
						</div>
					</div>

					{/* Call to Action */}
					<div className="flex flex-col justify-center items-center text-center space-y-8 animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-300">
						<h3 className="text-3xl font-bold leading-tight">
							{contactContent.cta.secondary.text}
						</h3>
						<p className="text-lg text-muted-foreground max-w-md">
							{contactContent.cta.secondary.description}
						</p>
						<div className="space-y-4">
							<Button asChild className="rounded-xs w-full group">
								<Link href={contactContent.cta.primary.href}>
									{contactContent.cta.primary.text}
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Link>
							</Button>

							<div className="text-center">
								<p className="text-sm text-muted-foreground">
									Or reach out directly via
								</p>
								<div className="flex justify-center gap-4 mt-3">
									<Button
										asChild
										variant="outline"
										size="sm"
										className="rounded-xs"
									>
										<a href={`mailto:${contactInfo.email}`}>
											<Mail className="h-4 w-4 mr-2" />
											Email
										</a>
									</Button>
									<Button
										asChild
										variant="outline"
										size="sm"
										className="rounded-xs"
									>
										<a href={`tel:${contactInfo.phone}`}>
											<Phone className="h-4 w-4 mr-2" />
											Call
										</a>
									</Button>
								</div>
							</div>
						</div>

						<Badge
							variant="secondary"
							className="rounded-xs px-3 py-1 text-sm font-medium bg-primary/10 text-primary border-primary/20 backdrop-blur-sm mt-8"
						>
							<span className="relative flex h-2 w-2 mr-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
							</span>
							{contactContent.responseTime}
						</Badge>
					</div>
				</div>
			</div>
		</section>
	);
}
