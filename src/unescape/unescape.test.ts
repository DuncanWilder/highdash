import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import unescapeHtml from "#src/unescape/unescape";

describe("unescape", () => {
	it("should unescape the supported HTML entities", () => {
		assert.strictEqual(
			unescapeHtml("&lt;section&gt;Tom &amp; Jerry&#39;s&lt;/section&gt;"),
			"<section>Tom & Jerry's</section>",
		);
	});

	it("should match the lodash implementation for supported entities", () => {
		assert.strictEqual(
			unescapeHtml("&lt;&gt;&amp;&quot;&#39;"),
			lodash.unescape("&lt;&gt;&amp;&quot;&#39;"),
		);
	});

	it("should leave unsupported entities unchanged", () => {
		assert.strictEqual(unescapeHtml("&copy;"), "&copy;");
	});
});
