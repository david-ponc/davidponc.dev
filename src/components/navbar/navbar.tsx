import clsx from 'clsx';

import { DavidPonceIcon } from '~/components/icons';
import { Link } from '~/components/primitives';
import { useMediaQuery } from '~/hooks/use-media-query';
import { useScroll } from '~/hooks/use-scroll';
import { SectionsNames } from '~/types';

import { DesktopMenu } from './desktop-menu/menu';
import { MobileMenu } from './mobile-menu/menu';
import styles from './navbar.module.css';

export const Navbar = ({
	currentSection,
}: {
	currentSection: SectionsNames;
}) => {
	const isDesktop = useMediaQuery('(min-width: 768px)');
	const { isScrolled } = useScroll();

	return (
		<header className={clsx(styles.container, isScrolled && styles.blured)}>
			<Link href='/' replace passHref>
				<DavidPonceIcon size={20} />
			</Link>
			{isDesktop ? (
				<DesktopMenu currentSection={currentSection} />
			) : (
				<MobileMenu currentSection={currentSection} />
			)}
		</header>
	);
};
