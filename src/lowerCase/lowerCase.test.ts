import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import lowerCase from "#src/lowerCase/lowerCase";

describe("lowerCase", () => {
	it("should lower-case extracted words and join them with spaces", () => {
		assert.strictEqual(lowerCase("--Foo-Bar--"), "foo bar");
		assert.strictEqual(lowerCase("fooBar"), "foo bar");
		assert.strictEqual(lowerCase("__FOO_BAR__"), "foo bar");
	});

	it("should match the lodash implementation for ASCII words", () => {
		assert.strictEqual(lowerCase("fooBar"), lodash.lowerCase("fooBar"));
	});

	it("should return an empty string when no words are found", () => {
		assert.strictEqual(lowerCase("---"), "");
	});
});
