import { Drawer } from '@base-ui/react/drawer';
import { type SVGProps, useState } from 'react';

import { cn } from '~/core/lib/cn';
import type { Locale, Navbar } from '~/i18n';

type Theme = 'light' | 'dark' | 'system';
type MenuLevel = 'root' | 'appearance' | 'language';

interface Props {
	t: Navbar;
	initialTheme: Theme;
	lang: Locale;
}

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

interface RootMenuProps {
	t: Navbar;
	onNavigate: (level: MenuLevel) => void;
	onClose: () => void;
}

function RootMenu({ t, onNavigate, onClose }: RootMenuProps) {
	return (
		<>
			<Drawer.Close
				render={<a href='/#projects' />}
				className='inline-flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-muted-foreground hover:bg-muted/48 hover:text-foreground'
			>
				{t.projects}
			</Drawer.Close>

			<Drawer.Close
				render={<a href='/#skills' />}
				className='inline-flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-muted-foreground hover:bg-muted/48 hover:text-foreground'
			>
				{t.skills}
			</Drawer.Close>
			<Drawer.Close
				render={<a href='/#experience' />}
				className='inline-flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-muted-foreground hover:bg-muted/48 hover:text-foreground'
			>
				{t.experience}
			</Drawer.Close>
			<button
				type='button'
				onClick={() => onNavigate('appearance')}
				className='inline-flex cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-muted-foreground hover:bg-muted/48 hover:text-foreground'
			>
				{t.menu.appearance.label}
				<ChevronRightIcon className='size-4' />
			</button>
			<button
				type='button'
				onClick={() => onNavigate('language')}
				className='inline-flex cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-muted-foreground hover:bg-muted/48 hover:text-foreground'
			>
				{t.menu.language.label}
				<ChevronRightIcon className='size-4' />
			</button>
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.linkedin.com/in/david-ponc/'
				onClick={onClose}
				className='inline-flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-muted-foreground hover:bg-muted/48 hover:text-foreground'
			>
				LinkedIn
			</a>
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://github.com/david-ponc'
				onClick={onClose}
				className='inline-flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-muted-foreground hover:bg-muted/48 hover:text-foreground'
			>
				GitHub
			</a>
		</>
	);
}

interface AppearanceMenuProps {
	t: Navbar;
	currentTheme: Theme;
	onBack: () => void;
	onThemeChange: (theme: Theme) => void;
}

function AppearanceMenu({ t, currentTheme, onBack, onThemeChange }: AppearanceMenuProps) {
	return (
		<>
			<header className='flex items-center gap-3 pb-1'>
				<button
					type='button'
					onClick={onBack}
					className='grid size-10 cursor-pointer place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted/48 hover:text-foreground active:scale-[0.96]'
					aria-label='Back'
				>
					<ChevronLeftIcon className='size-5' />
				</button>
				<span className='font-medium text-foreground'>{t.menu.appearance.label}</span>
			</header>
			<button
				type='button'
				onClick={() => onThemeChange('light')}
				className={cn(
					'inline-flex cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-muted-foreground hover:bg-muted/48 hover:text-foreground',
					currentTheme === 'light' && 'bg-muted/48 text-foreground',
				)}
			>
				{t.menu.appearance.light}
				{currentTheme === 'light' && <CheckIcon className='size-4 text-brand-a' />}
			</button>
			<button
				type='button'
				onClick={() => onThemeChange('dark')}
				className={cn(
					'inline-flex cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-muted-foreground hover:bg-muted/48 hover:text-foreground',
					currentTheme === 'dark' && 'bg-muted/48 text-foreground',
				)}
			>
				{t.menu.appearance.dark}
				{currentTheme === 'dark' && <CheckIcon className='size-4 text-brand-a' />}
			</button>
			<button
				type='button'
				onClick={() => onThemeChange('system')}
				className={cn(
					'inline-flex cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-muted-foreground hover:bg-muted/48 hover:text-foreground',
					currentTheme === 'system' && 'bg-muted/48 text-foreground',
				)}
			>
				{t.menu.appearance.system}
				{currentTheme === 'system' && <CheckIcon className='size-4 text-brand-a' />}
			</button>
		</>
	);
}

interface LanguageMenuProps {
	t: Navbar;
	lang: Locale;
	onBack: () => void;
	onClose: () => void;
}

function LanguageMenu({ t, lang, onBack, onClose }: LanguageMenuProps) {
	return (
		<>
			<div className='flex items-center gap-3 pb-1'>
				<button
					type='button'
					onClick={onBack}
					className='grid size-10 cursor-pointer place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted/48 hover:text-foreground active:scale-[0.96]'
					aria-label='Back'
				>
					<ChevronLeftIcon className='size-5' />
				</button>
				<span className='font-medium text-foreground'>{t.menu.language.label}</span>
			</div>
			<a
				href='/'
				onClick={onClose}
				className={cn(
					'inline-flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-muted-foreground hover:bg-muted/48 hover:text-foreground',
					lang === 'es' && 'bg-muted/48 text-foreground',
				)}
			>
				{t.menu.language.es}
				{lang === 'es' && <CheckIcon className='size-4 text-brand-a' />}
			</a>
			<a
				href='/en'
				onClick={onClose}
				className={cn(
					'inline-flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-muted-foreground hover:bg-muted/48 hover:text-foreground',
					lang === 'en' && 'bg-muted/48 text-foreground',
				)}
			>
				{t.menu.language.en}
				{lang === 'en' && <CheckIcon className='size-4 text-brand-a' />}
			</a>
		</>
	);
}

