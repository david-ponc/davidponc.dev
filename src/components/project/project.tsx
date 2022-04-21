import { ExternalLinkIcon } from '@heroicons/react/solid';
// import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

import { Link } from '~/components/primitives';
import { ColorModeContext } from '~/contexts/color-mode-context';
import { ColorModeEnum, Project as ProjectType } from '~/types';

import styles from './project.module.css';

interface ProjectProps extends ProjectType {}

export const Project = ({
	title,
	description,
	tags,
	image,
	url,
	...props
}: ProjectProps) => {
	const { colorMode } = useContext(ColorModeContext);
	const [selectedImage, setImage] = useState(() =>
		colorMode === ColorModeEnum.Dark && image.dark ? image.dark : image.light
	);

	useEffect(() => {
		setImage(
			colorMode === ColorModeEnum.Dark && image.dark ? image.dark : image.light
		);
	}, [colorMode, image.dark, image.light]);

	return (
		<article className={styles.project} {...props}>
			<section className={styles.body}>
				<main className={styles.content}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.desc}>{description}</p>
					<ul className={styles.tags}>
						{tags.map(tag => (
							<li key={tag} className={styles.tag}>
								{tag}
							</li>
						))}
					</ul>
				</main>
				<footer className={styles.links}>
					<Link className={styles.code} href={url.repository}>
						<ExternalLinkIcon width={18} /> Código fuente
					</Link>
					<Link className={styles.web} href={url.deployment}>
						<ExternalLinkIcon width={18} /> Visitar sitio
					</Link>
				</footer>
			</section>
			<div className={styles.image}>
				{selectedImage}
				{/* <Image
					src={selectedImage}
					alt='Image of todo app project'
					width={480}
					height={281.25}
					layout='responsive'
					objectFit='contain'
					placeholder='blur'
				/> */}
			</div>
		</article>
	);
};
