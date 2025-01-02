export default function compact<PassedArrayType>(
	array: PassedArrayType[],
): PassedArrayType[] {
	return array.filter((item) => Boolean(item));
}
