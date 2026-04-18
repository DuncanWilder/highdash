import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import intersection from "#src/intersection/intersection";

describe("intersection", () => {
	it("should return shared values from all arrays", () => {
		assert.deepStrictEqual(intersection([2, 1], [2, 3], [2, 4]), [2]);
	});

	it("should keep values unique and in first-array order", () => {
		assert.deepStrictEqual(intersection([2, 1, 2], [2, 3]), [2]);
	});

	it("should return an empty array when any array has no overlap", () => {
		assert.deepStrictEqual(intersection([1, 2], []), []);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.deepStrictEqual(
			intersection([2, 1], [2, 3], [2, 4]),
			lodash.intersection([2, 1], [2, 3], [2, 4]),
		);
	});
});
