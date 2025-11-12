import { describe, expect, it } from "vitest";
import merge from "./merge";

describe("merge", () => {
	const object = {
		a: [{ b: 2 }, { d: 4 }],
	};

	const other = {
		a: [{ c: 3 }, { e: 5 }],
	};

	it("should merge 2 objects together", () => {
		expect(merge(object, other)).toEqual({
			a: [
				{ b: 2, c: 3 },
				{ d: 4, e: 5 },
			],
		});
	});
});
