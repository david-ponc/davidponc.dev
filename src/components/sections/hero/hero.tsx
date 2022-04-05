import { Layout } from '~/components/layouts';
import styles from '~/components/sections/hero/hero.module.css';

export const Hero = () => {
	return (
		<Layout as='main' className={styles.container}>
			<h1 className={styles.name}>David Ponce Vargas</h1>
			<h2 className={styles.job}>Desarrollador Web</h2>
		</Layout>
	);
};
