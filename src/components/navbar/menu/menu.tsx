import {
	DesktopComputerIcon,
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
import { useState } from 'react';

import { DavidPonceIcon } from '~/components/icons';
import { Link } from '~/components/primitives';
import { linksNavigation, socialLinks } from '~/content/navbar';
import { ColorModeEnum } from '~/types';

import styles from './menu.module.css';
import { ModeItem } from './mode-item';

export const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Root open={isOpen} onOpenChange={setIsOpen}>
			<section className={styles.actions}>
				{socialLinks.map(({ href, label }) => (
					<Link key={href} href={href} passHref>
						{label}
					</Link>
				))}
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
							{socialLinks.map(({ href, label }) => (
								<Link key={href} href={href} passHref>
									{label}
								</Link>
							))}
							<Cancel className={styles.close}>
								<XIcon height='20px' />
							</Cancel>
						</section>
					</header>
					<main className={styles.options}>
						<nav className={styles.list}>
							{linksNavigation.map(({ href, label }) => (
								<Action asChild key={href}>
									<Link className={styles.link} href={href} passHref>
										{label}
									</Link>
								</Action>
							))}
						</nav>
						<section className={styles.list}>
							<span className={styles.heading}>Modo de color</span>
							<section className={styles.modes}>
								<ModeItem name={ColorModeEnum.Dark}>
									<MoonIcon height='24px' />
									<span>Oscuro</span>
								</ModeItem>
								<ModeItem name={ColorModeEnum.System}>
									<DesktopComputerIcon height='24px' />
									<span>Sistema</span>
								</ModeItem>
								<ModeItem name={ColorModeEnum.Light}>
									<SunIcon height='24px' />
									<span>Claro</span>
								</ModeItem>
							</section>
						</section>
					</main>
				</Content>
			</Portal>
		</Root>
	);
};
