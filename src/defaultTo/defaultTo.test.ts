import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import defaultTo from "#src/defaultTo/defaultTo";

describe("defaultTo", () => {
	it("should return the fallback for nullish values and NaN", () => {
		assert.strictEqual(defaultTo(null, 10), 10);
		assert.strictEqual(defaultTo(undefined, 10), 10);
		assert.strictEqual(defaultTo(Number.NaN, 10), 10);
	});

	it("should keep defined values", () => {
		assert.strictEqual(defaultTo(0, 10), 0);
		assert.strictEqual(defaultTo("", "fallback"), "");
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(
			defaultTo(Number.NaN, 10),
			lodash.defaultTo(Number.NaN, 10),
		);
		assert.strictEqual(defaultTo(0, 10), lodash.defaultTo(0, 10));
	});
});
