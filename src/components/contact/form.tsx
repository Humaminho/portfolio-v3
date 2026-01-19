import React from 'react';
import {
	Send,
	Loader2,
	CheckCircle,
	AlertCircle,
	Asterisk,
	Command,
	CornerDownLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/hooks/use-contact-form';
import { toast } from 'sonner';

interface ContactFormProps {
	onSuccess?: () => void;
	onError?: (error: string) => void;
}

function RequiredIndicator() {
	return <Asterisk className="h-3 w-3 text-red-500 inline-block ml-1" />;
}

export function ContactForm({ onSuccess, onError }: ContactFormProps) {
	const {
		formData,
		errors,
		isLoading,
		isSuccess,
		error,
		handleInputChange,
		handleSubmit,
	} = useContactForm();

	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
				if (!isLoading && !isSuccess) {
					const submitButton = document.querySelector(
						'button[type="submit"]',
					) as HTMLButtonElement;
					if (submitButton) {
						submitButton.click();
					}
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isLoading, isSuccess]);

	React.useEffect(() => {
		if (isSuccess) {
			toast.success('Message sent successfully!');
			if (onSuccess) {
				onSuccess();
			}
		}
		if (error) {
			toast.error(error);
			if (onError) {
				onError(error);
			}
		}
	}, [isSuccess, error, onSuccess, onError]);

	return (
		<Card className="rounded-sm">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Send className="h-5 w-5" />
					Send me a message
				</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="firstName">
								First Name
								<RequiredIndicator />
							</Label>
							<Input
								id="firstName"
								value={formData.firstName}
								onChange={(e) =>
									handleInputChange(
										'firstName',
										e.target.value,
									)
								}
								placeholder="John"
								className={`rounded-sm ${
									errors.firstName
										? 'border-red-500 focus:border-red-500'
										: ''
								}`}
								disabled={isLoading}
							/>
							{errors.firstName && (
								<p className="text-sm text-red-500 flex items-center gap-1">
									<AlertCircle className="h-4 w-4" />
									{errors.firstName}
								</p>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="lastName">
								Last Name
								<RequiredIndicator />
							</Label>
							<Input
								id="lastName"
								value={formData.lastName}
								onChange={(e) =>
									handleInputChange(
										'lastName',
										e.target.value,
									)
								}
								placeholder="Doe"
								className={`rounded-sm ${
									errors.lastName
										? 'border-red-500 focus:border-red-500'
										: ''
								}`}
								disabled={isLoading}
							/>
							{errors.lastName && (
								<p className="text-sm text-red-500 flex items-center gap-1">
									<AlertCircle className="h-4 w-4" />
									{errors.lastName}
								</p>
							)}
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="email">
								Email
								<RequiredIndicator />
							</Label>
							<Input
								id="email"
								type="email"
								value={formData.email}
								onChange={(e) =>
									handleInputChange('email', e.target.value)
								}
								placeholder="john@example.com"
								className={`rounded-sm ${
									errors.email
										? 'border-red-500 focus:border-red-500'
										: ''
								}`}
								disabled={isLoading}
							/>
							{errors.email && (
								<p className="text-sm text-red-500 flex items-center gap-1">
									<AlertCircle className="h-4 w-4" />
									{errors.email}
								</p>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="company">
								Company
								<span className="text-muted-foreground text-xs ml-1">
									(optional)
								</span>
							</Label>
							<Input
								id="company"
								value={formData.company}
								onChange={(e) =>
									handleInputChange('company', e.target.value)
								}
								placeholder="Acme Inc."
								className="rounded-sm"
								disabled={isLoading}
							/>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="subject">
							Subject
							<RequiredIndicator />
						</Label>
						<Input
							id="subject"
							value={formData.subject}
							onChange={(e) =>
								handleInputChange('subject', e.target.value)
							}
							placeholder="Project collaboration"
							className={`rounded-sm ${
								errors.subject
									? 'border-red-500 focus:border-red-500'
									: ''
							}`}
							disabled={isLoading}
						/>
						{errors.subject && (
							<p className="text-sm text-red-500 flex items-center gap-1">
								<AlertCircle className="h-4 w-4" />
								{errors.subject}
							</p>
						)}
					</div>
					<div className="space-y-2">
						<Label htmlFor="message">
							Message
							<RequiredIndicator />
						</Label>
						<Textarea
							id="message"
							value={formData.message}
							onChange={(e) =>
								handleInputChange('message', e.target.value)
							}
							placeholder="Tell me about your project or how I can help..."
							className={`rounded-sm min-h-30 ${
								errors.message
									? 'border-red-500 focus:border-red-500'
									: ''
							}`}
							disabled={isLoading}
						/>
						{errors.message && (
							<p className="text-sm text-red-500 flex items-center gap-1">
								<AlertCircle className="h-4 w-4" />
								{errors.message}
							</p>
						)}
					</div>
					<Button
						type="submit"
						className="w-full rounded-sm"
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<Loader2 className="h-4 w-4 mr-2 animate-spin" />
								Sending...
							</>
						) : isSuccess ? (
							<>
								<CheckCircle className="h-4 w-4 mr-2" />
								Message Sent!
							</>
						) : (
							<div className="flex items-center w-full justify-center">
								<Send className="h-4 w-4 mr-4" />
								Send Message
								<div className="ml-4 flex items-center text-xs opacity-70 bg-primary-foreground/10 px-2 py-1 rounded">
									<Command className="h-3 w-3 mr-1" />
									<span className="mr-1">+</span>
									<CornerDownLeft className="h-3 w-3" />
								</div>
							</div>
						)}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
