type FalsyValue = false | 0 | "" | null | undefined;

export default function compact<ArrayItem>(
	array: ArrayItem[],
): Array<Exclude<ArrayItem, FalsyValue>> {
	return array.filter((item): item is Exclude<ArrayItem, FalsyValue> =>
		Boolean(item),
	);
}
