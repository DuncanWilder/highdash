import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import toPairs from "#src/toPairs/toPairs";

describe("toPairs", () => {
	it("should create key-value pairs from an object", () => {
		assert.deepStrictEqual(toPairs({ a: 1, b: 2 }), [
			["a", 1],
			["b", 2],
		]);
	});

	it("should return an empty array for an empty object", () => {
		assert.deepStrictEqual(toPairs({}), []);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.deepStrictEqual(
			toPairs({ a: 1, b: 2 }),
			lodash.toPairs({ a: 1, b: 2 }),
		);
	});
});
