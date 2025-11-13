export interface NavLink {
	href: string;
	label: string;
}

export interface ContactMethod {
	icon: string;
	label: string;
	value: string;
	href: string | null;
	primary: boolean;
}

export interface SocialPlatform {
	platform: string;
	url: string;
	label: string;
	icon: string;
	description?: string;
	color?: string;
}

export const navLinks: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/work', label: 'Work' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
];

export const contactMethods: ContactMethod[] = [
	{
		icon: 'Mail',
		label: 'Email',
		value: 'dev.humam@gmail.com', // This will be replaced by contactInfo.email
		href: 'mailto:dev.humam@gmail.com', // This will be replaced by contactInfo.email
		primary: true,
	},
	{
		icon: 'Phone',
		label: 'Phone',
		value: '+212 639 01 31 51', // This will be replaced by contactInfo.phone
		href: 'tel:+212 639 01 31 51', // This will be replaced by contactInfo.phone
		primary: true,
	},
	{
		icon: 'MapPin',
		label: 'Based in',
		value: 'Morocco', // This will be replaced by contactInfo.location
		href: null,
		primary: false,
	},
];

export const socialPlatforms: SocialPlatform[] = [
	{
		platform: 'github',
		url: 'https://github.com/humaminho',
		label: 'GitHub Profile',
		icon: 'Github',
		description: 'Check out my code',
		color: 'hover:text-violet-600 dark:hover:text-violet-400',
	},
	{
		platform: 'linkedin',
		url: 'https://www.linkedin.com/in/humam-dev/',
		label: 'LinkedIn Profile',
		icon: 'Linkedin',
		description: 'Professional network',
		color: 'hover:text-blue-600 dark:hover:text-blue-400',
	},
];

const navigationConstants = { navLinks, contactMethods, socialPlatforms };
export default navigationConstants;
