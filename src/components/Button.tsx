import type { JSXElement } from 'solid-js';
import type { lightColorsType } from '@kevintyj/color';
import concatinateObjectToString from '../utils/ConcatClass.ts';
import { useTheme } from './ThemeProvider.tsx';

type ButtonProps = {
	children?: JSXElement
	color: lightColorsType
};

const ButtonComponent = (props: ButtonProps): JSXElement => {
	const { theme } = useTheme();

	const color = () => theme() === 'light'
		? props.color
		: `${props.color}Dark`;

	const buttonComponent: Record<string, string> = {
		resetButton: 'cursor-pointer',
		buttonBase: `rounded px-2.5 py-1 text-base font-medium
			bg-${color()}-4 text-${color()}-9`,
		buttonGradient: `bg-gradient-to-t from-transparent to-${color()}-6
			hover:to-${color()}-4`,
		buttonBorder: `border border-solid border-${color()}-7`,
	};

	return (
		<button class={`${concatinateObjectToString(buttonComponent)}`}>
			{props.children}
			{' '}
			{theme()}
		</button>
	);
};

export default ButtonComponent;
