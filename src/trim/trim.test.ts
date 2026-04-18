import assert from "node:assert/strict";
import { describe, it } from "node:test";
import trim from "#src/trim/trim";

describe("trim", () => {
	it("should remove whitespace from both ends of a string", () => {
		assert.strictEqual(trim("  abc  "), "abc");
	});
});
