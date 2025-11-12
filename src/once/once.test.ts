import _once from "lodash/once";
import { describe, expect, it, vi } from "vitest";
import once from "./once";

describe("once", () => {
	it("should remove falsy values from an array", () => {
		const mock = vi.fn(() => true);

		const outerFunction = once(mock);

		outerFunction();
		outerFunction();

		expect(mock).toHaveBeenCalledTimes(1);
	});

	// It('should match the lodash implementation', () => {
	// 	expect(once([0, 1, false, 2, '', 3])).toEqual(_once([0, 1, false, 2, '', 3]));
	// });
});
