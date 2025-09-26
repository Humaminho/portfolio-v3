export interface TechItem {
	name: string;
	icon: string;
	category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
	proficiency: 'expert' | 'advanced' | 'intermediate' | 'learning';
}

export const techStack: TechItem[] = [
	{ name: 'React', icon: '⚛️', category: 'frontend', proficiency: 'expert' },
	{
		name: 'Next.js',
		icon: '🚀',
		category: 'frontend',
		proficiency: 'expert',
	},
	{
		name: 'TypeScript',
		icon: '🟦',
		category: 'frontend',
		proficiency: 'expert',
	},
	{
		name: 'JavaScript',
		icon: '🟨',
		category: 'frontend',
		proficiency: 'expert',
	},
	{
		name: 'Tailwind CSS',
		icon: '🌬️',
		category: 'frontend',
		proficiency: 'expert',
	},
	{ name: 'Sass', icon: '💎', category: 'frontend', proficiency: 'advanced' },
	{
		name: 'Framer Motion',
		icon: '💨',
		category: 'frontend',
		proficiency: 'advanced',
	},
	{ name: 'Figma', icon: '🎨', category: 'tools', proficiency: 'advanced' },

	{ name: 'Node.js', icon: '🟢', category: 'backend', proficiency: 'expert' },
	{ name: 'Express', icon: '⚡', category: 'backend', proficiency: 'expert' },
	{
		name: 'NestJS',
		icon: '🐦',
		category: 'backend',
		proficiency: 'advanced',
	},
	// {
	// 	name: 'Python',
	// 	icon: '🐍',
	// 	category: 'backend',
	// 	proficiency: 'intermediate',
	// },

	{
		name: 'PostgreSQL',
		icon: '🐘',
		category: 'database',
		proficiency: 'expert',
	},
	{
		name: 'MongoDB',
		icon: '🍃',
		category: 'database',
		proficiency: 'advanced',
	},
	{
		name: 'Redis',
		icon: '🔴',
		category: 'database',
		proficiency: 'advanced',
	},
	{
		name: 'Prisma',
		icon: '🔗',
		category: 'database',
		proficiency: 'advanced',
	},

	{ name: 'Docker', icon: '🐳', category: 'devops', proficiency: 'advanced' },
	{
		name: 'Firebase',
		icon: '🔥',
		category: 'devops',
		proficiency: 'advanced',
	},
	{ name: 'Git', icon: '🌳', category: 'tools', proficiency: 'expert' },
	{ name: 'Linux', icon: '🐧', category: 'devops', proficiency: 'advanced' },
];

export const heroTechStack = [
	'React',
	'Next.js',
	'TypeScript',
	'Node.js',
	'Tailwind CSS',
	'Python',
];

export const techCategories = [
	{
		title: 'Frontend Development',
		description: 'Modern web technologies for building user interfaces',
		technologies: [
			'React',
			'Next.js',
			'TypeScript',
			'JavaScript',
			'HTML5',
			'CSS3',
			'Tailwind CSS',
			'Sass',
			'Framer Motion',
			'Figma',
		],
		color: 'bg-blue-500/10 text-blue-600 border-blue-200',
	},
	{
		title: 'Backend Development',
		description: 'Server-side technologies and APIs',
		technologies: [
			'Node.js',
			'Express.js',
			'NestJS',
			'PostgreSQL',
			'MongoDB',
			'Redis',
			'REST APIs',
		],
		color: 'bg-green-500/10 text-green-600 border-green-200',
	},
	{
		title: 'DevOps & Tools',
		description: 'Development workflow and deployment tools',
		technologies: [
			'Docker',
			'AWS',
			'Vercel',
			'Git',
			'GitHub Actions',
			'CI/CD',
			'Linux',
			'Nginx',
		],
		color: 'bg-purple-500/10 text-purple-600 border-purple-200',
	},
];

export default techStack;
