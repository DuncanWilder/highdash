export default function has<ObjectToSearch>(
	object: ObjectToSearch,
	path: string | string[],
): boolean {
	const searchKeys = typeof path === "string" ? path.split(".") : path;
	let currentValue: unknown = object;

	for (const searchKey of searchKeys) {
		if (typeof currentValue !== "object" || currentValue === null) {
			return false;
		}

		if (!Object.hasOwn(currentValue, searchKey)) {
			return false;
		}

		currentValue = (currentValue as Record<string, unknown>)[searchKey];
	}

	return true;
}
