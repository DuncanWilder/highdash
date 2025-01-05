export default function has<ObjectType>(
	object: ObjectType,
	path: string | string[],
): boolean {
	const searchKeys = typeof path === "string" ? path.split(".") : path;

	// Deep-clone an object to avoid mutation by reference
	let copiedObject: ObjectType = JSON.parse(
		JSON.stringify(object),
	) as ObjectType;

	for (const searchKey of searchKeys) {
		// @ts-expect-error We're forcing types here to iterate through this object
		copiedObject = copiedObject ? copiedObject[searchKey] : undefined;
	}

	return copiedObject !== undefined;
}
