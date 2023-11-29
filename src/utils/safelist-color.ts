import * as color from '@kevintyj/color';

const ambientSafelistColors = (): string[] => {
	const USECASE: string[] = ['bg', 'text', 'border', 'from', 'to'];
	const STATES: string[] = ['hover', 'active'];
	const safelist: string[] = [];

	Object.entries(color).forEach(([name, colorScale]) => {
		USECASE.forEach((usecase) => {
			Object.keys(colorScale).forEach((shade) => {
				safelist.push(`${usecase}-${name}-${shade}`);
				STATES.forEach((state) => {
					safelist.push(`${state}:${usecase}-${name}-${shade}`);
				});
			});
		});
	});

	return safelist;
};

export default ambientSafelistColors();
