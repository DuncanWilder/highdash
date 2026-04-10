import assert from "node:assert/strict";
import { describe, it } from "node:test";
import flattenDeep from "#src/flattenDeep/flattenDeep";

describe("flattenDeep", () => {
	it("should flattenDeep an array by infinite levels", () => {
		assert.deepStrictEqual(flattenDeep([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5]);
	});
});
