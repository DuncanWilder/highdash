export default function deburr(text: string): string {
	return text.normalize("NFD").replace(/\p{Mark}+/gu, "");
}
