import { Menu } from '@headlessui/react';
import { MenuAlt4Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useContext } from 'react';

import { DavidPonceIcon } from '~/components/icons';
import { Link } from '~/components/primitives';
import {
	colorModeOptions,
	linksNavigation,
	socialLinks,
} from '~/content/navbar';
import { ColorModeContext } from '~/contexts/color-mode-context';
import { useScroll } from '~/hooks/use-scroll';
import { SectionsNames } from '~/types';

import styles from './menu.module.css';

export const MobileMenu = ({
	currentSection,
}: {
	currentSection: SectionsNames;
}) => {
	const { isScrolled } = useScroll();
	const { currentColorMode, changeColorModePreferences } =
		useContext(ColorModeContext);

	return (
		<Menu>
			<section className={styles.actions}>
				{socialLinks.map(({ href, label }) => (
					<Link key={href} href={href} replace passHref>
						{label}
					</Link>
				))}
				<Menu.Button className={styles.trigger}>
					<MenuAlt4Icon height='20px' />
				</Menu.Button>
			</section>

			<Menu.Items
				className={clsx(
					styles.container,
					isScrolled && styles.containerAdapted
				)}
			>
				<header className={styles.header}>
					<Menu.Item>
						<Link passHref href='/' replace>
							<DavidPonceIcon size={20} />
						</Link>
					</Menu.Item>
					<section className={styles.actions}>
						{socialLinks.map(({ href, label }) => (
							<Menu.Item key={href}>
								<Link href={href} replace passHref>
									{label}
								</Link>
							</Menu.Item>
						))}
						<Menu.Item as='button' className={styles.close}>
							<XIcon height='20px' />
						</Menu.Item>
					</section>
				</header>
				<main className={styles.options}>
					<nav className={styles.list}>
						{linksNavigation.map(({ href, icon, label }) => (
							<Menu.Item key={href}>
								<Link
									passHref
									href={href}
									className={clsx(
										styles.link,
										currentSection === 'projects' &&
											label === 'Proyectos' &&
											styles.activeLink,
										currentSection === 'skills' &&
											label === 'Habilidades' &&
											styles.activeLink,
										currentSection === 'hobbies' &&
											label === 'Ocupaciones' &&
											styles.activeLink
									)}
									replace
								>
									{icon} {label}
								</Link>
							</Menu.Item>
						))}
					</nav>
					<section className={styles.list}>
						<span className={styles.heading}>Modo de color</span>
						<section className={styles.modes}>
							{colorModeOptions.map(({ name, label, icon: Icon }) => (
								<Menu.Item
									as='button'
									key={name}
									className={clsx(
										styles.mode,
										currentColorMode === name && styles.active
									)}
									onClick={() => changeColorModePreferences(name)}
								>
									<Icon width={24} /> {label}
								</Menu.Item>
							))}
						</section>
					</section>
				</main>
			</Menu.Items>
		</Menu>
	);
};
