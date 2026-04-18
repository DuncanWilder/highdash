import assert from "node:assert/strict";
import { describe, it, mock as testMock } from "node:test";
import lodash from "lodash";
import memoize from "#src/memoize/memoize";

describe("memoize", () => {
	it("should upper case the first letter of a sentence", () => {
		const mock = testMock.fn();
		const factorial = memoize((x: number): number => {
			mock();
			if (x === 0) {
				return 1;
			}

			return x * factorial(x - 1);
		});

		factorial(5);
		assert.strictEqual(mock.mock.callCount(), 6);

		factorial(5);
		assert.strictEqual(mock.mock.callCount(), 6);
	});

	it("should match the lodash implementation", () => {
		const mock = testMock.fn();
		const factorial = lodash.memoize((x: number): number => {
			mock();
			if (x === 0) {
				return 1;
			}

			return x * factorial(x - 1);
		});

		factorial(5);
		assert.strictEqual(mock.mock.callCount(), 6);

		factorial(5);
		assert.strictEqual(mock.mock.callCount(), 6);
	});

	it("should cache falsy return values", () => {
		const mock = testMock.fn((_value: string) => "");
		const memoized = memoize(mock);

		assert.strictEqual(memoized("a"), "");
		assert.strictEqual(memoized("a"), "");
		assert.strictEqual(mock.mock.callCount(), 1);
	});
});
