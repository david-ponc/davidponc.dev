import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

import { Layout } from '~/components/layouts';
import { Link } from '~/components/primitives';
import { MainProject, SecondaryProject } from '~/components/project';
import { projectsContent, repositoriesContent } from '~/content/pages';

import styles from './projects.module.css';

export const ProjectsSection = () => {
	return (
		<Layout as='section' id='proyectos' className={styles.container}>
			<main>
				{projectsContent.map(project => (
					<MainProject key={project.title} {...project} />
				))}
			</main>
			<section className={styles.repositories}>
				<h3 className={styles.title}>Repositorios destacados</h3>
				<section className={styles.collection}>
					{repositoriesContent.map(repository => (
						<SecondaryProject key={repository.name} {...repository} />
					))}
				</section>
			</section>
			<footer className={styles.footer}>
				<Link
					href='https://github.com/david-ponc?tab=repositories'
					className={styles.link}
				>
					Más repositorios <ArrowNarrowRightIcon height={16} />
				</Link>
			</footer>
		</Layout>
	);
};
