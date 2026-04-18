import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import pad from "#src/pad/pad";

describe("pad", () => {
	it("should add padding equally on both sides when possible", () => {
		assert.strictEqual(pad("abc", 8), "  abc   ");
		assert.strictEqual(pad("abc", 8, "_-"), "_-abc_-_");
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(pad("abc", 8, "_-"), lodash.pad("abc", 8, "_-"));
	});

	it("should return the original string when no padding is needed", () => {
		assert.strictEqual(pad("abcdef", 3), "abcdef");
	});

	it("should treat an empty chars string as no padding", () => {
		assert.strictEqual(pad("abc", 5, ""), "abc");
		assert.strictEqual(pad("abc", 4), "abc ");
	});
});
