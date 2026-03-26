import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

// Find files containing BOTH :::details{title= AND <Api
const detailsFiles = execSync(
  "grep -rl ':::details{title=' docs/ --include='*.mdx'",
  { encoding: 'utf-8' },
)
  .trim()
  .split('\n');

const apiFiles = new Set(
  execSync("grep -rl '<Api' docs/ --include='*.mdx'", { encoding: 'utf-8' })
    .trim()
    .split('\n'),
);

const targetFiles = detailsFiles.filter((f) => apiFiles.has(f));

console.log(
  `Found ${targetFiles.length} files containing both :::details{title= and <Api\n`,
);

let totalFiles = 0;
let totalReplacements = 0;

for (const filePath of targetFiles) {
  const content = readFileSync(filePath, 'utf-8');
  let replacements = 0;

  // Strategy: split into lines, walk through, track state for nesting.
  const lines = content.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const match = line.match(/^:::details\{title="(.*)"\}\s*$/);

    if (match) {
      const title = match[1];
      // Replace opening with <details><summary>
      result.push('<details>');
      result.push(`<summary>${title}</summary>`);
      result.push('');
      i++;

      // Now find the matching closing :::
      // Handle potential nesting of other ::: directives
      let depth = 0;
      while (i < lines.length) {
        const innerLine = lines[i];

        // Check if this is another opening ::: directive (like :::tip, :::note, etc.)
        if (/^:::[a-zA-Z]/.test(innerLine)) {
          depth++;
          result.push(innerLine);
          i++;
          continue;
        }

        // Check if this is a closing :::
        if (/^:::\s*$/.test(innerLine)) {
          if (depth > 0) {
            // This closes a nested directive
            depth--;
            result.push(innerLine);
            i++;
            continue;
          } else {
            // This is the closing ::: for our details block
            result.push('</details>');
            replacements++;
            i++;
            break;
          }
        }

        result.push(innerLine);
        i++;
      }
    } else {
      result.push(line);
      i++;
    }
  }

  if (replacements > 0) {
    const newContent = result.join('\n');
    writeFileSync(filePath, newContent, 'utf-8');
    console.log(`${filePath} - ${replacements} replacement(s)`);
    totalFiles++;
    totalReplacements += replacements;
  }
}

console.log(
  `\nDone: ${totalReplacements} replacements across ${totalFiles} files.`,
);
