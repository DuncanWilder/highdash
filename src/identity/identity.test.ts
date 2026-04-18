import assert from "node:assert/strict";
import { describe, it } from "node:test";
import identity from "#src/identity/identity";

describe("identity", () => {
	it("should return the value it was given", () => {
		const object = { a: 1 };

		assert.strictEqual(identity(object), object);
		assert.strictEqual(identity("abc"), "abc");
	});
});
