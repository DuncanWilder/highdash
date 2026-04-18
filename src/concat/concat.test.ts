import assert from "node:assert/strict";
import { describe, it } from "node:test";
import concat from "#src/concat/concat";

describe("concat", () => {
	it("should remove falsy values from an array", () => {
		const array = [1];
		const result = concat(array, 2, [3]);

		assert.deepStrictEqual(result, [1, 2, 3]);
		assert.deepStrictEqual(array, [1]);
	});

	it("should allow the first value to be a single item", () => {
		assert.deepStrictEqual(concat(1, 2, [3]), [1, 2, 3]);
	});
});
