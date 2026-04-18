import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import lowerFirst from "#src/lowerFirst/lowerFirst";

describe("lowerFirst", () => {
	it("should lowercase only the first letter", () => {
		assert.strictEqual(lowerFirst("FRED"), "fRED");
		assert.strictEqual(lowerFirst("Fred"), "fred");
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(lowerFirst("FRED"), lodash.lowerFirst("FRED"));
	});
});
