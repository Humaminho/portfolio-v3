import { useState } from 'react';

interface ContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	company: string;
	subject: string;
	message: string;
}

interface FormErrors {
	firstName?: string;
	lastName?: string;
	email?: string;
	company?: string;
	subject?: string;
	message?: string;
}

interface UseContactFormReturn {
	formData: ContactFormData;
	errors: FormErrors;
	isLoading: boolean;
	isSuccess: boolean;
	error: string | null;
	handleInputChange: (field: keyof ContactFormData, value: string) => void;
	handleSubmit: (e: React.FormEvent) => Promise<void>;
	resetForm: () => void;
}

const initialFormData: ContactFormData = {
	firstName: '',
	lastName: '',
	email: '',
	company: '',
	subject: '',
	message: '',
};

export function useContactForm(): UseContactFormReturn {
	const [formData, setFormData] = useState<ContactFormData>(initialFormData);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.firstName.trim()) {
			newErrors.firstName = 'First name is required';
		}

		if (!formData.lastName.trim()) {
			newErrors.lastName = 'Last name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(formData.email)) {
				newErrors.email = 'Please enter a valid email address';
			}
		}

		if (!formData.subject.trim()) {
			newErrors.subject = 'Subject is required';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		} else if (formData.message.trim().length < 10) {
			newErrors.message = 'Message must be at least 10 characters long';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (field: keyof ContactFormData, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));

		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: undefined }));
		}

		if (isSuccess) {
			setIsSuccess(false);
		}

		if (error) {
			setError(null);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setError(null);
		setIsSuccess(false);

		if (!validateForm()) {
			return;
		}

		setIsLoading(true);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Failed to send message');
			}

			setIsSuccess(true);
			setFormData(initialFormData);
			setErrors({});
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: 'An unexpected error occurred',
			);
		} finally {
			setIsLoading(false);
		}
	};

	const resetForm = () => {
		setFormData(initialFormData);
		setErrors({});
		setIsSuccess(false);
		setError(null);
		setIsLoading(false);
	};

	return {
		formData,
		errors,
		isLoading,
		isSuccess,
		error,
		handleInputChange,
		handleSubmit,
		resetForm,
	};
}
