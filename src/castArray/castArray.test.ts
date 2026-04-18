import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import castArray from "#src/castArray/castArray";

describe("castArray", () => {
	it("should wrap a single value in an array", () => {
		assert.deepStrictEqual(castArray(1), [1]);
	});

	it("should return an existing array unchanged", () => {
		const array = [1, 2];
		assert.strictEqual(castArray(array), array);
	});

	it("should return an empty array when called without a value", () => {
		assert.deepStrictEqual(castArray(), []);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.deepStrictEqual(castArray(1), lodash.castArray(1));
		assert.deepStrictEqual(castArray(), lodash.castArray());
	});
});
