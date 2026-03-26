#!/usr/bin/env node
/**
 * Rename MDX files to their SEO-optimized slugs and update all internal links.
 *
 * Phases:
 * 1. Load rename map from slug-seo-report.json (entries with seo.improved === true)
 * 2. Rename files across all 7 locales
 * 3. Update internal links in all MDX files
 * 4. Update sidebar config files
 *
 * Usage:
 *   npx tsx scripts/rename-slugs.ts --dry-run   # Preview
 *   npx tsx scripts/rename-slugs.ts              # Apply
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { globSync } from 'glob';

const ROOT_DIR = path.resolve(import.meta.dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const DRY_RUN = process.argv.includes('--dry-run');

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'] as const;

interface SeoEntry {
  fullSlug: string;
  newSlug: string;
  basePath: string;
  exists: boolean;
  seo: {
    total: number;
    flags: string[];
    finalSlug: string;
    improved: boolean;
  };
}

interface RenameEntry {
  mdxPath: string; // e.g. guides/web-cloud/web-cloud-databases/using-pgsql.mdx
  oldSlug: string; // e.g. using-pgsql
  newSlug: string; // e.g. db-getting-started-postgresql
  oldLinkPath: string; // e.g. /guides/web-cloud/web-cloud-databases/using-pgsql
  newLinkPath: string; // e.g. /guides/web-cloud/web-cloud-databases/db-getting-started-postgresql
}

// ──────────────────────────────────────────────
// Phase 1 — Load rename map
// ──────────────────────────────────────────────

console.log(`\n=== RENAME SLUGS ${DRY_RUN ? '(DRY RUN) ' : ''}===\n`);

const report = JSON.parse(
  fs.readFileSync(path.join(ROOT_DIR, 'scripts/slug-seo-report.json'), 'utf-8'),
);

const entries: RenameEntry[] = [];
const newLinkPaths = new Set<string>();
let collisions = 0;

for (const [mdxPath, entry] of Object.entries(report.all) as [
  string,
  SeoEntry,
][]) {
  if (!entry.seo?.improved) continue;

  const dir = path.dirname(mdxPath);
  const oldSlug = path.basename(mdxPath, '.mdx');
  const newSlug = entry.seo.finalSlug;

  // Skip entries where the filename doesn't actually change
  if (oldSlug === newSlug) continue;

  const oldLinkPath = `/${mdxPath.replace(/\.mdx$/, '')}`;
  const newLinkPath = `/${dir}/${newSlug}`;

  if (newLinkPaths.has(newLinkPath)) {
    console.error(`COLLISION: ${newLinkPath} (from ${mdxPath})`);
    collisions++;
  }
  newLinkPaths.add(newLinkPath);

  entries.push({ mdxPath, oldSlug, newSlug, oldLinkPath, newLinkPath });
}

// Sort by oldLinkPath length descending — prevents prefix conflicts during replacement
entries.sort((a, b) => b.oldLinkPath.length - a.oldLinkPath.length);

console.log(
  `Phase 1: ${entries.length} rename entries loaded, ${collisions} collisions`,
);

if (collisions > 0) {
  console.error('\nAborting: collisions detected');
  process.exit(1);
}

// ──────────────────────────────────────────────
// Phase 2 — Rename files across locales
// ──────────────────────────────────────────────

let renamed = 0;
let alreadyDone = 0;
let notFound = 0;
let renameWarnings = 0;

for (const entry of entries) {
  for (const locale of LOCALES) {
    const oldFile = path.join(DOCS_DIR, locale, entry.mdxPath);
    const newFile = path.join(
      DOCS_DIR,
      locale,
      path.dirname(entry.mdxPath),
      `${entry.newSlug}.mdx`,
    );

    const oldExists = fs.existsSync(oldFile);
    const newExists = fs.existsSync(newFile);

    if (oldExists && !newExists) {
      if (!DRY_RUN) fs.renameSync(oldFile, newFile);
      renamed++;
    } else if (!oldExists && newExists) {
      alreadyDone++;
    } else if (oldExists && newExists) {
      console.warn(`  WARN: both exist — ${oldFile} and ${newFile}`);
      renameWarnings++;
    } else {
      notFound++;
    }
  }
}

console.log(`\nPhase 2: File renames`);
console.log(`  Renamed:      ${renamed.toLocaleString()}`);
console.log(`  Already done:  ${alreadyDone.toLocaleString()}`);
console.log(`  Not found:     ${notFound.toLocaleString()}`);
if (renameWarnings > 0) console.log(`  Warnings:      ${renameWarnings}`);

// ──────────────────────────────────────────────
// Phase 3 — Update internal links in MDX files
// ──────────────────────────────────────────────

// Build quick-check set of old slugs for pre-filtering
const oldSlugs = new Set(entries.map((e) => e.oldSlug));

// Build replacement patterns — sorted by length descending (already sorted)
const replacements = entries.map((e) => ({
  // Match the old link path followed by a boundary character
  pattern: new RegExp(`${escapeRegex(e.oldLinkPath)}(?=[)#"'\`\\s,?/]|$)`, 'g'),
  replacement: e.newLinkPath,
  oldSlug: e.oldSlug,
}));

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const mdxFiles = globSync(`${DOCS_DIR}/**/*.mdx`);
let mdxScanned = 0;
let mdxModified = 0;
let mdxLinksReplaced = 0;

for (const file of mdxFiles) {
  mdxScanned++;
  const content = fs.readFileSync(file, 'utf-8');

  // Quick pre-filter: does this file contain any old slug?
  let hasOldSlug = false;
  for (const slug of oldSlugs) {
    if (content.includes(slug)) {
      hasOldSlug = true;
      break;
    }
  }
  if (!hasOldSlug) continue;

  let newContent = content;
  let fileLinks = 0;

  for (const r of replacements) {
    if (!newContent.includes(r.oldSlug)) continue;
    const replaced = newContent.replace(r.pattern, r.replacement);
    if (replaced !== newContent) {
      // Count matches
      const matches = newContent.match(r.pattern);
      fileLinks += matches ? matches.length : 0;
      newContent = replaced;
    }
  }

  if (newContent !== content) {
    mdxModified++;
    mdxLinksReplaced += fileLinks;
    if (!DRY_RUN) fs.writeFileSync(file, newContent, 'utf-8');
  }
}

console.log(`\nPhase 3: MDX link updates`);
console.log(`  Scanned:   ${mdxScanned.toLocaleString()}`);
console.log(`  Modified:   ${mdxModified.toLocaleString()}`);
console.log(`  Links:      ${mdxLinksReplaced.toLocaleString()}`);

// ──────────────────────────────────────────────
// Phase 4 — Update sidebar config files
// ──────────────────────────────────────────────

// Sidebar files use two link formats:
// 1. Template literal: `${BASE_PATH}/sub/path/slug` (BASE_PATH = '/guides/{category}')
// 2. Quoted string:    '/guides/full/path/slug'
// Build patterns matching the relative path after the product category prefix,
// e.g. /dedicated-servers/old-slug → /dedicated-servers/new-slug
const sidebarReplacements = entries.map((e) => {
  // oldLinkPath = /guides/{category}/{sub}/.../{old-slug}
  // Strip /guides/{category} to get /{sub}/.../{old-slug}
  const parts = e.oldLinkPath.split('/'); // ['', 'guides', 'category', 'sub', ..., 'slug']
  const relativePath = `/${parts.slice(3).join('/')}`; // /{sub}/.../{old-slug}
  const newRelativePath = `/${[...parts.slice(3, -1), e.newSlug].join('/')}`;
  return {
    pattern: new RegExp(
      `${escapeRegex(relativePath)}(?=[)#"'\`\\s,?/]|$)`,
      'g',
    ),
    replacement: newRelativePath,
    oldSlug: e.oldSlug,
  };
});

