import { z } from 'astro/zod';

export const PROJECT_KEY = {
	TodoList: 'todo-list',
	FrontendSummer: 'frontend-summer',
} as const;

export const ProjectKeySchema = z.enum(PROJECT_KEY);

export type ProjectKey = z.infer<typeof ProjectKeySchema>;

export type Project = {
	key: ProjectKey;
	tags: string[];
	sourceUrl: string;
	websiteUrl: string;
};

export const projects: Project[] = [
	{
		key: PROJECT_KEY.TodoList,
		tags: ['React.js', 'TypeScript', 'Next.js', 'Styled Components'],
		sourceUrl: 'https://github.com/david-ponc/todo-app-client',
		websiteUrl: 'https://todo.davidponc.dev',
	},
	{
		key: PROJECT_KEY.FrontendSummer,
		tags: ['HTML', 'CSS', 'JavaScript'],
		sourceUrl: 'https://github.com/david-ponc/vacaciones-cody',
		websiteUrl: 'https://david-ponc.github.io/vacaciones-cody',
	},
];
