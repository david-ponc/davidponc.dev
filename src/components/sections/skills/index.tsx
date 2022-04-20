import {
	Git,
	Gnubash,
	Nextdotjs,
	Nodedotjs,
	ReactJs,
	Typescript as TypeScriptJs,
} from '@icons-pack/react-simple-icons';

import { Layout } from '~/components/layouts';

import styles from './skills.module.css';

const skills = [
	{
		name: 'react',
		icon: ReactJs,
	},
	{
		name: 'node',
		icon: Nodedotjs,
	},
	{
		name: 'next',
		icon: Nextdotjs,
	},
	{
		name: 'typescript',
		icon: TypeScriptJs,
	},
	{
		name: 'git',
		icon: Git,
	},
	{
		name: 'bash',
		icon: Gnubash,
	},
];

export const SkillsSection = () => {
	return (
		<Layout as='section' id='habilidades' className={styles.container}>
			<header className={styles.header}>
				<h2 className={styles.title}>Habilidades</h2>
			</header>
			<section className={styles.grid}>
				{skills.map(({ name, icon: Icon }) => (
					<figure className={styles.skill} key={name}>
						<Icon className={styles.logo} data-name={name} />
						<figcaption className={styles.caption}>{name}</figcaption>
					</figure>
				))}
			</section>
		</Layout>
	);
};
