import * as React from 'react';
import { cn } from '@/lib/utils';

interface ToastProps {
	message: string;
	type: 'success' | 'error' | 'info';
	isVisible: boolean;
	onClose: () => void;
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
	React.useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				onClose();
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [isVisible, onClose]);

	if (!isVisible) return null;

	const typeStyles = {
		success: 'bg-green-50 border-green-200 text-green-800',
		error: 'bg-red-50 border-red-200 text-red-800',
		info: 'bg-blue-50 border-blue-200 text-blue-800',
	};

	return (
		<div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-full">
			<div
				className={cn(
					'px-4 py-3 rounded-sm border shadow-lg max-w-sm',
					typeStyles[type]
				)}
			>
				<div className="flex items-center justify-between">
					<p className="text-sm font-medium">{message}</p>
					<button
						onClick={onClose}
						className="ml-4 text-current hover:opacity-70 transition-opacity"
					>
						×
					</button>
				</div>
			</div>
		</div>
	);
}
