import { useEffect, useRef, useState } from 'react';

export const useScroll = () => {
	const [scrollY, setScrollY] = useState(0);
	const isScrolled = useRef(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
			isScrolled.current = window.scrollY > 0;
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return { currentValueScrollY: scrollY, isScrolled: isScrolled.current };
};
