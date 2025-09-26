import Link from 'next/link';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { socialLinks } from '@/constants';

export function SocialLinks() {
	return (
		<Card className="rounded-sm">
			<CardHeader>
				<CardTitle>Connect with me</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{socialLinks.map((link) => {
						const IconComponent =
							link.platform === 'github'
								? Github
								: link.platform === 'linkedin'
								? Linkedin
								: link.platform === 'leetcode'
								? Code2
								: Github;

						return (
							<Link
								key={link.platform}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 p-3 rounded-sm border border-border hover:bg-muted/50 transition-colors group"
							>
								<IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
								<div>
									<p className="font-medium capitalize">
										{link.platform}
									</p>
									<p className="text-sm text-muted-foreground">
										{link.label}
									</p>
								</div>
							</Link>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
}
