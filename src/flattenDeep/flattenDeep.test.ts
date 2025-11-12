import { describe, expect, it } from "vitest";
import flattenDeep from "./flattenDeep";

describe("flattenDeep", () => {
	it("should flattenDeep an array by infinite levels", () => {
		expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
	});
});
