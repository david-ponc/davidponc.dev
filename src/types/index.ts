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
