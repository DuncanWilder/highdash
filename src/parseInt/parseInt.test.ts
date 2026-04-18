import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import parseIntValue from "#src/parseInt/parseInt";

describe("parseInt", () => {
	it("should parse decimal numbers by default and infer hexadecimal prefixes", () => {
		assert.strictEqual(parseIntValue("08"), 8);
		assert.strictEqual(parseIntValue("0x10"), 16);
	});

	it("should respect an explicit radix", () => {
		assert.strictEqual(parseIntValue("10", 2), 2);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(parseIntValue("0x10"), lodash.parseInt("0x10"));
	});
});
