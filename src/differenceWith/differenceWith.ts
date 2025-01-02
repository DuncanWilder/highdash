export default function differenceWith<T>(
	array: T[],
	values: T[],
	comparator: (a: T, b: T) => boolean,
): T[] {
	return array.filter(
		(item) => !values.some((value) => comparator(item, value)),
	);
}
