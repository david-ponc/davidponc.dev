import { Menu } from '@base-ui/react/menu';
import { type SVGProps, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

function applyThemeToDocument(theme: Theme): void {
	const prefersDark =
		theme === 'system'
			? window.matchMedia('(prefers-color-scheme: dark)').matches
			: theme === 'dark';

	document.documentElement.classList.toggle('dark', prefersDark);
}

async function persistTheme(theme: Theme): Promise<void> {
	if (theme === 'system') {
		await cookieStore.delete('theme');
	} else {
		await cookieStore.set('theme', theme);
	}
}

export function ThemeToggle({ initialValue }: { initialValue: Theme }) {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState<Theme>(initialValue);

	async function handleThemeChange(theme: Theme) {
		setValue(theme);
		applyThemeToDocument(theme);
		await persistTheme(theme);
	}

	return (
		<Menu.Root open={open} onOpenChange={setOpen}>
			<Menu.Trigger className='not-disabled:cursor-pointer p-2.5 text-muted-foreground transition-colors not-disabled:hover:text-brand-a focus-visible:text-brand-a hover:[anchor-name:--social-anchor] focus-visible:[anchor-name:--social-anchor]'>
				<PaletteSolidIcon className='size-5' />
			</Menu.Trigger>
			<Menu.Portal>
				<Menu.Positioner
					align='end'
					side='bottom'
					sideOffset={8}
					className='z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom,transform] data-instant:transition-none'
				>
					<Menu.Popup className='relative flex h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) flex-col rounded-lg border border-border bg-card not-dark:bg-clip-padding p-0.5 text-foreground text-sm shadow-lg/5 outline-none transition-[width,height,scale,opacity] ease-out data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0'>
						<Menu.Group className='flex flex-col'>
							<Menu.GroupLabel className='cursor-default select-none px-1.5 py-1 font-medium text-muted-foreground text-xs'>
								Appearance
							</Menu.GroupLabel>
							<Menu.RadioGroup
								value={value}
								onValueChange={value => handleThemeChange(value as Theme)}
							>
								<Menu.RadioItem
									value='light'
									className='relative grid cursor-pointer grid-cols-[1rem_1fr_0.875rem] items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-none data-checked:bg-muted data-highlighted:bg-muted'
								>
									<SunIcon className='col-start-1 size-4' />
									<span className='col-start-2 pr-8'>Light</span>
									<Menu.RadioItemIndicator className='col-start-3'>
										<CheckIcon className='size-3.5' />
									</Menu.RadioItemIndicator>
								</Menu.RadioItem>
								<Menu.RadioItem
									value='dark'
									className='relative grid cursor-pointer grid-cols-[1rem_1fr_0.875rem] items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-none data-checked:bg-muted data-highlighted:bg-muted'
								>
									<MoonIcon className='col-start-1 size-4' />
									<span className='col-start-2 pr-8'>Dark</span>
									<Menu.RadioItemIndicator className='col-start-3'>
										<CheckIcon className='size-3.5' />
									</Menu.RadioItemIndicator>
								</Menu.RadioItem>
								<Menu.RadioItem
									value='system'
									className='relative grid cursor-pointer grid-cols-[1rem_1fr_0.875rem] items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-none data-checked:bg-muted data-highlighted:bg-muted'
								>
									<SystemIcon className='col-start-1 size-4' />
									<span className='col-start-2 pr-8'>System</span>
									<Menu.RadioItemIndicator className='col-start-3'>
										<CheckIcon className='size-3.5' />
									</Menu.RadioItemIndicator>
								</Menu.RadioItem>
							</Menu.RadioGroup>
						</Menu.Group>
					</Menu.Popup>
				</Menu.Positioner>
			</Menu.Portal>
		</Menu.Root>
	);
}

function PaletteSolidIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12 0.999023C14.885 0.99914 17.6714 2.03036 19.7402 3.89209C21.8124 5.7572 22.9994 8.31162 22.9995 10.9995C22.9995 12.5908 22.3669 14.1165 21.2417 15.2417C20.1165 16.3669 18.5908 16.9995 16.9995 16.9995H14.7495C14.6106 16.9996 14.4737 17.0379 14.3555 17.1108C14.2371 17.184 14.1409 17.2896 14.0786 17.4141C14.0164 17.5385 13.99 17.6783 14.0024 17.8169C14.0149 17.9552 14.0658 18.088 14.1489 18.1992L14.4492 18.5991C14.7555 19.0075 14.9423 19.494 14.9883 20.0024C15.0341 20.511 14.9368 21.0223 14.7085 21.479C14.4801 21.9358 14.1293 22.3209 13.6948 22.5894C13.2606 22.8576 12.7595 22.9995 12.249 22.9995H12C9.08302 22.9994 6.28442 21.8408 4.22168 19.7783C2.1592 17.7156 0.999153 14.917 0.999023 12C0.999153 9.08279 2.15889 6.28447 4.22168 4.22168C6.28447 2.15889 9.08279 0.999152 12 0.999023ZM6.49951 10.9995C5.72292 10.9998 5.08488 11.5907 5.0083 12.3472L4.99951 12.4995L5.0083 12.6533C5.0851 13.4095 5.72309 13.9993 6.49951 13.9995C7.32794 13.9995 7.99951 13.3279 7.99951 12.4995C7.99926 11.7231 7.40954 11.0851 6.65332 11.0083L6.49951 10.9995ZM17.499 9C16.7227 9.0005 16.0844 9.59136 16.0078 10.3477L15.999 10.5L16.0078 10.6538C16.0848 11.4097 16.723 11.9995 17.499 12C18.3273 12 18.9988 11.3282 18.999 10.5C18.9988 9.72357 18.4091 9.08559 17.6528 9.00879L17.499 9ZM8.49902 6C7.72265 6.00049 7.08438 6.59136 7.00781 7.34766L6.99902 7.5L7.00781 7.65381C7.0848 8.40966 7.72297 8.99951 8.49902 9C9.32729 9 9.99876 8.3282 9.99902 7.5C9.99878 6.72357 9.40905 6.08559 8.65283 6.00879L8.49902 6ZM13.5 4.99951C12.7234 4.99976 12.0854 5.59074 12.0088 6.34717L12 6.49951L12.0088 6.65332C12.0856 7.40952 12.7236 7.99926 13.5 7.99951C14.3282 7.99925 15 7.32778 15 6.49951C14.9998 5.72325 14.4098 5.08533 13.6538 5.0083L13.5 4.99951Z'
				fill='currentColor'
			/>
		</svg>
	);
}

function SunIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
			<path
				d='M16.9991 12C16.9991 14.7614 14.7605 17 11.9991 17C9.23766 17 6.99908 14.7614 6.99908 12C6.99908 9.23858 9.23766 7 11.9991 7C14.7605 7 16.9991 9.23858 16.9991 12Z'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			></path>
			<path
				d='M12.1247 3.25H11.9997M12.1242 20.75H11.9992M20.75 12.125V12M3.25 12.125V12M18.2752 5.90098L18.1868 5.81259M5.90051 18.275L5.81212 18.1866M18.0987 18.2756L18.187 18.1872M5.72429 5.9012L5.81267 5.81282M12.2497 3.25C12.2497 3.38807 12.1378 3.5 11.9997 3.5C11.8616 3.5 11.7497 3.38807 11.7497 3.25C11.7497 3.11193 11.8616 3 11.9997 3C12.1378 3 12.2497 3.11193 12.2497 3.25ZM12.2492 20.75C12.2492 20.8881 12.1373 21 11.9992 21C11.8611 21 11.7492 20.8881 11.7492 20.75C11.7492 20.6119 11.8611 20.5 11.9992 20.5C12.1373 20.5 12.2492 20.6119 12.2492 20.75ZM20.75 12.25C20.6119 12.25 20.5 12.1381 20.5 12C20.5 11.8619 20.6119 11.75 20.75 11.75C20.8881 11.75 21 11.8619 21 12C21 12.1381 20.8881 12.25 20.75 12.25ZM3.25 12.25C3.11193 12.25 3 12.1381 3 12C3 11.8619 3.11193 11.75 3.25 11.75C3.38807 11.75 3.5 11.8619 3.5 12C3.5 12.1381 3.38807 12.25 3.25 12.25ZM18.3636 5.98937C18.266 6.087 18.1077 6.087 18.01 5.98937C17.9124 5.89174 17.9124 5.73345 18.01 5.63582C18.1077 5.53819 18.266 5.53819 18.3636 5.63582C18.4612 5.73345 18.4612 5.89174 18.3636 5.98937ZM5.9889 18.3634C5.89127 18.461 5.73297 18.461 5.63534 18.3634C5.53771 18.2658 5.53771 18.1075 5.63534 18.0099C5.73297 17.9122 5.89127 17.9122 5.9889 18.0099C6.08653 18.1075 6.08653 18.2658 5.9889 18.3634ZM18.0103 18.364C17.9126 18.2663 17.9126 18.108 18.0103 18.0104C18.1079 17.9128 18.2662 17.9128 18.3638 18.0104C18.4614 18.108 18.4614 18.2663 18.3638 18.364C18.2662 18.4616 18.1079 18.4616 18.0103 18.364ZM5.6359 5.98959C5.53827 5.89196 5.53827 5.73367 5.6359 5.63604C5.73353 5.53841 5.89182 5.53841 5.98945 5.63604C6.08708 5.73367 6.08708 5.89196 5.98945 5.98959C5.89182 6.08722 5.73353 6.08722 5.6359 5.98959Z'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			></path>
		</svg>
	);
}

function MoonIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			{...props}
		>
			<path d='M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401' />
		</svg>
	);
}

function SystemIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			{...props}
		>
			<rect width='20' height='14' x='2' y='3' rx='2' />
			<line x1='8' x2='16' y1='21' y2='21' />
			<line x1='12' x2='12' y1='17' y2='21' />
		</svg>
	);
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox='0 0 16 16' width='16' height='16' {...props}>
			<path
				d='M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z'
				fill='currentColor'
			></path>
		</svg>
	);
}
