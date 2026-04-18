export default function pick<
	ObjectToPickFrom extends Record<string, unknown>,
	DesiredKey extends keyof ObjectToPickFrom,
>(
	target: ObjectToPickFrom,
	desiredKeys: DesiredKey | DesiredKey[],
): Partial<Pick<ObjectToPickFrom, DesiredKey>> {
	const keysToPick = Array.isArray(desiredKeys) ? desiredKeys : [desiredKeys];
	const selectedValues: Partial<Pick<ObjectToPickFrom, DesiredKey>> = {};

	const isValidObject =
		typeof target === "object" && !Array.isArray(target) && target !== null;

	if (!isValidObject) {
		return selectedValues;
	}

	for (const key of keysToPick) {
		if (key in target) {
			selectedValues[key] = target[key];
		}
	}

	return selectedValues;
}
