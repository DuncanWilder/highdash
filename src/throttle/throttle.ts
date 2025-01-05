type FunctionToThrottle = (...args: unknown[]) => unknown;

export default function throttle(func: FunctionToThrottle, timeFrame = 0) {
	let lastTime = 0;
	return (...args: Parameters<FunctionToThrottle>) => {
		const now = new Date();
		if (Number(now) - lastTime >= timeFrame) {
			func(...args);
			lastTime = Number(now);
		}
	};
}
