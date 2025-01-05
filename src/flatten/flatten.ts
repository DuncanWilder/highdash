export default function flatten<PassedArrayType>(
	arrayToFlatten: PassedArrayType[],
): PassedArrayType[] {
	return arrayToFlatten.flat() as PassedArrayType[];
}
