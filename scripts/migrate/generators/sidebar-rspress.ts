/**
 * Sidebar generator for Rspress: filesystem-first approach.
 *
 * Instead of building _meta.json from the index.md tree structure (which creates
 * a mismatch between slugified labels and actual directory names), we:
 *   1. Build label lookup maps from pages/index.md + translations
 *   2. Walk the actual content directories
 *   3. Generate _meta.json for each directory based on its actual children
 *   4. Use labels from the lookup maps when available, or titleize dir names
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import matter from 'gray-matter';
import YAML from 'yaml';

// --- Types ---

interface LabelInfo {
  label: string;
  translations?: Record<string, string>;
}

interface TranslationMap {
  [locale: string]: { [key: string]: string };
}

// --- Label Map Building ---

/**
 * Load translation files from pages/ directory.
 */
function loadTranslations(pagesDir: string): TranslationMap {
  const translations: TranslationMap = {};
  const suffixes: Record<string, string> = {
    fr: 'fr',
    de: 'de',
    es: 'es',
    it: 'it',
    pl: 'pl',
    pt: 'pt',
  };

  for (const [fileSuffix, locale] of Object.entries(suffixes)) {
    const filePath = path.join(
      pagesDir,
      `index-translations.${fileSuffix}.yaml`,
    );
    if (fs.existsSync(filePath)) {
      translations[locale] =
        YAML.parse(fs.readFileSync(filePath, 'utf-8')) || {};
    }
  }

  return translations;
}

/**
 * Parse pages/index.md to build two lookup maps:
 *   - guideLabelMap: guide slug (hyphenated) → label
 *   - dirLabelMap: directory relative path → { label, translations }
 *
 * The index.md tree uses:
 *   + Category Label
 *       + [Sub Category](products/category_ref)
 *           + [Guide Title](universe/product/guide-name)
 */
export function buildLabelMaps(pagesDir: string): {
  guideLabelMap: Map<string, string>;
  dirLabelMap: Map<string, LabelInfo>;
} {
  const indexPath = path.join(pagesDir, 'index.md');
  const content = fs.readFileSync(indexPath, 'utf-8');
  const translations = loadTranslations(pagesDir);

  const guideLabelMap = new Map<string, string>();
  const dirLabelMap = new Map<string, LabelInfo>();

  const lines = content.split('\n');

  // Track nesting to map categories to their child directories
  interface StackEntry {
    indent: number;
    label: string;
    categoryRef: string | null;
    childDirPaths: Set<string>;
  }

  const stack: StackEntry[] = [];

  for (const line of lines) {
    if (!line.match(/^\s*\+\s/)) continue;

    const leadingSpaces = line.match(/^(\s*)/)?.[1].length || 0;
    const indent = Math.floor(leadingSpaces / 4);
    const stripped = line.replace(/^\s*\+\s+/, '');

    const linkMatch = stripped.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    const label = linkMatch ? linkMatch[1] : stripped.trim();
    const ref = linkMatch ? linkMatch[2] : null;

    // Pop stack to find parent
    while (stack.length > 0 && stack[stack.length - 1].indent >= indent) {
      // biome-ignore lint/style/noNonNullAssertion: guaranteed by while condition stack.length > 0
      const popped = stack.pop()!;
      // When popping a category, register its directory mapping
      registerCategoryDir(popped, dirLabelMap, translations);
    }

    if (ref?.includes('/') && !ref.startsWith('products/')) {
      // Guide entry - register label
      const slug = ref
        .split('/')
        .map((s) => s.replace(/_/g, '-').toLowerCase())
        .join('/');
      guideLabelMap.set(slug, label);

      // Tell parent categories about this guide's directory path
      const segments = slug.split('/');
      if (segments.length >= 2) {
        const dirPath = segments.slice(0, -1).join('/');
        // Register this directory path with all ancestor categories
        for (const entry of stack) {
          entry.childDirPaths.add(dirPath);
        }
      }
    } else {
      // Category entry
      const categoryRef = ref?.startsWith('products/')
        ? ref.replace(/^products\//, '')
        : ref || '';

      stack.push({
        indent,
        label,
        categoryRef,
        childDirPaths: new Set(),
      });
    }
  }

  // Flush remaining stack
  while (stack.length > 0) {
    // biome-ignore lint/style/noNonNullAssertion: guaranteed by while condition stack.length > 0
    const popped = stack.pop()!;
    registerCategoryDir(popped, dirLabelMap, translations);
  }

  return { guideLabelMap, dirLabelMap };
}

/**
 * When a category is popped from the stack, find the common directory
 * path of its children and register the label mapping.
 */
function registerCategoryDir(
  entry: {
    label: string;
    categoryRef: string | null;
    childDirPaths: Set<string>;
  },
  dirLabelMap: Map<string, LabelInfo>,
  translations: TranslationMap,
): void {
  if (entry.childDirPaths.size === 0) return;

  // Find all unique directory paths from children
  const dirPaths = Array.from(entry.childDirPaths);

  // Find the most specific common directory
  // If all children share a common path, use it
  // Otherwise, try to find the deepest common prefix
  const commonDir = findCommonDirectory(dirPaths);
  if (!commonDir) return;

  // Build translations for this label
  const itemTranslations: Record<string, string> = {};
  if (entry.categoryRef) {
    for (const [locale, transMap] of Object.entries(translations)) {
      if (transMap[entry.categoryRef]) {
        itemTranslations[locale] = transMap[entry.categoryRef];
      }
    }
  }

  const info: LabelInfo = { label: entry.label };
  if (Object.keys(itemTranslations).length > 0) {
    info.translations = itemTranslations;
  }

  dirLabelMap.set(commonDir, info);
}

/**
 * Find the common directory among a set of directory paths.
 * E.g., ['network/load-balancer', 'network/load-balancer'] → 'network/load-balancer'
 *        ['network/lb/a', 'network/lb/b'] → 'network/lb'
 */
function findCommonDirectory(paths: string[]): string | null {
  if (paths.length === 0) return null;
  if (paths.length === 1) return paths[0];

  // If all paths are identical, return that path
  if (paths.every((p) => p === paths[0])) return paths[0];

  // Find common prefix segments
  const segmented = paths.map((p) => p.split('/'));
  const minLen = Math.min(...segmented.map((s) => s.length));
  const common: string[] = [];

  for (let i = 0; i < minLen; i++) {
    if (segmented.every((s) => s[i] === segmented[0][i])) {
      common.push(segmented[0][i]);
    } else {
      break;
    }
  }

  return common.length > 0 ? common.join('/') : null;
}

// --- Filesystem-first _meta.json Generation ---

/**
 * Titleize a slug: 'content-delivery-network-infrastructure' → 'Content Delivery Network Infrastructure'
 */
function titleize(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * Get the frontmatter title from a markdown file.
 */
function getFileTitle(filePath: string): string | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);
    return data.title || null;
  } catch {
    return null;
  }
}

