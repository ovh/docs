#!/usr/bin/env node
/**
 * Fix dead internal links across all MDX files.
 *
 * Handles 3 categories:
 * 1. missing-guides-prefix: /foo/bar → /guides/foo/bar
 * 2. case-sensitivity: /guides/foo/Bar → /guides/foo/bar (match actual file)
 * 3. directory-links: /guides/foo/bar → /guides/foo/bar/overview (if overview exists)
 *
 * Usage:
 *   npx tsx scripts/fix-dead-links.ts              # Apply fixes
 *   npx tsx scripts/fix-dead-links.ts --dry-run     # Preview
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { globSync } from 'glob';

const ROOT_DIR = path.resolve(import.meta.dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const DRY_RUN = process.argv.includes('--dry-run');

const locales = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'];

// ---------- Build route maps per locale ----------
// Map: lowercase route → actual route (for case-insensitive matching)
const routeMaps = new Map<
  string,
  { exact: Set<string>; lower: Map<string, string> }
>();

for (const locale of locales) {
  const files = globSync(`${DOCS_DIR}/${locale}/**/*.mdx`);
  const exact = new Set<string>();
  const lower = new Map<string, string>();

  for (const file of files) {
    let route = file
      .replace(`${DOCS_DIR}/${locale}/`, '/')
      .replace(/\.mdx$/, '');
    if (route.endsWith('/index')) route = route.slice(0, -6) || '/';
    exact.add(route);
    lower.set(route.toLowerCase(), route);
  }

  routeMaps.set(locale, { exact, lower });
}

console.log(`Route maps built for ${locales.length} locales`);
console.log(`fr routes: ${routeMaps.get('fr')?.exact.size}`);

// ---------- Resolve a link to a valid route ----------
function resolveLink(
  href: string,
  routes: { exact: Set<string>; lower: Map<string, string> },
): string | null {
  // Strip anchor and query string for path resolution
  const hashIdx = href.indexOf('#');
  const pathPart = hashIdx !== -1 ? href.slice(0, hashIdx) : href;
  const anchor = hashIdx !== -1 ? href.slice(hashIdx) : '';

  // Strip trailing slash
  const normalized = pathPart.replace(/\/+$/, '') || '/';

  // 1. Already valid
  if (routes.exact.has(normalized)) return null; // no fix needed

  // 2. Missing /guides/ prefix
  if (!normalized.startsWith('/guides/') && normalized !== '/') {
    const withPrefix = `/guides${normalized}`;
    if (routes.exact.has(withPrefix)) {
      return `${withPrefix}${anchor}`;
    }
    // Also try case-insensitive with prefix
    const caseFix = routes.lower.get(withPrefix.toLowerCase());
    if (caseFix) {
      return `${caseFix}${anchor}`;
    }
  }

  // 3. Case-insensitive match
  const caseFix = routes.lower.get(normalized.toLowerCase());
  if (caseFix) {
    return `${caseFix}${anchor}`;
  }

  // 4. Directory → try /overview child
  const overviewRoute = `${normalized}/overview`;
  if (routes.exact.has(overviewRoute)) {
    return `${overviewRoute}${anchor}`;
  }

  // 5. Double slash fix
  const deduped = normalized.replace(/\/\/+/g, '/');
  if (deduped !== normalized && routes.exact.has(deduped)) {
    return `${deduped}${anchor}`;
  }
  // Double slash + prefix
  if (!deduped.startsWith('/guides/')) {
    const dedupedWithPrefix = `/guides${deduped}`;
    if (routes.exact.has(dedupedWithPrefix)) {
      return `${dedupedWithPrefix}${anchor}`;
    }
  }

  return undefined as unknown as null; // unfixable
}

// ---------- Process files ----------
const linkRegex = /(\[[^\]]*\]\()([^)]+)(\))/g;

let totalFixes = 0;
let totalUnfixable = 0;
let filesModified = 0;
const unfixableLinks = new Map<string, number>();

for (const locale of locales) {
  // biome-ignore lint/style/noNonNullAssertion: locale is from the same locales array used to build routeMaps
  const routes = routeMaps.get(locale)!;
  const files = globSync(`${DOCS_DIR}/${locale}/**/*.mdx`);

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    let fixes = 0;

    const newContent = content.replace(
      linkRegex,
      (full, prefix, href, suffix) => {
        // Skip external, anchors-only, mailto, assets
        if (/^https?:\/\//.test(href)) return full;
        if (href.startsWith('#')) return full;
        if (href.startsWith('mailto:')) return full;
        if (
          /\.(png|jpe?g|gif|svg|webp|pdf|zip|tar|gz|sh|py|txt|csv|xml|json|ya?ml)$/i.test(
            href,
          )
        )
          return full;
        if (href.startsWith('/links/')) return full;

        // Only absolute internal links
        if (!href.startsWith('/')) return full;

        // Check if it already resolves
        const pathPart =
          href.split('#')[0].split('?')[0].replace(/\/+$/, '') || '/';
        if (routes.exact.has(pathPart)) return full;

        const fixed = resolveLink(href, routes);
        if (fixed === null) return full; // already valid
        if (fixed === undefined || (fixed as unknown) === null) {
          // unfixable
          totalUnfixable++;
          unfixableLinks.set(href, (unfixableLinks.get(href) || 0) + 1);
          return full;
        }

        fixes++;
        return `${prefix}${fixed}${suffix}`;
      },
    );

    if (fixes > 0) {
      totalFixes += fixes;
      filesModified++;
      if (!DRY_RUN) {
        fs.writeFileSync(file, newContent, 'utf-8');
      }
    }
  }
}

console.log(`\n${'='.repeat(60)}`);
console.log(DRY_RUN ? 'FIX DEAD LINKS (DRY RUN)' : 'FIX DEAD LINKS');
console.log(`${'='.repeat(60)}`);
console.log(`Fixed: ${totalFixes} links in ${filesModified} files`);
console.log(
  `Unfixable: ${totalUnfixable} occurrences (${unfixableLinks.size} unique)`,
);

if (unfixableLinks.size > 0) {
  console.log('\nUnfixable links:');
  const sorted = [...unfixableLinks.entries()].sort((a, b) => b[1] - a[1]);
  for (const [link, count] of sorted.slice(0, 60)) {
    console.log(`  [${count}x] ${link}`);
  }
  if (sorted.length > 60) console.log(`  ... and ${sorted.length - 60} more`);
}

if (DRY_RUN) {
  console.log('\n(Dry run — no files were modified)');
}
