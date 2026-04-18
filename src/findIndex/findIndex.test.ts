import assert from "node:assert/strict";
import { describe, it } from "node:test";
import findIndex from "#src/findIndex/findIndex";

describe("findIndex", () => {
	it("should return the index of the first matching item", () => {
		assert.strictEqual(
			findIndex([1, 2, 3], (item) => item > 1),
			1,
		);
	});

	it("should support a fromIndex", () => {
		assert.strictEqual(
			findIndex([1, 2, 3, 4], (item) => item % 2 === 0, 2),
			3,
		);
		assert.strictEqual(
			findIndex([1, 2, 3, 4], (item) => item % 2 === 0, -1),
			3,
		);
	});

	it("should return -1 when nothing matches", () => {
		assert.strictEqual(
			findIndex([1, 2, 3], (item) => item === 9),
			-1,
		);
	});
});
