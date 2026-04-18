export default function parseIntValue(text: string, radix = 0): number {
	const normalizedRadix = Math.trunc(radix);

	if (normalizedRadix !== 0) {
		return Number.parseInt(text, normalizedRadix);
	}

	const trimmedText = text.trimStart();
	const inferredRadix = /^[-+]?0x/i.test(trimmedText) ? 16 : 10;

	return Number.parseInt(trimmedText, inferredRadix);
}
