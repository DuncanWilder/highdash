export default function chunk<PassedArrayType>(
	array: PassedArrayType[],
	chunkSize = 10,
): PassedArrayType[][] {
	const chunks = [];

	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize));
	}

	return chunks;
}
