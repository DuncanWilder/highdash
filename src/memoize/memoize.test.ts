import _memoize from "lodash/memoize";
import { describe, expect, it, vi } from "vitest";
import memoize from "./memoize";

describe("memoize", () => {
	it("should upper case the first letter of a sentence", () => {
		const mock = vi.fn();
		const factorial = memoize((x: number): number => {
			mock();
			if (x === 0) {
				return 1;
			}

			return x * factorial(x - 1);
		});

		factorial(5);
		expect(mock).toHaveBeenCalledTimes(6);

		factorial(5);
		expect(mock).toHaveBeenCalledTimes(6);
	});

	it("should match the lodash implementation", () => {
		const mock = vi.fn();
		const factorial = _memoize((x: number): number => {
			mock();
			if (x === 0) {
				return 1;
			}

			return x * factorial(x - 1);
		});

		factorial(5);
		expect(mock).toHaveBeenCalledTimes(6);

		factorial(5);
		expect(mock).toHaveBeenCalledTimes(6);
	});
});
