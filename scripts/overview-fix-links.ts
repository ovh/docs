#!/usr/bin/env npx tsx
/**
 * Fix broken links in overview.mdx frontmatter
 *
 * Strategy:
 * 1. Convert underscore paths to hyphens and check if file exists
 * 2. If not, search the target directory for a fuzzy match
 * 3. Skip section-group links (gettingStarted category pages) — these are by design
 * 4. Apply fixes in-place across all locales
 *
 * Usage:
 *   pnpm overview:fix            # fix all locales
 *   pnpm overview:fix --dry-run  # preview changes without writing
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'];
const dryRun = process.argv.includes('--dry-run');

/**
 * Check if a file exists with .mdx or .md extension
 */
function fileExists(basePath: string): boolean {
  return fs.existsSync(`${basePath}.mdx`) || fs.existsSync(`${basePath}.md`);
}

/**
 * List all .mdx/.md files in a directory (non-recursive, basenames without ext)
 */
function listGuides(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.(mdx|md)$/, ''));
}

/**
 * Try to resolve a broken link to an actual file.
 * Returns the fixed link or null if unfixable.
 */
function resolveLink(brokenLink: string, locale: string): string | null {
  if (!brokenLink.startsWith('/guides/')) return null;

  const relPath = brokenLink.slice(1); // remove leading /

  // Step 1: Try simple underscore → hyphen replacement
  const hyphenated = relPath.replace(/_/g, '-');
  if (fileExists(path.join(DOCS_DIR, locale, hyphenated))) {
    return `/${hyphenated}`;
  }

  // Step 2: Convert only directory parts to hyphens, keep slug as-is
  const parts = relPath.split('/');
  const slug = parts[parts.length - 1];
  const dirParts = parts.slice(0, -1).map((p) => p.replace(/_/g, '-'));
  const dirPath = path.join(DOCS_DIR, locale, ...dirParts);

  // Check if slug with hyphens exists in the hyphenated directory
  const hyphenSlug = slug.replace(/_/g, '-');
  if (fileExists(path.join(dirPath, hyphenSlug))) {
    return `/${[...dirParts, hyphenSlug].join('/')}`;
  }

  // Step 3: Search directory for a fuzzy match
  const guides = listGuides(dirPath);
  if (guides.length === 0) return null;

  // Try matching by significant keywords from the slug
  const slugWords = slug
    .replace(/_/g, '-')
    .split('-')
    .filter((w) => w.length > 2);

  // Score each guide by how many slug words it contains
  let bestMatch: string | null = null;
  let bestScore = 0;

  for (const guide of guides) {
    const guideWords = guide.split('-');
    let score = 0;
    for (const word of slugWords) {
      if (
        guideWords.some(
          (gw) => gw === word || gw.startsWith(word) || word.startsWith(gw),
        )
      ) {
        score++;
      }
    }
    // Require at least 2 matching words or 60% of slug words
    const threshold = Math.max(2, Math.floor(slugWords.length * 0.6));
    if (score > bestScore && score >= threshold) {
      bestScore = score;
      bestMatch = guide;
    }
  }

  if (bestMatch) {
    return `/${[...dirParts, bestMatch].join('/')}`;
  }

  return null;
}

// ───────────────────────────────────────────────
// Main
// ───────────────────────────────────────────────

function findOverviewFiles(): string[] {
  const files: string[] = [];
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(fullPath);
      else if (entry.name === 'overview.mdx') files.push(fullPath);
    }
  }
  for (const locale of LOCALES) {
    const guidesDir = path.join(DOCS_DIR, locale, 'guides');
    if (fs.existsSync(guidesDir)) walk(guidesDir);
  }
  return files.sort();
}

const overviewFiles = findOverviewFiles();
let totalFixed = 0;
let totalUnfixable = 0;
let totalSkipped = 0;
const unfixable: { file: string; link: string }[] = [];

for (const filePath of overviewFiles) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relFile = path.relative(ROOT_DIR, filePath);
  const locale = path.relative(DOCS_DIR, filePath).split(path.sep)[0];
  let fileChanged = false;

  // Find all link: lines
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^(\s+link:\s+)(.+)$/);
    if (!match) continue;

    const prefix = match[1];
    const link = match[2].trim().replace(/^["']|["']$/g, '');

    if (!link.startsWith('/guides/')) continue;

    // Check if link is valid
    const relPath = link.slice(1);
    if (fileExists(path.join(DOCS_DIR, locale, relPath))) continue;

    // Check if it's a directory (section-group page) — skip these
    const dirCheck = path.join(DOCS_DIR, locale, relPath);
    if (fs.existsSync(dirCheck) && fs.statSync(dirCheck).isDirectory()) {
      totalSkipped++;
      continue;
    }

    // Try to resolve
    const fixed = resolveLink(link, locale);
    if (fixed && fixed !== link) {
      lines[i] = `${prefix}${fixed}`;
      fileChanged = true;
      totalFixed++;
      if (dryRun) {
        console.log(`  FIX ${relFile}:${i + 1}`);
        console.log(`    - ${link}`);
        console.log(`    + ${fixed}`);
      }
    } else {
      totalUnfixable++;
      // Only report once per unique link (EN locale)
      if (locale === 'en') {
        unfixable.push({ file: relFile, link });
      }
    }
  }

  if (fileChanged && !dryRun) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
  }
}

// ───────────────────────────────────────────────
// Report
// ───────────────────────────────────────────────

console.log(`\n📋 Overview link fixer${dryRun ? ' (DRY RUN)' : ''}`);
console.log(`   ✅ Fixed: ${totalFixed}`);
console.log(`   ⏭️  Skipped (section groups): ${totalSkipped}`);
console.log(`   ❌ Unfixable: ${totalUnfixable}`);

if (unfixable.length > 0) {
  console.log(`\n   Unfixable links (EN only):`);
  for (const u of unfixable) {
    console.log(`     ${u.file}`);
    console.log(`       ${u.link}`);
  }
}

console.log();
