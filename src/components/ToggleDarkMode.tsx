import { useTheme } from './ThemeProvider.tsx';

const DarkModeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={() => toggleTheme()}
			class="absolute bottom-9"
		>
			Toggle Dark/Light Mode | Current:
			{' '}
			{theme()}
		</button>
	);
};

export default DarkModeToggle;
