export default function flattenDeep<PassedArrayType>(
	arrayToFlatten: PassedArrayType[],
	depth = 1,
): PassedArrayType[] {
	return arrayToFlatten.flat(depth) as PassedArrayType[];
}
