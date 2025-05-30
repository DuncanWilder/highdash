export default function snakeCase(string: string): string {
	return string
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[\s-_]+/g, "_")
		.replace(/(^_+|_+$)/g, "")
		.toLowerCase();
}
