import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import range from "#src/range/range";

describe("range", () => {
	it("should create a range from zero when only an end is provided", () => {
		assert.deepStrictEqual(range(4), [0, 1, 2, 3]);
		assert.deepStrictEqual(range(-4), [0, -1, -2, -3]);
	});

	it("should create a range from start to end", () => {
		assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4]);
		assert.deepStrictEqual(range(4, 0), [4, 3, 2, 1]);
	});

	it("should respect a custom step", () => {
		assert.deepStrictEqual(range(0, 20, 5), [0, 5, 10, 15]);
		assert.deepStrictEqual(range(0, -4, -1), [0, -1, -2, -3]);
		assert.deepStrictEqual(range(1, 4, 0), [1, 1, 1]);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.deepStrictEqual(range(4), lodash.range(4));
		assert.deepStrictEqual(range(4, 0), lodash.range(4, 0));
		assert.deepStrictEqual(range(1, 4, 0), lodash.range(1, 4, 0));
	});

	it("should return an empty array when the step moves away from the end", () => {
		assert.deepStrictEqual(range(4, 1, 1), []);
		assert.deepStrictEqual(range(1, 4, -1), []);
	});
});
