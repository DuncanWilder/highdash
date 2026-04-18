import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import split from "#src/split/split";

describe("split", () => {
	it("should split a string by a separator and respect a limit", () => {
		assert.deepStrictEqual(split("a-b-c", "-"), ["a", "b", "c"]);
		assert.deepStrictEqual(split("a-b-c", "-", 2), ["a", "b"]);
	});

	it("should support splitting into characters", () => {
		assert.deepStrictEqual(split("fred", "", 2), ["f", "r"]);
	});

	it("should support an undefined separator", () => {
		assert.deepStrictEqual(split("fred"), ["fred"]);
		assert.deepStrictEqual(split("fred", undefined, 1), ["fred"]);
		assert.deepStrictEqual(split("fred", undefined, 0), []);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.deepStrictEqual(
			split("a-b-c", "-", 2),
			lodash.split("a-b-c", "-", 2),
		);
	});
});
