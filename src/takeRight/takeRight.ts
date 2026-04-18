export default function takeRight<ArrayItem>(
	array: readonly ArrayItem[],
	count = 1,
): ArrayItem[] {
	const normalizedCount = Math.max(Math.floor(count), 0);

	if (normalizedCount === 0) {
		return [];
	}

	return array.slice(-normalizedCount);
}
