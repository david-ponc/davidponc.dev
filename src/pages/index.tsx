import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Navbar } from '~/components/navbar';
import {
	HeroSection,
	ProjectsSection,
	SkillsSection,
} from '~/components/sections';

const Home: NextPage = () => {
	const [heroRef, heroInView] = useInView({ threshold: 0.5 });
	const [projectsRef, projectsInView] = useInView({
		threshold: [0.25, 0.5, 0.75],
	});
	const [skillsRef, skillsInView] = useInView({ threshold: 0.5 });
	const [currentSection, setCurrentSection] = useState<
		'hero' | 'projects' | 'skills'
	>('hero');
	useEffect(() => {
		let current = 'hero';

		if (heroInView) {
			current = 'hero';
		}
		if (projectsInView) {
			current = 'projects';
		}
		if (skillsInView) {
			current = 'skills';
		}

		if (current !== currentSection) {
			setCurrentSection(current as 'hero' | 'projects' | 'skills');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [heroInView, projectsInView, skillsInView]);
	return (
		<>
			<Head>
				<title>David Ponce Vargas</title>
				<meta name='description' content='Personal website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<HeroSection ref={heroRef} />
			<ProjectsSection ref={projectsRef} />
			<SkillsSection ref={skillsRef} />
			<Navbar currentSection={currentSection} />
		</>
	);
};

export default Home;
