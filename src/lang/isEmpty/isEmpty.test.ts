import isEmpty from './isEmpty';

describe('isEmpty', () => {
	it.each([
		[null, true],
		[true, true],
		[1, true],
		[[1, 2, 3], false],
		[[], true],
		[{a: 1}, false],
	])('should %s to %s', (input, expectedResult) => {
		expect(isEmpty(input)).toEqual(expectedResult);
	});
});
