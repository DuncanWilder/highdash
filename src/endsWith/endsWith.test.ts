import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import endsWith from "#src/endsWith/endsWith";

describe("endsWith", () => {
	it("should check whether a string ends with a target", () => {
		assert.strictEqual(endsWith("abc", "c"), true);
		assert.strictEqual(endsWith("abc", "b", 2), true);
		assert.strictEqual(endsWith("abc", "b"), false);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(endsWith("abc", "b", 2), lodash.endsWith("abc", "b", 2));
	});
});
