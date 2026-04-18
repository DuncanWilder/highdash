export default function union<ArrayItem>(
	...arrays: ReadonlyArray<readonly ArrayItem[]>
): ArrayItem[] {
	const combinedValues: ArrayItem[] = [];

	for (const array of arrays) {
		combinedValues.push(...array);
	}

	return [...new Set(combinedValues)];
}
