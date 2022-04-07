import clsx from 'clsx';
import { FC } from 'react';

import styles from './draft-lines-wrap.module.css';

export const DraftLinesWrap: FC = ({ children }) => (
	<div className={styles.wrapper}>
		<div className={clsx(styles.line, styles.top)} />
		<div className={clsx(styles.line, styles.bottom)} />
		<div className={clsx(styles.line, styles.left)} />
		<div className={clsx(styles.line, styles.right)} />
		{children}
	</div>
);