export function MobileMenu({ t, initialTheme, lang }: Props) {
	const [open, setOpen] = useState(false);
	const [level, setLevel] = useState<MenuLevel>('root');
	const [currentTheme, setCurrentTheme] = useState<Theme>(initialTheme);

	async function handleThemeChange(theme: Theme) {
		setCurrentTheme(theme);
		applyThemeToDocument(theme);
		await persistTheme(theme);
	}

	function handleOpenChange(next: boolean) {
		setOpen(next);
		if (!next) setLevel('root');
	}

	function handleClose() {
		setOpen(false);
		setLevel('root');
	}

	const isSubLevel = level !== 'root';

	return (
		<Drawer.Root open={open} onOpenChange={handleOpenChange}>
			<Drawer.Trigger className='not-disabled:cursor-pointer rounded-md p-2.5 text-muted-foreground outline-none transition-colors not-disabled:hover:bg-brand-a/12 not-disabled:hover:text-brand-a focus-visible:text-brand-a'>
				<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
					<path
						d='M3 10.2C3 7.67976 3 6.41965 3.49047 5.45704C3.9219 4.61031 4.61031 3.9219 5.45704 3.49047C6.41965 3 7.67976 3 10.2 3H13.8C16.3202 3 17.5804 3 18.543 3.49047C19.3897 3.9219 20.0781 4.61031 20.5095 5.45704C21 6.41965 21 7.67976 21 10.2V13.8C21 16.3202 21 17.5804 20.5095 18.543C20.0781 19.3897 19.3897 20.0781 18.543 20.5095C17.5804 21 16.3202 21 13.8 21H10.2C7.67976 21 6.41965 21 5.45704 20.5095C4.61031 20.0781 3.9219 19.3897 3.49047 18.543C3 17.5804 3 16.3202 3 13.8V10.2Z'
						stroke='currentColor'
						strokeWidth='1.5'
					/>
					<path
						d='M8 16H16'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
				</svg>
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Backdrop
					className={cn(
						'fixed inset-0 z-50 bg-transparent backdrop-blur-[calc(var(--backdrop-blur)*(1-var(--drawer-swipe-progress))*1px)] transition-[backdrop-filter,opacity] duration-300 [--backdrop-blur:4] [--backdrop-opacity:0.5] data-ending-style:opacity-0 data-starting-style:opacity-0 data-swiping:transition-none dark:[--backdrop-opacity:0.5]',
						'before:absolute before:inset-0 before:bg-black before:opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] before:transition-[backdrop-filter,opacity] before:duration-300',
					)}
				/>
				<Drawer.Viewport className='pointer-events-none fixed inset-0 z-51'>
					<Drawer.Popup className='pointer-events-auto absolute right-0 bottom-0 left-0 max-h-[90svh] rounded-t-2xl border-t border-t-border bg-background shadow-xl outline-none transition-transform duration-300 will-change-transform data-ending-style:translate-y-full data-starting-style:translate-y-full data-swiping:transition-none'>
						<div className='mx-auto mt-3 mb-1 h-1.5 w-10 rounded-full bg-border' />
						<Drawer.Content className='overflow-hidden p-2'>
							{/* Sliding track: root moves left, sub-panel moves in from right */}
							<div
								className='flex transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform'
								style={{ transform: isSubLevel ? 'translateX(-100%)' : 'translateX(0%)' }}
							>
								{/* Root panel */}
								<div
									className={cn(
										'flex w-full shrink-0 flex-col transition-[opacity,filter] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-[opacity,filter]',
										isSubLevel && 'pointer-events-none opacity-0 blur-sm',
									)}
								>
									<RootMenu t={t} onNavigate={setLevel} onClose={handleClose} />
								</div>

								{/* Sub-panel */}
								<div className='flex w-full shrink-0 flex-col'>
									{level === 'appearance' && (
										<AppearanceMenu
											t={t}
											currentTheme={currentTheme}
											onBack={() => setLevel('root')}
											onThemeChange={handleThemeChange}
										/>
									)}
									{level === 'language' && (
										<LanguageMenu
											t={t}
											lang={lang}
											onBack={() => setLevel('root')}
											onClose={handleClose}
										/>
									)}
								</div>
							</div>
						</Drawer.Content>
					</Drawer.Popup>
				</Drawer.Viewport>
			</Drawer.Portal>
		</Drawer.Root>
	);
}

function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox='0 0 16 16' fill='currentColor' {...props}>
			<path
				fillRule='evenodd'
				d='M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z'
				clipRule='evenodd'
			/>
		</svg>
	);
}

function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox='0 0 16 16' fill='currentColor' {...props}>
			<path
				fillRule='evenodd'
				d='M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z'
				clipRule='evenodd'
			/>
		</svg>
	);
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox='0 0 16 16' fill='currentColor' {...props}>
			<path
				d='M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z'
				fill='currentColor'
			/>
		</svg>
	);
}
