export default function flattenDeep<TT>(arrayToFlatten: TT[] | TT[][]): TT[] {
	// @ts-expect-error
	return arrayToFlatten.flat(Infinity);
}
