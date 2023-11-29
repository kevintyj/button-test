import type { Preset } from 'unocss';
import type { Theme } from '@unocss/preset-uno';
import * as colors from '@kevintyj/color';

export const ambientPreset = (): Preset<Theme> => {
	return {
		name: 'unocss-preset-ambient',
		extendTheme(theme: Theme) {
			theme.colors = {
				...colors,
			} as Theme['colors'];
		},
	};
};
