import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import styles from './self-shadow-wrap.module.css';

interface SelfShadowWrapProps extends ImageProps {}

export const SelfShadowWrap: FC<SelfShadowWrapProps> = ({
	src,
	alt,
	width,
	height,
	priority,
	...props
}) => (
	<div className={styles.wrapper}>
		<div className={styles.shadow}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				priority={priority}
				quality='1%'
			/>
		</div>
		<div className={styles.image}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				priority={priority}
				{...props}
			/>
		</div>
	</div>
);
