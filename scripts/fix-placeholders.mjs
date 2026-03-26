import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const VALID_HTML_TAGS = new Set([
  'a',
  'abbr',
  'address',
  'article',
  'aside',
  'audio',
  'b',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
]);

const REACT_COMPONENTS = new Set([
  'Tab',
  'Tabs',
  'Api',
  'AIChatbot',
  'NotFound',
]);

// Pattern: <word> where word is [a-zA-Z][a-zA-Z0-9_-]* and > immediately follows
const PLACEHOLDER_RE = /<([a-zA-Z][a-zA-Z0-9_-]*)>/g;

function isPlaceholder(tagName) {
  if (tagName.startsWith('/')) return false;
  if (VALID_HTML_TAGS.has(tagName.toLowerCase())) return false;
  if (REACT_COMPONENTS.has(tagName)) return false;
  return true;
}

function processLine(line) {
  // Split the line into segments: inside backticks vs outside.
  // Only process segments outside backticks.
  const segments = [];
  let i = 0;
  let replacements = 0;

  while (i < line.length) {
    const backtickIdx = line.indexOf('`', i);
    if (backtickIdx === -1) {
      segments.push({ text: line.slice(i), inCode: false });
      break;
    }

    if (backtickIdx > i) {
      segments.push({ text: line.slice(i, backtickIdx), inCode: false });
    }

    const closingIdx = line.indexOf('`', backtickIdx + 1);
    if (closingIdx === -1) {
      // No closing backtick — treat rest as inside backtick (unterminated)
      segments.push({ text: line.slice(backtickIdx), inCode: true });
      i = line.length;
      break;
    }

    segments.push({
      text: line.slice(backtickIdx, closingIdx + 1),
      inCode: true,
    });
    i = closingIdx + 1;
  }

  const result = segments.map((seg) => {
    if (seg.inCode) return seg.text;

    return seg.text.replace(PLACEHOLDER_RE, (match, tagName) => {
      if (isPlaceholder(tagName)) {
        replacements++;
        return `\`${match}\``;
      }
      return match;
    });
  });

  return { text: result.join(''), replacements };
}

async function getAllMdxFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.mdx')) {
      files.push(join(entry.parentPath || entry.path, entry.name));
    }
  }
  return files;
}

async function main() {
  const docsDir = join(process.cwd(), 'docs');
  console.log(`Scanning for .mdx files under ${docsDir} ...`);

  const files = await getAllMdxFiles(docsDir);
  console.log(`Found ${files.length} .mdx files`);

  let totalFilesChanged = 0;
  let totalReplacements = 0;

  for (const filePath of files) {
    const content = await readFile(filePath, 'utf-8');
    const lines = content.split('\n');

    let inCodeFence = false;
    let fileReplacements = 0;
    const newLines = [];

    for (const line of lines) {
      const trimmed = line.trimStart();
      if (trimmed.startsWith('```')) {
        inCodeFence = !inCodeFence;
        newLines.push(line);
        continue;
      }

      if (inCodeFence) {
        newLines.push(line);
        continue;
      }

      const { text, replacements } = processLine(line);
      newLines.push(text);
      fileReplacements += replacements;
    }

    if (fileReplacements > 0) {
      const newContent = newLines.join('\n');
      await writeFile(filePath, newContent, 'utf-8');
      totalFilesChanged++;
      totalReplacements += fileReplacements;
      console.log(`  Changed: ${filePath} (${fileReplacements} replacements)`);
    }
  }

  console.log('');
  console.log('--- Summary ---');
  console.log(`Files changed: ${totalFilesChanged}`);
  console.log(`Total replacements: ${totalReplacements}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
