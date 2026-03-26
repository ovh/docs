#!/usr/bin/env node
/**
 * Fix relative self-links: (./#anchor) → (#anchor) and (./##anchor) → (#anchor)
 *
 * In MDX, `(./#foo)` resolves to the parent directory + anchor, not the current page.
 * The intent is always a same-page anchor link: `(#foo)`.
 *
 * Usage:
 *   npx tsx scripts/fix-relative-self-links.ts              # Apply
 *   npx tsx scripts/fix-relative-self-links.ts --dry-run     # Preview
 */

import * as fs from 'node:fs';
import { globSync } from 'glob';

const DOCS_DIR = 'docs';
const DRY_RUN = process.argv.includes('--dry-run');

// Match (./#...) or (./##...) — the ./ prefix before a # anchor
const regex = /\(\.\/#{1,2}([^)]*)\)/g;

const allFiles = globSync(`${DOCS_DIR}/**/*.mdx`);

let totalFixes = 0;
let filesModified = 0;

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let fixes = 0;

  const newContent = content.replace(regex, (_match, anchor) => {
    fixes++;
    return `(#${anchor})`;
  });

  if (fixes > 0) {
    totalFixes += fixes;
    filesModified++;
    if (!DRY_RUN) {
      fs.writeFileSync(file, newContent, 'utf-8');
    }
  }
}

console.log(
  DRY_RUN
    ? '=== FIX RELATIVE SELF-LINKS (DRY RUN) ==='
    : '=== FIX RELATIVE SELF-LINKS ===',
);
console.log(`Fixed: ${totalFixes} links in ${filesModified} files`);
if (DRY_RUN) console.log('(Dry run — no files were modified)');
