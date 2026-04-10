import assert from "node:assert/strict";
import { describe, it } from "node:test";
import kebabCase from "#src/kebabCase/kebabCase";

describe("kebabCase", () => {
	it("should upper case the first letter of a sentence", () => {
		assert.deepStrictEqual(kebabCase("Foo Bar"), "foo-bar");
		assert.deepStrictEqual(kebabCase("fooBar"), "foo-bar");
		assert.deepStrictEqual(kebabCase("__FOO_BAR__"), "foo-bar");
	});
});
