#!/usr/bin/env npx tsx
/**
 * Validate overview page links point to existing MDX files
 *
 * Checks all link: values in overview.mdx frontmatter across all locales.
 * Reports broken links (file not found) and slug-like titles (missing frontmatter fallback).
 *
 * Usage:
 *   pnpm overview:validate
 *   pnpm overview:validate --locale=en    # check single locale
 *   pnpm overview:validate --fix          # (future) auto-fix underscore paths
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'];

// Parse CLI args
const args = process.argv.slice(2);
const localeArg = args.find((a) => a.startsWith('--locale='));
const selectedLocales = localeArg ? [localeArg.split('=')[1]] : LOCALES;

interface BrokenLink {
  file: string;
  line: number;
  section: string;
  link: string;
  reason: string;
}

interface SlugTitle {
  file: string;
  line: number;
  title: string;
}

/**
 * Find all overview.mdx files for given locales
 */
function findOverviewFiles(locales: string[]): string[] {
  const files: string[] = [];
  for (const locale of locales) {
    const guidesDir = path.join(DOCS_DIR, locale, 'guides');
    if (!fs.existsSync(guidesDir)) continue;
    walkDir(guidesDir, (filePath) => {
      if (path.basename(filePath) === 'overview.mdx') {
        files.push(filePath);
      }
    });
  }
  return files.sort();
}

function walkDir(dir: string, callback: (filePath: string) => void): void {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

/**
 * Parse frontmatter from an MDX file
 */
function parseFrontmatter(filePath: string): Record<string, unknown> | null {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;
  try {
    return YAML.parse(match[1]) as Record<string, unknown>;
  } catch {
    return null;
  }
}

/**
 * Extract the locale from a file path
 */
function getLocale(filePath: string): string {
  const rel = path.relative(DOCS_DIR, filePath);
  return rel.split(path.sep)[0];
}

/**
 * Check if a guide link resolves to an existing file
 */
function linkExists(link: string, locale: string): boolean {
  // Internal links start with /guides/
  if (!link.startsWith('/guides/')) return true; // skip external links

  const relPath = link.slice(1); // remove leading /
  for (const ext of ['.mdx', '.md']) {
    if (fs.existsSync(path.join(DOCS_DIR, locale, relPath + ext))) {
      return true;
    }
  }
  // Also check if it's a directory with an index file
  const dirPath = path.join(DOCS_DIR, locale, relPath);
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    for (const ext of ['.mdx', '.md']) {
      if (fs.existsSync(path.join(dirPath, `index${ext}`))) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Check if a title looks like a slug (fallback from missing frontmatter)
 */
function isSlugTitle(title: string): boolean {
  // Slug-like: all lowercase, has hyphens, no spaces
  if (/^[a-z0-9][a-z0-9-]+$/.test(title)) return true;
  // Starts with digits like "05-use-credits"
  if (/^\d{2}-[a-z]/.test(title)) return true;
  return false;
}

/**
 * Extract all link items from a frontmatter section
 */
function extractLinks(
  data: unknown,
  _sectionName: string,
): { link: string; title?: string; index: number }[] {
  if (!Array.isArray(data)) return [];
  return data
    .map((item, index) => {
      if (typeof item === 'object' && item !== null && 'link' in item) {
        return {
          link: String(item.link),
          title: 'title' in item ? String(item.title) : undefined,
          index,
        };
      }
      return null;
    })
    .filter(Boolean) as { link: string; title?: string; index: number }[];
}

/**
 * Find the line number of a link in the raw file content
 */
function findLinkLine(content: string, link: string): number {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (
      lines[i].includes(`link: ${link}`) ||
      lines[i].includes(`link: "${link}"`)
    ) {
      return i + 1;
    }
  }
  return 0;
}

// ───────────────────────────────────────────────
// Main
// ───────────────────────────────────────────────

const overviewFiles = findOverviewFiles(selectedLocales);
const brokenLinks: BrokenLink[] = [];
const slugTitles: SlugTitle[] = [];
let totalLinks = 0;
let totalFiles = 0;

const SECTIONS = ['essentials', 'gettingStarted', 'tutorials'] as const;

for (const filePath of overviewFiles) {
  const fm = parseFrontmatter(filePath);
  if (!fm) continue;

  totalFiles++;
  const locale = getLocale(filePath);
  const relFile = path.relative(ROOT_DIR, filePath);
  const content = fs.readFileSync(filePath, 'utf-8');

  for (const section of SECTIONS) {
    const items = extractLinks(fm[section], section);
    for (const item of items) {
      totalLinks++;

      // Check for broken links
      if (item.link.startsWith('/guides/') && !linkExists(item.link, locale)) {
        brokenLinks.push({
          file: relFile,
          line: findLinkLine(content, item.link),
          section,
          link: item.link,
          reason: 'file not found',
        });
      }

      // Check for slug-like titles
      if (item.title && isSlugTitle(item.title)) {
        slugTitles.push({
          file: relFile,
          line: findLinkLine(content, item.link) - 1, // title is line before link
          title: item.title,
        });
      }
    }
  }

  // Also check goFurther items
  const goFurther = fm.goFurther as { items?: unknown[] } | undefined;
  if (goFurther?.items) {
    const items = extractLinks(goFurther.items, 'goFurther');
    for (const item of items) {
      totalLinks++;
      if (item.link.startsWith('/guides/') && !linkExists(item.link, locale)) {
        brokenLinks.push({
          file: relFile,
          line: findLinkLine(content, item.link),
          section: 'goFurther',
          link: item.link,
          reason: 'file not found',
        });
      }
    }
  }
}

// ───────────────────────────────────────────────
// Report
// ───────────────────────────────────────────────

const ok = brokenLinks.length === 0 && slugTitles.length === 0;

console.log(`\n📋 Overview page link validation`);
console.log(`   ${totalFiles} overview files, ${totalLinks} links checked\n`);

if (slugTitles.length > 0) {
  console.log(
    `⚠️  ${slugTitles.length} slug-like title(s) (missing frontmatter fallback):\n`,
  );
  for (const s of slugTitles) {
    console.log(`   ${s.file}:${s.line}`);
    console.log(`     title: "${s.title}"\n`);
  }
}

if (brokenLinks.length > 0) {
  // Group by file for readability
  const byFile = new Map<string, BrokenLink[]>();
  for (const b of brokenLinks) {
    const list = byFile.get(b.file) || [];
    list.push(b);
    byFile.set(b.file, list);
  }

  console.log(
    `❌ ${brokenLinks.length} broken link(s) across ${byFile.size} file(s):\n`,
  );
  for (const [file, links] of byFile) {
    console.log(`   ${file}`);
    for (const l of links) {
      console.log(`     L${l.line} [${l.section}] ${l.link}`);
    }
    console.log();
  }
}

if (ok) {
  console.log(`✅ All links valid!\n`);
}

process.exit(ok ? 0 : 1);
