import type { JSXElement, ParentComponent } from 'solid-js';

const ButtonComponent: ParentComponent = (props): JSXElement => {
	return (
		<button>
			{props.children}
		</button>
	);
};

export default ButtonComponent;
