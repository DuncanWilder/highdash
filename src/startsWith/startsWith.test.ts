import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import startsWith from "#src/startsWith/startsWith";

describe("startsWith", () => {
	it("should check whether a string starts with a target", () => {
		assert.strictEqual(startsWith("abc", "a"), true);
		assert.strictEqual(startsWith("abc", "b", 1), true);
		assert.strictEqual(startsWith("abc", "b"), false);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(
			startsWith("abc", "b", 1),
			lodash.startsWith("abc", "b", 1),
		);
	});
});
