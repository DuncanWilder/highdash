export default function without<ArrayItem>(
	array: readonly ArrayItem[],
	...valuesToRemove: ArrayItem[]
): ArrayItem[] {
	const valuesToRemoveSet = new Set(valuesToRemove);

	return array.filter((item) => !valuesToRemoveSet.has(item));
}
