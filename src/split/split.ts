type SplitSeparator = string | RegExp | undefined;

export default function split(
	text: string,
	separator?: SplitSeparator,
	limit?: number,
): string[] {
	if (separator === undefined) {
		if (limit === undefined) {
			return [text];
		}

		const normalizedLimit = Math.max(Math.trunc(limit), 0);

		if (normalizedLimit === 0) {
			return [];
		}

		return [text];
	}

	if (limit === undefined) {
		return text.split(separator);
	}

	const normalizedLimit = Math.max(Math.trunc(limit), 0);

	return text.split(separator, normalizedLimit);
}
