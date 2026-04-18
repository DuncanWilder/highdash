import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import toLower from "#src/toLower/toLower";

describe("toLower", () => {
	it("should lower-case the entire string", () => {
		assert.strictEqual(toLower("--Foo-Bar--"), "--foo-bar--");
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(toLower("--Foo-Bar--"), lodash.toLower("--Foo-Bar--"));
	});
});
