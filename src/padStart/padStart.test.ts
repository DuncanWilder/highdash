import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import padStart from "#src/padStart/padStart";

describe("padStart", () => {
	it("should add padding to the start of the string", () => {
		assert.strictEqual(padStart("abc", 6), "   abc");
		assert.strictEqual(padStart("abc", 6, "_-"), "_-_abc");
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(
			padStart("abc", 6, "_-"),
			lodash.padStart("abc", 6, "_-"),
		);
	});

	it("should return the original string when no padding is needed", () => {
		assert.strictEqual(padStart("abcdef", 3), "abcdef");
	});

	it("should treat an empty chars string as no padding", () => {
		assert.strictEqual(padStart("abc", 5, ""), "abc");
	});
});
