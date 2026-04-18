import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import drop from "#src/drop/drop";

describe("drop", () => {
	it("should remove different values from passed arrays", () => {
		assert.deepStrictEqual(drop([1, 2, 3]), [2, 3]);
		assert.deepStrictEqual(drop([1, 2, 3], 2), [3]);
		assert.deepStrictEqual(drop([1, 2, 3], 5), []);
		assert.deepStrictEqual(drop([1, 2, 3], 0), [1, 2, 3]);
		assert.deepStrictEqual(drop([1, 2, 3], -1), [1, 2, 3]);
	});

	it("should match the lodash implementation", () => {
		assert.deepStrictEqual(drop([1, 2, 3]), lodash.drop([1, 2, 3]));
		assert.deepStrictEqual(drop([1, 2, 3], 2), lodash.drop([1, 2, 3], 2));
		assert.deepStrictEqual(drop([1, 2, 3], 5), lodash.drop([1, 2, 3], 5));
		assert.deepStrictEqual(drop([1, 2, 3], 0), lodash.drop([1, 2, 3], 0));
		assert.deepStrictEqual(drop([1, 2, 3], -1), lodash.drop([1, 2, 3], -1));
	});
});
