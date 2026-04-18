import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import escapeHtml from "#src/escape/escape";

describe("escape", () => {
	it("should escape the supported HTML characters", () => {
		assert.strictEqual(
			escapeHtml(`<section class="hero">Tom & 'Jerry'</section>`),
			"&lt;section class=&quot;hero&quot;&gt;Tom &amp; &#39;Jerry&#39;&lt;/section&gt;",
		);
	});

	it("should match the lodash implementation for supported entities", () => {
		assert.strictEqual(escapeHtml("<>&\"'"), lodash.escape("<>&\"'"));
	});
});
