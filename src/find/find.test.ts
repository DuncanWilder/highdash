import find from './find';

// Scenarios not covered
// The `_.matchesProperty` iteratee shorthand.
// _.find(users, ['active', false]);
// => object for 'fred'

describe('find', () => {
	const users = [
		{user: 'barney', age: 36, active: true},
		{user: 'fred', age: 40, active: false},
		{user: 'pebbles', age: 1, active: true},
	];

	describe('function predicate', () => {
		it('should return the first thing it finds', () => {
			expect(find(users, (user: any) => user.age < 40)).toEqual(users[0]);
		});
	});

	describe('object predicate', () => {
		it('should return the first thing it finds', () => {
			expect(find(users, {age: 1, active: true})).toEqual(users[2]);
		});
	});

	describe('string predicate', () => {
		it('should return the first thing it finds', () => {
			expect(find(users, 'active')).toEqual(users[0]);
		});
	});

	describe('simple array find', () => {
		it('should return the first thing it finds', () => {
			expect(find([1, 2, 3], item => item >= 2)).toEqual(2);
		});
	});

	describe('fromIndex', () => {
		it.todo('should return the first thing it finds');
	});
});
