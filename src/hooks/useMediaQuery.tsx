import { useEffect, useState } from 'react';

const getMatches = (query: string) => {
	if (typeof window !== 'undefined') {
		return window.matchMedia(query).matches;
	}
	return false;
};

export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(getMatches(query));

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);

		const listener = () => setMatches(mediaQuery.matches);

		mediaQuery.addEventListener('change', listener);

		return () => mediaQuery.removeEventListener('change', listener);
	}, [query]);

	return matches;
};
