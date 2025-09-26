export const heroContent = {
	status: 'Available for new opportunities',
	name: 'Humam',
	title: 'Full Stack Developer',
	location: 'Morocco',
	description:
		'Passionate about crafting robust and scalable web applications. Specializing in modern web technologies, business intelligence platforms, and e-commerce solutions.',
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
	description: `I'm Humam Kharbouch, a passionate Full Stack Developer from Morocco. Currently working as a Software Engineer at Cadipi, I specialize in architecting and developing international business intelligence SaaS platforms. With 3+ years of experience, I focus on building scalable, secure, and user-centric web applications using modern technologies.`,
	stats: [
		{ icon: 'Award', value: '3+', label: 'Years Experience' },
		{ icon: 'Sparkles', value: '15+', label: 'Technologies' },
		{ icon: 'Code', value: '10+', label: 'Projects Delivered' },
		{ icon: 'GraduationCap', value: 'Continuous', label: 'Learning' },
	],
	currentRole: {
		title: 'Software Engineer',
		company: 'Cadipi (2025 - Present)',
		description: [
			'Architecting international business intelligence SaaS platform.',
			'Designed and implemented PostgreSQL schemas for enterprise-level analytics.',
			'Built modular and scalable backend services with NestJS.',
			'Integrated Firebase for authentication and system access control.',
		],
		technologies: ['NestJS', 'PostgreSQL', 'Firebase', 'Docker', 'Redis'],
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
			{ icon: 'Hourglass', value: '4', label: 'Professional Roles' },
			{ icon: 'Code', value: '15+', label: 'Technologies Mastered' },
			{ icon: 'CheckCircle', value: '100%', label: 'Project Completion' },
		],
	},
};

export const projectsContent = {
	title: 'My Projects',
	summary: {
		title: 'Project Achievements',
		description:
			'Showcasing a diverse range of projects, from e-commerce platforms to booking systems and FinTech solutions, demonstrating expertise in various domains and technologies.',
		stats: [
			{ value: '3', label: 'Major Projects' },
			{ value: '5+', label: 'Client Engagements' },
			{ value: '15+', label: 'Technologies Used' },
			{ value: '100%', label: 'Project Completion' },
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
			text: "Let's Build Something Amazing Together!",
			description:
				"Whether you have a project in mind, a question, or just want to say hi, I'd love to hear from you.",
		},
	},
	responseTime: 'Typically responds within 24 hours',
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
