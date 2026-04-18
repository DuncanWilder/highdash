import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import capitalize from "#src/capitalize/capitalize";

describe("capitalize", () => {
	it("should capitalize the first letter and lowercase the rest", () => {
		assert.strictEqual(capitalize("FRED"), "Fred");
		assert.strictEqual(capitalize("fred"), "Fred");
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(capitalize("FRED"), lodash.capitalize("FRED"));
	});
});
