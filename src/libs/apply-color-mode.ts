import { ColorMode } from '~/types';

export function applyColorMode(colorMode: ColorMode) {
	document.documentElement.dataset.colorMode = colorMode;
}
