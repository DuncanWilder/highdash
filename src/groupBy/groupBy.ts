type PredicateType = string | (<T>(value: T, index: number, array: T[]) => string) | ((x: number) => number);

export default function groupBy<T>(array: T[], predicate: PredicateType) {
	return array.reduce<Record<string, T[]>>((acc, value, index, array) => {
		if (typeof predicate === 'string') {
			// @ts-expect-error
			(acc[value[predicate]] ||= []).push(value);
			return acc;
		}

		// @ts-expect-error
		(acc[predicate(value, index, array)] ||= []).push(value);
		return acc;
	}, {});
}
