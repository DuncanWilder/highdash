export default function nth<ArrayItem>(
	array: readonly ArrayItem[],
	index = 0,
): ArrayItem | undefined {
	const normalizedIndex = Math.trunc(index);

	if (normalizedIndex >= 0) {
		return array[normalizedIndex];
	}

	return array[array.length + normalizedIndex];
}
