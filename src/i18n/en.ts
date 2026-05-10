import { PROJECT_KEY } from '~/data/projects';
import { REPOSITORY_KEY } from '~/data/repositories';

import type { Translations } from './types';

export const en = {
	navbar: {
		projects: 'Projects',
		skills: 'Skills',
		occupations: 'Occupations',
	},
	hero: {
		role: 'Web Developer',
		bio: 'Over 3 years of experience as a Software Developer, specialized in Front-end with a focus on architecture, code quality, and product delivery.',
		contact: 'Contact me',
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
	footer: {
		contact: [
			'Always open to new projects and collaborations.',
			'Feel free to reach out to me',
		],
	},
} satisfies Translations;
