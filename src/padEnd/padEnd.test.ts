import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import padEnd from "#src/padEnd/padEnd";

describe("padEnd", () => {
	it("should add padding to the end of the string", () => {
		assert.strictEqual(padEnd("abc", 6), "abc   ");
		assert.strictEqual(padEnd("abc", 6, "_-"), "abc_-_");
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(padEnd("abc", 6, "_-"), lodash.padEnd("abc", 6, "_-"));
	});

	it("should return the original string when no padding is needed", () => {
		assert.strictEqual(padEnd("abcdef", 3), "abcdef");
	});

	it("should treat an empty chars string as no padding", () => {
		assert.strictEqual(padEnd("abc", 5, ""), "abc");
	});
});
