import assert from "node:assert/strict";
import { describe, it } from "node:test";
import trimEnd from "#src/trimEnd/trimEnd";

describe("trimEnd", () => {
	it("should remove whitespace from the end of a string", () => {
		assert.strictEqual(trimEnd("  abc  "), "  abc");
	});
});
