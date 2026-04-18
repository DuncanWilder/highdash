import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import words from "#src/words/words";

describe("words", () => {
	it("should split ASCII words from punctuation and camelCase text", () => {
		assert.deepStrictEqual(words("fred, barney, & pebbles"), [
			"fred",
			"barney",
			"pebbles",
		]);
		assert.deepStrictEqual(words("fooBar"), ["foo", "Bar"]);
	});

	it("should match the lodash implementation for basic ASCII text", () => {
		assert.deepStrictEqual(words("fooBar"), lodash.words("fooBar"));
	});

	it("should return an empty array when no words are found", () => {
		assert.deepStrictEqual(words("---"), []);
	});
});
