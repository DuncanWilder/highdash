import assert from "node:assert/strict";
import { describe, it } from "node:test";
import includes from "#src/includes/includes";

describe("includes", () => {
	it("should find a number in an array of numbers", () => {
		assert.deepStrictEqual(includes([1, 2, 3], 1), true);
	});

	it("should find a string in an array of strings", () => {
		assert.deepStrictEqual(includes(["1", "2", "3"], "1"), true);
	});

	it("find an object containing the passed value", () => {
		assert.deepStrictEqual(includes({ a: 1, b: 2 }, 1), true);
	});

	it("should find a substring in a string", () => {
		assert.deepStrictEqual(includes("abcd", "bc"), true);
	});

	// It('should allow us to specify a "fromIndex"', () => {
	// 	assert.deepStrictEqual(includes([1, 2, 3], 1, 2), false);
	// });
});
