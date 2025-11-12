import { describe, expect, it } from "vitest";
import sortBy from "./sortBy";

describe("sortBy", () => {
	type User = { name: string; age: number };
	const users: User[] = [
		{ name: "fred", age: 48 },
		{ name: "barney", age: 36 },
		{ name: "fred", age: 40 },
		{ name: "barney", age: 34 },
	];

	describe("function predicate", () => {
		it("should sort the array", () => {
			expect(sortBy(users, (user: User) => user.name)).toEqual([
				users[1],
				users[3],
				users[0],
				users[2],
			]);
		});

		it("should sort the array (numbers)", () => {
			expect(sortBy(users, (user: User) => user.age)).toEqual([
				users[3],
				users[1],
				users[2],
				users[0],
			]);
		});
	});

	describe("object predicate", () => {
		it("should sort the array", () => {
			expect(sortBy(users, ["name", "age"])).toEqual([
				users[3],
				users[1],
				users[2],
				users[0],
			]);
		});
	});
});
