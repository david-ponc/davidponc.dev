import { CodeIcon, RocketIcon } from '@primer/octicons-react';
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
						<CodeIcon size={16} /> Código fuente
					</Link>
					<Link className={styles.web} href={url.deployment}>
						<RocketIcon size={16} /> Visitar sitio
					</Link>
				</footer>
			</section>
			<div className={styles.image}>{selectedImage}</div>
		</article>
	);
};
