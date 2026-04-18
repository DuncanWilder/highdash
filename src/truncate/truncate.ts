type TruncateSeparator = string | RegExp;

export interface TruncateOptions {
	length?: number;
	omission?: string;
	separator?: TruncateSeparator;
}

function findLastSeparatorIndex(
	text: string,
	separator: TruncateSeparator,
): number {
	if (typeof separator === "string") {
		return text.lastIndexOf(separator);
	}

	const flags = separator.flags.includes("g")
		? separator.flags
		: `${separator.flags}g`;
	const globalSeparator = new RegExp(separator.source, flags);
	let lastIndex = -1;

	for (const match of text.matchAll(globalSeparator)) {
		if (match.index !== undefined) {
			lastIndex = match.index;
		}
	}

	return lastIndex;
}

export default function truncate(
	text: string,
	options: TruncateOptions = {},
): string {
	const length = Math.max(Math.trunc(options.length ?? 30), 0);
	const omission = options.omission ?? "...";

	if (text.length <= length) {
		return text;
	}

	if (length <= omission.length) {
		return omission.slice(0, length);
	}

	const textToTruncate = text.slice(0, length - omission.length);
	const separatorIndex =
		options.separator === undefined
			? -1
			: findLastSeparatorIndex(textToTruncate, options.separator);
	const truncatedText =
		separatorIndex > -1
			? textToTruncate.slice(0, separatorIndex)
			: textToTruncate;

	return `${truncatedText}${omission}`;
}
