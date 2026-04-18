export default function uniq<ArrayItem>(
	array: readonly ArrayItem[],
): ArrayItem[] {
	return [...new Set(array)];
}
