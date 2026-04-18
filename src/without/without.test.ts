import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import without from "#src/without/without";

describe("without", () => {
	it("should remove the requested values from the array", () => {
		assert.deepStrictEqual(without([2, 1, 2, 3], 1, 2), [3]);
	});

	it("should return the original values when nothing is removed", () => {
		assert.deepStrictEqual(without([1, 2, 3], 9), [1, 2, 3]);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.deepStrictEqual(
			without([2, 1, 2, 3], 1, 2),
			lodash.without([2, 1, 2, 3], 1, 2),
		);
	});
});
