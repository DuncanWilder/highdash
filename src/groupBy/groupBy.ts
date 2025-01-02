type PredicateType =
	| string
	| (<T>(value: T, index: number, array: T[]) => string)
	| ((x: number) => number);

export default function groupBy<T>(array: T[], predicate: PredicateType) {
	return array.reduce<Record<string, T[]>>((acc, value, index, array) => {
		if (typeof predicate === "string") {
			// @ts-expect-error
			const key = value[predicate];
			acc[key] = acc[key] || [];
			acc[key].push(value);
			return acc;
		}

		// @ts-expect-error
		const key = predicate(value, index, array);
		acc[key] = acc[key] || [];
		acc[key].push(value);
		return acc;
	}, {});
}
