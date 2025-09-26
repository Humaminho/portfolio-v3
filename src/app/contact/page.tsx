'use client';

import React from 'react';
import type { Metadata } from 'next';
import { Toast } from '@/components/ui/toast';
import { ContactHeader } from '@/components/contact/header';
import { ContactForm } from '@/components/contact/form';
import { ContactInfo } from '@/components/contact/info';
import { SocialLinks } from '@/components/contact/social-links';
import { CallToAction } from '@/components/contact/call-to-action';

export const metadata: Metadata = {
	title: 'Contact - Humam Kharbouch',
	description:
		'Get in touch with Humam Kharbouch for collaboration opportunities, project discussions, and professional inquiries.',
};

export default function ContactPage() {
	const [showToast, setShowToast] = React.useState(false);
	const [toastMessage, setToastMessage] = React.useState('');
	const [toastType, setToastType] = React.useState<
		'success' | 'error' | 'info'
	>('info');

	const handleFormSuccess = () => {
		setToastMessage(
			"Message sent successfully! I'll get back to you soon."
		);
		setToastType('success');
		setShowToast(true);
	};

	const handleFormError = (error: string) => {
		setToastMessage(error);
		setToastType('error');
		setShowToast(true);
	};
	return (
		<div className="min-h-screen pt-20 pb-20 px-4">
			<div className="max-w-7xl mx-auto">
				<ContactHeader />

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Form */}
					<div>
						<ContactForm
							onSuccess={handleFormSuccess}
							onError={handleFormError}
						/>
					</div>

					{/* Info */}
					<div className="space-y-8">
						<ContactInfo />
						<SocialLinks />
						<CallToAction />
					</div>
				</div>
			</div>

			<Toast
				message={toastMessage}
				type={toastType}
				isVisible={showToast}
				onClose={() => setShowToast(false)}
			/>
		</div>
	);
}
