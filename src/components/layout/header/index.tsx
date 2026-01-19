'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
	LightbulbOff,
	Lightbulb,
	Menu,
	X,
	Github,
	Linkedin,
	Code2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { navLinks, socialPlatforms } from '@/constants';
import { cn } from '@/lib/utils';

function getSocialIcon(iconName: string) {
	const iconMap: {
		[key: string]: React.ComponentType<{ className?: string }>;
	} = {
		Github: Github,
		Linkedin: Linkedin,
		Code2: Code2,
	};
	return iconMap[iconName] || Github;
}

export function Header() {
	const { theme, setTheme } = useTheme();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	function toggleTheme() {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	function toggleMobileMenu() {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	}

	function closeMobileMenu() {
		setIsMobileMenuOpen(false);
	}

	return (
		<>
			<header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative z-50">
				<div className="flex h-14 items-center justify-between px-4 md:px-6">
					{/* Left Navigation - Desktop */}
					<nav className="hidden md:flex items-center space-x-2">
						{navLinks.map((link) => (
							<Button
								key={link.href}
								variant="ghost"
								asChild
								className="rounded-xs"
							>
								<Link href={link.href}>{link.label}</Link>
							</Button>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleMobileMenu}
							className="h-10 w-10"
							aria-label="Toggle menu"
						>
							<Menu
								className={cn(
									'h-5 w-5 transition-all',
									isMobileMenuOpen && 'rotate-90 scale-0',
								)}
							/>
							<X
								className={cn(
									'absolute h-5 w-5 transition-all',
									isMobileMenuOpen
										? 'rotate-0 scale-100'
										: '-rotate-90 scale-0',
								)}
							/>
						</Button>
					</div>

					{/* Center Logo */}
					<div className="absolute left-1/2 transform -translate-x-1/2">
						<Link
							href="/"
							className="flex items-center"
							onClick={closeMobileMenu}
						>
							<Logo size="sm" />
						</Link>
					</div>

					{/* Right Section - Desktop */}
					<div className="flex items-center space-x-4">
						{/* Theme Toggle - Hidden on mobile */}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							className="hidden md:flex h-10 w-10"
							aria-label="Toggle theme"
						>
							<Lightbulb className="h-4 w-4 rotate-180 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<LightbulbOff className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-180 dark:scale-100" />
						</Button>

						{/* Reach Out Button */}
						<Button asChild className="rounded-xs">
							<Link href="/contact">Reach out</Link>
						</Button>
					</div>
				</div>
			</header>

			{/* Mobile Navigation Menu */}
			<div
				className={cn(
					'fixed inset-0 bg-background/80 backdrop-blur-md z-40 md:hidden transition-all duration-300',
					isMobileMenuOpen
						? 'opacity-100 visible'
						: 'opacity-0 invisible',
				)}
				onClick={closeMobileMenu}
			>
				<div
					className={cn(
						'fixed top-14 left-0 right-0 bg-background border-b border-border transition-all duration-300 transform',
						isMobileMenuOpen
							? 'translate-y-0 opacity-100'
							: '-translate-y-full opacity-0',
					)}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="px-4 py-6 space-y-6">
						{/* Navigation Links */}
						<nav className="space-y-1">
							<h3 className="text-sm font-medium text-muted-foreground mb-3">
								Navigation
							</h3>
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={closeMobileMenu}
									className="block px-3 py-2 text-base font-medium rounded-xs hover:bg-accent hover:text-accent-foreground transition-colors"
								>
									{link.label}
								</Link>
							))}
						</nav>

						{/* Social Links */}
						<div>
							<h3 className="text-sm font-medium text-muted-foreground mb-3">
								Connect
							</h3>
							<div className="flex gap-3">
								{socialPlatforms.map((social) => {
									const IconComponent = getSocialIcon(
										social.icon,
									);
									return (
										<Button
											key={social.platform}
											asChild
											variant="outline"
											size="icon"
											className="rounded-xs h-10 w-10"
										>
											<a
												href={social.url}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={social.label}
											>
												<IconComponent className="h-4 w-4" />
											</a>
										</Button>
									);
								})}
							</div>
						</div>

						{/* Theme Toggle - Mobile Only */}
						<div>
							<h3 className="text-sm font-medium text-muted-foreground mb-3">
								Theme
							</h3>
							<Button
								variant="outline"
								onClick={() => {
									toggleTheme();
									closeMobileMenu();
								}}
								className="rounded-xs w-full justify-start"
							>
								<Lightbulb className="h-4 w-4 mr-2 rotate-180 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
								<LightbulbOff className="absolute h-4 w-4 ml-2 rotate-90 scale-0 transition-all dark:rotate-180 dark:scale-100" />
								<span className="ml-6">
									{mounted
										? theme === 'dark'
											? 'Light Mode'
											: 'Dark Mode'
										: 'Theme'}
								</span>
							</Button>
						</div>

						{/* CTA Button */}
						<div className="pt-4 border-t border-border">
							<Button
								asChild
								className="rounded-xs w-full"
								onClick={closeMobileMenu}
							>
								<Link href="/contact">Get In Touch</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
