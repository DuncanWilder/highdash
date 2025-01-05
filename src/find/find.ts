// biome-ignore lint/suspicious/noExplicitAny: any is correct here
type CollectionType = Record<string, any> | string | number;

/**
 * If you are reaching for this function, you probably just want Array.find
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

// var users = [
//   { 'user': 'barney',  'age': 36, 'active': true },
//   { 'user': 'fred',    'age': 40, 'active': false },
//   { 'user': 'pebbles', 'age': 1,  'active': true }
// ];

// _.find(users, function(o) { return o.age < 40; });
// // => object for 'barney'

// // The `_.matches` iteratee shorthand.
// _.find(users, { 'age': 1, 'active': true });
// // => object for 'pebbles'

// // The `_.matchesProperty` iteratee shorthand.
// _.find(users, ['active', false]);
// // => object for 'fred'

// // The `_.property` iteratee shorthand.
// _.find(users, 'active');
// // => object for 'barney'

export default function find<PassedType>(
	collection: Record<string, any> | PassedType[],
	predicate: ((item: PassedType) => boolean) | PassedType | string | number,
	fromIndex = 0,
): CollectionType | undefined {
	if (typeof predicate === "function") {
		return collection.find(
			predicate as (
				value: CollectionType,
				index: number,
				obj: CollectionType[],
			) => unknown,
		);
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
