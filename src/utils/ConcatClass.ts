const concatinateObjectToString = (obj: Record<keyof any, unknown>): string => {
	return Object.values(obj)
		.filter(value => typeof value === 'string')
		.join(' ');
};

export default concatinateObjectToString;
