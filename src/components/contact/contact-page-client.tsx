'use client';

import React from 'react';
import { Toast } from '@/components/ui/toast';
import { ContactForm } from '@/components/contact/form';

export function ContactPageClient() {
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
		<>
			<ContactForm
				onSuccess={handleFormSuccess}
				onError={handleFormError}
			/>
			<Toast
				message={toastMessage}
				type={toastType}
				isVisible={showToast}
				onClose={() => setShowToast(false)}
			/>
		</>
	);
}
