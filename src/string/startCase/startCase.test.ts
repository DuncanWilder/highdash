import startCase from './startCase';

describe('startCase', () => {
	it.each([
		['--foo-bar--', 'Foo Bar'],
		['fooBar', 'Foo Bar'],
		['__FOO_BAR__', 'FOO BAR'],
	])('should %s to %s', (input, expectedResult) => {
		expect(startCase(input)).toEqual(expectedResult);
	});
});
