export default function intersection<ArrayItem>(
	firstArray: readonly ArrayItem[],
	...otherArrays: Array<readonly ArrayItem[]>
): ArrayItem[] {
	const seenValues = new Set<ArrayItem>();
	const intersectedValues: ArrayItem[] = [];

	for (const item of firstArray) {
		if (seenValues.has(item)) {
			continue;
		}

		seenValues.add(item);

		if (otherArrays.every((array) => array.includes(item))) {
			intersectedValues.push(item);
		}
	}

	return intersectedValues;
}
