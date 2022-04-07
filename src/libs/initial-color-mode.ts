export default function getInitialColorMode() {
	const persistedColorMode = window.localStorage.getItem('color-mode');
	const hasPersistedPreference = typeof persistedColorMode === 'string';

	if (hasPersistedPreference) {
		return persistedColorMode;
	}

	const mql = window.matchMedia('(prefers-color-scheme: dark)');
	const hasSystemPreference = Boolean(mql.matches);

	if (hasSystemPreference) {
		return mql.matches ? 'dark' : 'light';
	}

	return 'light';
}
