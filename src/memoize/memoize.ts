// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function memoize<R, T extends (...args: any[]) => R>(f: T): T {
	const memory = new Map<string, R>();

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const g = (...args: any[]) => {
		if (!memory.get(args.join())) {
			memory.set(args.join(), f(...args));
		}

		return memory.get(args.join());
	};

	return g as T;
}
