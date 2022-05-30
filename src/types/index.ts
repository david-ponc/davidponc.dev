export type ColorMode = 'light' | 'dark' | 'system';

/* eslint-disable no-unused-vars */
export enum ColorModeEnum {
	Light = 'light',
	Dark = 'dark',
	System = 'system',
}
/* eslint-enable no-unused-vars */

export type SectionsNames = 'hero' | 'projects' | 'skills' | 'hobbies';

export interface Project {
	title: string;
	description: string;
	tags: Array<string>;
	image: {
		light: any;
		dark?: any;
	};
	url: {
		repository: string;
		deployment: string;
	};
}

export interface Repository {
	name: string;
	description: string;
	url: {
		repository: string;
		deployment: string;
	};
	languages: Array<string>;
}
