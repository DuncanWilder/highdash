import assert from "node:assert/strict";
import { describe, it } from "node:test";
import pick from "#src/pick/pick";

describe("pick", () => {
	it("should pick 2 objects together", () => {
		const object = { a: 1, b: "2", c: 3 };

		assert.deepStrictEqual(pick(object, ["a", "c"]), { a: 1, c: 3 });
	});

	it("should allow a single key", () => {
		assert.deepStrictEqual(pick({ a: 1, b: 2 }, "a"), { a: 1 });
	});

	it("should return an empty object for invalid targets", () => {
		assert.deepStrictEqual(
			pick(null as unknown as Record<string, unknown>, "a"),
			{},
		);
	});
});
