export default function head<ArrayItem>(
	array: readonly ArrayItem[],
): ArrayItem | undefined {
	return array[0];
}
