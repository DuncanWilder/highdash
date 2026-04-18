import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import uniq from "#src/uniq/uniq";

describe("uniq", () => {
	it("should remove duplicate values while keeping the first occurrence", () => {
		assert.deepStrictEqual(uniq([2, 1, 2, 3, 1]), [2, 1, 3]);
	});

	it("should return an empty array when passed an empty array", () => {
		assert.deepStrictEqual(uniq([]), []);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.deepStrictEqual(uniq([2, 1, 2, 3, 1]), lodash.uniq([2, 1, 2, 3, 1]));
	});
});
