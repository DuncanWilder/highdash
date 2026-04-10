import assert from "node:assert/strict";
import { describe, it } from "node:test";
import differenceBy from "#src/differenceBy/differenceBy";

describe("differenceBy", () => {
	it("returns the difference between two arrays based on the iteratee function", () => {
		const array1 = [{ x: 1 }, { x: 2 }, { x: 3 }];
		const array2 = [{ x: 2 }];
		const iteratee = (item: { x: number }) => item.x;

		assert.deepStrictEqual(differenceBy(array1, array2, iteratee), [
			{ x: 1 },
			{ x: 3 },
		]);
	});

	it("returns an empty array if the second array is empty", () => {
		const array1 = [1, 2, 3];
		const array2: number[] = [];
		const iteratee = (item: number) => item;

		assert.deepStrictEqual(differenceBy(array1, array2, iteratee), [1, 2, 3]);
	});

	it("returns an empty array if the first array is empty", () => {
		const array1: number[] = [];
		const array2 = [1, 2, 3];
		const iteratee = (item: number) => item;

		assert.deepStrictEqual(differenceBy(array1, array2, iteratee), []);
	});

	it("returns an empty array if both arrays are empty", () => {
		const array1: number[] = [];
		const array2: number[] = [];
		const iteratee = (item: number) => item;

		assert.deepStrictEqual(differenceBy(array1, array2, iteratee), []);
	});
});
