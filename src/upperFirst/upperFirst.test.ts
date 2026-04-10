import assert from "node:assert/strict";
import { describe, it } from "node:test";
import upperFirst from "#src/upperFirst/upperFirst";

describe("upperFirst", () => {
	it("should upper case the first letter of a sentence", () => {
		assert.deepStrictEqual(upperFirst("this string"), "This string");
	});
});
