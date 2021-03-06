import {
	Git,
	Gnubash,
	Nextdotjs,
	Nodedotjs,
	ReactJs,
	Typescript as TypeScriptJs,
} from '@icons-pack/react-simple-icons';
import { forwardRef } from 'react';

import styles from './skills.module.css';

const SkillsSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
	return (
		<section ref={ref} id='habilidades' className={styles.container} {...props}>
			<header className={styles.header}>
				<h2 className={styles.title}>Habilidades</h2>
			</header>
			<section className={styles.grid}>
				{SKILLS.map(({ name, icon: Icon }) => (
					<figure className={styles.skill} key={name}>
						<Icon className={styles.logo} data-name={name} />
						<figcaption className={styles.caption}>{name}</figcaption>
					</figure>
				))}
			</section>
		</section>
	);
});

const SKILLS = [
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

SkillsSection.displayName = 'SkillsSection';

export { SkillsSection };
