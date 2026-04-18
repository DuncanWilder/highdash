export default function range(
	startOrEnd: number,
	end?: number,
	step?: number,
): number[] {
	const rangeStart = end === undefined ? 0 : startOrEnd;
	const rangeEnd = end === undefined ? startOrEnd : end;
	const rangeStep = step ?? (rangeEnd < rangeStart ? -1 : 1);

	if (rangeStep === 0) {
		const repeatCount = Math.max(Math.ceil(Math.abs(rangeEnd - rangeStart)), 0);
		return Array.from({ length: repeatCount }, () => rangeStart);
	}

	if (rangeStep > 0 && rangeStart >= rangeEnd) {
		return [];
	}

	if (rangeStep < 0 && rangeStart <= rangeEnd) {
		return [];
	}

	const rangedValues: number[] = [];

	for (
		let value = rangeStart;
		rangeStep > 0 ? value < rangeEnd : value > rangeEnd;
		value += rangeStep
	) {
		rangedValues.push(value);
	}

	return rangedValues;
}
