import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function CallToAction() {
	return (
		<Card className="rounded-sm bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
			<CardContent className="p-6 text-center">
				<h3 className="text-xl font-bold mb-2">
					Let's Build Something Amazing Together!
				</h3>
				<p className="text-muted-foreground mb-4">
					Whether you have a project in mind, a question, or just want
					to say hi, I'd love to hear from you.
				</p>
				<div className="flex flex-col sm:flex-row gap-3 justify-center">
					<Button asChild className="rounded-sm">
						<Link href="/work">View My Work</Link>
					</Button>
					<Button variant="outline" asChild className="rounded-sm">
						<Link href="/about">About Me</Link>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
