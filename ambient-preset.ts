import type { Preset } from 'unocss';
import type { Theme } from '@unocss/preset-uno';
import * as colors from '@kevintyj/color';
import { BaseBackground } from '@kevintyj/color';

export const ambientPreset = (): Preset<Theme> => {
	return {
		name: 'unocss-preset-ambient',
		extendTheme(theme: Theme) {
			theme.colors = {
				...colors,
				white: '#ffffff',
				black: '#000000',
				transparent: 'transparent',
				current: 'currentColor',
				inherit: 'inherit',
				...BaseBackground,
			} as Theme['colors'];
		},
	};
};
