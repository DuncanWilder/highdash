import camelCase from './camelCase';
import _camelCase from 'lodash/camelCase';

describe('camelCase', () => {
	it('should upper case the first letter of a sentence', () => {
		expect(camelCase('this string')).toEqual('thisString');
		expect(camelCase('--this-string--')).toEqual('thisString');
		expect(camelCase('__THIS_STRING__')).toEqual('thisString');
	});

	it('should match the lodash implementation', () => {
		expect(camelCase('this string')).toEqual(_camelCase('this string'));
		expect(camelCase('--this-string--')).toEqual(_camelCase('--this-string--'));
		expect(camelCase('__THIS_STRING__')).toEqual(_camelCase('__THIS_STRING__'));
	});
});
