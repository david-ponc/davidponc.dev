import type { ProjectKey } from '~/data/projects';

export type Translations = {
	navbar: Navbar;
	hero: Hero;
	projects: Projects;
};

export type Navbar = {
	projects: string;
	skills: string;
	occupations: string;
};

export type Hero = {
	role: string;
	bio: string;
	contact: string;
};

export type ProjectTranslation = {
	title: string;
	description: string;
};

export type Projects = {
	heading: string;
	projects: Record<ProjectKey, ProjectTranslation>;
	actions: {
		source: string;
		website: string;
	};
};
