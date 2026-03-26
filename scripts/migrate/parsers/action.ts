/**
 * Action parser: handles {.action} on inline code for MDX files.
 *
 * In .md files, the remark plugin handles this.
 * In .mdx files, curly braces are interpreted as JSX, so we need to
 * replace `text`{.action} with <code className="action">text</code>
 */

export function convertActionsForMdx(content: string): string {
  // Replace `text`{.action} with <code className="action">text</code>
  return content.replace(
    /`([^`]+)`\{\.action\}/g,
    '<code className="action">$1</code>',
  );
}
