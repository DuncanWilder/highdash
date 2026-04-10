import assert from "node:assert/strict";
import { describe, it } from "node:test";
import isEmpty from "#src/isEmpty/isEmpty";

describe("isEmpty", () => {
	for (const [input, expectedResult] of [
		[null, true],
		[true, true],
		[1, true],
		[[1, 2, 3], false],
		[[], true],
		[{ a: 1 }, false],
	] as const) {
		it(`should map ${JSON.stringify(input)} to ${expectedResult}`, () => {
			assert.deepStrictEqual(isEmpty(input), expectedResult);
		});
	}
});
