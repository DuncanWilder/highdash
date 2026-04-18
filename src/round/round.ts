export default function round(numberToRound: number, precision = 0): number {
	if (precision > 0) {
		return Number(numberToRound.toFixed(precision));
	}

	if (precision < 0) {
		const precisionFactor = 10 ** Math.abs(precision);
		return Math.round(numberToRound / precisionFactor) * precisionFactor;
	}

	return Math.round(numberToRound);
}
