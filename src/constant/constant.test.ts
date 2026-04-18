import assert from "node:assert/strict";
import { describe, it } from "node:test";
import constant from "#src/constant/constant";

describe("constant", () => {
	it("should create a function that always returns the same value", () => {
		const object = { a: 1 };
		const getConstant = constant(object);

		assert.strictEqual(getConstant(), object);
		assert.strictEqual(getConstant(), object);
	});
});
