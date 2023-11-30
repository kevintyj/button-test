import { useTheme } from './ThemeProvider.tsx';

const DarkModeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={() => toggleTheme()}
		>
			Toggle Dark/Light Mode | Current:
			{' '}
			{theme()}
		</button>
	);
};

export default DarkModeToggle;
