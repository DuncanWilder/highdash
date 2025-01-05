import { it, describe, expect } from "vitest";
import some from "./some";

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
		expect(some([null, 0, "yes", false], Boolean)).toEqual(true);
	});

	it("should work for a collection of objects", () => {
		expect(some(users, (user: User) => user.name === "barney")).toEqual(true);
	});

	it("should handle an object predicate", () => {
		expect(some(users, { name: "barney", active: false })).toEqual(false);
	});

	it("should handle an string predicate", () => {
		expect(some(users, "active")).toEqual(true);
	});
});
