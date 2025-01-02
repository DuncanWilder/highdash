type CollectionType =
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
| Record<string, any>
| string
| number
| null
| boolean;
type PredicateType =
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
| Record<string, any>
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
| ((item: any) => boolean)
| string;

export default function some(
	collection: CollectionType[],
	predicate: PredicateType,
): boolean {
	if (typeof predicate === "function") {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		return collection.some(predicate as (item: any) => boolean);
	}

	if (typeof predicate === "string") {
		return collection.some((item) => {
			if (typeof item !== "object") {
				return false;
			}

			return item && Boolean(item[predicate]);
		});
	}

	if (typeof predicate === "object") {
		return collection.some((collectionItem) => {
			let hasBeenFound = true;

			for (const [key, value] of Object.entries(predicate)) {
				if (
					typeof collectionItem === "object" &&
					collectionItem?.[key] !== value
				) {
					hasBeenFound = false;
					break;
				}
			}

			return hasBeenFound;
		});
	}

	return false;
}
