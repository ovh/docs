#!/usr/bin/env npx tsx
/**
 * Fix gettingStarted section-group links in overview pages
 *
 * Section-group links (e.g. /guides/.../getting-started) point to sidebar sections
 * that don't have their own page. This script replaces them with the first guide
 * leaf in that section, looked up from config/sidebar/index.md.
 *
 * Usage:
 *   pnpm overview:fix-sections            # apply fixes
 *   pnpm overview:fix-sections --dry-run  # preview only
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const SIDEBAR_MD = path.join(ROOT_DIR, 'config/sidebar/index.md');

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'];
const dryRun = process.argv.includes('--dry-run');

// ───────────────────────────────────────────────
// Step 1: Parse sidebar index.md to build section → first guide map
// ───────────────────────────────────────────────

interface SidebarLine {
  indent: number;
  label: string;
  ref: string | null;
}

function parseSidebarLines(): SidebarLine[] {
  const content = fs.readFileSync(SIDEBAR_MD, 'utf-8');
  const lines: SidebarLine[] = [];

  for (const line of content.split('\n')) {
    if (!line.match(/^\s*\+\s/)) continue;
    const leadingSpaces = line.match(/^(\s*)/)?.[1].length || 0;
    const indent = Math.floor(leadingSpaces / 4);
    const stripped = line.replace(/^\s*\+\s+/, '');
    const linkMatch = stripped.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    const label = linkMatch ? linkMatch[1] : stripped.trim();
    const ref = linkMatch ? linkMatch[2] : null;
    lines.push({ indent, label, ref });
  }

  return lines;
}

/**
 * Build a map of section-ref → first guide link in that section.
 * Section refs are non-leaf refs without '/' (e.g., "bare-metal-cloud-dedicated-servers-getting-started")
 * Guide refs have '/' (e.g., "bare-metal-cloud/dedicated-servers/getting-started-with-dedicated-server")
 */
function buildSectionToFirstGuide(): Map<string, string> {
  const lines = parseSidebarLines();
  const map = new Map<string, string>();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Section: has a ref without '/' and doesn't start with 'products/'
    if (!line.ref || line.ref.includes('/') || line.ref.startsWith('products/'))
      continue;

    const sectionRef = line.ref;
    const sectionIndent = line.indent;

    // Find the first guide leaf that is a direct or nested child of this section
    for (let j = i + 1; j < lines.length; j++) {
      const child = lines[j];
      if (child.indent <= sectionIndent) break; // left the section

      // Guide leaf: ref contains '/'
      if (child.ref?.includes('/') && !child.ref.startsWith('products/')) {
        map.set(sectionRef, `/guides/${child.ref}`);
        break;
      }
    }
  }

  return map;
}

// ───────────────────────────────────────────────
// Step 2: Convert overview link paths to section refs
// ───────────────────────────────────────────────

/**
 * Try to find a matching sidebar section ref for an overview gettingStarted link.
 *
 * Uses the overview file's own directory path to determine the product context,
 * then matches by the section suffix (e.g. "getting-started", "configuration").
 *
 * Returns matching section refs from the sectionMap.
 */
