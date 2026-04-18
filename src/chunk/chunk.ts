export default function chunk<ArrayItem>(
	array: ArrayItem[],
	chunkSize = 10,
): ArrayItem[][] {
	const normalizedChunkSize = Math.floor(chunkSize);

	if (normalizedChunkSize < 1) {
		return [];
	}

	const chunks: ArrayItem[][] = [];

	for (let i = 0; i < array.length; i += normalizedChunkSize) {
		chunks.push(array.slice(i, i + normalizedChunkSize));
	}

	return chunks;
}
