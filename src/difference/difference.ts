export default function difference<PassedArrayType>(
	firstArray: PassedArrayType[],
	secondArray: PassedArrayType[],
): PassedArrayType[] {
	return [
		firstArray,
		secondArray,
	].reduce((a, b) => a.filter((c: PassedArrayType) => !b.includes(c)));
}
