export default function castArray<ArrayItem>(
	valueToCast?: ArrayItem | ArrayItem[],
): ArrayItem[] {
	if (valueToCast === undefined) {
		return [];
	}

	return Array.isArray(valueToCast) ? valueToCast : [valueToCast];
}
