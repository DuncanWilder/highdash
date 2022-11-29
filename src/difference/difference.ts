export default function difference<T>(
	firstArray: T[],
	secondArray: T[],
): T[] {
	return [
		firstArray,
		secondArray,
	].reduce((a, b) => a.filter((c: T) => !b.includes(c)));
}
