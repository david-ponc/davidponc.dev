import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { SectionsNames } from '~/types';

const useSections = () => {
	const [heroRef, heroInView] = useInView({ threshold: 0.5 });
	const [projectsRef, projectsInView] = useInView({
		threshold: [0.25, 0.5, 0.75],
	});
	const [skillsRef, skillsInView] = useInView({ threshold: 0.5 });
	const [hobbiesRef, hobbiesInView] = useInView({ threshold: 0.5 });

	const [currentSection, setCurrentSection] = useState<SectionsNames>('hero');

	useEffect(() => {
		let current: SectionsNames = 'hero';

		if (heroInView) {
			current = 'hero';
		}
		if (projectsInView) {
			current = 'projects';
		}
		if (skillsInView) {
			current = 'skills';
		}
		if (hobbiesInView) {
			current = 'hobbies';
		}

		if (current !== currentSection) {
			setCurrentSection(current);
		}
	}, [heroInView, projectsInView, skillsInView, hobbiesInView, currentSection]);

	return {
		currentSection,
		heroRef,
		projectsRef,
		skillsRef,
		hobbiesRef,
	};
};

export default useSections;
