
export default function pick(target: Record<string, unknown>, desiredKeys: string | string[]): Record<string, unknown> {
	const keysToPick = Array.isArray(desiredKeys) ? desiredKeys : [desiredKeys];

	const toReturn: Record<string, unknown> = {};

	keysToPick.forEach(key => {
		if (key in target) {
			toReturn[key] = target[key];
		}
	});

	return toReturn;
}
