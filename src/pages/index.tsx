import type { NextPage } from 'next';
import Head from 'next/head';

import { Navbar } from '~/components/navbar';
import {
	HeroSection,
	HobbiesSection,
	ProjectsSection,
	SkillsSection,
} from '~/components/sections';
import useSections from '~/hooks/use-sections';

const Home: NextPage = () => {
	const { currentSection, heroRef, hobbiesRef, projectsRef, skillsRef } =
		useSections();

	return (
		<>
			<Head>
				<title>David Ponce Vargas {SECTIONS_TITLES[currentSection]}</title>
				<meta name='description' content='Personal website' />
				<link rel='icon' href='favicon.svg' />
			</Head>

			<HeroSection ref={heroRef} />
			<ProjectsSection ref={projectsRef} />
			<SkillsSection ref={skillsRef} />
			<HobbiesSection ref={hobbiesRef} />
			<Navbar currentSection={currentSection} />
		</>
	);
};

const SECTIONS_TITLES = {
	hero: '',
	projects: '| Proyectos',
	skills: '| Habilidades',
	hobbies: '| Ocupaciones',
};

export default Home;
