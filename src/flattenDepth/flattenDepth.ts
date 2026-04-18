export default function flattenDeep<ArrayItem>(
	arrayToFlatten: ArrayItem[],
	depth = 1,
): unknown[] {
	// Returning unknown[] here on purpose. A precise recursively-flattened type is
	// possible, but it makes this tiny utility much harder to read.
	return arrayToFlatten.flat(depth);
}
