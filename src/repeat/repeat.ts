export default function repeat(text: string, count = 1): string {
	const normalizedCount = Math.max(Math.trunc(count), 0);
	return text.repeat(normalizedCount);
}
