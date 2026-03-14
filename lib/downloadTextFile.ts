export function downloadTextFile(content: string, filename: string) {
  const normalizedContent = content.trim();

  if (!normalizedContent) {
    return;
  }

  const blob = new Blob(["\uFEFF", normalizedContent], {
    type: "text/plain;charset=utf-8"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
