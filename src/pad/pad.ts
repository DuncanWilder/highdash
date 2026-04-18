function createPadding(length: number, chars: string): string {
	if (length <= 0 || chars === "") {
		return "";
	}

	return chars.repeat(Math.ceil(length / chars.length)).slice(0, length);
}

export default function pad(text: string, length = 0, chars = " "): string {
	const normalizedLength = Math.max(Math.trunc(length), 0);
	const totalPaddingLength = normalizedLength - text.length;

	if (totalPaddingLength <= 0) {
		return text;
	}

	const startPaddingLength = Math.floor(totalPaddingLength / 2);
	const endPaddingLength = totalPaddingLength - startPaddingLength;

	return `${createPadding(startPaddingLength, chars)}${text}${createPadding(endPaddingLength, chars)}`;
}
