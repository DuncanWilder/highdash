import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import nth from "#src/nth/nth";

describe("nth", () => {
	it("should return an item by index", () => {
		assert.strictEqual(nth([1, 2, 3], 1), 2);
	});

	it("should support negative indexes", () => {
		assert.strictEqual(nth([1, 2, 3], -1), 3);
	});

	it("should return undefined for indexes outside the array", () => {
		assert.strictEqual(nth([1, 2, 3], 10), undefined);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(nth([1, 2, 3], -1), lodash.nth([1, 2, 3], -1));
	});
});
