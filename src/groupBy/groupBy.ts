type GroupKey = string | number;
type GroupByPredicate<CollectionItem> =
	| ((value: CollectionItem, index: number) => GroupKey)
	| (keyof CollectionItem & string);

function toPlainGroupedObject<CollectionItem>(
	groupedItems: Partial<Record<string, CollectionItem[]>>,
): Record<string, CollectionItem[]> {
	// Object.groupBy returns a null-prototype object. Spreading it gives callers a
	// plain object, which is less surprising to inspect and compare in tests.
	return { ...groupedItems } as Record<string, CollectionItem[]>;
}

export default function groupBy<CollectionItem>(
	collection: CollectionItem[],
	predicate: GroupByPredicate<CollectionItem>,
): Record<string, CollectionItem[]> {
	if (typeof predicate === "function") {
		return toPlainGroupedObject(Object.groupBy(collection, predicate));
	}

	return toPlainGroupedObject(
		// The string shorthand means "group by this property on each item".
		// Object.groupBy expects the callback to return a property key, so we read
		// the property value and coerce it to a string key for the grouped object.
		Object.groupBy(collection, (item) =>
			String((item as Record<string, unknown>)[predicate] as string | number),
		),
	);
}
