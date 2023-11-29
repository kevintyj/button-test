import type { JSXElement } from 'solid-js';
import ButtonComponent from './Button.tsx';

const App = (): JSXElement => {
	return (
		<>
			<ButtonComponent color="blue">
				Something
			</ButtonComponent>
		</>
	);
};

export default App;
