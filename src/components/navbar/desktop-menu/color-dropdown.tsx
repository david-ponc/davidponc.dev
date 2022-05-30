import { ColorSwatchIcon } from '@heroicons/react/solid';
import {
	Content,
	RadioGroup,
	RadioItem,
	Root,
	Trigger,
} from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { useContext } from 'react';

import { colorModeOptions } from '~/content/navbar';
import { ColorModeContext } from '~/contexts/color-mode-context';

import styles from './menu.module.css';

export const ColorDropdown = () => {
	const { currentColorMode, changeColorModePreferences } =
		useContext(ColorModeContext);

	return (
		<Root>
			<Trigger className={styles.trigger}>
				<ColorSwatchIcon height='20px' />
			</Trigger>
			<Content className={styles.container}>
				<RadioGroup>
					{colorModeOptions.map(({ name, label, icon }) => (
						<RadioItem
							key={name}
							value={name}
							className={clsx(
								styles.item,
								currentColorMode === name && styles.active
							)}
							onSelect={() => changeColorModePreferences(name)}
						>
							{icon} {label}
						</RadioItem>
					))}
				</RadioGroup>
			</Content>
		</Root>
	);
};
