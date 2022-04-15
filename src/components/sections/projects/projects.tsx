import { Layout } from '~/components/layouts';
import { MainProject, SecondaryProject } from '~/components/project';
import { extraProjectsInfo, mainProjectsInfo } from '~/content/pages';

import styles from './projects.module.css';

export const ProjectsSection = () => {
	return (
		<Layout as='section' id='proyectos' className={styles.container}>
			<main>
				{mainProjectsInfo.map(project => (
					<MainProject key={project.title} {...project} />
				))}
			</main>
			<footer className={styles.footer}>
				<h3 className={styles.title}>Repositorios destacados</h3>
				<section className={styles.collection}>
					{extraProjectsInfo.map(project => (
						<SecondaryProject key={project.name} {...project} />
					))}
				</section>
			</footer>
		</Layout>
	);
};
