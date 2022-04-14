export type ColorMode = 'light' | 'dark' | 'system';

export enum ColorModeEnum {
	Light = 'light',
	Dark = 'dark',
	System = 'system',
}

export interface Project {
	title: string;
	description: string;
	tags: Array<string>;
	images: Array<string>;
	links: Array<string>;
}

export type SecondaryProject = Omit<Project, 'images'>;
