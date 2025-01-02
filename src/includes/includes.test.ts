import { it, describe, expect } from 'vitest';
import includes from "./includes";

describe("includes", () => {
	it("should find a number in an array of numbers", () => {
		expect(includes([1, 2, 3], 1)).toEqual(true);
	});

	it("should find a string in an array of strings", () => {
		expect(includes(["1", "2", "3"], "1")).toEqual(true);
	});

	it("find an object containing the passed value", () => {
		expect(includes({ a: 1, b: 2 }, 1)).toEqual(true);
	});

	it("should find a substring in a string", () => {
		expect(includes("abcd", "bc")).toEqual(true);
	});

	// It('should allow us to specify a "startIndex"', () => {
	// 	expect(includes([1, 2, 3], 1, 2)).toEqual(false);
	// });
});
