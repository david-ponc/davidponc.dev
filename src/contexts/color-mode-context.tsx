import dynamic from 'next/dynamic';
import {
	ComponentType,
	createContext,
	FC,
	ReactNode,
	useCallback,
	useEffect,
	useState,
} from 'react';

import { applyColorMode } from '~/libs/apply-color-mode';
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

const ColorModeContextProvider: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [colorMode, setColorMode] = useState<ColorMode>(
		() => getInitialColorMode() as ColorMode
	);

	const [currentColorMode, setCurrentColorMode] = useState<ColorMode>(() =>
		getCurrentColorMode()
	);

	const eventHandlerColorMode = useCallback(
		(event: MediaQueryListEvent) => {
			const isDarkMode = event.matches;
			const colorMode = isDarkMode ? 'dark' : 'light';
			setColorMode(colorMode);
		},
		[setColorMode]
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
	}, [eventHandlerColorMode]);

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

const ColorModeContextDynamicProvider: ComponentType<{ children: ReactNode }> =
	dynamic(
		() =>
			import('~/contexts/color-mode-context').then(
				(mod: any) => mod.ColorModeContextProvider
			),
		{ ssr: false }
	);

const getCurrentColorMode = () => {
	const colorMode = window.localStorage.getItem('color-mode');

	if (colorMode === ColorModeEnum.Light) {
		return ColorModeEnum.Light;
	}

	if (colorMode === ColorModeEnum.Dark) {
		return ColorModeEnum.Dark;
	}

	return ColorModeEnum.System;
};

export {
	ColorModeContext,
	ColorModeContextDynamicProvider,
	ColorModeContextProvider,
};
