export const heroContent = {
	status: 'Available for new opportunities',
	name: 'Humam',
	title: 'Full Stack Developer',
	location: 'Morocco',
	description: `Full Stack Developer focused on reliable, scalable, and user-centric web apps, combining cutting-edge tech with problem-solving.`,
	cta: {
		primary: {
			text: 'Get in touch',
			href: '/contact',
		},
		secondary: {
			text: 'View my work',
			href: '/work',
		},
	},
};

export const aboutContent = {
	title: 'About Me',
	description: `I'm Humam Kharbouch, a Full Stack Developer from Morocco. As a freelancer, I work on a variety of projects, always focused on bringing value through technology. I'm constantly learning and improving, with 3+ years of experience building reliable, scalable, secure, and user-centric web applications using modern technologies.`,
	stats: [
		{ icon: 'Award', value: '3+', label: 'Years Experience' },
		{ icon: 'Sparkles', value: '15+', label: 'Technologies' },
		{ icon: 'Code', value: '10+', label: 'Projects Delivered' },
	],
	currentRole: {
		title: 'Software Engineer',
		company: 'Cadipi (2025 - Present)',
		description: [
			'Architecting international business intelligence SaaS platform.',
			'Designed and implemented PostgreSQL schemas for enterprise-level analytics.',
			'Built modular and scalable backend services with Express.',
			'Integrated Firebase for authentication and system access control.',
		],
		technologies: [
			'NextJS',
			'TailwindCSS',
			'TypeScript',
			'Express',
			'PostgreSQL',
			'Firebase',
			'Docker',
		],
	},
	cta: {
		text: 'Learn more about me',
		href: '/about',
	},
};

export const experienceContent = {
	title: 'My Experience',
	summary: {
		title: 'Ready for New Challenges',
		description:
			'With a solid foundation in full-stack development and a passion for innovative solutions, I am always eager to take on new projects and contribute to impactful teams.',
		stats: [
			{ icon: 'Award', value: '3+', label: 'Years Experience' },
			{ icon: 'Hourglass', value: '3', label: 'Professional Roles' },
			{ icon: 'Code', value: '15+', label: 'Technologies Mastered' },
			{ icon: 'CheckCircle', value: '10+', label: 'Projects Delivered' },
		],
	},
};

export const projectsContent = {
	title: 'My Projects',
	summary: {
		title: 'Project Achievements',
		description:
			'Showcasing a diverse range of projects, from e-commerce platforms to booking systems and FinTech solutions, demonstrating mastery in various domains and technologies.',
		stats: [
			{ value: '3', label: 'Major Projects' },
			{ value: '5+', label: 'Client Engagements' },
			{ value: '15+', label: 'Technologies Mastered' },
			{ value: '10+', label: 'Projects Delivered' },
		],
	},
	cta: {
		text: 'View All Projects',
		href: '/work',
	},
};

export const contactContent = {
	title: 'Get In Touch',
	description:
		"I'm always open to discussing new opportunities, interesting projects, and collaborations. Feel free to reach out!",
	cta: {
		primary: {
			text: 'Send Me a Message',
			href: '/contact',
		},
		secondary: {
			text: "Let's Collaborate!",
			description:
				"Whether you have a project in mind, a question, or just want to say hi, I'd love to hear from you.",
		},
	},
	responseTime: 'I typically respond within 24 hours',
};

export const spacing = {
	section: 'py-20 px-4',
	container: 'max-w-7xl mx-auto',
	heading: 'text-4xl font-bold mb-12 text-center',
	subheading: 'text-2xl font-bold mb-6',
	description: 'text-lg text-muted-foreground leading-relaxed',
	card: 'p-6',
	button: 'rounded-xs',
} as const;
