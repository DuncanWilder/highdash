import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import take from "#src/take/take";

describe("take", () => {
	it("should take one item by default", () => {
		assert.deepStrictEqual(take([1, 2, 3]), [1]);
	});

	it("should take the requested number of items", () => {
		assert.deepStrictEqual(take([1, 2, 3], 2), [1, 2]);
		assert.deepStrictEqual(take([1, 2, 3], 5), [1, 2, 3]);
		assert.deepStrictEqual(take([1, 2, 3], -1), []);
	});

	it("should match the lodash implementation", () => {
		assert.deepStrictEqual(take([1, 2, 3], 2), lodash.take([1, 2, 3], 2));
		assert.deepStrictEqual(take([1, 2, 3], -1), lodash.take([1, 2, 3], -1));
	});
});
