#!/usr/bin/env node

/**
 * Fix :::details{title="...<a id=\"...\">..."} blocks by converting them to
 * <details><summary>...</summary>...</details> HTML.
 *
 * The escaped quotes \" in the directive title attribute cause MDX build errors.
 * Converting to HTML <details> removes the need for escaped quotes.
 */

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

// Find all MDX files with :::details containing escaped quotes
const files = execSync(
  String.raw`grep -rln ':::details{title=".*\\\"' docs --include="*.mdx"`,
  { cwd: process.cwd(), encoding: 'utf-8' },
)
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(
  `Found ${files.length} files with :::details containing escaped quotes`,
);

let totalFiles = 0;
let totalFixes = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf-8');
  const original = content;

  const lines = content.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Match :::details{title="..."} with escaped quotes
    const match = line.match(/^(:::details)\{title="(.*)"\}\s*$/);
    if (match?.[2].includes('\\"')) {
      // Extract title and unescape quotes
      const title = match[2].replace(/\\"/g, '"');

      // Replace opening with <details><summary>
      result.push(`<details><summary>${title}</summary>`);
      totalFixes++;
      i++;

      // Find the closing ::: for this block
      let depth = 1;
      while (i < lines.length) {
        const current = lines[i];

        if (/^:::[a-z]/.test(current)) {
          depth++;
          result.push(current);
        } else if (/^:::?\s*$/.test(current) && depth > 1) {
          depth--;
          result.push(current);
        } else if (/^:::?\s*$/.test(current) && depth === 1) {
          result.push('</details>');
          break;
        } else {
          result.push(current);
        }
        i++;
      }
    } else {
      result.push(line);
    }
    i++;
  }

  content = result.join('\n');

  if (content !== original) {
    writeFileSync(file, content, 'utf-8');
    totalFiles++;
    console.log(`  Fixed: ${file}`);
  }
}

console.log(`\nConverted ${totalFixes} blocks in ${totalFiles} files`);
