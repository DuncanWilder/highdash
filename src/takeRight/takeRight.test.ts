import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import takeRight from "#src/takeRight/takeRight";

describe("takeRight", () => {
	it("should take one item from the end by default", () => {
		assert.deepStrictEqual(takeRight([1, 2, 3]), [3]);
	});

	it("should take the requested number of items from the end", () => {
		assert.deepStrictEqual(takeRight([1, 2, 3], 2), [2, 3]);
		assert.deepStrictEqual(takeRight([1, 2, 3], 5), [1, 2, 3]);
		assert.deepStrictEqual(takeRight([1, 2, 3], -1), []);
	});

	it("should match the lodash implementation", () => {
		assert.deepStrictEqual(
			takeRight([1, 2, 3], 2),
			lodash.takeRight([1, 2, 3], 2),
		);
		assert.deepStrictEqual(
			takeRight([1, 2, 3], -1),
			lodash.takeRight([1, 2, 3], -1),
		);
	});
});
