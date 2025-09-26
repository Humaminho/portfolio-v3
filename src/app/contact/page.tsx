import type { Metadata } from 'next';
import { ContactHeader } from '@/components/contact/header';
import { ContactInfo } from '@/components/contact/info';
import { SocialLinks } from '@/components/contact/social-links';
import { CallToAction } from '@/components/contact/call-to-action';
import { ContactPageClient } from '@/components/contact/contact-page-client';

export const metadata: Metadata = {
	title: 'Contact - Humam',
	description:
		'Get in touch with Humam for collaboration opportunities, project discussions, and professional inquiries.',
	keywords: [
		'Contact',
		'Get in touch',
		'Collaboration',
		'Professional inquiry',
		'Full Stack Developer',
		'Morocco',
	],
	openGraph: {
		title: 'Contact - Humam',
		description:
			'Get in touch with Humam for collaboration opportunities, project discussions, and professional inquiries.',
		type: 'website',
	},
};

export default function ContactPage() {
	return (
		<div className="min-h-screen pt-20 pb-20 px-4">
			<div className="max-w-7xl mx-auto">
				<ContactHeader />

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Form */}
					<div>
						<ContactPageClient />
					</div>

					{/* Info */}
					<div className="space-y-8">
						<ContactInfo />
						<SocialLinks />
						<CallToAction />
					</div>
				</div>
			</div>
		</div>
	);
}
