import _drop from "lodash/drop";
import { describe, expect, it } from "vitest";
import drop from "./drop";

describe("drop", () => {
	it("should remove different values from passed arrays", () => {
		expect(drop([1, 2, 3])).toEqual([2, 3]);
		expect(drop([1, 2, 3], 2)).toEqual([3]);
		expect(drop([1, 2, 3], 5)).toEqual([]);
		expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
	});

	it("should match the lodash implementation", () => {
		expect(drop([1, 2, 3])).toEqual(_drop([1, 2, 3]));
		expect(drop([1, 2, 3], 2)).toEqual(_drop([1, 2, 3], 2));
		expect(drop([1, 2, 3], 5)).toEqual(_drop([1, 2, 3], 5));
		expect(drop([1, 2, 3], 0)).toEqual(_drop([1, 2, 3], 0));
	});
});
