import { it, describe, expect } from "vitest";
import pick from "./pick";

describe("pick", () => {
	it("should pick 2 objects together", () => {
		const object = { a: 1, b: "2", c: 3 };

		expect(pick(object, ["a", "c"])).toEqual({ a: 1, c: 3 });
	});
});
