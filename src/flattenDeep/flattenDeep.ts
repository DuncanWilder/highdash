export default function flattenDeep<ArrayItem>(
	arrayToFlatten: ArrayItem[],
): unknown[] {
	// Returning unknown[] here on purpose. A precise recursively-flattened type is
	// possible, but it makes this tiny utility much harder to read.
	return arrayToFlatten.flat(Number.POSITIVE_INFINITY);
}
