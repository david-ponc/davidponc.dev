import { z } from 'astro/zod';

export const EXPERIENCE_KEY = {
	Urdaten: 'urdaten',
} as const;

export const ExperienceKeySchema = z.enum(EXPERIENCE_KEY);

export type ExperienceKey = z.infer<typeof ExperienceKeySchema>;

export interface Experience {
	key: ExperienceKey;
	company: string;
	websiteUrl: string;
	tags: string[];
	startDate: Date;
	endDate: Date | null;
}

export const experience: Experience[] = [
	{
		key: EXPERIENCE_KEY.Urdaten,
		company: 'Urdaten',
		websiteUrl: 'https://www.urdaten.com/',
		startDate: new Date(2023, 1),
		endDate: new Date(2026, 3),
		tags: [
			'Next.js',
			'TypeScript',
			'TanStack Query',
			'TanStack Table',
			'Zustand',
			'React Hook Form',
			'Auth.js',
			'Base UI',
			'Tailwind CSS',
			'Motion',
			'GraphQL',
			'Docker',
			'PostgreSQL',
		],
	},
];
