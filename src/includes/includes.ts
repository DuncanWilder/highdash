type CollectionType = Record<string, unknown> | Array<number | string> | string;

export default function includes(
	collection: CollectionType,
	valueToFind: string | number,
	fromIndex = 0,
): boolean {
	if (typeof collection === "string") {
		return collection.includes(`${valueToFind}`);
	}

	if (Array.isArray(collection)) {
		return collection.includes(valueToFind);
	}

	let hasBeenFound = false;
	for (const value of Object.values(collection)) {
		if (value === valueToFind) {
			hasBeenFound = true;
		}
	}
	return hasBeenFound;
}
