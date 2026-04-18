import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import replace from "#src/replace/replace";

describe("replace", () => {
	it("should replace string and regular expression matches", () => {
		assert.strictEqual(replace("Hi Fred", "Fred", "Barney"), "Hi Barney");
		assert.strictEqual(replace("abc", /b/, "-"), "a-c");
	});

	it("should support function replacements", () => {
		assert.strictEqual(
			replace("abc", /b/, (substring) => substring.toUpperCase()),
			"aBc",
		);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(
			replace("Hi Fred", "Fred", "Barney"),
			lodash.replace("Hi Fred", "Fred", "Barney"),
		);
	});
});
