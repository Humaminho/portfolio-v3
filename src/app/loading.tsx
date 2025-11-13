import { Loader2 } from 'lucide-react';

const loadingMessages = [
	'Rendering…',
	'Almost there…',
	'Hang tight…',
	'Just a moment…',
	'Setting things up…',
	'Getting things ready…',
	'Warming up…',
	'Assembling the page…',
	'Working on it…',
];

function getRandomMessage() {
	return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
}

export default function Loading() {
	const message = getRandomMessage();

	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="text-center space-y-2">
				{/* Loading Spinner */}
				<div className="animate-in fade-in-0 zoom-in-95 duration-500 ease-out">
					<Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
				</div>

				{/* Loading Text */}
				<div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-700 ease-out delay-200">
					<p className="text-muted-foreground text-base">{message}</p>
				</div>
			</div>
		</div>
	);
}
