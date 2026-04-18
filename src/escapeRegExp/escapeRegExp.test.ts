import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import escapeRegExp from "#src/escapeRegExp/escapeRegExp";

describe("escapeRegExp", () => {
	it("should escape regular expression syntax characters", () => {
		assert.strictEqual(
			escapeRegExp("[lodash](https://lodash.com/)"),
			"\\[lodash\\]\\(https://lodash\\.com/\\)",
		);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(
			escapeRegExp("[lodash](https://lodash.com/)"),
			lodash.escapeRegExp("[lodash](https://lodash.com/)"),
		);
	});
});
