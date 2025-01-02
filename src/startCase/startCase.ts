export default function startCase(string: string): string {
	const text = string
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/[-_\s]+(.)/g, (...matches) => {
			const character = matches[1] as string;
			return ` ${character.toUpperCase()}`;
		})
		.replace(/(^[-_]+|[-_]+$)/g, "")
		.trim();

	return text.substring(0, 1).toUpperCase() + text.substring(1);
}
