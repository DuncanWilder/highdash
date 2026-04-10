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
		assert.deepStrictEqual(some(users, (user: User) => user.name === "barney"), true);
	});

	it("should handle an object predicate", () => {
		assert.deepStrictEqual(some(users, { name: "barney", active: false }), false);
	});

	it("should handle an string predicate", () => {
		assert.deepStrictEqual(some(users, "active"), true);
	});
});
