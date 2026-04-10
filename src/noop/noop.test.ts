import assert from "node:assert/strict";
import { describe, it } from "node:test";
import noop from "#src/noop/noop";

describe("noop", () => {
	it("should do nothing", () => {
		assert.deepStrictEqual(noop(), undefined);
	});

	it("should accept any argument", () => {
		// More a TS test to make sure it doesn't complain about what gets passed
		assert.deepStrictEqual(noop("string", 123, Number.NaN, Boolean), undefined);
	});
});
