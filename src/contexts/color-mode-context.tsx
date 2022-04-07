import dynamic from 'next/dynamic';
import { createContext, FC, useEffect, useState } from 'react';

import { applyColorMode } from '~/libs/apply-color-mode';
import getInitialColorMode from '~/libs/initial-color-mode';
import { ColorMode } from '~/types';

interface ColorModeContextType {
	colorMode: ColorMode | undefined;
	changeColorModePreferences: (newPreferences: ColorMode) => void;
}

const ColorModeContext = createContext<ColorModeContextType>(
	{} as ColorModeContextType
);

const ColorModeContextProvider: FC = ({ children }) => {
	const [colorMode, setColorMode] = useState<ColorMode>(
		document.documentElement.dataset.colorMode as ColorMode
	);

	useEffect(() => {
		applyColorMode(colorMode);
	}, [colorMode]);

	const changeColorModePreferences = (newPreferences: ColorMode) => {
		if (newPreferences === 'system') {
			window.localStorage.removeItem('color-mode');
			const newColorMode = getInitialColorMode() as ColorMode;
			setColorMode(newColorMode);
		} else {
			window.localStorage.setItem('color-mode', newPreferences);
			setColorMode(newPreferences);
		}
	};

	return (
		<ColorModeContext.Provider
			value={{ colorMode, changeColorModePreferences }}
		>
			{children}
		</ColorModeContext.Provider>
	);
};

const ColorModeContextDynamicProvider = dynamic(
	() =>
		import('~/contexts/color-mode-context').then(
			(mod: any) => mod.ColorModeContextProvider
		),
	{ ssr: false }
);

export {
	ColorModeContext,
	ColorModeContextDynamicProvider,
	ColorModeContextProvider,
};
