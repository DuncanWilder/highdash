export default function differenceBy<PassedArrayType, ValueToCompare>(
	array: PassedArrayType[],
	values: PassedArrayType[],
	iteratee: (value: PassedArrayType) => ValueToCompare,
): PassedArrayType[] {
	const mappedValues = values.map(iteratee);
	return array.filter((item) => !mappedValues.includes(iteratee(item)));
}
