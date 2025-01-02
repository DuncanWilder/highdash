export default function once<T>(
	functionToCall: (...onceArguments: unknown[]) => T,
): () => T {
	let hasBeenCalled = false;
	let result: T;

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
