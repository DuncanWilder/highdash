import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import deburr from "#src/deburr/deburr";

describe("deburr", () => {
	it("should remove combining accent marks from latin characters", () => {
		assert.strictEqual(deburr("déjà vu"), "deja vu");
		assert.strictEqual(deburr("mañana"), "manana");
	});

	it("should match the lodash implementation for basic latin text", () => {
		assert.strictEqual(deburr("déjà vu"), lodash.deburr("déjà vu"));
	});
});
