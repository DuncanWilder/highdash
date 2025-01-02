// biome-ignore lint/suspicious/noExplicitAny: any is correct here
type CollectionType = Record<string, any> | string | number;

/**
 * If you are reaching for this function, you probably just want Array.find
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */
export default function find(
	collection: CollectionType[],
	predicate:
		| ((item: CollectionType) => boolean)
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		| Record<string, any>
		| string
		| number,
	fromIndex = 0,
): CollectionType | undefined {
	if (typeof predicate === "function") {
		return collection.find(predicate as (value: CollectionType, index: number, obj: CollectionType[]) => unknown);
	}

	const hasBasicArrayBeenPassed =
		typeof collection[0] === "string" || typeof collection[0] === "number";
	if (hasBasicArrayBeenPassed && typeof predicate !== "function") {
		return collection.find((item) => item === predicate);
	}

	if (typeof predicate === "object") {
		return collection.find((collectionItem) => {
			let hasBeenFound = true;

			for (const [key, value] of Object.entries(predicate)) {
				if (hasBasicArrayBeenPassed && collectionItem !== value) {
					hasBeenFound = false;
					break;
				}

				if (
					typeof collectionItem === "object" &&
					collectionItem[key] !== value
				) {
					hasBeenFound = false;
					break;
				}
			}

			return hasBeenFound;
		});
	}

	if (typeof predicate === "string") {
		return collection.find((collectionItem) => {
			if (typeof collectionItem === "object") {
				return Boolean(collectionItem[predicate]);
			}

			return collectionItem === predicate;
		});
	}
}
