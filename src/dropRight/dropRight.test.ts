import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import dropRight from "#src/dropRight/dropRight";

describe("dropRight", () => {
	it("should remove different values from passed arrays", () => {
		assert.deepStrictEqual(dropRight([1, 2, 3]), [1, 2]);
		assert.deepStrictEqual(dropRight([1, 2, 3], 2), [1]);
		assert.deepStrictEqual(dropRight([1, 2, 3], 5), []);
		assert.deepStrictEqual(dropRight([1, 2, 3], 0), [1, 2, 3]);
		assert.deepStrictEqual(dropRight([1, 2, 3], -1), [1, 2, 3]);
	});

	it("should match the lodash implementation", () => {
		assert.deepStrictEqual(dropRight([1, 2, 3]), lodash.dropRight([1, 2, 3]));
		assert.deepStrictEqual(
			dropRight([1, 2, 3], 2),
			lodash.dropRight([1, 2, 3], 2),
		);
		assert.deepStrictEqual(
			dropRight([1, 2, 3], 5),
			lodash.dropRight([1, 2, 3], 5),
		);
		assert.deepStrictEqual(
			dropRight([1, 2, 3], 0),
			lodash.dropRight([1, 2, 3], 0),
		);
		assert.deepStrictEqual(
			dropRight([1, 2, 3], -1),
			lodash.dropRight([1, 2, 3], -1),
		);
	});

	it("should return a new array when dropping zero items", () => {
		const array = [1, 2, 3];
		const result = dropRight(array, 0);

		assert.deepStrictEqual(result, array);
		assert.notStrictEqual(result, array);
	});
});
