import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef, useContext } from 'react';

import { ColorModeContext } from '~/contexts/color-mode-context';
import { ColorModeEnum } from '~/types';

import styles from './mode-item.module.css';

interface Props extends ComponentPropsWithRef<'button'> {
	name: ColorModeEnum;
}

export const ModeItem = forwardRef<HTMLButtonElement, Props>(
	({ name, children, ...props }, ref) => {
		const { currentColorMode, changeColorModePreferences } =
			useContext(ColorModeContext);
		return (
			<button
				ref={ref}
				className={clsx(
					styles.mode,
					props.className,
					currentColorMode === name && styles.active
				)}
				onClick={() => changeColorModePreferences(name)}
				{...props}
			>
				{children}
			</button>
		);
	}
);

ModeItem.displayName = 'ModeItem';
