export default function dropRight<T>(array: T[], numberToDrop = 1): T[] {
	if (numberToDrop === 0) {
		return array;
	}

	return array.slice(0, -numberToDrop);
}
