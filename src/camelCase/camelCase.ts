export default function camelCase(string: string): string {
	const text = string
		.toLowerCase()
		.replace(/[-_\s.]+(.)?/g, (_, c: string) => (c ? c.toUpperCase() : ""));

	return text.substring(0, 1).toLowerCase() + text.substring(1);
}
