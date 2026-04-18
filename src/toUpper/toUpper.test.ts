import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import toUpper from "#src/toUpper/toUpper";

describe("toUpper", () => {
	it("should upper-case the entire string", () => {
		assert.strictEqual(toUpper("--Foo-Bar--"), "--FOO-BAR--");
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(toUpper("--Foo-Bar--"), lodash.toUpper("--Foo-Bar--"));
	});
});
