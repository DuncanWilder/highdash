import chunk from './chunk';
import _chunk from 'lodash/chunk';

describe('chunk', () => {
	const chunkable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	it('should chunk arrays', () => {
		const result = chunk(chunkable);

		expect(result).toHaveLength(3);
		expect(result[0]).toHaveLength(10);
		expect(result[1]).toHaveLength(10);
		expect(result[2]).toHaveLength(1);
	});

	it('should allow different chunk numbers', () => {
		const result = chunk(chunkable, 5);

		expect(result).toHaveLength(5);
		expect(result[0]).toHaveLength(5);
		expect(result[1]).toHaveLength(5);
		expect(result[2]).toHaveLength(5);
		expect(result[3]).toHaveLength(5);
		expect(result[4]).toHaveLength(1);
	});

	it('should match the lodash implementation', () => {
		expect(chunk(chunkable, 5)).toEqual(_chunk(chunkable, 5));
	});
});
