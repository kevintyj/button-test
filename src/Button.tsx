import type { JSXElement } from 'solid-js';
import type { darkColorsType, lightColorsType } from '@kevintyj/color';

interface ButtonProps {
	children?: JSXElement
	color: lightColorsType | darkColorsType
}

const ButtonComponent = (props: ButtonProps): JSXElement => {
	return (
		<button class="bg-blue-5">
			{props.children}
		</button>
	);
};

export default ButtonComponent;
