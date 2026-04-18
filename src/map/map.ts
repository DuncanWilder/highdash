export default function map<ArrayItem, MappedItem>(
	array: readonly ArrayItem[],
	mapItem: (
		item: ArrayItem,
		index: number,
		collection: readonly ArrayItem[],
	) => MappedItem,
): MappedItem[] {
	return array.map(mapItem);
}
