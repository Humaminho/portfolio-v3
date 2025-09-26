interface SocialLink {
	platform: string;
	url: string;
	label: string;
}

export const socialLinks: SocialLink[] = [
	{
		platform: 'github',
		url: 'https://github.com/humaminho',
		label: 'GitHub Profile',
	},
	{
		platform: 'linkedin',
		url: 'https://www.linkedin.com/in/humam-dev/',
		label: 'LinkedIn Profile',
	},
	{
		platform: 'leetcode',
		url: 'https://leetcode.com/u/humaminho/',
		label: 'LeetCode Profile',
	},
];

export const contactInfo = {
	email: 'dev.humam@gmail.com',
	phone: '+212 639 01 31 51',
	location: 'Morocco',
};

const socialConstants = { socialLinks, contactInfo };
export default socialConstants;
