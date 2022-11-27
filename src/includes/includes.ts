type CollectionType = Record<string, any> | Array<number | string> | string;

export default function includes(
	collection: CollectionType,
	valueToFind: string | number,
	fromIndex = 0,
): boolean {
	if (typeof collection === 'string') {
		return collection.includes(`${valueToFind}`);
	}

	if (Array.isArray(collection)) {
		return collection.includes(valueToFind);
	}

	let hasBeenFound = false;
	Object.values(collection).forEach(value => {
		if (value === valueToFind) {
			hasBeenFound = true;
		}
	});
	return hasBeenFound;
}
