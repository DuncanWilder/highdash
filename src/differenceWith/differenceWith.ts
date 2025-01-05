export default function differenceWith<PassedArrayType>(
	array: PassedArrayType[],
	values: PassedArrayType[],
	comparator: (a: PassedArrayType, b: PassedArrayType) => boolean,
): PassedArrayType[] {
	return array.filter(
		(item) => !values.some((value) => comparator(item, value)),
	);
}
