export default function last<ArrayItem>(
	array: readonly ArrayItem[],
): ArrayItem | undefined {
	return array.at(-1);
}
