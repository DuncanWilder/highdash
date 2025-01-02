const concat = <PassedArrayType>(
	array: PassedArrayType | PassedArrayType[],
	...args: (PassedArrayType | PassedArrayType[])[]
): PassedArrayType[] => {
	const result: PassedArrayType[] = Array.isArray(array) ? [...array] : [array];

	for (const item of args) {
		if (Array.isArray(item)) {
			for (const e of item) {
				result.push(e);
			}
			continue;
		}

		result.push(item);
	}

	return result;
};

export default concat;
