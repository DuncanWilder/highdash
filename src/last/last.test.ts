import assert from "node:assert/strict";
import { describe, it } from "node:test";
import last from "#src/last/last";

describe("last", () => {
	it("should return the last item in an array", () => {
		assert.strictEqual(last([1, 2, 3]), 3);
	});

	it("should return undefined for an empty array", () => {
		assert.strictEqual(last([]), undefined);
	});
});
