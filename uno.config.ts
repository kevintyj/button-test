import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';
import { ambientPreset } from './ambient-preset';
import ambientSafelistColors from './src/utils/safelist-color';

export default defineConfig({
	presets: [
		presetUno(),
		ambientPreset(),
	],
	safelist: [...ambientSafelistColors],
});
