import lodash from "lodash";
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import compact from "#src/compact/compact";

describe("compact", () => {
	it("should remove falsy values from an array", () => {
		const result = compact([0, 1, false, 2, "", 3]);

		assert.strictEqual(result.length, 3);
		assert.deepStrictEqual(result, [1, 2, 3]);
	});

	it("should match the lodash implementation", () => {
		assert.deepStrictEqual(compact([0, 1, false, 2, "", 3]), 
			lodash.compact([0, 1, false, 2, "", 3]),
		);
	});
});
