import type { Accessor, ParentComponent } from 'solid-js';
import { createContext, createSignal, onMount, useContext } from 'solid-js';

const getInitialColorTheme = (): 'light' | 'dark' => {
	return localStorage.getItem('color-theme')
		?? window.matchMedia('(prefers-color-scheme: dark)')
		? 'dark'
		: 'light';
};

type ThemeTypes = 'light' | 'dark';

type ThemeContextValue = {
	theme: Accessor<ThemeTypes>
	toggleTheme: (theme?: ThemeTypes) => void
};

const ThemeContext = createContext<ThemeContextValue>();

export const ThemeProvider: ParentComponent = (props) => {
	const [theme, setTheme] = createSignal<'light' | 'dark'>(getInitialColorTheme());

	const setThemeItem = (theme: ThemeTypes) => {
		const themeOpposite = theme === 'light' ? 'dark' : 'light';
		document.documentElement.classList.add(theme);
		document.documentElement.classList.remove(themeOpposite);
		localStorage.setItem('color-theme', theme);
		setTheme(theme);
	};
	const toggleTheme = (themeType?: ThemeTypes) => {
		const newTheme: ThemeTypes = themeType || (theme() === 'light' ? 'dark' : 'light');
		setThemeItem(newTheme);
	};

	onMount(() => {
		setThemeItem(theme());
	});

	const contextObject: ThemeContextValue = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={contextObject}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	return useContext(ThemeContext)!;
};
