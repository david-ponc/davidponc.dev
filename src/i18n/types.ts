import type { ExperienceKey } from '~/data/experience';
import type { ProjectKey } from '~/data/projects';
import type { RepositoryKey } from '~/data/repositories';

export type Translations = {
	navbar: Navbar;
	hero: Hero;
	projects: Projects;
	repositories: Repositories;
	skills: Skills;
	experience: Experience;
	footer: Footer;
};

export type Navbar = {
	projects: string;
	skills: string;
	experience: string;
	menu: {
		groups: {
			navigation: string;
			preferences: string;
			contact: string;
		};
		appearance: {
			label: string;
			light: string;
			dark: string;
			system: string;
		};
		language: {
			label: string;
			es: string;
			en: string;
		};
	};
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
		viewAll: string;
	};
};

export type Skills = {
	heading: string;
};

export type ExperienceTranslation = {
	role: string;
	location: string;
	heading: string;
	achievements: string[];
};

export type Experience = {
	heading: string;
	present: string;
	items: Record<ExperienceKey, ExperienceTranslation>;
};

export type Footer = {
	contact: string[];
};