// Already sorted by oldLinkPath length descending from entries sort

const sidebarDir = path.join(ROOT_DIR, 'config/sidebar');
const sidebarFiles = globSync(`${sidebarDir}/*.ts`);
let sidebarScanned = 0;
let sidebarModified = 0;
let sidebarEntries = 0;

for (const file of sidebarFiles) {
  sidebarScanned++;
  const content = fs.readFileSync(file, 'utf-8');

  let newContent = content;
  let fileEntries = 0;

  for (const r of sidebarReplacements) {
    if (!newContent.includes(r.oldSlug)) continue;
    const replaced = newContent.replace(r.pattern, r.replacement);
    if (replaced !== newContent) {
      const matches = newContent.match(r.pattern);
      fileEntries += matches ? matches.length : 0;
      newContent = replaced;
    }
  }

  if (newContent !== content) {
    sidebarModified++;
    sidebarEntries += fileEntries;
    if (!DRY_RUN) fs.writeFileSync(file, newContent, 'utf-8');
  }
}

console.log(`\nPhase 4: Sidebar updates`);
console.log(`  Scanned:   ${sidebarScanned}`);
console.log(`  Modified:   ${sidebarModified}`);
console.log(`  Entries:    ${sidebarEntries}`);

// ──────────────────────────────────────────────
// Summary
// ──────────────────────────────────────────────

console.log(`\n${'='.repeat(40)}`);
if (DRY_RUN) console.log('(Dry run — no files were modified)');
else console.log('Done!');
