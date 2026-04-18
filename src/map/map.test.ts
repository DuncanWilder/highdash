import assert from "node:assert/strict";
import { describe, it } from "node:test";
import map from "#src/map/map";

describe("map", () => {
	it("should map items to new values", () => {
		assert.deepStrictEqual(
			map([1, 2, 3], (item) => item * 2),
			[2, 4, 6],
		);
	});

	it("should provide the index to the mapper", () => {
		assert.deepStrictEqual(
			map(["a", "b"], (item, index) => `${index}:${item}`),
			["0:a", "1:b"],
		);
	});
});