/**
 * Generate _meta.json for a single directory, recursively.
 * Returns the number of _meta.json files written.
 */
function generateMetaForDir(
  dirPath: string,
  localeRoot: string,
  guideLabelMap: Map<string, string>,
  dirLabelMap: Map<string, LabelInfo>,
  locale: string,
  dryRun: boolean,
): number {
  let count = 0;

  // List children
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch {
    return 0;
  }

  const metaEntries: Array<Record<string, unknown>> = [];

  // Separate dirs and files
  const dirs = entries.filter(
    (e) => e.isDirectory() && e.name !== 'public' && e.name !== '_meta.json',
  );
  const files = entries.filter(
    (e) =>
      e.isFile() &&
      (e.name.endsWith('.md') || e.name.endsWith('.mdx')) &&
      e.name !== '_meta.json',
  );

  // Process directories first
  for (const dir of dirs.sort((a, b) => a.name.localeCompare(b.name))) {
    const childPath = path.join(dirPath, dir.name);
    const relPath = path.relative(localeRoot, childPath);

    // Check if this dir has any content (recursively)
    if (!hasContentFiles(childPath)) continue;

    // Look up label
    const labelInfo = dirLabelMap.get(relPath);
    let label: string;
    if (labelInfo) {
      // Use translated label for non-fr locales
      if (locale !== 'fr' && labelInfo.translations?.[locale]) {
        label = labelInfo.translations[locale];
      } else {
        label = labelInfo.label;
      }
    } else {
      label = titleize(dir.name);
    }

    metaEntries.push({
      type: 'dir',
      name: dir.name,
      label,
      collapsed: true,
    });

    // Recurse
    count += generateMetaForDir(
      childPath,
      localeRoot,
      guideLabelMap,
      dirLabelMap,
      locale,
      dryRun,
    );
  }

  // Process files
  for (const file of files.sort((a, b) => a.name.localeCompare(b.name))) {
    const baseName = file.name.replace(/\.(mdx?|md)$/, '');
    if (baseName === 'index') continue; // Skip index files

    const filePath = path.join(dirPath, file.name);
    const relDir = path.relative(localeRoot, dirPath);
    const guideSlug = relDir ? `${relDir}/${baseName}` : baseName;

    // Look up label: first from index.md map, then from frontmatter
    let label = guideLabelMap.get(guideSlug) || null;
    if (!label) {
      label = getFileTitle(filePath) || titleize(baseName);
    }

    metaEntries.push({
      type: 'file',
      name: baseName,
      label,
    });
  }

  // Write _meta.json if there are entries
  if (metaEntries.length > 0) {
    const metaPath = path.join(dirPath, '_meta.json');
    if (!dryRun) {
      fs.writeFileSync(metaPath, `${JSON.stringify(metaEntries, null, 2)}\n`);
    }
    count++;
  }

  return count;
}

/**
 * Check if a directory has any .md or .mdx files (recursively).
 */
function hasContentFiles(dirPath: string): boolean {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch {
    return false;
  }

  for (const entry of entries) {
    if (
      entry.isFile() &&
      (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))
    ) {
      return true;
    }
    if (entry.isDirectory()) {
      if (hasContentFiles(path.join(dirPath, entry.name))) return true;
    }
  }
  return false;
}

// --- Public API ---

/**
 * Generate _meta.json files for all active locales by walking the filesystem.
 */
export function generateAllMetaFiles(
  pagesDir: string,
  docsDir: string,
  locales: string[],
  dryRun: boolean = false,
): number {
  // Build label maps from index.md
  const { guideLabelMap, dirLabelMap } = buildLabelMaps(pagesDir);

  let total = 0;

  for (const locale of locales) {
    const localeDir = path.join(docsDir, locale);
    if (!fs.existsSync(localeDir)) continue;

    total += generateMetaForDir(
      localeDir,
      localeDir,
      guideLabelMap,
      dirLabelMap,
      locale,
      dryRun,
    );
  }

  return total;
}

// Keep generateSidebar for backward compatibility but it's no longer used for _meta.json generation
export function generateSidebar(pagesDir: string, _filterUniverse?: string) {
  return buildLabelMaps(pagesDir);
}
