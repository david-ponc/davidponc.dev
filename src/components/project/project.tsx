import { ExternalLinkIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

import { Link } from '~/components/primitives';
import { ColorModeContext } from '~/contexts/color-mode-context';
import type { Project as ProjectType } from '~/types';

import styles from './project.module.css';

interface ProjectProps extends ProjectType {}

export const Project = ({
	title,
	description,
	tags,
	images,
	links,
	...props
}: ProjectProps) => {
	const { colorMode } = useContext(ColorModeContext);
	const [image, setImage] = useState(() =>
		colorMode === 'light' ? images[0] : images[1]
	);
	const [deploy, repository] = links;

	useEffect(() => {
		setImage(colorMode === 'light' ? images[0] : images[1]);
	}, [colorMode, images]);

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
					<Link className={styles.code} href={repository}>
						<ExternalLinkIcon width={18} /> Código fuente
					</Link>
					<Link className={styles.web} href={deploy}>
						<ExternalLinkIcon width={18} /> Visitar sitio
					</Link>
				</footer>
			</section>
			<div className={styles.image}>
				<Image
					src={image}
					alt='Image of todo app project'
					width={480}
					height={281.25}
					layout='responsive'
					objectFit='contain'
				/>
			</div>
		</article>
	);
};
