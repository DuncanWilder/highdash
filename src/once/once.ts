export default function once<ReturnType>(
	functionToCall: (...onceArguments: unknown[]) => ReturnType,
): () => ReturnType {
	let hasBeenCalled = false;
	let result: ReturnType;

	return function <P>(...functionToCallArguments: P[]) {
		if (hasBeenCalled) {
			return result;
		}

		// @ts-expect-error somerhing
		result = functionToCall.apply(this, functionToCallArguments);
		hasBeenCalled = true;
		return result;
	};
}
