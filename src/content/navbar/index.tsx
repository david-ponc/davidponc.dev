import {
	BriefcaseIcon,
	DesktopComputerIcon,
	FireIcon,
	HeartIcon,
	MoonIcon,
	SunIcon,
} from '@heroicons/react/solid';

import { GithubIcon, LinkedinIcon } from '~/components/icons';
import { ColorModeEnum } from '~/types';

const linksNavigation = [
	{
		href: '/#proyectos',
		label: 'Proyectos',
		icon: <BriefcaseIcon height='24px' />,
	},
	{
		href: '/#habilidades',
		label: 'Habilidades',
		icon: <FireIcon height='24px' />,
	},
	{
		href: '/#pasatiempo',
		label: 'Pasatiempo',
		icon: <HeartIcon height='24px' />,
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

const colorModeOptions = [
	{
		name: ColorModeEnum.Dark,
		label: 'Oscuro',
		icon: <MoonIcon height={20} />,
	},
	{
		name: ColorModeEnum.System,
		label: 'Sistema',
		icon: <DesktopComputerIcon height={20} />,
	},
	{
		name: ColorModeEnum.Light,
		label: 'Claro',
		icon: <SunIcon height={20} />,
	},
];

export { colorModeOptions, linksNavigation, socialLinks };
