import { forwardRef } from 'react';

import { DraftLinesWrap } from '~/components/draft-lines-wrap';
import { Link } from '~/components/primitives';
import styles from '~/components/sections/hero/hero.module.css';
import { SelfShadowWrap } from '~/components/self-shadow-wrap';

// eslint-disable-next-line react/display-name
export const Hero = forwardRef<HTMLDivElement, {}>((props, ref) => {
	return (
		<section ref={ref} className={styles.container} {...props}>
			<div className={styles.backgroundGradient}>
				<div className={styles.backgroundPattern} />
			</div>
			<SelfShadowWrap
				width='210px'
				height='189px'
				src='/me.png'
				alt='Foto donde se muestra el rostro de David Ponce Vargas'
				priority
			/>
			<h1 className={styles.name}>David Ponce Vargas</h1>
			<h2 className={styles.job}>Desarrollador Web</h2>
			<DraftLinesWrap>
				<Link href='https://linkedin.com/in/david-ponc' className={styles.link}>
					Contáctame
				</Link>
			</DraftLinesWrap>
		</section>
	);
});
