import clsx from 'clsx';

import { Link } from '~/components/primitives';
import { linksNavigation, socialLinks } from '~/content/navbar';
import { SectionsNames } from '~/types';

import { ColorDropdown } from './color-dropdown';
import styles from './menu.module.css';

export const DesktopMenu = ({
	currentSection,
}: {
	currentSection: SectionsNames;
}) => {
	return (
		<section className={styles.container}>
			<nav className={styles.links}>
				{linksNavigation.map(({ href, label }) => (
					<Link
						key={href}
						href={href}
						passHref
						replace
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
					>
						{label}
					</Link>
				))}
			</nav>
			<div className={styles.divider} />
			<nav className={styles.links}>
				{socialLinks.map(({ href, label }) => (
					<Link key={href} href={href} passHref className={styles.link}>
						{label}
					</Link>
				))}
				<ColorDropdown />
			</nav>
		</section>
	);
};
