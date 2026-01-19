interface Project {
	id: number;
	src: string;
	title: string;
	description: string;
	features: string[];
	github: string;
	live: string;
	stack: string[];
	hasGitRepo: boolean;
}

export const projects: Project[] = [
	{
		id: 1,
		src: '/img/projects/blanaty.png',
		title: 'Blanaty',
		description:
			"Morocco's premier beauty and wellness booking platform, architected as a complex, enterprise-grade application connecting clients with local salons and professionals. Built a solid system with intricate database relationships, multiple user dashboards, and scalable infrastructure designed to serve Morocco's growing beauty industry.",
		features: [
			'Complex multi-entity architecture managing salons, professionals, clients, and bookings',
			'Advanced role-based dashboards for admins and premium users',
			'Integrated Mapbox geolocation for location-based service discovery',
			'Secure Stripe payment processing with solid transaction logging',
		],
		github: 'N/A',
		live: 'https://www.blanaty.ma',
		stack: [
			'Next.js',
			'Tailwind CSS',
			'Shadcn',
			'Express',
			'PostgreSQL',
			'Prisma',
			'Stripe',
			'Mapbox',
			'Docker',
		],
		hasGitRepo: false,
	},
	{
		id: 2,
		src: '/img/projects/shopco.png',
		title: 'Shop Co',
		description:
			'A showcase e-commerce platform demonstrating advanced frontend development skills and modern web technologies. Crafted as a personal project to exhibit mastery in building scalable, performant, and user-centric digital shopping experiences from concept to deployment.',
		features: [
			'Component-driven architecture with reusable, type-safe React components',
			'Performance-optimized with code splitting, lazy loading, and asset optimization',
			'Responsive design system with mobile-first approach and smooth animations',
			'SEO-optimized with dynamic meta tags and structured data implementation',
		],
		github: 'https://github.com/Humaminho/shop.co',
		live: 'https://shop-co-kappa.vercel.app',
		stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sass'],
		hasGitRepo: true,
	},
	{
		id: 3,
		src: '/img/projects/credilik.png',
		title: 'Credilik',
		description:
			"A multilingual financial technology platform serving Morocco's credit market, featuring intelligent automation and seamless user experience. Developed a credit application system with integrated Google Workspace automation for streamlined financial workflows and client management.",
		features: [
			'Dynamic credit simulator with real-time interest rate calculations',
			'Advanced analytics dashboard for lead tracking and conversion metrics',
			'Google Apps Script integration for automated calendar scheduling and data sync',
			'Multilingual interface supporting Arabic and French with RTL layout',
		],
		github: 'N/A',
		live: 'https://www.credilik.ma',
		stack: [
			'Next.js',
			'Tailwind CSS',
			'Shadcn',
			'Google Sheets API',
			'Google Apps Script',
		],
		hasGitRepo: false,
	},
];

export default projects;
