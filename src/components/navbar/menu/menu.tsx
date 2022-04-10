import {
	BriefcaseIcon,
	DesktopComputerIcon,
	FireIcon,
	HeartIcon,
	MenuAlt4Icon,
	MoonIcon,
	SunIcon,
	XIcon,
} from '@heroicons/react/outline';
import {
	Action,
	Cancel,
	Content,
	Overlay,
	Portal,
	Root,
	Trigger,
} from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';
import { useContext, useState } from 'react';

import { Link } from '~/components/primitives';
import { ColorModeContext } from '~/contexts/color-mode-context';
import { ColorModeEnum } from '~/types';

import styles from './menu.module.css';

export const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { currentColorMode, changeColorModePreferences } =
		useContext(ColorModeContext);
	return (
		<Root open={isOpen} onOpenChange={setIsOpen}>
			<Trigger className={styles.trigger}>
				<MenuAlt4Icon height='20px' />
			</Trigger>
			<Portal>
				<Overlay className={styles.overlay} onClick={() => setIsOpen(false)} />
				<Content className={styles.container}>
					<header className={styles.header}>
						<svg
							width='20px'
							height='20px'
							fillRule='evenodd'
							strokeLinejoin='round'
							strokeMiterlimit='2'
							clipRule='evenodd'
							viewBox='0 0 636 601'
						>
							<path
								fill='currentColor'
								d='M135 0h200a300 300 0 010 600H131.9a97.4 97.4 0 01-84.4-140.2l15-30.6A67.3 67.3 0 0036.8 342l-19.7-11.9c-2.3-1.4-4.5-3-6.5-5l-.7-.7A34.8 34.8 0 010 300.1v-.2a34.8 34.8 0 0110-24.3l.6-.7c2-2 4.2-3.6 6.5-5l19.7-12c29.8-18 41-55.8 25.7-87l-15-30.7A97.4 97.4 0 01135 0zm189.4 529.9c23.3-23 39.8-54.5 48.6-86 7.8-27.5 13.5-56.3 11.7-84.6a20 20 0 00-39.9 2.5c1.5 23.9-3.8 48.2-10.3 71.4-7.3 26-20.8 52.1-40.5 70.4a20 20 0 00-2.7 26.3l.4.5.3.5.5.5.4.4a20 20 0 0014.6 6.5h.2a20 20 0 0013.4-5.3l.7-.7.5-.5 1-.9.7-.6.4-.4zm83-113.6c-.2 16.5-2 35.9-12.1 49.4a20 20 0 0032 24c15.1-20.2 19.9-48.5 20-73a20.001 20.001 0 00-40-.4zm-133.8-17.5c-2 17.6-6.1 38-18.4 51.4a20 20 0 0029.4 27.1c17.9-19.4 25.9-48.4 28.7-74a20 20 0 00-39.7-4.5zm283.6-39.7A230.2 230.2 0 00335 70H135l-1.8.1a27.3 27.3 0 00-22.8 39.3l15 30.6a137.4 137.4 0 01-29 160 137.5 137.5 0 0142.8 96.3l4.2-1.3a153.4 153.4 0 0037.2-19.4c36.3-24.8 73-51 115.4-64.4 96-30.5 179.3 3.4 261 47.9zM446.9 175.7a50 50 0 110 100 50 50 0 010-100z'
							></path>
						</svg>
						<Cancel className={styles.close}>
							<XIcon height='20px' />
						</Cancel>
					</header>
					<main className={styles.options}>
						<nav className={styles.list}>
							<Action asChild>
								<Link className={styles.link} href='/#proyectos' passHref>
									<BriefcaseIcon height='24px' /> Proyectos
								</Link>
							</Action>
							<Action asChild>
								<Link className={styles.link} href='/#habilidades' passHref>
									<FireIcon height='24px' /> Habilidades
								</Link>
							</Action>
							<Action asChild>
								<Link className={styles.link} href='/#pasatiempos' passHref>
									<HeartIcon height='24px' /> Pasatiempos
								</Link>
							</Action>
						</nav>
						<section className={styles.list}>
							<span className={styles.heading}>Modo de color</span>
							<section className={styles.modes}>
								<Action
									className={clsx(
										styles.mode,
										currentColorMode === ColorModeEnum.Dark && styles.active
									)}
									onClick={() => changeColorModePreferences(ColorModeEnum.Dark)}
								>
									<MoonIcon height='24px' />
									<span>Oscuro</span>
								</Action>
								<Action
									className={clsx(
										styles.mode,
										currentColorMode === ColorModeEnum.System && styles.active
									)}
									onClick={() =>
										changeColorModePreferences(ColorModeEnum.System)
									}
								>
									<DesktopComputerIcon height='24px' />
									<span>Sistema</span>
								</Action>
								<Action
									className={clsx(
										styles.mode,
										currentColorMode === ColorModeEnum.Light && styles.active
									)}
									onClick={() =>
										changeColorModePreferences(ColorModeEnum.Light)
									}
								>
									<SunIcon height='24px' />
									<span>Claro</span>
								</Action>
							</section>
						</section>
					</main>
				</Content>
			</Portal>
		</Root>
	);
};
