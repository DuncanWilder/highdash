import assert from "node:assert/strict";
import { describe, it } from "node:test";
import keys from "#src/keys/keys";

describe("keys", () => {
	it("should return an object's keys", () => {
		assert.deepStrictEqual(keys({ a: 1, b: 2 }), ["a", "b"]);
	});

	it("should return an empty array for an empty object", () => {
		assert.deepStrictEqual(keys({}), []);
	});
});
