import assert from "node:assert/strict";
import { describe, it } from "node:test";
import flatten from "#src/flatten/flatten";

describe("flatten", () => {
	it("should flatten an array by 1 level", () => {
		assert.deepStrictEqual(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5]);
	});
});
