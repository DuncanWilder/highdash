export default function concat<PassedArrayType>(array: PassedArrayType[], ...args: PassedArrayType[]): PassedArrayType[] {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const result: PassedArrayType[] = [...array];

	args.forEach(item => {
		if (Array.isArray(item)) {
			item.forEach(e => result.push(e));
			return;
		}

		result.push(item);
	});

	return result;
}
