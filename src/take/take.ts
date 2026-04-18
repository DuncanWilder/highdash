export default function take<ArrayItem>(
	array: readonly ArrayItem[],
	count = 1,
): ArrayItem[] {
	const normalizedCount = Math.max(Math.floor(count), 0);

	return array.slice(0, normalizedCount);
}
