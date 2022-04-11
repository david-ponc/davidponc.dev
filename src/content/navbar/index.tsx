import { BriefcaseIcon, FireIcon, HeartIcon } from '@heroicons/react/outline';

import { GithubIcon, LinkedinIcon } from '~/components/icons';

const linksNavigation = [
	{
		href: '/#proyectos',
		label: (
			<>
				<BriefcaseIcon height='24px' /> Proyectos
			</>
		),
	},
	{
		href: '/#habilidades',
		label: (
			<>
				<FireIcon height='24px' /> Habilidades
			</>
		),
	},
	{
		href: '/#pasatiempo',
		label: (
			<>
				<HeartIcon height='24px' /> Pasatiempos
			</>
		),
	},
];

const socialLinks = [
	{
		href: 'https://www.linkedin.com/in/david-ponc/',
		label: <LinkedinIcon size={20} />,
	},
	{
		href: 'https://github.com/david-ponc',
		label: <GithubIcon size={20} />,
	},
];

export { linksNavigation, socialLinks };
