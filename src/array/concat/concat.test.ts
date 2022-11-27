import concat from './concat';

describe('concat', () => {
	it('should remove falsy values from an array', () => {
		const array = [1];
		const result = concat(array, 2, [3], [[4]]);

		expect(result).toEqual([1, 2, 3, [4]]);
		expect(array).toEqual([1]);
	});
});
