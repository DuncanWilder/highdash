export default function flattenDeep(arrayToFlatten: unknown[], depth = 1): unknown[] {
	return arrayToFlatten.flat(depth);
}
