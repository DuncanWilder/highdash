export default function defaultTo<DefaultValueType>(
	valueToCheck: DefaultValueType | null | undefined,
	defaultValue: DefaultValueType,
): DefaultValueType {
	// biome-ignore lint/suspicious/noSelfCompare: Used for NaN checks
	return valueToCheck == null || valueToCheck !== valueToCheck
		? defaultValue
		: valueToCheck;
}
