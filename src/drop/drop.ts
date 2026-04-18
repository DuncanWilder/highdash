export default function drop<ArrayItem>(
	array: ArrayItem[],
	numberToDrop = 1,
): ArrayItem[] {
	const normalizedDropCount = Math.max(Math.floor(numberToDrop), 0);

	return array.slice(normalizedDropCount);
}
