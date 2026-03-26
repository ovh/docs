/**
 * Link validator: checks that all internal links in migrated content resolve.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { glob } from 'glob';

interface LinkError {
  file: string;
  line: number;
  link: string;
  reason: string;
}

export async function validateLinks(docsDir: string): Promise<LinkError[]> {
  const errors: LinkError[] = [];

  // Find all migrated files
  const files = await glob('**/*.{md,mdx}', { cwd: docsDir });

  // Build a set of all known slugs
  const knownSlugs = new Set<string>();
  for (const file of files) {
    // Extract slug from path: locale/universe/product/guide -> universe/product/guide
    const parts = file.replace(/\.(md|mdx)$/, '').split('/');
    if (parts.length > 1) {
      knownSlugs.add(parts.slice(1).join('/'));
      knownSlugs.add(`/${parts.slice(1).join('/')}/`);
    }
    knownSlugs.add(parts.join('/'));
    knownSlugs.add(`/${parts.join('/')}/`);
  }

  for (const file of files) {
    const fullPath = path.join(docsDir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Find markdown links
      const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
      for (const match of line.matchAll(linkRegex)) {
        const link = match[2];

        // Skip external links and anchors
        if (
          link.startsWith('http') ||
          link.startsWith('#') ||
          link.startsWith('mailto:')
        ) {
          continue;
        }

        // Skip image references
        if (link.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)) {
          continue;
        }

        // Check unresolved /links/ references
        if (link.startsWith('/links/')) {
          errors.push({
            file,
            line: i + 1,
            link,
            reason: 'Unresolved /links/ reference',
          });
          continue;
        }

        // Check unresolved /pages/ references
        if (link.startsWith('/pages/')) {
          errors.push({
            file,
            line: i + 1,
            link,
            reason: 'Unresolved /pages/ reference',
          });
          continue;
        }

        // Check internal links resolve
        if (link.startsWith('/') && !link.startsWith('/images/')) {
          const normalizedLink = link.replace(/\/$/, '');
          if (
            !knownSlugs.has(link) &&
            !knownSlugs.has(normalizedLink) &&
            !knownSlugs.has(`${normalizedLink}/`)
          ) {
            errors.push({
              file,
              line: i + 1,
              link,
              reason: 'Internal link target not found',
            });
          }
        }
      }
    }
  }

  return errors;
}
