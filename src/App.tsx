import type { JSXElement } from 'solid-js';
import { ThemeProvider } from './components/ThemeProvider.tsx';
import ButtonPage from './pages/ButtonPage.tsx';

const App = (): JSXElement => {
	return (
		<ThemeProvider>
			<div class="h-screen w-full flex flex-col items-center justify-center gap-2 bg-light dark:bg-dark">
				<ButtonPage />
			</div>
		</ThemeProvider>
	);
};

export default App;
