import lodash from "lodash";
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import cloneDeep from "#src/cloneDeep/cloneDeep";

describe("cloneDeep", () => {
	it("should deep clone an object", () => {
		const original = {
			a: 1,
			b: {
				c: {
					d: 2,
				},
			},
		};
		const cloned = cloneDeep(original);

		assert.deepStrictEqual(cloned, original);
		assert.notStrictEqual(cloned, original);
		assert.notStrictEqual(cloned.b, original.b);
		assert.notStrictEqual(cloned.b.c, original.b.c);
	});

	it("should deep clone an array object", () => {
		const original = [{ a: 1 }, { b: 2 }];
		const cloned = cloneDeep(original);

		assert.deepStrictEqual(cloned, original);
		assert.notStrictEqual(cloned, original);
	});

	it("should match the lodash implementation", () => {
		const original = {
			a: 1,
			b: {
				c: {
					d: 2,
				},
			},
		};
		assert.deepStrictEqual(cloneDeep(original), lodash.cloneDeep(original));
	});
});
