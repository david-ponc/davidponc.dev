import type { ProjectKey } from '~/data/projects';
import type { RepositoryKey } from '~/data/repositories';

export type Translations = {
	navbar: Navbar;
	hero: Hero;
	projects: Projects;
	repositories: Repositories;
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

export type RepositoryTranslation = {
	title: string;
	description: string;
};

export type Repositories = {
	heading: string;
	repositories: Record<RepositoryKey, RepositoryTranslation>;
	actions: {
		source: string;
		website: string;
	};
};
