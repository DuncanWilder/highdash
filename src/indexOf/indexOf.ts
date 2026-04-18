export default function indexOf<ArrayItem>(
	array: readonly ArrayItem[],
	valueToFind: ArrayItem,
	fromIndex = 0,
): number {
	return array.indexOf(valueToFind, Math.trunc(fromIndex));
}
