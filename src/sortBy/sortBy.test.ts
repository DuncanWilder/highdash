import assert from "node:assert/strict";
import { describe, it } from "node:test";
import sortBy from "#src/sortBy/sortBy";

describe("sortBy", () => {
	type User = { name: string; age: number };
	const users: User[] = [
		{ name: "fred", age: 48 },
		{ name: "barney", age: 36 },
		{ name: "fred", age: 40 },
		{ name: "barney", age: 34 },
	];

	describe("function predicate", () => {
		it("should sort the array", () => {
			assert.deepStrictEqual(
				sortBy(users, (user: User) => user.name),
				[users[1], users[3], users[0], users[2]],
			);
		});

		it("should sort the array (numbers)", () => {
			assert.deepStrictEqual(
				sortBy(users, (user: User) => user.age),
				[users[3], users[1], users[2], users[0]],
			);
		});
	});

	describe("object predicate", () => {
		it("should sort the array", () => {
			assert.deepStrictEqual(sortBy(users, ["name", "age"]), [
				users[3],
				users[1],
				users[2],
				users[0],
			]);
		});

		it("should support sorting by a single property name", () => {
			assert.deepStrictEqual(sortBy(users, "age"), [
				users[3],
				users[1],
				users[2],
				users[0],
			]);
		});
	});

	it("should not mutate the original array", () => {
		const usersCopy = [...users];

		sortBy(users, "age");

		assert.deepStrictEqual(users, usersCopy);
	});

	it("should keep items in place when all sort keys are equal", () => {
		const tiedUsers: User[] = [
			{ name: "barney", age: 36 },
			{ name: "barney", age: 36 },
		];

		assert.deepStrictEqual(sortBy(tiedUsers, ["name", "age"]), tiedUsers);
	});
});
