#!/usr/bin/env npx tsx
/**
 * Find MDX pages not referenced in sidebar
 *
 * Identifies "orphan" pages that exist in the filesystem but are not
 * linked from the sidebar navigation.
 *
 * Usage:
 *   pnpm sidebar:orphans
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

/**
 * Recursively extract all internal links from sidebar config
 */
function extractLinks(
  obj: unknown,
  results: Set<string> = new Set(),
): Set<string> {
  if (typeof obj === 'object' && obj !== null) {
    for (const [key, value] of Object.entries(obj)) {
      if (
        key === 'link' &&
        typeof value === 'string' &&
        value.startsWith('/')
      ) {
        results.add(value);
      } else {
        extractLinks(value, results);
      }
    }
  }
  return results;
}

/**
 * Recursively find all MDX files in a directory
 * Skips files starting with _ (hidden/draft docs)
 */
function findMdxFiles(dir: string, files: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findMdxFiles(fullPath, files);
    } else if (
      (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) &&
      !entry.name.startsWith('_')
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

async function findOrphans() {
  // Dynamically import the sidebar config
  const { sidebar } = await import('../config/sidebar/index.js');

  // Extract all links from sidebar
  const sidebarLinks = extractLinks(sidebar);
  console.log(`Found ${sidebarLinks.size} unique links in sidebar config`);

  // Find all MDX files in docs/fr (reference locale)
  const docsDir = path.join(ROOT_DIR, 'docs', 'fr');
  const mdxFiles = findMdxFiles(docsDir);
  console.log(`Found ${mdxFiles.length} MDX files in docs/fr`);

  // Convert file paths to route paths and find orphans
  // docs/fr/guides/public-cloud/compute/overview.mdx -> /guides/public-cloud/compute/overview
  const orphans = mdxFiles
    .map((f) => {
      const relativePath = path.relative(docsDir, f);
      return `/${relativePath.replace(/\.(mdx|md)$/, '')}`;
    })
    .filter((routePath) => !sidebarLinks.has(routePath));

  // Group orphans by top-level directory for better readability
  const groupedOrphans: Record<string, string[]> = {};
  for (const orphan of orphans) {
    const parts = orphan.split('/');
    const category = parts.slice(0, 3).join('/') || '/';
    if (!groupedOrphans[category]) {
      groupedOrphans[category] = [];
    }
    groupedOrphans[category].push(orphan);
  }

  if (orphans.length > 0) {
    console.log(`\n📄 Found ${orphans.length} page(s) not in sidebar:\n`);
    for (const [category, pages] of Object.entries(groupedOrphans).sort()) {
      console.log(`  ${category}/ (${pages.length} pages)`);
      // Show first 5 pages per category, indicate if more
      const displayPages = pages.slice(0, 5);
      for (const page of displayPages) {
        console.log(`    - ${page}`);
      }
      if (pages.length > 5) {
        console.log(`    ... and ${pages.length - 5} more`);
      }
    }
    console.log('\nThese pages exist but are not linked in the sidebar.');
    console.log(
      'They may be intentionally unlisted or missing from sidebar config.',
    );
  } else {
    console.log('\n✅ All pages are referenced in sidebar');
  }

  return orphans;
}

findOrphans().catch((error) => {
  console.error('Error finding orphans:', error);
  process.exit(1);
});
