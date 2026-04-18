type SearchableCollection =
	| string
	| readonly unknown[]
	| Record<string, unknown>;

export default function includes(
	collection: SearchableCollection,
	valueToFind: unknown,
	fromIndex = 0,
): boolean {
	const normalizedFromIndex = Math.max(Math.floor(fromIndex), 0);

	if (typeof collection === "string") {
		return collection.includes(`${valueToFind}`, normalizedFromIndex);
	}

	if (Array.isArray(collection)) {
		return collection.includes(valueToFind, normalizedFromIndex);
	}

	return Object.values(collection)
		.slice(normalizedFromIndex)
		.includes(valueToFind);
}
