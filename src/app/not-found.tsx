import Link from 'next/link';
import { Home } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="max-w-md mx-auto text-center space-y-8">
				{/* Content */}
				<div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-700 ease-out delay-200">
					<h1 className="text-6xl md:text-9xl font-bold">
						404
					</h1>
					<h2 className="text-2xl md:text-3xl font-semibold">
						Page Not Found
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						Sorry, the page you&apos;re looking for doesn&apos;t
						exist or has been moved.
					</p>
				</div>

				{/* Actions */}
				<div className="flex flex-col sm:flex-row justify-center animate-in fade-in-0 zoom-in-95 duration-700 ease-out delay-400">
					<Button asChild size="lg" className="rounded-xs">
						<Link href="/">
							<Home className="h-4 w-4 mr-2" />
							Back to Home
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
