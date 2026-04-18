export default function dropRight<ArrayItem>(
	array: ArrayItem[],
	numberToDrop = 1,
): ArrayItem[] {
	const normalizedDropCount = Math.max(Math.floor(numberToDrop), 0);

	if (normalizedDropCount === 0) {
		return array.slice();
	}

	return array.slice(0, -normalizedDropCount);
}