function findMatchingSectionRefs(
  link: string,
  overviewFilePath: string,
  sectionMap: Map<string, string>,
): string[] {
  // Strip /guides/ prefix
  const stripped = link.replace(/^\/guides\//, '');
  const linkParts = stripped.split('/');
  const sectionSuffix = linkParts[linkParts.length - 1]; // e.g. "getting-started"

  // Strategy 1: Simple join with hyphens
  const simple = stripped.replace(/\//g, '-');
  if (sectionMap.has(simple)) return [simple];

  // Strategy 2: Use the overview file's directory to infer the product context
  // e.g. docs/en/guides/storage-and-backup/file-storage/enterprise-file-storage/overview.mdx
  //    → product context is something like "storage-...-enterprise-file-storage"
  const overviewRel = path.relative(
    path.join(ROOT_DIR, 'docs'),
    overviewFilePath,
  );
  // e.g. "en/guides/storage-and-backup/file-storage/enterprise-file-storage/overview.mdx"
  const overviewParts = overviewRel.split(path.sep);
  // Skip locale + "guides" + filename → get product path segments
  const productParts = overviewParts.slice(2, -1); // ["storage-and-backup", "file-storage", "enterprise-file-storage"]

  // Search all section refs that end with the section suffix
  // and contain keywords from the product path
  const candidates: { ref: string; score: number }[] = [];

  for (const ref of sectionMap.keys()) {
    if (!ref.endsWith(`-${sectionSuffix}`)) continue;

    // Score by how many product path words appear in the ref
    let score = 0;
    for (const part of productParts) {
      for (const word of part.split('-')) {
        if (word.length > 2 && ref.includes(word)) score++;
      }
    }
    if (score > 0) {
      candidates.push({ ref, score });
    }
  }

  // Return the best match(es)
  candidates.sort((a, b) => b.score - a.score);
  if (candidates.length > 0) {
    return [candidates[0].ref];
  }

  return [];
}

// ───────────────────────────────────────────────
// Step 3: Fix overview files
// ───────────────────────────────────────────────

function fileExists(basePath: string): boolean {
  return fs.existsSync(`${basePath}.mdx`) || fs.existsSync(`${basePath}.md`);
}

const sectionMap = buildSectionToFirstGuide();

// Debug: show section map size
console.log(
  `\n📋 Loaded ${sectionMap.size} section → first-guide mappings from sidebar\n`,
);

let totalFixed = 0;
let totalUnresolved = 0;
const unresolved: { file: string; link: string; tried: string[] }[] = [];

for (const locale of LOCALES) {
  const guidesDir = path.join(DOCS_DIR, locale, 'guides');
  if (!fs.existsSync(guidesDir)) continue;

  const overviewFiles: string[] = [];
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(fullPath);
      else if (entry.name === 'overview.mdx') overviewFiles.push(fullPath);
    }
  }
  walk(guidesDir);

  for (const filePath of overviewFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const relFile = path.relative(ROOT_DIR, filePath);
    let fileChanged = false;

    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(/^(\s+link:\s+)(.+)$/);
      if (!match) continue;

      const prefix = match[1];
      const link = match[2].trim();

      if (!link.startsWith('/guides/')) continue;

      // Check if link is already valid
      const relPath = link.slice(1);
      if (fileExists(path.join(DOCS_DIR, locale, relPath))) continue;

      // Check if it's a real directory (skip those too)
      const dirCheck = path.join(DOCS_DIR, locale, relPath);
      if (fs.existsSync(dirCheck) && fs.statSync(dirCheck).isDirectory())
        continue;

      // Try to resolve as a section-group link
      const candidates = findMatchingSectionRefs(link, filePath, sectionMap);
      let resolved = false;

      for (const candidate of candidates) {
        const firstGuide = sectionMap.get(candidate);
        if (firstGuide) {
          // Verify the guide file exists for this locale
          if (fileExists(path.join(DOCS_DIR, locale, firstGuide.slice(1)))) {
            lines[i] = `${prefix}${firstGuide}`;
            fileChanged = true;
            totalFixed++;
            resolved = true;
            if (dryRun) {
              console.log(`  FIX ${relFile}:${i + 1}`);
              console.log(`    - ${link}`);
              console.log(`    + ${firstGuide}  (via section: ${candidate})`);
            }
            break;
          }
        }
      }

      if (!resolved) {
        totalUnresolved++;
        if (locale === 'en') {
          unresolved.push({ file: relFile, link, tried: candidates });
        }
      }
    }

    if (fileChanged && !dryRun) {
      fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
    }
  }
}

// ───────────────────────────────────────────────
// Report
// ───────────────────────────────────────────────

console.log(`📋 Section-group link fixer${dryRun ? ' (DRY RUN)' : ''}`);
console.log(`   ✅ Fixed: ${totalFixed}`);
console.log(`   ❌ Unresolved: ${totalUnresolved}`);

if (unresolved.length > 0) {
  console.log(`\n   Unresolved (EN only):`);
  for (const u of unresolved) {
    console.log(`     ${u.file}`);
    console.log(`       link: ${u.link}`);
    console.log(`       tried refs: ${u.tried.join(', ')}`);
  }
}

console.log();
