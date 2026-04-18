export default function toPairs<
	ObjectToInspect extends Record<string, unknown>,
>(
	object: ObjectToInspect,
): Array<
	[keyof ObjectToInspect & string, ObjectToInspect[keyof ObjectToInspect]]
> {
	return Object.entries(object) as Array<
		[keyof ObjectToInspect & string, ObjectToInspect[keyof ObjectToInspect]]
	>;
}
