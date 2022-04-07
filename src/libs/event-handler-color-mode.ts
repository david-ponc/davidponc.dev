import { applyColorMode } from './apply-color-mode';

export default function eventHandlerColorMode(evt: MediaQueryListEvent) {
	const isDarkMode = evt.matches;
	const colorMode = isDarkMode ? 'dark' : 'light';
	console.log('useEffect - ColorModeContext - EventHandler');
	applyColorMode(colorMode);
}
