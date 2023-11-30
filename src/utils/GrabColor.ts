import * as color from '@kevintyj/color';
import type { darkColorsType, lightColorsType } from '@kevintyj/color';

type ColorNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
const getHEXColor = (colorName: lightColorsType | darkColorsType, scaleNumber: ColorNumber): string => {
	return color[colorName][scaleNumber];
};

export default getHEXColor;
