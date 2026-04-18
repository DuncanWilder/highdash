export default function memoize<
	FunctionArguments extends unknown[],
	ReturnedValue,
>(
	functionToMemoize: (...functionArguments: FunctionArguments) => ReturnedValue,
): (...functionArguments: FunctionArguments) => ReturnedValue {
	const memoizedValues = new Map<string, ReturnedValue>();

	return (...functionArguments: FunctionArguments) => {
		const cacheKey = JSON.stringify(functionArguments);

		if (memoizedValues.has(cacheKey)) {
			return memoizedValues.get(cacheKey) as ReturnedValue;
		}

		const returnedValue = functionToMemoize(...functionArguments);
		memoizedValues.set(cacheKey, returnedValue);
		return returnedValue;
	};
}
