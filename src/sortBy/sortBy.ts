type SortableValue = string | number;
type SortByPredicate<CollectionItem> =
	| ((item: CollectionItem) => SortableValue)
	| (keyof CollectionItem & string)
	| Array<keyof CollectionItem & string>;

function compareSortValues(
	leftValue: SortableValue,
	rightValue: SortableValue,
): number {
	if (typeof leftValue === "number" && typeof rightValue === "number") {
		return leftValue - rightValue;
	}

	return String(leftValue).localeCompare(String(rightValue));
}

/**
 * If you are reaching for this function, you probably just want Array.sort
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
export default function sortBy<CollectionItem extends Record<string, unknown>>(
	collection: CollectionItem[],
	predicate: SortByPredicate<CollectionItem>,
): CollectionItem[] {
	const sortedCollection = [...collection];

	if (typeof predicate === "function") {
		return sortedCollection.sort((leftItem, rightItem) =>
			compareSortValues(predicate(leftItem), predicate(rightItem)),
		);
	}

	const sortKeys = Array.isArray(predicate) ? predicate : [predicate];

	return sortedCollection.sort((leftItem, rightItem) => {
		for (const sortKey of sortKeys) {
			const comparisonResult = compareSortValues(
				leftItem[sortKey] as SortableValue,
				rightItem[sortKey] as SortableValue,
			);

			if (comparisonResult !== 0) {
				return comparisonResult;
			}
		}

		return 0;
	});
}
