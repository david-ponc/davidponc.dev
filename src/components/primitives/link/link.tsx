import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ComponentPropsWithRef, FC } from 'react';

import styles from './link.module.css';

type AnchorProps = ComponentPropsWithRef<'a'> & NextLinkProps;
interface LinkProps extends AnchorProps {
	activeClassName?: string;
}

export const Link: FC<LinkProps> = ({
	as,
	href,
	locale,
	passHref,
	replace,
	scroll,
	shallow,
	activeClassName,
	...props
}) => {
	const router = useRouter();
	const isActive = router.asPath === href;

	const isExternal = href.startsWith('http');
	props.target = isExternal ? '_blank' : undefined;
	props.rel = isExternal ? 'noopener noreferrer' : undefined;

	return (
		<NextLink
			as={as}
			href={href}
			locale={locale}
			passHref={passHref}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
		>
			<a
				{...props}
				className={clsx(
					styles.anchor,
					props.className,
					isActive && activeClassName
				)}
			/>
		</NextLink>
	);
};
