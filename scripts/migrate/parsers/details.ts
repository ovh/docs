/**
 * Converts pymdownx.details syntax to HTML <details>/<summary> elements.
 *
 * Input:
 *   /// details | Title text
 *   content here
 *   ///
 *
 * Output:
 *   <details>
 *   <summary>Title text</summary>
 *
 *   content here
 *
 *   </details>
 */

export function convertDetails(content: string): {
  content: string;
  hasDetails: boolean;
} {
  const lines = content.split('\n');
  const result: string[] = [];
  let hasDetails = false;
  let inDetails = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Opening: /// details | Title
    const openMatch = line.match(/^\/\/\/\s*details\s*\|\s*(.+)$/);
    if (openMatch && !inDetails) {
      hasDetails = true;
      inDetails = true;
      const title = openMatch[1].trim();
      result.push('<details>');
      result.push(`<summary>${title}</summary>`);
      result.push('');
      continue;
    }

    // Closing: ///
    if (inDetails && /^\/\/\/\s*$/.test(line)) {
      inDetails = false;
      result.push('</details>');
      result.push('');
      continue;
    }

    result.push(line);
  }

  return { content: result.join('\n'), hasDetails };
}
