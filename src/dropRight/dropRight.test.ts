import _dropRight from "lodash/dropRight";
import { describe, expect, it } from "vitest";
import dropRight from "./dropRight";

describe("dropRight", () => {
	it("should remove different values from passed arrays", () => {
		expect(dropRight([1, 2, 3])).toEqual([1, 2]);
		expect(dropRight([1, 2, 3], 2)).toEqual([1]);
		expect(dropRight([1, 2, 3], 5)).toEqual([]);
		expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
	});

	it("should match the lodash implementation", () => {
		expect(dropRight([1, 2, 3])).toEqual(_dropRight([1, 2, 3]));
		expect(dropRight([1, 2, 3], 2)).toEqual(_dropRight([1, 2, 3], 2));
		expect(dropRight([1, 2, 3], 5)).toEqual(_dropRight([1, 2, 3], 5));
		expect(dropRight([1, 2, 3], 0)).toEqual(_dropRight([1, 2, 3], 0));
	});
});
