export default function dropRight<PassedArrayType>(array: PassedArrayType[], numberToDrop = 1): PassedArrayType[] {
	if (numberToDrop === 0) {
		return array;
	}

	return array.slice(0, -numberToDrop);
}
