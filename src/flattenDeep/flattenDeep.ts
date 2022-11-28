export default function flattenDeep(arrayToFlatten: unknown[]): unknown[] {
	return arrayToFlatten.flat(Infinity);
}
