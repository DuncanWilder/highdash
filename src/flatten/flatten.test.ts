import { it, describe, expect } from "vitest";
import flatten from "./flatten";

describe("flatten", () => {
	it("should flatten an array by 1 level", () => {
		expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
	});
});
