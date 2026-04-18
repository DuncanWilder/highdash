function normalizeFromIndex(arrayLength: number, fromIndex: number): number {
	const normalizedFromIndex = Math.trunc(fromIndex);

	if (normalizedFromIndex < 0) {
		return Math.max(arrayLength + normalizedFromIndex, 0);
	}

	return normalizedFromIndex;
}

export default function find<ArrayItem>(
	array: readonly ArrayItem[],
	predicate: (
		item: ArrayItem,
		index: number,
		collection: readonly ArrayItem[],
	) => boolean,
	fromIndex = 0,
): ArrayItem | undefined {
	for (
		let index = normalizeFromIndex(array.length, fromIndex);
		index < array.length;
		index += 1
	) {
		if (predicate(array[index], index, array)) {
			return array[index];
		}
	}

	return undefined;
}
