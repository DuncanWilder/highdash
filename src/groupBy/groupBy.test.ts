import assert from "node:assert/strict";
import { describe, it } from "node:test";
import groupBy from "#src/groupBy/groupBy";

describe("groupBy", () => {
	it("should group items with a callback", () => {
		assert.deepStrictEqual(groupBy([6.1, 4.2, 6.3], Math.floor), {
			4: [4.2],
			6: [6.1, 6.3],
		});
	});

	it("should group items by a property name", () => {
		assert.deepStrictEqual(groupBy(["one", "two", "three"], "length"), {
			3: ["one", "two"],
			5: ["three"],
		});
	});

	it("should stay aligned with Object.groupBy", () => {
		type User = { name: string; age: number };
		const users: User[] = [
			{ name: "fred", age: 48 },
			{ name: "barney", age: 36 },
			{ name: "fred", age: 40 },
			{ name: "barney", age: 34 },
		];

		assert.deepStrictEqual(groupBy(users, "name"), {
			fred: [
				{ name: "fred", age: 48 },
				{ name: "fred", age: 40 },
			],
			barney: [
				{ name: "barney", age: 36 },
				{ name: "barney", age: 34 },
			],
		});
	});
});
