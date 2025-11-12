import { describe, expect, it, vi } from "vitest";
import throttle from "./throttle";

describe("throttle", () => {
	it("should throttle the function call", () => {
		const mock = vi.fn();

		const throttledFunction = throttle(mock, 1000);

		throttledFunction();
		throttledFunction();
		throttledFunction();

		expect(mock).toHaveBeenCalledTimes(1);
	});
});
