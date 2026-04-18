export default function keys<ObjectToInspect extends Record<string, unknown>>(
	object: ObjectToInspect,
): Array<keyof ObjectToInspect & string> {
	return Object.keys(object) as Array<keyof ObjectToInspect & string>;
}
