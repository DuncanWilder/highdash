import assert from "node:assert/strict";
import { describe, it } from "node:test";
import values from "#src/values/values";

describe("values", () => {
	it("should return an object's values", () => {
		assert.deepStrictEqual(values({ a: 1, b: 2 }), [1, 2]);
	});

	it("should return an empty array for an empty object", () => {
		assert.deepStrictEqual(values({}), []);
	});
});
