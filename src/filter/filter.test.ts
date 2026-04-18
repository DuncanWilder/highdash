import assert from "node:assert/strict";
import { describe, it } from "node:test";
import filter from "#src/filter/filter";

describe("filter", () => {
	it("should return the items that match the predicate", () => {
		assert.deepStrictEqual(
			filter([1, 2, 3, 4], (item) => item % 2 === 0),
			[2, 4],
		);
	});

	it("should return an empty array when nothing matches", () => {
		assert.deepStrictEqual(
			filter([1, 2, 3], (item) => item === 9),
			[],
		);
	});
});
