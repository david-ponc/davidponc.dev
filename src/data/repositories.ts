import { z } from 'astro/zod';

export const REPOSITORY_KEY = {
	ReadingList: 'reading-list',
	UploadFile: 'upload-file',
	Enviroment: 'enviroment',
} as const;

export const RepositoryKeySchema = z.enum(REPOSITORY_KEY);

export type RepositoryKey = z.infer<typeof RepositoryKeySchema>;

export type Repository = {
	key: RepositoryKey;
	tags: string[];
	sourceUrl?: string;
	websiteUrl: string;
};

export const repositories: Repository[] = [
	{
		key: REPOSITORY_KEY.ReadingList,
		tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Playwright'],
		sourceUrl:
			'https://github.com/david-ponc/pruebas-tecnicas/tree/main/pruebas/01-reading-list/david-ponc',
		websiteUrl: 'https://reading-list.davidponc.dev',
	},
	{
		key: REPOSITORY_KEY.UploadFile,
		tags: ['Next.js', 'JavaScript', 'CSS', 'Firebase'],
		sourceUrl: 'https://github.com/david-ponc/upload-file',
		websiteUrl: 'https://upload-file.vercel.app/',
	},
	{
		key: REPOSITORY_KEY.Enviroment,
		tags: ['HTML', 'CSS', 'JavaScript'],
		websiteUrl: 'https://david-ponc.github.io/medio-ambiente-fcc/',
	},
];
