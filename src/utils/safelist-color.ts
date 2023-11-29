import * as color from '@kevintyj/color';

const ambientSafelistColors = (): string[] => {
	const USECASE: string[] = ['bg', 'text', 'border'];
	const safelist: string[] = [];

	Object.entries(color).forEach(([name, colorScale]) => {
		USECASE.forEach((usecase) => {
			Object.keys(colorScale).forEach((shade) => {
				safelist.push(`${usecase}-${name}-${shade}`);
			});
		});
	});

	return safelist;
};

export default ambientSafelistColors();
