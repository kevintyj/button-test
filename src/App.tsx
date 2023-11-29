import type { JSXElement } from 'solid-js';
import ButtonComponent from './components/Button.tsx';
import ToggleDarkMode from './components/ToggleDarkMode.tsx';
import { ThemeProvider } from './components/ThemeProvider.tsx';

const App = (): JSXElement => {
	return (
		<ThemeProvider>
			<div class="h-screen w-full flex items-center justify-center bg-light dark:bg-dark">
				<ToggleDarkMode />
				<ButtonComponent color="indigo">
					Something
				</ButtonComponent>
			</div>
		</ThemeProvider>
	);
};

export default App;
