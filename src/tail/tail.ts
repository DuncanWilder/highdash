export default function tail<ArrayItem>(
	array: readonly ArrayItem[],
): ArrayItem[] {
	return array.slice(1);
}
