// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type CollectionType = Record<string, any>;

/**
 * If you are reaching for this function, you probably just want Array.sort
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
export default function sortBy(
	collection: CollectionType[],
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	predicate: ((item: any) => string | number) | string[],
): CollectionType[] | undefined {
	const clonedArray: CollectionType[] = JSON.parse(JSON.stringify(collection));

	if (typeof predicate === "function") {
		clonedArray.sort((a, b) => {
			const aa = predicate(a);
			const bb = predicate(b);

			if (typeof aa === "string" && typeof bb === "string") {
				return aa.localeCompare(bb);
			}

			// @ts-expect-error at this point they should be numbers
			return aa - bb;
		});

		return clonedArray;
	}

	return clonedArray.sort((a, b) =>
		predicate
			.map((fieldToSortBy) => {
				const aa = a[fieldToSortBy];
				const bb = b[fieldToSortBy];

				if (typeof aa === "string" && typeof bb === "string") {
					return aa.localeCompare(bb);
				}

				return aa - bb;
			})
			.reduce((p, n) => (p ? p : n), 0),
	);
}
