import { it, describe, expect } from "vitest";
import find from "./find";
import _find from "lodash/find";

// Scenarios not covered
// The `_.matchesProperty` iteratee shorthand.
// _.find(users, ['active', false]);
// => object for 'fred'

interface User {
	user: string;
	age: number;
	active: boolean;
}

const users: User[] = [
	{ user: "barney", age: 36, active: true },
	{ user: "fred", age: 40, active: false },
	{ user: "pebbles", age: 1, active: true },
];
const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfStrings = ["a", "b", "c", "d", "e"];
const testString = "wowzer";
const testObject = {
	name: "John",
	age: 25,
	active: true,
};

describe("find", () => {
	describe("function predicate", () => {
		it("should return the first thing it finds", () => {
			expect(find(users, (user: User) => user.age < 40)).toEqual(users[0]);
		});
	});

	describe("object predicate", () => {
		it("should return the first thing it finds", () => {
			expect(find(users, { age: 1, active: true })).toEqual(users[2]);
		});
	});

	describe("string predicate", () => {
		it("should return the first thing it finds", () => {
			expect(find(users, "active")).toEqual(users[0]);
		});
	});

	describe("simple array find", () => {
		it("should return the first thing it finds", () => {
			expect(find([1, 2, 3], (item: number) => item >= 2)).toEqual(2);
		});
	});

	describe("fromIndex", () => {
		it.todo("should return the first thing it finds");
	});

	it.each([
		// expected, collection, predicate
		[users[0], users, (user: User) => user.age < 40], // Function on collection returns object
		[users[2], users, { age: 1, active: true }], // Object on collection returns object
		['John', testObject, (n) => n === 'John'], // Function on object returns value
		[undefined, testObject, 'John'], // String on object returns undefined (case insensitive)
		[undefined, testObject, 'john'], // String on object returns undefined (case insensitive)
		[undefined, testObject, 'active'], // String on object returns undefined (case insensitive)
		[undefined, arrayOfNumbers, 1], // Number on array returns undefined
		[undefined, arrayOfStrings, 'a'], // String on array returns undefined
		[users[0], users, 'age'], // String on collection returns object (with truthy value?)
		[undefined, testString, 'w'], // String on string returns undefined
		['w', testString, (n) => n === 'w'], // Function on string returns value
	])(
		'should return "%s" given the collection and predicate',
		(expected, collection, predicate) => {
			expect(_find(collection, predicate)).toEqual(expected);
			expect(find(collection, predicate)).toEqual(expected);
		},
	);
});
