import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import styles from './draft-lines-wrap.module.css';

export const DraftLinesWrap: FC<{ children?: ReactNode }> = ({
	children,
	...props
}) => (
	<div className={styles.wrapper} {...props}>
		<div className={clsx(styles.line, styles.top)} />
		<div className={clsx(styles.line, styles.bottom)} />
		<div className={clsx(styles.line, styles.left)} />
		<div className={clsx(styles.line, styles.right)} />
		{children}
	</div>
);
