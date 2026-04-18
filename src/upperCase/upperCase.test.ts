import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import upperCase from "#src/upperCase/upperCase";

describe("upperCase", () => {
	it("should upper-case extracted words and join them with spaces", () => {
		assert.strictEqual(upperCase("--Foo-Bar--"), "FOO BAR");
		assert.strictEqual(upperCase("fooBar"), "FOO BAR");
		assert.strictEqual(upperCase("__FOO_BAR__"), "FOO BAR");
	});

	it("should match the lodash implementation for ASCII words", () => {
		assert.strictEqual(upperCase("fooBar"), lodash.upperCase("fooBar"));
	});

	it("should return an empty string when no words are found", () => {
		assert.strictEqual(upperCase("---"), "");
	});
});
