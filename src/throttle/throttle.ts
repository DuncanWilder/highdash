export default function throttle(func: (...args: unknown[]) => unknown, timeFrame = 0) {
	let lastTime = 0;
	return function (...args: unknown[]) {
		const now = new Date();
		if ((Number(now) - lastTime) >= timeFrame) {
			func(...args);
			lastTime = Number(now);
		}
	};
}
