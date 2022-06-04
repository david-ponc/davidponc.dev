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
		href: '/#ocupaciones',
		label: 'Ocupaciones',
		icon: <HeartIcon height='24px' />,
	},
];

const socialLinks = [
	{
		href: 'https://www.linkedin.com/in/david-ponc/',
		label: <LinkedinIcon size={24} />,
	},
	{
		href: 'https://github.com/david-ponc',
		label: <GithubIcon size={24} />,
	},
];

const colorModeOptions = [
	{
		name: ColorModeEnum.Dark,
		label: 'Oscuro',
		icon: MoonIcon,
	},
	{
		name: ColorModeEnum.System,
		label: 'Sistema',
		icon: DesktopComputerIcon,
	},
	{
		name: ColorModeEnum.Light,
		label: 'Claro',
		icon: SunIcon,
	},
];

export { colorModeOptions, linksNavigation, socialLinks };
