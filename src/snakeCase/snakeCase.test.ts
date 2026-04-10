import assert from "node:assert/strict";
import { describe, it } from "node:test";
import snakeCase from "#src/snakeCase/snakeCase";

describe("snakeCase", () => {
	it("should upper case the first letter of a sentence", () => {
		assert.deepStrictEqual(snakeCase("this string"), "this_string");
		assert.deepStrictEqual(snakeCase("--this-string--"), "this_string");
		assert.deepStrictEqual(snakeCase("__THIS_STRING__"), "this_string");
	});
});
