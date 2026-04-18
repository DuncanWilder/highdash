function createPadding(length: number, chars: string): string {
	if (length <= 0 || chars === "") {
		return "";
	}

	return chars.repeat(Math.ceil(length / chars.length)).slice(0, length);
}

export default function padEnd(text: string, length = 0, chars = " "): string {
	const normalizedLength = Math.max(Math.trunc(length), 0);
	const paddingLength = normalizedLength - text.length;

	if (paddingLength <= 0) {
		return text;
	}

	return `${text}${createPadding(paddingLength, chars)}`;
}
