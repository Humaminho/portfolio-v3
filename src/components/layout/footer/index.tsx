'use client';

import Link from 'next/link';
import { Mail, Phone, Github, Linkedin, Code2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { contactInfo, navLinks, socialPlatforms } from '@/constants';

function getContactIcon(iconName: string) {
	const iconMap: {
		[key: string]: React.ComponentType<{ className?: string }>;
	} = {
		Mail: Mail,
		Phone: Phone,
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

const contactButtons = [
	{
		icon: 'Mail',
		href: `mailto:${contactInfo.email}`,
		label: 'Email',
		color: 'hover:text-blue-500',
	},
	{
		icon: 'Phone',
		href: `tel:${contactInfo.phone}`,
		label: 'Phone',
		color: 'hover:text-green-500',
	},
];

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-border bg-background">
			<div className="max-w-7xl mx-auto px-4 py-12">
				{/* Footer Content */}
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					{/* Brand Section */}
					<div className="md:col-span-1">
						<Link href="/" className="flex items-center gap-3 mb-4">
							<Logo size="sm" />
							<span className="font-semibold text-lg">Humam</span>
						</Link>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Full Stack Developer passionate about creating
							innovative web solutions and leading technical
							teams.
						</p>
					</div>

					{/* Navigation */}
					<div className="md:col-span-1">
						<h3 className="font-semibold mb-4">Navigation</h3>
						<nav className="space-y-3">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Contact */}
					<div className="md:col-span-1">
						<h3 className="font-semibold mb-4">Quick Contact</h3>
						<div className="space-y-3">
							<p className="text-sm text-muted-foreground">
								{contactInfo.email}
							</p>
							<p className="text-sm text-muted-foreground">
								{contactInfo.phone}
							</p>
							<p className="text-sm text-muted-foreground">
								{contactInfo.location}
							</p>
						</div>
					</div>

					{/* Social & Contact */}
					<div className="md:col-span-1">
						<h3 className="font-semibold mb-4">Connect</h3>
						<div className="space-y-4">
							{/* Contact */}
							<div>
								<p className="text-sm text-muted-foreground mb-3">
									Contact Me
								</p>
								<div className="flex gap-3">
									{contactButtons.map((contact) => {
										const IconComponent = getContactIcon(
											contact.icon
										);
										return (
											<Button
												key={contact.label}
												asChild
												variant="outline"
												size="icon"
												className={`rounded-xs h-9 w-9 ${contact.color} transition-colors`}
											>
												<a
													href={contact.href}
													aria-label={contact.label}
												>
													<IconComponent className="h-4 w-4" />
												</a>
											</Button>
										);
									})}
								</div>
							</div>

							{/* Social */}
							<div>
								<p className="text-sm text-muted-foreground mb-3">
									Follow Me
								</p>
								<div className="flex gap-3">
									{socialPlatforms.map((social) => {
										const IconComponent = getSocialIcon(
											social.icon
										);
										return (
											<Button
												key={social.platform}
												asChild
												variant="outline"
												size="icon"
												className={`rounded-xs h-9 w-9 ${social.color} transition-colors`}
											>
												<a
													href={social.url}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={social.label}
												>
													<IconComponent className="h-4 w-4" />
												</a>
											</Button>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-8 border-t border-border">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="text-sm text-muted-foreground">
							© {currentYear} Humam Kharbouch. All rights
							reserved.
						</div>
						<div className="flex items-center gap-6 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
								<span>Available for work</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
