export default function filter<ArrayItem>(
	array: readonly ArrayItem[],
	predicate: (
		item: ArrayItem,
		index: number,
		collection: readonly ArrayItem[],
	) => boolean,
): ArrayItem[] {
	return array.filter(predicate);
}
