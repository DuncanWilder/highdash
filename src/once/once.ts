export default function once<
	FunctionArguments extends unknown[],
	ReturnedValue,
>(
	functionToCall: (...functionArguments: FunctionArguments) => ReturnedValue,
): (...functionArguments: FunctionArguments) => ReturnedValue {
	let hasBeenCalled = false;
	let returnedValue!: ReturnedValue;

	return function callOnce(
		this: unknown,
		...functionArguments: FunctionArguments
	) {
		if (hasBeenCalled) {
			return returnedValue;
		}

		returnedValue = functionToCall.apply(this, functionArguments);
		hasBeenCalled = true;
		return returnedValue;
	};
}
