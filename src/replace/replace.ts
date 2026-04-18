type SearchPattern = string | RegExp;
type Replacement =
	| string
	| ((substring: string, ...replacementArguments: unknown[]) => string);

export default function replace(
	text: string,
	pattern: SearchPattern,
	replacement: Replacement,
): string {
	if (typeof replacement === "string") {
		return text.replace(pattern, replacement);
	}

	return text.replace(pattern, (...replacementArguments) => {
		const [substring, ...remainingArguments] = replacementArguments;

		return replacement(String(substring), ...(remainingArguments as unknown[]));
	});
}
