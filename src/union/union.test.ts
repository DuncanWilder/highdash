import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import union from "#src/union/union";

describe("union", () => {
	it("should return unique values from all arrays", () => {
		assert.deepStrictEqual(union([2], [1, 2], [2, 3]), [2, 1, 3]);
	});

	it("should handle empty arrays", () => {
		assert.deepStrictEqual(union([], [1, 2]), [1, 2]);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.deepStrictEqual(
			union([2], [1, 2], [2, 3]),
			lodash.union([2], [1, 2], [2, 3]),
		);
	});
});
