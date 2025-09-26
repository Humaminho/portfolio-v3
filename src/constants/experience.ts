export interface Experience {
	id: string;
	title: string;
	company: string;
	period: string;
	type: string;
	location: string;
	current: boolean;
	description: string;
	responsibilities: string[];
	technologies: string[];
	icon: string;
}

export const experiences: Experience[] = [
	{
		id: 'cadipi',
		title: 'Software Engineer',
		company: 'Cadipi Startup',
		period: '2025 - Present',
		type: 'Part-time',
		location: 'Remote',
		current: true,
		description:
			'Architecting and building an international business intelligence SaaS platform. Responsible for technical architecture, team leadership, and full-stack implementation.',
		responsibilities: [
			'Architecting and building an international business intelligence SaaS platform',
			'Designed and implemented PostgreSQL schemas for enterprise-level analytics',
			'Built modular and scalable backend services with NestJS',
			'Integrated Firebase for authentication and system access control',
			'Set up DevOps workflows to ensure scalability, security, and monitoring',
			'Coordinated with stakeholders to translate business requirements into technical architecture',
		],
		technologies: ['NestJS', 'PostgreSQL', 'Firebase', 'Docker', 'Redis'],
		icon: 'Building2',
	},
	{
		id: 'freelance',
		title: 'Freelance Full Stack Developer',
		company: 'Self-employed',
		period: '2022 - Present',
		type: 'Freelance',
		location: 'Remote',
		current: true,
		description:
			'Delivering production-ready full stack solutions for clients in e-commerce, services, and content platforms.',
		responsibilities: [
			'Delivered production-ready full stack solutions for clients in e-commerce, services, and content platforms',
			'Designed and implemented backend services and APIs with Node.js/Express/NestJS',
			'Built responsive interfaces with React/Next.js, ensuring SEO compliance and performance',
			'Deployed and maintained applications, including pipelines, domains, and monitoring',
		],
		technologies: [
			'React',
			'Next.js',
			'Tailwind CSS',
			'Sass',
			'Node.js',
			'Express',
			'PostgreSQL',
			'MongoDB',
			'Firebase',
			'Git',
			'Figma',
		],
		icon: 'Code2',
	},
	{
		id: 'ritechco',
		title: 'Full Stack Developer',
		company: 'RITECHCO',
		period: 'Feb 2025 - Aug 2025',
		type: 'Internship',
		location: 'Morocco',
		current: false,
		description:
			'Built Blanaty.ma, a booking platform for beauty and wellness services with comprehensive features and real-time capabilities.',
		responsibilities: [
			'Built Blanaty.ma, a booking platform for beauty and wellness services',
			'Designed relational schemas with Prisma ORM and PostgreSQL',
			'Developed REST APIs for booking workflows, authentication, payments, and business discovery',
			'Integrated Mapbox for salon and professional geolocation features',
			'Built real-time dashboards for admins and premium users',
			'Deployed and maintained services using Docker and VPS infrastructure',
		],
		technologies: [
			'Next.js',
			'Express',
			'PostgreSQL',
			'Prisma',
			'Tailwind CSS',
			'Stripe',
			'Mapbox',
			'Docker',
			'Git',
			'CI/CD',
			'Figma',
		],
		icon: 'Users',
	},
];

export default experiences;
