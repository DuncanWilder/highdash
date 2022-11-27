import round from './round';

describe('round', () => {
	it('should round to a whole number by default', () => {
		expect(round(4.006)).toEqual(4);
	});

	it('should allow a precision value', () => {
		expect(round(4.006, 2)).toEqual(4.01);
	});

	it.todo('should allow negative rounding');
	// _.round(4060, -2);
	// // => 4100
});
