import { ElementType, HTMLAttributes } from 'react';

interface LayoutProps extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const Layout = ({ as: Tag = 'div', ...props }: LayoutProps) => (
	<Tag {...props} />
);
