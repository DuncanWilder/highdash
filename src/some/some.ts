type MatchableObject = Record<string, unknown>;
type PredicateType<CollectionItem> =
	| MatchableObject
	| ((item: CollectionItem) => boolean)
	| string;

function isMatchableObject(
	valueToCheck: unknown,
): valueToCheck is MatchableObject {
	return typeof valueToCheck === "object" && valueToCheck !== null;
}

export default function some<CollectionItem>(
	collection: CollectionItem[],
	predicate: PredicateType<CollectionItem>,
): boolean {
	if (typeof predicate === "function") {
		return collection.some(predicate);
	}

	if (typeof predicate === "string") {
		return collection.some((collectionItem) => {
			if (!isMatchableObject(collectionItem)) {
				return false;
			}

			return Boolean(collectionItem[predicate]);
		});
	}

	if (isMatchableObject(predicate)) {
		return collection.some((collectionItem) => {
			if (!isMatchableObject(collectionItem)) {
				return false;
			}

			for (const [key, value] of Object.entries(predicate)) {
				if (collectionItem[key] !== value) {
					return false;
				}
			}

			return true;
		});
	}

	return false;
}
