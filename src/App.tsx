import './App.css';
import type { JSXElement } from 'solid-js';
import ButtonComponent from './Button.tsx';

const App = (): JSXElement => {
	return (
		<>
			<ButtonComponent>
				Something
			</ButtonComponent>
		</>
	);
};

export default App;
