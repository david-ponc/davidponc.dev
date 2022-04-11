import { ComponentProps, FC } from 'react';

interface IconProps extends ComponentProps<'svg'> {
	size?: number;
}

export const LinkedinIcon: FC<IconProps> = ({
	size,
	width,
	height,
	...props
}) => {
	return (
		<svg
			width={size || width || '100%'}
			height={size || height || '100%'}
			viewBox='0 0 512 512'
			fill='currentColor'
			{...props}
		>
			<path d='M444.2 32h-374C49.9 32 32 46.7 32 66.9v374.7A39.4 39.4 0 0070.3 480H444c20.5 0 35.9-18.2 35.9-38.4V67c.1-20.2-15.4-34.9-35.8-34.9zM170.9 405.4h-64.2V206h64.2zM141 175.5h-.5c-20.5 0-33.8-15.3-33.8-34.4 0-19.5 13.6-34.4 34.6-34.4s33.9 14.8 34.4 34.4a33.2 33.2 0 01-34.7 34.4zm264.4 230h-64.1V296.2c0-26.1-9.4-44-32.6-44-17.7 0-28.2 12-33 23.7-1.7 4.2-2.1 10-2.1 15.8v113.6h-64.2V206h64.2v27.7c9.3-13.2 23.9-32.4 57.8-32.4 42.2 0 74 27.8 74 87.7z'></path>
		</svg>
	);
};
