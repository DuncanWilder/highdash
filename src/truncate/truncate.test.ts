import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import truncate from "#src/truncate/truncate";

describe("truncate", () => {
	it("should truncate a string to the default length", () => {
		assert.strictEqual(
			truncate("hi-diddly-ho there, neighborino"),
			"hi-diddly-ho there, neighbo...",
		);
	});

	it("should respect the separator option", () => {
		assert.strictEqual(
			truncate("hi-diddly-ho there, neighborino", { separator: " " }),
			"hi-diddly-ho there,...",
		);
	});

	it("should support regular expression separators", () => {
		assert.strictEqual(
			truncate("hi-diddly-ho there, neighborino", { separator: /,?\s/ }),
			"hi-diddly-ho there...",
		);
		assert.strictEqual(
			truncate("hi-diddly-ho there, neighborino", { separator: /,?\s/g }),
			"hi-diddly-ho there...",
		);
	});

	it("should allow a custom length", () => {
		assert.strictEqual(
			truncate("hi-diddly-ho there, neighborino", { length: 24 }),
			"hi-diddly-ho there, n...",
		);
	});

	it("should return the original string when it is already short enough", () => {
		assert.strictEqual(truncate("short", { length: 10 }), "short");
	});

	it("should truncate the omission when the target length is very short", () => {
		assert.strictEqual(
			truncate("hello world", { length: 2, omission: "..." }),
			"..",
		);
	});

	it("should fall back to a hard cut when no separator match is found", () => {
		assert.strictEqual(
			truncate("hello world", { length: 8, separator: "|" }),
			"hello...",
		);
	});

	it("should match the lodash implementation for basic cases", () => {
		assert.strictEqual(
			truncate("hi-diddly-ho there, neighborino"),
			lodash.truncate("hi-diddly-ho there, neighborino"),
		);
		assert.strictEqual(
			truncate("hi-diddly-ho there, neighborino", { separator: " " }),
			lodash.truncate("hi-diddly-ho there, neighborino", { separator: " " }),
		);
		assert.strictEqual(
			truncate("hi-diddly-ho there, neighborino", { length: 24 }),
			lodash.truncate("hi-diddly-ho there, neighborino", { length: 24 }),
		);
		assert.strictEqual(
			truncate("hi-diddly-ho there, neighborino", { separator: /,?\s/ }),
			lodash.truncate("hi-diddly-ho there, neighborino", { separator: /,?\s/ }),
		);
		assert.strictEqual(
			truncate("hi-diddly-ho there, neighborino", { separator: /,?\s/g }),
			lodash.truncate("hi-diddly-ho there, neighborino", {
				separator: /,?\s/g,
			}),
		);
	});
});
