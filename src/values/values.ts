export default function values<ObjectToInspect extends Record<string, unknown>>(
	object: ObjectToInspect,
): Array<ObjectToInspect[keyof ObjectToInspect]> {
	return Object.values(object) as Array<ObjectToInspect[keyof ObjectToInspect]>;
}
