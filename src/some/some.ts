// eslint-disable-next-line @typescript-eslint/ban-types
type CollectionType = Record<string, unknown> | string | number | null | boolean;
type PredicateType = Record<string, unknown> | ((item: any) => boolean) | string;

export default function some(collection: CollectionType[], predicate: PredicateType): boolean {
	if (typeof predicate === 'function') {
		return collection.some(predicate);
	}

	if (typeof predicate === 'string') {
		return collection.some(item => {
			if (typeof item !== 'object') {
				return false;
			}

			return item && Boolean(item[predicate]);
		});
	}

	if (typeof predicate === 'object') {
		return collection.some(collectionItem => {
			let hasBeenFound = true;

			Object.entries(predicate).forEach(([key, value]: [string, unknown]) => {
				// If (hasBasicArrayBeenPassed && collectionItem !== value) {
				// 	hasBeenFound = false;
				// 	return;
				// }

				if (typeof collectionItem === 'object' && collectionItem?.[key] !== value) {
					hasBeenFound = false;
				}
			});

			return hasBeenFound;
		});
	}

	return false;
}
