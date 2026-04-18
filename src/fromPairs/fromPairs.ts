export default function fromPairs<PairValue>(
	pairs: ReadonlyArray<readonly [string | number, PairValue]>,
): Record<string, PairValue> {
	const objectFromPairs: Record<string, PairValue> = {};

	for (const [key, value] of pairs) {
		objectFromPairs[String(key)] = value;
	}

	return objectFromPairs;
}
