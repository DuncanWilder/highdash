export default function isEmpty(itemToCheck: unknown): boolean {
	if (Array.isArray(itemToCheck)) {
		return !itemToCheck.length;
	}

	if (
		typeof itemToCheck === "object" &&
		itemToCheck !== null &&
		Object.keys(itemToCheck).length
	) {
		return false;
	}

	return true;
}
