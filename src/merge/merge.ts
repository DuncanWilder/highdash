
export default function merge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
	for (const [key, val] of Object.entries(source)) {
		if (val !== null && typeof val === 'object') {
			if (target[key] === undefined) {
				Object.setPrototypeOf(target[key], val);
			}

			merge(val as Record<string, unknown>, target[key] as Record<string, unknown>);
		} else {
			target[key] = val;
		}
	}

	return target;
}
