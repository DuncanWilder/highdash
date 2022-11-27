type CollectionType = Record<string, any> | string | number;

/**
 * If you are reaching for this function, you probably just want Array.find
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */
export default function find(
	collection: CollectionType[],
	predicate: ((item: any) => boolean) | Record<string, unknown> | string | number,
	fromIndex = 0,
): CollectionType | undefined {
	if (typeof predicate === 'function') {
		return collection.find(predicate);
	}

	const hasBasicArrayBeenPassed = typeof collection[0] === 'string' || typeof collection[0] === 'number';
	if (hasBasicArrayBeenPassed && typeof predicate !== 'function') {
		return collection.find(item => item === predicate);
	}

	if (typeof predicate === 'object') {
		return collection.find(collectionItem => {
			let hasBeenFound = true;

			Object.entries(predicate).forEach(([key, value]: [string, unknown]) => {
				if (hasBasicArrayBeenPassed && collectionItem !== value) {
					hasBeenFound = false;
					return;
				}

				if (typeof collectionItem === 'object' && collectionItem[key] !== value) {
					hasBeenFound = false;
				}
			});

			return hasBeenFound;
		});
	}

	if (typeof predicate === 'string') {
		return collection.find(collectionItem => {
			if (typeof collectionItem === 'object') {
				return Boolean(collectionItem[predicate]);
			}

			return collectionItem === predicate;
		});
	}
}
