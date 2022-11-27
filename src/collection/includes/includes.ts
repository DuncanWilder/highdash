
type CollectionType = Record<string, any> | Array<number | string> | string;

/**
 * If you are reaching for this function, you probably just want Array.sort
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
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
