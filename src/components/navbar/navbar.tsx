import { DavidPonceIcon } from '~/components/icons';
import { Link } from '~/components/primitives';
import { useMediaQuery } from '~/hooks/useMediaQuery';

import { DesktopMenu } from './desktop-menu/menu';
import { MobileMenu } from './mobile-menu/menu';
import styles from './navbar.module.css';

export const Navbar = () => {
	const isDesktop = useMediaQuery('(min-width: 768px)');

	return (
		<header className={styles.container}>
			<Link href='/' passHref>
				<DavidPonceIcon size={20} />
			</Link>
			{isDesktop ? <DesktopMenu /> : <MobileMenu />}
		</header>
	);
};
