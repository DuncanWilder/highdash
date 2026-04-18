import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import indexOf from "#src/indexOf/indexOf";

describe("indexOf", () => {
	it("should return the matching index", () => {
		assert.strictEqual(indexOf([1, 2, 3], 2), 1);
	});

	it("should support a fromIndex", () => {
		assert.strictEqual(indexOf([1, 2, 1, 2], 2, 2), 3);
		assert.strictEqual(indexOf([1, 2, 1, 2], 2, -1), 3);
	});

	it("should return -1 when no match exists", () => {
		assert.strictEqual(indexOf([1, 2, 3], 9), -1);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(
			indexOf([1, 2, 1, 2], 2, -1),
			lodash.indexOf([1, 2, 1, 2], 2, -1),
		);
	});
});
