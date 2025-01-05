export default function flattenDeep<PassedArrayType>(
	arrayToFlatten: PassedArrayType[],
): PassedArrayType[] {
	return arrayToFlatten.flat(Number.POSITIVE_INFINITY) as PassedArrayType[];
}
