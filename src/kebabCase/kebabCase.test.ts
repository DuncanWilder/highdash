import { it, describe, expect } from 'vitest';
import kebabCase from "./kebabCase";

describe("kebabCase", () => {
	it("should upper case the first letter of a sentence", () => {
		expect(kebabCase("Foo Bar")).toEqual("foo-bar");
		expect(kebabCase("fooBar")).toEqual("foo-bar");
		expect(kebabCase("__FOO_BAR__")).toEqual("foo-bar");
	});
});
