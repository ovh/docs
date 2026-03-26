#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

// Get all files with /// details
const files = execSync('grep -rl "/// details" docs/', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`Found ${files.length} files to migrate`);

let totalReplacements = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf-8');
  let replacements = 0;

  // Replace opening: /// details | Title -> :::details{title="Title"}
  content = content.replace(/^\/\/\/ details \| (.+)$/gm, (_match, title) => {
    replacements++;
    // Escape any double quotes in the title
    const escapedTitle = title.replace(/"/g, '\\"');
    return `:::details{title="${escapedTitle}"}`;
  });

  // Replace closing: /// (on its own line) -> :::
  // Only replace /// that are on their own line (closers)
  content = content.replace(/^\/\/\/$/gm, ':::');

  if (replacements > 0) {
    writeFileSync(file, content);
    console.log(`✓ ${file} (${replacements} details blocks)`);
    totalReplacements += replacements;
  }
}

console.log(
  `\nMigrated ${totalReplacements} details blocks across ${files.length} files`,
);
