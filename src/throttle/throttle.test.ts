import assert from "node:assert/strict";
import { describe, it, mock as testMock } from "node:test";
import throttle from "#src/throttle/throttle";

describe("throttle", () => {
	it("should throttle the function call", () => {
		const mock = testMock.fn();

		const throttledFunction = throttle(mock, 1000);

		throttledFunction();
		throttledFunction();
		throttledFunction();

		assert.strictEqual(mock.mock.callCount(), 1);
	});
});
