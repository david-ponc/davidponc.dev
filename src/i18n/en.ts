import { EXPERIENCE_KEY } from '~/data/experience';
import { PROJECT_KEY } from '~/data/projects';
import { REPOSITORY_KEY } from '~/data/repositories';

import type { Translations } from './types';

export const en = {
	navbar: {
		projects: 'Projects',
		skills: 'Skills',
		experience: 'Experience',
		social: {
			linkedIn: 'Go to my LinkedIn profile',
			github: 'Go to my GitHub profile',
			linkedInLabel: 'LinkedIn',
			githubLabel: 'GitHub',
		},
		menu: {
			groups: {
				navigation: 'Navigation',
				preferences: 'Preferences',
				contact: 'Contact',
			},
			appearance: {
				label: 'Appearance',
				light: 'Light',
				dark: 'Dark',
				system: 'System',
				toggle: 'Toggle theme',
			},

			language: {
				label: 'Language',
				es: 'Español',
				en: 'English',
			},
			back: 'Back',
		},
	},
	hero: {
		role: 'Web Developer',
		bio: 'Over 3 years of experience as a Software Developer, specialized in Front-end with a focus on architecture, code quality, and product delivery.',
		contact: 'Contact me',
		altImage:
			'Professional black and white portrait of a young man with crossed arms, wearing a black t-shirt, looking slightly upwards',
	},
	projects: {
		heading: 'Projects',
		actions: {
			source: 'Source code',
			website: 'Visit website',
		},
		projects: {
			[PROJECT_KEY.TodoList]: {
				title: 'Todo List',
				description:
					'This application was inspired by the Dona group with the motto of making a more human to-do list. The application features a user system authenticated via email and password.',
			},
			[PROJECT_KEY.FrontendSummer]: {
				title: 'Frontend Summer Contest',
				description:
					'Static website for the Frontend Summer contest organized by the company codigofacilito. It features various sections that tell the story of Cody, as well as a photo gallery of the places he was.',
			},
		},
	},
	repositories: {
		heading: 'Featured repositories',
		repositories: {
			[REPOSITORY_KEY.ReadingList]: {
				title: 'Reading List',
				description: 'Web application with a book catalog and reading list management',
			},
			[REPOSITORY_KEY.UploadFile]: {
				title: 'File Upload',
				description: 'Application that allows image upload with Firebase',
			},
			[REPOSITORY_KEY.Enviroment]: {
				title: 'FCC Environment',
				description: 'Website for promoting events related to the environment',
			},
		},
		actions: {
			source: 'Source code',
			website: 'Visit website',
			viewAll: 'View all',
		},
	},
	skills: {
		heading: 'Skills',
	},
	experience: {
		heading: 'Experience',
		present: 'Present',
		items: {
			[EXPERIENCE_KEY.Urdaten]: {
				role: 'Frontend Developer',
				location: 'CDMX, Mexico · Remote',
				heading: 'Achievements',
				achievements: [
					'Independently designed and shipped 2 end-to-end modules (Next.js and PostgreSQL), reducing reliance on the backend team and cutting delivery time from ~3 weeks to ~1.5 weeks per cycle.',
					'Built a design system on top of Base UI that standardized reusable components, cutting new feature development time by 1-2 days per cycle.',
					'Led the migration to the Next.js App Directory, laying a more scalable foundation and improving initial load times over the legacy pages.',
					'Integrated GitHub Copilot and Claude Code into the development workflow, boosting estimated delivery speed by ~25% while streamlining coding, reviews, and code documentation.',
					'Proactively partnered with the design team on new features and flow improvements, keeping user experience at the forefront.',
					'Worked closely with the backend team to design, structure, and integrate new features into the product.',
					'Introduced quality standards (linting and automatic formatting) that reduced production errors and shortened PR review times.',
				],
			},
		},
	},
	footer: {
		contact: [
			'Always open to new projects and collaborations.',
			'Feel free to reach out to me',
		],
		share: 'Share this page',
	},
} satisfies Translations;
