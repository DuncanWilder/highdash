export default function includes<CollectionType>(
	collection: CollectionType | Array<number | string> | string,
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
	for (const value of Object.values(collection as Record<string, unknown>)) {
		if (value === valueToFind) {
			hasBeenFound = true;
		}
	}
	return hasBeenFound;
}
