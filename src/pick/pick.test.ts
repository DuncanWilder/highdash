import assert from "node:assert/strict";
import { describe, it } from "node:test";
import pick from "#src/pick/pick";

describe("pick", () => {
	it("should pick 2 objects together", () => {
		const object = { a: 1, b: "2", c: 3 };

		assert.deepStrictEqual(pick(object, ["a", "c"]), { a: 1, c: 3 });
	});
});
