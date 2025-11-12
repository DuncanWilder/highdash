import _compact from "lodash/compact";
import { describe, expect, it } from "vitest";
import compact from "./compact";

describe("compact", () => {
	it("should remove falsy values from an array", () => {
		const result = compact([0, 1, false, 2, "", 3]);

		expect(result).toHaveLength(3);
		expect(result).toEqual([1, 2, 3]);
	});

	it("should match the lodash implementation", () => {
		expect(compact([0, 1, false, 2, "", 3])).toEqual(
			_compact([0, 1, false, 2, "", 3]),
		);
	});
});
