function processShortcodes(markdown: string): string {
  return markdown
    .replace(
      /:::callout type="([^"]*)" title="([^"]*)"\n([\s\S]*?)\n:::/g,
      (_, type, title, body) => `<Callout type="${type}" title="${title}">${body}</Callout>`
    )
    .replace(
      /:::quote author="([^"]*)"\n([\s\S]*?)\n:::/g,
      (_, author, body) => `<Quote author="${author}">${body}</Quote>`
    );
}

export function parseMarkdown(markdown: string): string {
  return processShortcodes(markdown);
}
