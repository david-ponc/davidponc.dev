import { Menu } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useContext } from 'react';

import { colorModeOptions } from '~/content/navbar';
import { ColorModeContext } from '~/contexts/color-mode-context';

import styles from './menu.module.css';

export const ColorDropdown = () => {
	const { currentColorMode, changeColorModePreferences, colorMode } =
		useContext(ColorModeContext);
	const CurrentIcon = colorMode === 'dark' ? MoonIcon : SunIcon;

	return (
		<div className={styles.menuContainer}>
			<Menu>
				<Menu.Button className={styles.trigger}>
					{/* <ColorSwatchIcon height='20px' /> */}
					<CurrentIcon
						width={24}
						height={24}
						className={clsx(colorMode === currentColorMode && styles.glow)}
					/>
				</Menu.Button>
				<Menu.Items as='section' className={styles.items}>
					{colorModeOptions.map(({ name, label, icon: Icon }) => (
						<Menu.Item key={name}>
							<button
								className={clsx(
									styles.item,
									currentColorMode === name && styles.active
								)}
								onClick={() => changeColorModePreferences(name)}
							>
								<Icon width={20} height={20} />
								<span>{label}</span>
							</button>
						</Menu.Item>
					))}
				</Menu.Items>
			</Menu>
		</div>
	);
};
