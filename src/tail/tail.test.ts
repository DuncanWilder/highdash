import assert from "node:assert/strict";
import { describe, it } from "node:test";
import tail from "#src/tail/tail";

describe("tail", () => {
	it("should return all but the first item", () => {
		assert.deepStrictEqual(tail([1, 2, 3]), [2, 3]);
	});

	it("should return an empty array for an empty array", () => {
		assert.deepStrictEqual(tail([]), []);
	});
});
