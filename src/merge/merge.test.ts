import assert from "node:assert/strict";
import { describe, it } from "node:test";
import merge from "#src/merge/merge";

describe("merge", () => {
	const object = {
		a: [{ b: 2 }, { d: 4 }],
	};

	const other = {
		a: [{ c: 3 }, { e: 5 }],
	};

	it("should merge 2 objects together", () => {
		assert.deepStrictEqual(merge(object, other), {
			a: [
				{ b: 2, c: 3 },
				{ d: 4, e: 5 },
			],
		});
	});
});
