import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import difference from "#src/difference/difference";

describe("difference", () => {
	it("should remove different values from passed arrays", () => {
		const result = difference([2, 1], [2, 3]);

		assert.strictEqual(result.length, 1);
		assert.deepStrictEqual(result, [1]);
	});

	it("should match the lodash implementation", () => {
		assert.deepStrictEqual(
			difference([2, 1], [2, 3]),
			lodash.difference([2, 1], [2, 3]),
		);
		assert.deepStrictEqual(
			difference([1, 2, 3, 4, 5], [5, 2, 10]),
			lodash.difference([1, 3, 4]),
		);
	});
});
