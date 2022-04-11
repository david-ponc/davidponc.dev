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

import { DavidPonceIcon, GithubIcon, LinkedinIcon } from '~/components/icons';
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
			<section className={styles.actions}>
				<Link href='https://www.linkedin.com/in/david-ponc/' passHref>
					<LinkedinIcon size={20} />
				</Link>
				<Link href='https://github.com/david-ponc' passHref>
					<GithubIcon size={20} />
				</Link>
				<Trigger className={styles.trigger}>
					<MenuAlt4Icon height='20px' />
				</Trigger>
			</section>
			<Portal>
				<Overlay className={styles.overlay} onClick={() => setIsOpen(false)} />
				<Content className={styles.container}>
					<header className={styles.header}>
						<DavidPonceIcon size={20} />
						<section className={styles.actions}>
							<Link href='https://www.linkedin.com/in/david-ponc/' passHref>
								<LinkedinIcon size={20} />
							</Link>
							<Link href='https://github.com/david-ponc' passHref>
								<GithubIcon size={20} />
							</Link>
							<Cancel className={styles.close}>
								<XIcon height='20px' />
							</Cancel>
						</section>
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
