export default function endsWith(
	stringToSearch: string,
	target: string,
	position = stringToSearch.length,
): boolean {
	const normalizedPosition = Math.min(
		Math.max(Math.trunc(position), 0),
		stringToSearch.length,
	);

	return stringToSearch.endsWith(target, normalizedPosition);
}
