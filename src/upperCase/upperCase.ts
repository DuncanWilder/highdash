function splitIntoWords(text: string): string[] {
	const normalizedText = text
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");

	return normalizedText.match(/[A-Za-z0-9]+/g) ?? [];
}

export default function upperCase(text: string): string {
	return splitIntoWords(text)
		.map((word) => word.toUpperCase())
		.join(" ");
}
