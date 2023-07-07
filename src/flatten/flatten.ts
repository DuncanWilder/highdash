export default function flatten<XX>(arrayToFlatten: XX[] | XX[][]): XX[] {
	// @ts-expect-error
	return arrayToFlatten.flat();
}
