import assert from "node:assert/strict";
import { describe, it } from "node:test";
import head from "#src/head/head";

describe("head", () => {
	it("should return the first item in an array", () => {
		assert.strictEqual(head([1, 2, 3]), 1);
	});

	it("should return undefined for an empty array", () => {
		assert.strictEqual(head([]), undefined);
	});
});
