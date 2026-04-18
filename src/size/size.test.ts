import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import size from "#src/size/size";

describe("size", () => {
	it("should return the size of an array", () => {
		assert.strictEqual(size([1, 2, 3]), 3);
	});

	it("should return the size of a string", () => {
		assert.strictEqual(size("pebbles"), 7);
	});

	it("should return the size of an object", () => {
		assert.strictEqual(size({ a: 1, b: 2 }), 2);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(size("pebbles"), lodash.size("pebbles"));
	});
});
