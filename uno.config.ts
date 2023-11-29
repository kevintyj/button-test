import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';
import { ambientPreset } from './ambient-preset';

export default defineConfig({
	presets: [
		presetUno(),
		ambientPreset(),
	],
});
