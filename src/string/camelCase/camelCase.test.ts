import camelCase from './camelCase';

describe('camelCase', () => {
	it('should upper case the first letter of a sentence', () => {
		expect(camelCase('this string')).toEqual('thisString');
		expect(camelCase('--this-string--')).toEqual('thisString');
		expect(camelCase('__THIS_STRING__')).toEqual('thisString');
	});
});
