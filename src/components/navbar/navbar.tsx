import { DavidPonceIcon } from '~/components/icons';
import { Menu } from '~/components/navbar';
import { Link } from '~/components/primitives';

import styles from './navbar.module.css';

export const Navbar = () => {
	return (
		<header className={styles.container}>
			<Link href='/' passHref>
				<DavidPonceIcon size={20} />
			</Link>
			<Menu />
		</header>
	);
};
