#!/usr/bin/env node
/**
 * One-time batch fix: converts all /pages/ references to /guides/ paths in MDX files.
 *
 * Transformation:
 *   (/pages/public_cloud/compute/foo_bar)       → (/guides/public-cloud/compute/foo-bar)
 *   (/pages/public_cloud/compute/foo_bar#anchor) → (/guides/public-cloud/compute/foo-bar#anchor)
 *
 * Usage:
 *   npx tsx scripts/fix-pages-links.ts              # Apply changes
 *   npx tsx scripts/fix-pages-links.ts --dry-run     # Preview without writing
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { glob } from 'glob';

const ROOT_DIR = path.resolve(import.meta.dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const DRY_RUN = process.argv.includes('--dry-run');

function transformPagesPath(pagesPath: string): string {
  // Split path and anchor
  const hashIndex = pagesPath.indexOf('#');
  let pathPart: string;
  let anchor: string;
  if (hashIndex !== -1) {
    pathPart = pagesPath.slice(0, hashIndex);
    anchor = pagesPath.slice(hashIndex);
  } else {
    pathPart = pagesPath;
    anchor = '';
  }

  // Convert underscores to hyphens in each path segment
  const newPath = pathPart
    .split('/')
    .map((segment) => segment.replace(/_/g, '-'))
    .join('/');

  return `/guides/${newPath}${anchor}`;
}

async function main() {
  console.log(
    DRY_RUN
      ? '=== Fix /pages/ links (DRY RUN) ==='
      : '=== Fix /pages/ links ===',
  );

  const files = await glob('**/*.mdx', { cwd: DOCS_DIR, absolute: true });
  console.log(`Found ${files.length} MDX files\n`);

  let totalReplacements = 0;
  let filesModified = 0;
  const uniquePaths = new Set<string>();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    let replacements = 0;

    const newContent = content.replace(
      /\(\/pages\/([^)]+)\)/g,
      (_match, pagePath: string) => {
        replacements++;
        uniquePaths.add(pagePath);
        return `(${transformPagesPath(pagePath)})`;
      },
    );

    if (replacements > 0) {
      totalReplacements += replacements;
      filesModified++;

      if (!DRY_RUN) {
        fs.writeFileSync(file, newContent, 'utf-8');
      }
    }
  }

  console.log(`Replacements: ${totalReplacements}`);
  console.log(`Files modified: ${filesModified}`);
  console.log(`Unique paths: ${uniquePaths.size}`);

  if (DRY_RUN) {
    console.log('\n(Dry run — no files were modified)');
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
