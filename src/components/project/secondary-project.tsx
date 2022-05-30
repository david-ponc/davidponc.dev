import { RepoIcon, RocketIcon } from '@primer/octicons-react';

import { Link } from '~/components/primitives';
import type { Repository } from '~/types';

import styles from './secondary-project.module.css';

interface ProjectProps extends Repository {}

export const SecondaryProject = ({
	name,
	description,
	languages,
	url,
	...props
}: ProjectProps) => (
	<article className={styles.project} {...props}>
		<Link href={url.repository} className={styles.title}>
			<RepoIcon size={16} /> {name}
		</Link>
		<p className={styles.description}>{description}</p>
		<ul className={styles.languages}>
			{languages.map(language => (
				<li key={language} data-color={language} className={styles.language}>
					{language}
				</li>
			))}
		</ul>
		<footer className={styles.links}>
			<Link href={url.deployment} className={styles.link}>
				<RocketIcon size={16} /> Resultado
			</Link>
		</footer>
	</article>
);
