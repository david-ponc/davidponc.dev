import { Action } from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC, useContext } from 'react';

import { ColorModeContext } from '~/contexts/color-mode-context';
import { ColorModeEnum } from '~/types';

import styles from './mode-item.module.css';

interface Props extends ComponentPropsWithoutRef<'button'> {
	name: ColorModeEnum;
}

export const ModeItem: FC<Props> = ({ name, children, ...props }) => {
	const { currentColorMode, changeColorModePreferences } =
		useContext(ColorModeContext);
	return (
		<Action
			className={clsx(styles.mode, currentColorMode === name && styles.active)}
			onClick={() => changeColorModePreferences(name)}
			{...props}
		>
			{children}
		</Action>
	);
};
