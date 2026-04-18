const HTML_ENTITIES: Record<string, string> = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};

export default function escapeHtml(text: string): string {
	return text.replace(/[&<>"']/g, (character) => HTML_ENTITIES[character]);
}
