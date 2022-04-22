import { forwardRef } from 'react';

import styles from './hobbies.module.css';

// eslint-disable-next-line react/display-name
export const HobbiesSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
	return (
		<section ref={ref} id='ocupaciones' className={styles.container} {...props}>
			<h2 className={styles.title}>Ocupaciones</h2>
		</section>
	);
});
