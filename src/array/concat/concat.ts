export default function concat(array: any[], ...args: any[]): any[] {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const result: any[] = [...array];

	args.forEach(item => {
		if (Array.isArray(item)) {
			item.forEach(e => result.push(e));
			return;
		}

		result.push(item);
	});

	return result;
}
