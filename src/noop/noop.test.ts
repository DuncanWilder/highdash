import { describe, expect, it } from "vitest";
import noop from "./noop";

describe("noop", () => {
	it("should do nothing", () => {
		expect(noop()).toEqual(undefined);
	});

	it("should accept any argument", () => {
		// More a TS test to make sure it doesn't complain about what gets passed
		expect(noop("string", 123, Number.NaN, Boolean)).toEqual(undefined);
	});
});
