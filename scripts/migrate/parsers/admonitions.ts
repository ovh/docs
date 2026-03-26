/**
 * Admonitions parser: converts OVH blockquote admonitions to Starlight format.
 *
 * Input:
 *   > [!primary]
 *   >
 *   > Content here
 *   >
 *
 * Output:
 *   :::note
 *   Content here
 *   :::
 *
 * Mapping:
 *   [!primary] -> :::info
 *   [!warning] -> :::warning
 *   [!alert]   -> :::danger
 *   [!info]    -> :::info
 *   [!success] -> :::tip[Success]
 */

const ADMONITION_MAP: Record<string, string> = {
  primary: ':::info',
  warning: ':::warning',
  alert: ':::danger',
  info: ':::info',
  success: ':::tip[Success]',
};

export function convertAdmonitions(content: string): string {
  const lines = content.split('\n');
  const result: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Detect admonition start: optional leading whitespace + > [!type]
    const admonitionMatch = line.match(
      /^(\s*)>\s*\[!(primary|warning|alert|info|success)\]\s*$/,
    );

    if (admonitionMatch) {
      const indent = admonitionMatch[1];
      const type = admonitionMatch[2];
      const starlightType = ADMONITION_MAP[type] || ':::note';

      // Collect the admonition content
      const contentLines: string[] = [];
      i++; // move past the [!type] line

      while (i < lines.length) {
        const currentLine = lines[i];

        // Check if this is still part of the blockquote (with same indent level)
        const blockquoteMatch = currentLine.match(
          new RegExp(`^${indent}>(\\s.*|\\s*)$`),
        );
        if (blockquoteMatch) {
          // Strip the leading indent + > and optional space
          const stripped = currentLine.replace(
            new RegExp(`^${indent}>\\s?`),
            '',
          );

          // Skip checking for nested custom blocks (tabs, faq, api) - those are separate
          if (stripped.match(/^\s*\[!(tabs|faq|api|carousel)\]/)) {
            // This is a different block type nested inside - stop admonition
            break;
          }

          contentLines.push(stripped);
          i++;
        } else {
          // End of blockquote
          break;
        }
      }

      // Trim empty lines at start and end of content
      while (contentLines.length > 0 && contentLines[0].trim() === '') {
        contentLines.shift();
      }
      while (
        contentLines.length > 0 &&
        contentLines[contentLines.length - 1].trim() === ''
      ) {
        contentLines.pop();
      }

      result.push(`${indent}${starlightType}`);
      result.push(...contentLines.map((l) => indent + l));
      result.push(`${indent}:::`);
      result.push('');
    } else {
      result.push(line);
      i++;
    }
  }

  return result.join('\n');
}
