import Image from 'next/image';
import { forwardRef } from 'react';

import { Link } from '~/components/primitives';
import { hobbiesContent } from '~/content/pages/hobbies';

import styles from './hobbies.module.css';

const HobbiesSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
	return (
		<section ref={ref} id='ocupaciones' className={styles.container} {...props}>
			<div className={styles.mask}>
				<div className={styles.pattern} />
			</div>
			<Link
				href={hobbiesContent.image.href}
				passHref
				className={styles.imageWrapper}
			>
				<Image
					src={hobbiesContent.image.cover}
					width={1200}
					height={280}
					quality={100}
					alt={hobbiesContent.image.alt}
					objectFit='cover'
					objectPosition='center'
					placeholder='blur'
					blurDataURL={hobbiesContent.image.blurData}
				/>
			</Link>
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

HobbiesSection.displayName = 'HobbiesSection';

export { HobbiesSection };
