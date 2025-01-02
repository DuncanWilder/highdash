export default function flatten<T>(arrayToFlatten: T[] | T[][]): T[] {
	// @ts-expect-error
	return arrayToFlatten.flat();
}
