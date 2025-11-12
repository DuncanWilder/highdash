import _cloneDeep from "lodash/cloneDeep";
import { describe, expect, it } from "vitest";
import cloneDeep from "./cloneDeep";

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
		expect(cloneDeep(original)).toEqual(original);
		expect(cloneDeep(original)).not.toBe(original);
		expect(cloneDeep(original).b).not.toBe(original.b);
		expect(cloneDeep(original).b.c).not.toBe(original.b.c);
	});

	it("should deep clone an array object", () => {
		const original = [{ a: 1 }, { b: 2 }];
		expect(cloneDeep(original)).toEqual(original);
		expect(cloneDeep(original)).not.toBe(original);
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
		expect(cloneDeep(original)).toEqual(_cloneDeep(original));
	});
});
