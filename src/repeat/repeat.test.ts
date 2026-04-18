import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import repeat from "#src/repeat/repeat";

describe("repeat", () => {
	it("should repeat a string the requested number of times", () => {
		assert.strictEqual(repeat("*", 3), "***");
		assert.strictEqual(repeat("abc", 2), "abcabc");
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(repeat("abc", 2), lodash.repeat("abc", 2));
	});
});
