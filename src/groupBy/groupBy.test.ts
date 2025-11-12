import { describe, expect, it } from "vitest";
import groupBy from "./groupBy";

describe("groupBy", () => {
	it("should groupBy 2 objects together", () => {
		expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
			4: [4.2],
			6: [6.1, 6.3],
		});

		expect(groupBy(["one", "two", "three"], "length")).toEqual({
			3: ["one", "two"],
			5: ["three"],
		});
	});

	it("should group objects by a string", () => {
		type User = { name: string; age: number };
		const users: User[] = [
			{ name: "fred", age: 48 },
			{ name: "barney", age: 36 },
			{ name: "fred", age: 40 },
			{ name: "barney", age: 34 },
		];
		expect(groupBy(users, "name")).toEqual({
			fred: [
				{ name: "fred", age: 48 },
				{ name: "fred", age: 40 },
			],
			barney: [
				{ name: "barney", age: 36 },
				{ name: "barney", age: 34 },
			],
		});
	});
});
