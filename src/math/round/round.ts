export default function round(
	numberToRound: number,
	precision = 0,
): number {
	if (precision) {
		return parseFloat(numberToRound.toFixed(precision));
	}

	return Math.round(numberToRound);
}
