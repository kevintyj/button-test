import { createSignal } from 'solid-js';
import type { lightColorsType } from '@kevintyj/color';
import ToggleDarkMode from '../components/ToggleDarkMode.tsx';
import ButtonComponent, { type ButtonSizeProps } from '../components/Button.tsx';
import SelectConsumer from '../components/SelectConsumer.tsx';

const ButtonPage = () => {
	const fullColors: lightColorsType[] = [
		'ocean',
		'blue',
		'indigo',
		'violet',
		'crimson',
		'wine',
		'red',
		'orange',
		'amber',
		'yellow',
		'sapling',
		'green',
		'aurora',
		'cyan',
	];

	const sizes: ButtonSizeProps[] = ['sm', 'md', 'base', 'lg', 'xl', '2xl'];

	const [currentColor, setCurrentColor] = createSignal<lightColorsType>('green');
	const [currentSize, setCurrentSize] = createSignal<ButtonSizeProps>('base');

	return (
		<>
			<div class="absolute bottom-8 flex gap-4">
				<ToggleDarkMode />
				<SelectConsumer
					selectOptions={fullColors}
					setOptions={setCurrentColor}
					defaultValue={currentColor()}
				/>
				<SelectConsumer
					selectOptions={sizes}
					setOptions={setCurrentSize}
					defaultValue={currentSize()}
				/>
			</div>
			<div class="flex flex-col gap-4 p-8">
				<div class="w-full flex items-center justify-center">
					<p class="pr-3 text-neutral-7 dark:text-neutralDark-7">
						See the interactions:
					</p>
					<ButtonComponent color={currentColor()} size={currentSize()}>
						Click me!
					</ButtonComponent>
				</div>
			</div>
		</>
	);
};

export default ButtonPage;
