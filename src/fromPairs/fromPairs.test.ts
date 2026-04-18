import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import fromPairs from "#src/fromPairs/fromPairs";

describe("fromPairs", () => {
	it("should create an object from key-value pairs", () => {
		assert.deepStrictEqual(
			fromPairs([
				["a", 1],
				["b", 2],
			]),
			{ a: 1, b: 2 },
		);
	});

	it("should stringify number keys", () => {
		assert.deepStrictEqual(fromPairs([[1, "one"]]), { 1: "one" });
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.deepStrictEqual(
			fromPairs([
				["a", 1],
				["b", 2],
			]),
			lodash.fromPairs([
				["a", 1],
				["b", 2],
			]),
		);
	});
});
