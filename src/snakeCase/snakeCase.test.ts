import { it, describe, expect } from 'vitest';
import snakeCase from "./snakeCase";

describe("snakeCase", () => {
	it("should upper case the first letter of a sentence", () => {
		expect(snakeCase("this string")).toEqual("this_string");
		expect(snakeCase("--this-string--")).toEqual("this_string");
		expect(snakeCase("__THIS_STRING__")).toEqual("this_string");
	});
});
