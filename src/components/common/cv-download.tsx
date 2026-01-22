'use client';

import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CvDownloadProps {
	variant?: 'button' | 'icon';
	size?: 'sm' | 'lg' | 'default';
	className?: string;
	showText?: boolean;
}

export function CvDownload({
	variant = 'button',
	size = 'default',
	className,
	showText = true,
}: CvDownloadProps) {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = '/docs/Houmame_Kharbouch_Resume.pdf';
		link.download = 'Houmame_Kharbouch_Resume.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	if (variant === 'icon') {
		return (
			<Button
				variant="outline"
				size={size}
				onClick={handleDownload}
				className={cn(
					'rounded-xs hover:bg-primary hover:text-primary-foreground transition-colors',
					className,
				)}
				title="Download CV"
			>
				<FileText className="w-4 h-4" />
				{showText && <span className="ml-2">CV</span>}
			</Button>
		);
	}

	return (
		<Button
			onClick={handleDownload}
			size={size}
			className={cn('rounded-xs cursor-pointer', className)}
		>
			<Download className="w-4 h-4 mr-2" />
			Download CV
		</Button>
	);
}
