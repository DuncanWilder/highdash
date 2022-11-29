import difference from './difference';
import _difference from 'lodash/difference';

describe('difference', () => {
	it('should remove different values from passed arrays', () => {
		const result = difference([2, 1], [2, 3]);

		expect(result).toHaveLength(1);
		expect(result).toEqual([1]);
	});

	it('should match the lodash implementation', () => {
		expect(difference([2, 1], [2, 3])).toEqual(_difference([2, 1], [2, 3]));
		expect(difference([1, 2, 3, 4, 5], [5, 2, 10])).toEqual(_difference([1, 3, 4]));
	});
});
