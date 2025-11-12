import { describe, expect, it } from "vitest";
import isEqual from "./isEqual";

describe("isEqual", () => {
	it("should be able to tell if 2 objects are equal", () => {
		const object = { a: 1 };
		const other = { a: 1 };

		expect(isEqual(object, other)).toEqual(true);
		expect(object === other).toBe(false);
	});
});
