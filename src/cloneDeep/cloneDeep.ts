export default function cloneDeep<ReturnType>(
	objectToClone: ReturnType,
): ReturnType {
	return JSON.parse(JSON.stringify(objectToClone)) as ReturnType;
}
