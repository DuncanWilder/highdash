export default function pick<PassedItem extends Record<string, unknown>>(
	target: PassedItem,
	desiredKeys: string | string[],
): Partial<PassedItem> {
	const keysToPick = Array.isArray(desiredKeys) ? desiredKeys : [desiredKeys];

	// biome-ignore lint/suspicious/noExplicitAny: Types are hard, any is fine for now
	const toReturn: any = {};

	const isValidObject =
		typeof target === "object" && !Array.isArray(target) && target !== null;

	if (!isValidObject) {
		return toReturn;
	}

	for (const key of keysToPick) {
		if (key in target) {
			toReturn[key] = target[key];
		}
	}

	return toReturn;
}
