export default function drop<PassedArrayType>(array: PassedArrayType[], numberToDrop = 1): PassedArrayType[] {
	return array.slice(numberToDrop);
}
