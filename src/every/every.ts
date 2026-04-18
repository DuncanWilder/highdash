export default function every<ArrayItem>(
	array: readonly ArrayItem[],
	predicate: (
		item: ArrayItem,
		index: number,
		collection: readonly ArrayItem[],
	) => boolean,
): boolean {
	return array.every(predicate);
}
