type FlattenedItem<ArrayItem> =
	ArrayItem extends ReadonlyArray<infer NestedArrayItem>
		? NestedArrayItem
		: ArrayItem;

export default function flatten<ArrayItem>(
	arrayToFlatten: ArrayItem[],
): FlattenedItem<ArrayItem>[] {
	return arrayToFlatten.flat() as FlattenedItem<ArrayItem>[];
}
