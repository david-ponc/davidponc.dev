import dynamic from 'next/dynamic';
import { createContext, FC, useEffect, useState } from 'react';

import { applyColorMode } from '~/libs/apply-color-mode';
import eventHandlerColorMode from '~/libs/event-handler-color-mode';
import getInitialColorMode from '~/libs/initial-color-mode';
import { ColorMode, ColorModeEnum } from '~/types';

interface ColorModeContextType {
	currentColorMode: ColorMode;
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
	const [currentColorMode, setCurrentColorMode] = useState<ColorMode>(
		ColorModeEnum.System
	);

	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', eventHandlerColorMode);

		return () => {
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', eventHandlerColorMode);
		};
	}, []);

	useEffect(() => {
		applyColorMode(colorMode);
	}, [colorMode]);

	const changeColorModePreferences = (newPreference: ColorMode) => {
		if (newPreference === ColorModeEnum.System) {
			window.localStorage.removeItem('color-mode');
			const newColorMode = getInitialColorMode() as ColorMode;
			setColorMode(newColorMode);
		} else {
			window.localStorage.setItem('color-mode', newPreference);
			setColorMode(newPreference);
		}
		setCurrentColorMode(newPreference);
	};

	return (
		<ColorModeContext.Provider
			value={{ colorMode, currentColorMode, changeColorModePreferences }}
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
