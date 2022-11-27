import upperFirst from './upperFirst';

describe('upperFirst', () => {
	it('should upper case the first letter of a sentence', () => {
		expect(upperFirst('this string')).toEqual('This string');
	});
});
