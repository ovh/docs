#!/usr/bin/env npx tsx
/**
 * Validate sidebar links point to existing MDX files
 *
 * Finds dead links in sidebar configuration (entries pointing to non-existent files).
 *
 * Usage:
 *   pnpm sidebar:validate
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

/**
 * Recursively extract all internal links from sidebar config (deduplicated)
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
 */
function findMdxFiles(dir: string, files: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findMdxFiles(fullPath, files);
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function validate(): Promise<{ deadLinks: string[]; valid: boolean }> {
  // Dynamically import the sidebar config
  const { sidebar } = await import('../config/sidebar/index.js');

  // Extract all unique links from sidebar
  const links = extractLinks(sidebar);
  console.log(`Found ${links.size} unique links in sidebar config`);

  // Find all MDX files in docs/fr (reference locale)
  const docsDir = path.join(ROOT_DIR, 'docs', 'fr');
  const mdxFiles = findMdxFiles(docsDir);
  console.log(`Found ${mdxFiles.length} MDX files in docs/fr`);

  // Convert file paths to route paths
  // docs/fr/guides/public-cloud/compute/overview.mdx -> /guides/public-cloud/compute/overview
  // docs/fr/guides/e-learning/index.mdx -> /guides/e-learning/ (with trailing slash)
  const existingPaths = new Set<string>();
  for (const f of mdxFiles) {
    const relativePath = path.relative(docsDir, f);
    const routePath = `/${relativePath.replace(/\.(mdx|md)$/, '')}`;
    existingPaths.add(routePath);
    // Also add trailing slash variant for index files
    if (routePath.endsWith('/index')) {
      existingPaths.add(routePath.replace(/\/index$/, '/'));
      existingPaths.add(routePath.replace(/\/index$/, '')); // Without trailing slash
    }
  }

  // Find dead links (links that don't match any file)
  const deadLinks: string[] = [];
  for (const link of links) {
    // Skip external links
    if (link.startsWith('http')) continue;

    // Check multiple variants for the link
    const linkWithoutSlash = link.endsWith('/') ? link.slice(0, -1) : link;
    const linkWithSlash = link.endsWith('/') ? link : `${link}/`;

    if (
      !existingPaths.has(link) &&
      !existingPaths.has(linkWithoutSlash) &&
      !existingPaths.has(linkWithSlash) &&
      !existingPaths.has(`${linkWithoutSlash}/index`)
    ) {
      deadLinks.push(link);
    }
  }

  return { deadLinks: deadLinks.sort(), valid: deadLinks.length === 0 };
}

validate()
  .then((result) => {
    if (!result.valid) {
      console.error(`\n❌ Found ${result.deadLinks.length} dead link(s):\n`);
      for (const link of result.deadLinks) {
        console.error(`   ${link}`);
      }
      console.error('\nThese sidebar links point to files that do not exist.');
      process.exit(1);
    }
    console.log('\n✅ All sidebar links are valid');
  })
  .catch((error) => {
    console.error('Error running validation:', error);
    process.exit(1);
  });
