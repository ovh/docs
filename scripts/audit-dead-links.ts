#!/usr/bin/env node
/**
 * Audit dead links across all MDX files for a given locale.
 *
 * Usage:
 *   npx tsx scripts/audit-dead-links.ts          # Audit fr (default)
 *   npx tsx scripts/audit-dead-links.ts en        # Audit en
 */

import * as fs from 'node:fs';
import { globSync } from 'glob';
import { generateLinkRules } from '../config/link-rules';
import type { Locale } from '../config/shared';

const locale = (process.argv[2] || 'fr') as Locale;
const DOCS_DIR = 'docs';

// ---------- Build route set ----------
const allFiles = globSync(`${DOCS_DIR}/${locale}/**/*.mdx`);
const validRoutes = new Set<string>();

for (const file of allFiles) {
  // docs/fr/guides/foo/bar.mdx → /guides/foo/bar
  let route = file.replace(`${DOCS_DIR}/${locale}/`, '/').replace(/\.mdx$/, '');
  if (route.endsWith('/index')) route = route.slice(0, -6) || '/';
  validRoutes.add(route);
}

console.log(`Locale: ${locale}`);
console.log(`MDX files: ${allFiles.length}`);
console.log(`Valid routes: ${validRoutes.size}`);

// ---------- Apply replaceRules ----------
const rules = generateLinkRules(locale);

// ---------- Scan ----------
interface Issue {
  file: string;
  line: number;
  link: string;
  category: string;
}

const issues: Issue[] = [];
const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf-8');

  // Apply replaceRules (same as Rspress)
  for (const rule of rules) {
    content = content.replace(rule.search, rule.replace);
  }

  const lines = content.split('\n');
  let inFrontmatter = false;
  let fmCount = 0;
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Track frontmatter
    if (trimmed === '---') {
      fmCount++;
      inFrontmatter = fmCount < 2;
      continue;
    }
    if (inFrontmatter) continue;

    // Track code blocks
    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    // Skip import lines
    if (trimmed.startsWith('import ')) continue;

    for (const match of line.matchAll(linkRegex)) {
      const href = match[2];

      // Skip external, anchors-only, mailto, assets
      if (/^https?:\/\//.test(href)) continue;
      if (href.startsWith('#')) continue;
      if (href.startsWith('mailto:')) continue;
      if (
        /\.(png|jpe?g|gif|svg|webp|pdf|zip|tar|gz|sh|py|txt|csv|xml|json|ya?ml)$/i.test(
          href,
        )
      )
        continue;

      // Unresolved /links/
      if (href.startsWith('/links/')) {
        issues.push({
          file,
          line: i + 1,
          link: href,
          category: 'unresolved-links',
        });
        continue;
      }

      // Only check absolute internal paths
      if (!href.startsWith('/')) continue;

      // Strip anchor and query string
      const pathOnly = href.split('#')[0].split('?')[0];
      if (!pathOnly) continue;

      // Normalize: strip trailing slash
      const normalized = pathOnly.replace(/\/$/, '') || '/';

      // Check route exists
      if (validRoutes.has(normalized)) continue;

      // Categorize
      let category = 'dead-link';

      // Missing /guides/ prefix?
      if (!normalized.startsWith('/guides/')) {
        const withPrefix = `/guides${normalized}`;
        if (validRoutes.has(withPrefix)) {
          category = 'missing-guides-prefix';
        }
      }

      issues.push({ file, line: i + 1, link: href, category });
    }
  }
}

// ---------- Report ----------
// Group by category then by unique link
const byCategory = new Map<
  string,
  Map<string, { count: number; files: string[] }>
>();

for (const issue of issues) {
  if (!byCategory.has(issue.category))
    byCategory.set(issue.category, new Map());
  // biome-ignore lint/style/noNonNullAssertion: guaranteed by set above
  const links = byCategory.get(issue.category)!;
  if (!links.has(issue.link)) links.set(issue.link, { count: 0, files: [] });
  // biome-ignore lint/style/noNonNullAssertion: guaranteed by set above
  const entry = links.get(issue.link)!;
  entry.count++;
  if (entry.files.length < 3) {
    entry.files.push(`${issue.file}:${issue.line}`);
  }
}

console.log(`\n${'='.repeat(60)}`);
console.log(`DEAD LINKS AUDIT — locale: ${locale}`);
console.log(`${'='.repeat(60)}`);
console.log(`Total issues: ${issues.length}`);

for (const [category, links] of [...byCategory.entries()].sort()) {
  const total = [...links.values()].reduce((a, b) => a + b.count, 0);
  console.log(
    `\n--- ${category} (${total} occurrences, ${links.size} unique) ---`,
  );
  const sorted = [...links.entries()].sort((a, b) => b[1].count - a[1].count);
  for (const [link, info] of sorted.slice(0, 80)) {
    console.log(`  [${info.count}x] ${link}`);
    for (const f of info.files) {
      console.log(`       ↳ ${f}`);
    }
  }
  if (sorted.length > 80) {
    console.log(`  ... and ${sorted.length - 80} more unique links`);
  }
}

// Summary by fixability
console.log(`\n${'='.repeat(60)}`);
console.log('SUMMARY');
console.log(`${'='.repeat(60)}`);
for (const [category, links] of [...byCategory.entries()].sort()) {
  const total = [...links.values()].reduce((a, b) => a + b.count, 0);
  console.log(
    `  ${category}: ${total} occurrences (${links.size} unique links)`,
  );
}
console.log(`  TOTAL: ${issues.length}`);
