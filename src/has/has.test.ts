import assert from "node:assert/strict";
import { describe, it } from "node:test";
import has from "#src/has/has";

describe("has", () => {
	const object = { a: { b: 2 } };

	it("should detect if an object has the path", () => {
		assert.deepStrictEqual(has(object, "a"), true);
	});

	it("should handle an array of paths", () => {
		assert.deepStrictEqual(has(object, ["a", "b"]), true);
	});

	it("should handle an array of missing paths", () => {
		assert.deepStrictEqual(has(object, ["d", "c"]), false);
	});

	it("should handle a dot-notation path", () => {
		assert.deepStrictEqual(has(object, "a.b"), true);
	});

	it("should handle a missing dot-notation path", () => {
		assert.deepStrictEqual(has(object, "a.c"), false);
	});
});
