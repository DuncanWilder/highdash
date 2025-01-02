export default function differenceBy<T, U>(
	array: T[],
	values: T[],
	iteratee: (value: T) => U,
): T[] {
	const mappedValues = values.map(iteratee);
	return array.filter((item) => !mappedValues.includes(iteratee(item)));
}
