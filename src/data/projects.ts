import { z } from 'astro/zod';

export const PROJECT_KEY = {
	Breu: 'breu',
	TodoList: 'todo-list',
} as const;

export const ProjectKeySchema = z.enum(PROJECT_KEY);

export type ProjectKey = z.infer<typeof ProjectKeySchema>;

export type Project = {
	key: ProjectKey;
	tags: string[];
	sourceUrl?: string;
	websiteUrl: string;
};

export const projects: Project[] = [
	{
		key: PROJECT_KEY.Breu,
		tags: [
			'TanStack Start',
			'TanStack Query',
			'TanStack Charts',
			'Elysia',
			'PostgreSQL',
			'Redis',
			'Vercel Queues',
		],
		websiteUrl: 'https://breu.davidponc.dev',
	},
	{
		key: PROJECT_KEY.TodoList,
		tags: ['React.js', 'TypeScript', 'Next.js', 'Styled Components', 'MongoDB'],
		sourceUrl: 'https://github.com/david-ponc/todo-app-client',
		websiteUrl: 'https://todo.davidponc.dev',
	},
];
