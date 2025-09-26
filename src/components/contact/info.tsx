import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contactInfo } from '@/constants';

export function ContactInfo() {
	return (
		<Card className="rounded-sm">
			<CardHeader>
				<CardTitle>Contact Information</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="flex items-start gap-4">
					<Mail className="h-5 w-5 text-primary mt-1" />
					<div>
						<p className="font-medium">Email</p>
						<Link
							href={`mailto:${contactInfo.email}`}
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							{contactInfo.email}
						</Link>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<Phone className="h-5 w-5 text-primary mt-1" />
					<div>
						<p className="font-medium">Phone</p>
						<Link
							href={`tel:${contactInfo.phone}`}
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							{contactInfo.phone}
						</Link>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<MapPin className="h-5 w-5 text-primary mt-1" />
					<div>
						<p className="font-medium">Location</p>
						<p className="text-muted-foreground">
							{contactInfo.location}
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<Clock className="h-5 w-5 text-primary mt-1" />
					<div>
						<p className="font-medium">Response Time</p>
						<p className="text-muted-foreground">
							Typically responds within 24 hours
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
