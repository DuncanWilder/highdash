type SizedValue = string | readonly unknown[] | Record<string, unknown>;

export default function size(valueToMeasure: SizedValue): number {
	if (typeof valueToMeasure === "string" || Array.isArray(valueToMeasure)) {
		return valueToMeasure.length;
	}

	return Object.keys(valueToMeasure).length;
}
