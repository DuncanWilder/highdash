import assert from "node:assert/strict";
import { describe, it } from "node:test";
import find from "#src/find/find";

describe("find", () => {
	it("should return the first matching item", () => {
		assert.strictEqual(
			find([1, 2, 3], (item) => item > 1),
			2,
		);
	});

	it("should support a fromIndex", () => {
		assert.strictEqual(
			find([1, 2, 3, 4], (item) => item % 2 === 0, 2),
			4,
		);
		assert.strictEqual(
			find([1, 2, 3, 4], (item) => item % 2 === 0, -1),
			4,
		);
	});

	it("should return undefined when nothing matches", () => {
		assert.strictEqual(
			find([1, 2, 3], (item) => item === 9),
			undefined,
		);
	});
});
