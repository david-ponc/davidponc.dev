import { MenuAlt4Icon, XIcon } from '@heroicons/react/solid';
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

import { DavidPonceIcon } from '~/components/icons';
import { Link } from '~/components/primitives';
import {
	colorModeOptions,
	linksNavigation,
	socialLinks,
} from '~/content/navbar';
import { ColorModeContext } from '~/contexts/color-mode-context';

import styles from './menu.module.css';

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { currentColorMode, changeColorModePreferences } =
		useContext(ColorModeContext);
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
							{linksNavigation.map(({ href, icon, label }) => (
								<Action asChild key={href}>
									<Link className={styles.link} href={href} passHref>
										{icon} {label}
									</Link>
								</Action>
							))}
						</nav>
						<section className={styles.list}>
							<span className={styles.heading}>Modo de color</span>
							<section className={styles.modes}>
								{colorModeOptions.map(({ name, label, icon }) => (
									<Action
										key={name}
										className={clsx(
											styles.mode,
											currentColorMode === name && styles.active
										)}
										onClick={() => changeColorModePreferences(name)}
									>
										{icon} {label}
									</Action>
								))}
							</section>
						</section>
					</main>
				</Content>
			</Portal>
		</Root>
	);
};
