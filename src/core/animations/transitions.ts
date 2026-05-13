import type { TransitionAnimationPair, TransitionDirectionalAnimations } from 'astro';

const animation: TransitionAnimationPair = {
	old: {
		name: 'fade-in-up',
		duration: '500ms',
		easing: 'ease-in',
		direction: 'reverse',
	},
	new: {
		name: 'fade-in-up',
		duration: '500ms',
		easing: 'ease-in-out',
	},
};

export const reveal: TransitionDirectionalAnimations = {
	forwards: animation,
	backwards: animation,
};
