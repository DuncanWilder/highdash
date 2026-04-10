import assert from "node:assert/strict";
import { describe, it, mock as testMock } from "node:test";
import once from "#src/once/once";

describe("once", () => {
	it("should remove falsy values from an array", () => {
		const mock = testMock.fn(() => true);

		const outerFunction = once(mock);

		outerFunction();
		outerFunction();

		assert.strictEqual(mock.mock.callCount(), 1);
	});

	// It('should match the lodash implementation', () => {
	// 	assert.deepStrictEqual(once([0, 1, false, 2, '', 3]), lodash.once([0, 1, false, 2, '', 3]));
	// });
});
