import { Link } from '~/components/primitives';
import { linksNavigation, socialLinks } from '~/content/navbar';

import { ColorDropdown } from './color-dropdown';
import styles from './menu.module.css';

export const DesktopMenu = () => {
	return (
		<section className={styles.container}>
			<nav className={styles.links}>
				{linksNavigation.map(({ href, label }) => (
					<Link key={href} href={href} passHref className={styles.link}>
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
