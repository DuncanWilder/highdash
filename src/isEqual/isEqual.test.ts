import assert from "node:assert/strict";
import { describe, it } from "node:test";
import isEqual from "#src/isEqual/isEqual";

describe("isEqual", () => {
	it("should be able to tell if 2 objects are equal", () => {
		const object = { a: 1 };
		const other = { a: 1 };

		assert.deepStrictEqual(isEqual(object, other), true);
		assert.strictEqual(object === other, false);
	});
});
