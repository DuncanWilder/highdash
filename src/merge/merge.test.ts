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

	it("should create missing nested objects while merging", () => {
		assert.deepStrictEqual(merge({}, { a: { b: 1 } }), {
			a: { b: 1 },
		});
	});

	it("should replace primitive targets when the source becomes nested", () => {
		assert.deepStrictEqual(merge({ a: 1 }, { a: { b: 2 } }), {
			a: { b: 2 },
		});
	});

	it("should create arrays when an array source is merged into a non-array target", () => {
		assert.deepStrictEqual(merge({ a: {} }, { a: [1, 2] }), {
			a: [1, 2],
		});
	});
});
