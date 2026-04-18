import assert from "node:assert/strict";
import { describe, it } from "node:test";
import every from "#src/every/every";

describe("every", () => {
	it("should return true when every item matches", () => {
		assert.strictEqual(
			every([2, 4, 6], (item) => item % 2 === 0),
			true,
		);
	});

	it("should return false when any item does not match", () => {
		assert.strictEqual(
			every([2, 3, 6], (item) => item % 2 === 0),
			false,
		);
	});

	it("should return true for an empty array", () => {
		assert.strictEqual(every([], Boolean), true);
	});
});
