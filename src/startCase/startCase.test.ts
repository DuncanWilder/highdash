import assert from "node:assert/strict";
import { describe, it } from "node:test";
import startCase from "#src/startCase/startCase";

describe("startCase", () => {
	for (const [input, expectedResult] of [
		["--foo-bar--", "Foo Bar"],
		["fooBar", "Foo Bar"],
		["__FOO_BAR__", "FOO BAR"],
	] as const) {
		it(`should map ${input} to ${expectedResult}`, () => {
			assert.deepStrictEqual(startCase(input), expectedResult);
		});
	}
});
