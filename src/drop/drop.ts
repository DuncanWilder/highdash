export default function drop<T>(array: T[], numberToDrop = 1): T[] {
	return array.slice(numberToDrop);
}
