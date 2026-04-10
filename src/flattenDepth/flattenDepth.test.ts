import assert from "node:assert/strict";
import { describe, it } from "node:test";
import flattenDepth from "#src/flattenDepth/flattenDepth";

describe("flattenDepth", () => {
	it("should flattenDepth an array by the specified number of levels", () => {
		const array = [1, [2, [3, [4]], 5]];

		assert.deepStrictEqual(flattenDepth(array), [1, 2, [3, [4]], 5]);
		assert.deepStrictEqual(flattenDepth(array, 1), [1, 2, [3, [4]], 5]);
		assert.deepStrictEqual(flattenDepth(array, 2), [1, 2, 3, [4], 5]);
	});
});
