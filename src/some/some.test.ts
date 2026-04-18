import assert from "node:assert/strict";
import { describe, it } from "node:test";
import some from "#src/some/some";

interface User {
	name: string;
	active: boolean;
}

describe("some", () => {
	const users: User[] = [
		{ name: "barney", active: true },
		{ name: "fred", active: false },
	];

	// // The `_.matchesProperty` iteratee shorthand.
	// _.some(users, ['active', false]);
	// // => true

	it("should work for an array of primitives", () => {
		assert.deepStrictEqual(some([null, 0, "yes", false], Boolean), true);
	});

	it("should work for a collection of objects", () => {
		assert.deepStrictEqual(
			some(users, (user: User) => user.name === "barney"),
			true,
		);
	});

	it("should handle an object predicate", () => {
		assert.deepStrictEqual(
			some(users, { name: "barney", active: false }),
			false,
		);
	});

	it("should handle an string predicate", () => {
		assert.deepStrictEqual(some(users, "active"), true);
	});

	it("should return false when using an object predicate against primitives", () => {
		assert.deepStrictEqual(some([1, 2, 3], { active: true }), false);
	});

	it("should return true when every object predicate key matches", () => {
		assert.deepStrictEqual(some(users, { name: "barney", active: true }), true);
	});

	it("should return false when using a string predicate against primitives", () => {
		assert.deepStrictEqual(some([1, 2, 3], "active"), false);
	});

	it("should return false for unsupported predicate values", () => {
		assert.deepStrictEqual(some([1, 2, 3], 1 as never), false);
	});
});
