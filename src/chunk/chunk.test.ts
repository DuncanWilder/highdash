import assert from "node:assert/strict";
import { describe, it } from "node:test";
import lodash from "lodash";
import chunk from "#src/chunk/chunk";

describe("chunk", () => {
	const chunkable = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];

	it("should chunk arrays", () => {
		const result = chunk(chunkable);

		assert.strictEqual(result.length, 3);
		assert.strictEqual(result[0].length, 10);
		assert.strictEqual(result[1].length, 10);
		assert.strictEqual(result[2].length, 1);
	});

	it("should allow different chunk numbers", () => {
		const result = chunk(chunkable, 5);

		assert.strictEqual(result.length, 5);
		assert.strictEqual(result[0].length, 5);
		assert.strictEqual(result[1].length, 5);
		assert.strictEqual(result[2].length, 5);
		assert.strictEqual(result[3].length, 5);
		assert.strictEqual(result[4].length, 1);
	});

	it("should return an empty array for chunk sizes smaller than 1", () => {
		assert.deepStrictEqual(chunk(chunkable, 0), []);
		assert.deepStrictEqual(chunk(chunkable, -2), []);
	});

	it("should match the lodash implementation", () => {
		assert.deepStrictEqual(chunk(chunkable, 5), lodash.chunk(chunkable, 5));
	});
});
