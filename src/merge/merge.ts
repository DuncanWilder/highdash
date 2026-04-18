function isPlainObject(
	valueToCheck: unknown,
): valueToCheck is Record<string, unknown> {
	return (
		typeof valueToCheck === "object" &&
		valueToCheck !== null &&
		!Array.isArray(valueToCheck)
	);
}

function mergeValues(targetValue: unknown, sourceValue: unknown): unknown {
	if (Array.isArray(sourceValue)) {
		// Arrays merge by index: each source slot is merged into the matching
		// target slot, starting from a shallow copy of the target array.
		const mergedArray = Array.isArray(targetValue) ? [...targetValue] : [];

		sourceValue.forEach((sourceArrayItem, index) => {
			mergedArray[index] = mergeValues(mergedArray[index], sourceArrayItem);
		});

		return mergedArray;
	}

	if (isPlainObject(sourceValue)) {
		// Plain objects merge by key: each source property is recursively merged
		// into the existing target property when possible.
		const mergedObject = isPlainObject(targetValue) ? targetValue : {};

		for (const [sourceKey, nestedSourceValue] of Object.entries(sourceValue)) {
			mergedObject[sourceKey] = mergeValues(
				mergedObject[sourceKey],
				nestedSourceValue,
			);
		}

		return mergedObject;
	}

	return sourceValue;
}

export default function merge(
	target: Record<string, unknown>,
	source: Record<string, unknown>,
): Record<string, unknown> {
	return mergeValues(target, source) as Record<string, unknown>;
}
