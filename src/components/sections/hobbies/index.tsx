import Image from 'next/image';
import { forwardRef } from 'react';

import { Link } from '~/components/primitives';
import { hobbiesContent } from '~/content/pages/hobbies';

import styles from './hobbies.module.css';

// eslint-disable-next-line react/display-name
export const HobbiesSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
	return (
		<section ref={ref} id='ocupaciones' className={styles.container} {...props}>
			<div className={styles.mask}>
				<div className={styles.pattern} />
			</div>
			<figure>
				<Link
					href={hobbiesContent.image.href}
					passHref
					className={styles.imageWrapper}
				>
					<Image
						src={hobbiesContent.image.cover}
						width={1200}
						height={514.29}
						quality={100}
						alt={hobbiesContent.image.alt}
						objectFit='contain'
						objectPosition='center'
						placeholder='blur'
						blurDataURL={hobbiesContent.image.blurData}
					/>
				</Link>
			</figure>
			<article className={styles.content}>
				<h2 className={styles.title}>{hobbiesContent.title}</h2>
				{hobbiesContent.paragraphs.map((paragraph, index) => (
					<p key={index} className={styles.text}>
						{paragraph}
					</p>
				))}
			</article>
		</section>
	);
});
