import { it, describe, expect } from 'vitest';
import has from "./has";

describe("has", () => {
	const object = { a: { b: 2 } };

	it("should detect if an object has the path", () => {
		expect(has(object, "a")).toEqual(true);
	});

	it("should handle an array of paths", () => {
		expect(has(object, ["a", "b"])).toEqual(true);
	});

	it("should handle aa array of missing paths", () => {
		expect(has(object, ["d", "c"])).toEqual(false);
	});

	it("should handle a dot-notation path", () => {
		expect(has(object, "a.b")).toEqual(true);
	});

	it("should handle a missing dot-notation path", () => {
		expect(has(object, "a.c")).toEqual(false);
	});
});
