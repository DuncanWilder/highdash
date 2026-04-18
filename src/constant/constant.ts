export default function constant<ReturnedValue>(
	valueToReturn: ReturnedValue,
): () => ReturnedValue {
	return () => valueToReturn;
}
