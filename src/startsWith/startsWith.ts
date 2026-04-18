export default function startsWith(
	stringToSearch: string,
	target: string,
	position = 0,
): boolean {
	const normalizedPosition = Math.max(Math.trunc(position), 0);

	return stringToSearch.startsWith(target, normalizedPosition);
}
