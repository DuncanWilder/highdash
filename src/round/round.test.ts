import assert from "node:assert/strict";
import { describe, it } from "node:test";
import round from "#src/round/round";

describe("round", () => {
	it("should round to a whole number by default", () => {
		assert.deepStrictEqual(round(4.006), 4);
	});

	it("should allow a precision value", () => {
		assert.deepStrictEqual(round(4.006, 2), 4.01);
	});

	it("should allow negative rounding", () => {
		assert.deepStrictEqual(round(4060, -2), 4100);
	});
});
