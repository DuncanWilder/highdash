import { describe, expect, it } from "vitest";
import flattenDepth from "./flattenDepth";

describe("flattenDepth", () => {
	it("should flattenDepth an array by the specified number of levels", () => {
		const array = [1, [2, [3, [4]], 5]];

		expect(flattenDepth(array)).toEqual([1, 2, [3, [4]], 5]);
		expect(flattenDepth(array, 1)).toEqual([1, 2, [3, [4]], 5]);
		expect(flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);
	});
});
