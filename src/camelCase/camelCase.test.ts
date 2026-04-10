import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import camelCase from "#src/camelCase/camelCase";

describe("camelCase", () => {
	it("should upper case the first letter of a sentence", () => {
		assert.deepStrictEqual(camelCase("this string"), "thisString");
		assert.deepStrictEqual(camelCase("--this-string--"), "thisString");
		assert.deepStrictEqual(camelCase("__THIS_STRING__"), "thisString");
	});

	it("should match the lodash implementation", () => {
		assert.deepStrictEqual(
			camelCase("this string"),
			lodash.camelCase("this string"),
		);
		assert.deepStrictEqual(
			camelCase("--this-string--"),
			lodash.camelCase("--this-string--"),
		);
		assert.deepStrictEqual(
			camelCase("__THIS_STRING__"),
			lodash.camelCase("__THIS_STRING__"),
		);
	});
});
