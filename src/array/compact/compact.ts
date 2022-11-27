export default function compact(array: any[]): any[] {
	return array.filter(item => Boolean(item));
}
