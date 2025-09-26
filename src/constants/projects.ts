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
			"Morocco's premier beauty and wellness booking platform connecting clients with local salons and professionals. Built a complete booking system with scheduling, payments, and real-time dashboards.",
		features: [
			'Complete booking system with scheduling and error handling',
			'Integrated Mapbox for salon and professional geolocation features',
			'Real-time dashboards for admins and premium users',
			'Stripe payment processing and backend logging with API pagination',
		],
		github: 'N/A',
		live: 'https://www.blanaty.ma',
		stack: [
			'Next.js',
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
			'A modern e-commerce platform showcasing fashion and lifestyle products. Developed with focus on user experience, performance optimization, and seamless shopping experience.',
		features: [
			'Responsive, mobile-first frontend with reusable components',
			'SEO best practices and performance optimization',
			'Dynamic product catalog with filtering and category pages',
			'Smooth navigation, animations, and optimized asset loading',
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
			'Multilingual credit application website tailored for the Moroccan market. Features multi-step credit application workflow, credit simulator, and analytics dashboard.',
		features: [
			'Multi-step credit application workflow and credit simulator with dynamic interest rates',
			'Analytics dashboard for tracking leads and user activity',
			'Automated client data storage using Google Sheets API',
			'Localization (French, Arabic), responsive design, and SEO optimization',
		],
		github: 'N/A',
		live: 'https://www.credilik.ma',
		stack: ['Next.js', 'Tailwind CSS', 'Shadcn', 'Google Sheets API'],
		hasGitRepo: false,
	},
];

export default projects;
