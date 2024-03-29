import type { JSXElement } from 'solid-js';
import type { darkColorsType, lightColorsType } from '@kevintyj/color';
import concatinateObjectToString from '../utils/ConcatClass.ts';
import getHEXColor from '../utils/GrabColor.ts';
import { useTheme } from './ThemeProvider.tsx';

export type ButtonSizeProps = 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl';

type ButtonProps = {
	children?: JSXElement;
	color: lightColorsType | 'default';
	size?: ButtonSizeProps;
};

const ButtonComponent = (props: ButtonProps): JSXElement => {
	const { theme } = useTheme();

	const defaultColor = (): lightColorsType =>
		props.color === 'default' ? 'neutral' : props.color;

	const color = (): lightColorsType | darkColorsType =>
		theme() === 'light'
			? defaultColor()
			: `${defaultColor()}Dark`;

	const sizeClass: Record<ButtonSizeProps, string> = {
		'sm': 'h-6 text-sm px-2',
		'md': 'h-7 text-sm px-2',
		'base': 'h-[30px] text-sm px-2.5',
		'lg': 'h-8 text-base px-3',
		'xl': 'h-9 text-lg px-3.5',
		'2xl': 'h-10 text-xl px-4',
	};

	const buttonBuilder = (): Record<string, string> => {
		if (props.color !== 'default') {
			return {
				resetButton: 'cursor-pointer',
				buttonBase: `rounded-md font-medium ${sizeClass[props.size ?? 'base']}
			text-white border-none transition-all
			bg-${color()}-5 hover:bg-${color()}-6 active:bg-${color()}-5`,
				buttonGradient: `bg-gradient-to-t
			from-transparent to-${color()}-6
			active:to-${color()}-5
			`,
			};
		}
		else {
			return {
				resetButton: 'cursor-pointer',
				buttonBase: `rounded-md font-medium ${sizeClass[props.size ?? 'base']}
			text-neutral-9 dark:text-neutralDark-9 border-none transition-all
			bg-light dark:bg-dark
			hover:bg-${color()}-1 active:bg-light dark:active:bg-dark`,
				buttonGradient: `bg-gradient-to-t
			from-transparent to-${color()}-1
			active:to-light dark:active:to-dark
			`,
			};
		}
	};

	return (
		<button
			class={concatinateObjectToString(buttonBuilder())}
			style={`box-shadow:
			inset 0 -2.5px 0 0 ${getHEXColor(color(), 3)}44,
			inset 0 0 0 1px ${getHEXColor(color(), props.color === 'default' ? 4 : 7)}88,
			inset 0 1px 0 0 ${getHEXColor(color(), props.color === 'default' ? 3 : 7)};
			`}
		>
			{props.children}
		</button>
	);
};

export default ButtonComponent;
