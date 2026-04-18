import assert from "node:assert/strict";
import { describe, it } from "node:test";
import trimStart from "#src/trimStart/trimStart";

describe("trimStart", () => {
	it("should remove whitespace from the start of a string", () => {
		assert.strictEqual(trimStart("  abc  "), "abc  ");
	});
});
