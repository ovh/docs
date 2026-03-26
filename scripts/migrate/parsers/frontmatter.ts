/**
 * Frontmatter parser: transforms Pelican YAML frontmatter to Rspress format.
 * - excerpt -> description
 * - updated -> lastUpdated (YYYY-MM-DD)
 * - Preserves title and routes
 */

import matter from 'gray-matter';

interface MetaData {
  id: string;
  full_slug: string;
  translation_banner?: boolean;
  reference_category?: string;
}

export function transformFrontmatter(
  content: string,
  _meta: MetaData | null,
): string {
  const { data, content: body } = matter(content);

  const newData: Record<string, unknown> = {};

  if (data.title) newData.title = data.title;
  if (data.excerpt) newData.description = data.excerpt;
  if (data.updated) {
    // Ensure date format: YYYY-MM-DD
    const d = new Date(data.updated);
    if (!Number.isNaN(d.getTime())) {
      newData.lastUpdated = d.toISOString().split('T')[0];
    }
  }

  // Preserve any other frontmatter fields we might want
  if (data.routes) newData.routes = data.routes;

  const yamlLines: string[] = [];
  for (const [key, value] of Object.entries(newData)) {
    if (typeof value === 'string') {
      // Quote strings that contain special chars
      if (
        value.includes(':') ||
        value.includes('#') ||
        value.includes('"') ||
        value.includes("'")
      ) {
        yamlLines.push(`${key}: "${value.replace(/"/g, '\\"')}"`);
      } else {
        yamlLines.push(`${key}: ${value}`);
      }
    } else if (typeof value === 'boolean') {
      yamlLines.push(`${key}: ${value}`);
    } else {
      yamlLines.push(`${key}: ${JSON.stringify(value)}`);
    }
  }

  return `---\n${yamlLines.join('\n')}\n---\n${body}`;
}
