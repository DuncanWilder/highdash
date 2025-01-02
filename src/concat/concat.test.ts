import { it, describe, expect } from 'vitest';
import concat from "./concat";

describe("concat", () => {
	it("should remove falsy values from an array", () => {
		const array = [1];
		const result = concat(array, 2, [3]);

		expect(result).toEqual([1, 2, 3]);
		expect(array).toEqual([1]);
	});
});
