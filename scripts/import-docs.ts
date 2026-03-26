#!/usr/bin/env npx tsx
/**
 * Fresh import script for converting docs from base/ to docs/<locale>/guides/
 *
 * All files are imported as .mdx for consistency.
 *
 * Usage:
 *   pnpm tsx scripts/import-docs.ts <category> [--locale <locale>]
 *   pnpm tsx scripts/import-docs.ts --all [--locale <locale>]
 *
 * Examples:
 *   pnpm tsx scripts/import-docs.ts account_and_service_management --locale fr
 *   pnpm tsx scripts/import-docs.ts --all --locale fr
 *   pnpm tsx scripts/import-docs.ts --all
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

// ============================================================================
// CONFIGURATION
// ============================================================================

const LOCALE_MAP: Record<string, string> = {
  'fr-fr': 'fr',
  'en-gb': 'en',
  'de-de': 'de',
  'es-es': 'es',
  'it-it': 'it',
  'pl-pl': 'pl',
  'pt-pt': 'pt',
};

const CATEGORIES = [
  'account_and_service_management',
  'bare_metal_cloud',
  'hosted_private_cloud',
  'manage_and_operate',
  'network',
  'public_cloud',
  'web_cloud',
];

const BASE_DIR = path.join(process.cwd(), 'base');
const DOCS_DIR = path.join(process.cwd(), 'docs');
const PUBLIC_DIR = path.join(DOCS_DIR, 'public');

// Unsupported code block languages mapping
const LANGUAGE_MAP: Record<string, string> = {
  ssh: 'bash',
  htaccess: 'text',
  apacheconf: 'text',
  curl: 'bash',
  console: 'bash',
  output: 'text',
  log: 'text',
  conf: 'ini',
  config: 'ini',
  apache: 'text',
  nginx: 'text',
  haproxy: 'text',
  properties: 'ini',
  env: 'bash',
  cfg: 'ini',
  txt: 'text',
  hcl: 'text',
  shell: 'bash',
  'bash-session': 'bash',
  'shell-session': 'bash',
};

// ============================================================================
// UTILITIES
// ============================================================================

function toKebabCase(str: string): string {
  return str
    .replace(/_/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

function copyRecursive(src: string, dest: string): void {
  if (!fs.existsSync(src)) return;

  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

/**
 * Check if guide has flag: hidden in frontmatter
 * Hidden guides are prefixed with _ for Rspress
 */
function isHiddenGuide(content: string): boolean {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return false;
  return /^flag:\s*hidden\s*$/m.test(frontmatterMatch[1]);
}

// ============================================================================
// CONTENT TRANSFORMATIONS
// ============================================================================

/**
 * Fix frontmatter quote issues
 */
function fixFrontmatter(content: string): string {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return content;

  let fm = match[1];
  const body = content.slice(match[0].length);

  // Convert single quotes to double quotes for title/excerpt
  fm = fm.replace(/^(title|excerpt):\s*'(.*)'\s*$/gm, '$1: "$2"');

  // Remove nested double quotes
  fm = fm.replace(
    /^(title|excerpt):\s*"([^"\n]*)"([^"\n]*)"([^"\n]*)"\s*$/gm,
    '$1: "$2$3$4"',
  );

  return `---\n${fm}\n---${body}`;
}

/**
 * Fix code block language tags
 */
function fixCodeLanguages(content: string): string {
  let result = content;
  for (const [unsupported, replacement] of Object.entries(LANGUAGE_MAP)) {
    const regex = new RegExp(`\`\`\`${unsupported}\\b`, 'gi');
    result = result.replace(regex, `\`\`\`${replacement}`);
  }
  // Also fix capitalized versions
  result = result.replace(/```Python\b/g, '```python');
  result = result.replace(/```Javascript\b/g, '```javascript');
  result = result.replace(/```Typescript\b/g, '```typescript');
  result = result.replace(/```JSON\b/g, '```json');
  result = result.replace(/```YAML\b/g, '```yaml');
  result = result.replace(/```Shell\b/g, '```bash');
  result = result.replace(/```Powershell\b/gi, '```powershell');
  return result;
}

/**
 * Update image paths from relative to absolute
 */
function updateImagePaths(content: string, imageBasePath: string): string {
  let result = content;

  // Markdown images: ![alt](images/...) or ![alt](./images/...)
  result = result.replace(
    /!\[([^\]]*)\]\((?:\.\/)?images\/([^)]+)\)(?:\{[^}]*\})?/g,
    (_, alt, imgPath) => `![${alt}](${imageBasePath}/${imgPath})`,
  );

  // HTML img tags with src="images/..."
  result = result.replace(
    /(<img[^>]*\s)src="(?:\.\/)?images\/([^"]+)"([^>]*>)/gi,
    (_, before, imgPath, after) =>
      `${before}src="${imageBasePath}/${imgPath}"${after}`,
  );

  return result;
}

/**
 * Strip markdown-it attributes like {.thumbnail}, {width="X"}, {.note-ref #id1}
 */
function stripAttributes(content: string): string {
  return content
    .replace(/\{\.thumbnail(?:\s+[^}]*)?\}/g, '')
    .replace(/\{\.action\}/g, '')
    .replace(/\{\.action\]/g, '') // Malformed variant
    .replace(/\{\.external-link\}/g, '')
    .replace(/\{\.ref\}/g, '')
    .replace(/\{\.w-\d+\}/g, '')
    .replace(/\{\.note-ref\s+#[^}]+\}/gi, '') // {.note-ref #id1}
    .replace(/\{\.[a-z][a-z0-9_-]*(?:\s+#[a-z0-9_-]+)?\}/gi, '') // {.class #id}
    .replace(/\{#[a-z][a-z0-9_-]*\}/gi, '') // {#id}
    .replace(/\{width="[^"]*"\}/gi, '')
    .replace(/\{height="[^"]*"\}/gi, '');
}

/**
 * Fix common HTML issues for MDX compatibility
 */
function fixHtmlForMdx(content: string): string {
  let result = content;

  // Fix malformed closing tags missing > (e.g., </sup followed by space or |)
  result = result.replace(/<\/sup(?=[|\s])/gi, '</sup>');
  result = result.replace(/<\/sub(?=[|\s])/gi, '</sub>');
  result = result.replace(/<\/a(?=[|\s])/gi, '</a>');
  result = result.replace(/<\/code(?=[|\s])/gi, '</code>');
  result = result.replace(/<\/strong(?=[|\s])/gi, '</strong>');
  result = result.replace(/<\/em(?=[|\s])/gi, '</em>');
  result = result.replace(/<\/span(?=[|\s])/gi, '</span>');
  result = result.replace(/<\/b(?=[|\s])/gi, '</b>');
  result = result.replace(/<\/i(?=[|\s])/gi, '</i>');
  result = result.replace(/<\/p(?=[|\s])/gi, '</p>');
  result = result.replace(/<\/li(?=[|\s])/gi, '</li>');
  result = result.replace(/<\/td(?=[|\s])/gi, '</td>');
  result = result.replace(/<\/th(?=[|\s])/gi, '</th>');
  result = result.replace(/<\/tr(?=[|\s])/gi, '</tr>');

  // Fix self-closing tags
  result = result.replace(/<br\s*\/?>/gi, '<br />');
  result = result.replace(/<\/br>/gi, '<br />');
  result = result.replace(/<hr\s*\/?>/gi, '<hr />');

  // Fix <br inside tags like <b>text<br /> -> needs space before <br
  result = result.replace(/<b>([^<]*)<br/gi, '<b>$1 <br');

  // Fix common typos
  result = result.replace(/<bt>/gi, '<br />'); // bt -> br typo
  result = result.replace(/<\/b>(\s*\*\*)/g, '<br />$1'); // </b> followed by ** (typo for <br />)

  // Fix unclosed <b> tags before <br />
  result = result.replace(/<b>([^<]*)<br \/>/gi, '<b>$1</b><br />');

  // Make img tags self-closing
  result = result.replace(/<img\s+([^>]*[^/])>/gi, '<img $1 />');

  // Remove data URI images (too large for MDX)
  result = result.replace(/<img\s+src="data:[^"]+"\s*[^>]*\/?>/gi, '');

  // Fix <a name="x"> to <a id="x"></a>
  result = result.replace(/<a\s+name="([^"]+)">/gi, '<a id="$1"></a>');

  // Quote unquoted attributes
  result = result.replace(/rowspan=(\d+)/g, 'rowspan="$1"');
  result = result.replace(/colspan=(\d+)/g, 'colspan="$1"');

  // JSX attribute fixes
  result = result.replace(/<ol strart="(\d+)">/gi, '<ol start={$1}>'); // Fix typo and convert to JSX
  result = result.replace(/<ol start="(\d+)">/gi, '<ol start={$1}>'); // Convert to JSX number
  result = result.replace(/\bclass="/g, 'className="'); // HTML class -> JSX className

  // Remove style attributes (break MDX)
  result = result.replace(/\s+style="[^"]*"/gi, '');

  // Remove center tags
  result = result.replace(/<\/?center>/gi, '');

  // Remove HTML comments
  result = result.replace(/<!--[\s\S]*?-->/g, '');

  // Remove style and script blocks
  result = result.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  result = result.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

  // Convert <https://url> to links
  result = result.replace(/<(https?:\/\/[^>]+)>/g, '[$1]($1)');

  // Fix email in angle brackets
  result = result.replace(
    /<([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})>/g,
    '**$1**',
  );

  // Fix smart quotes
  result = result.replace(/[\u201C\u201D\u201E\u201F]/g, '"');
  result = result.replace(/[\u2018\u2019\u201A\u201B]/g, "'");

  return result;
}

/**
 * Transform admonitions to Rspress format
 */
function transformAdmonitions(content: string): string {
  return content
    .replace(/>\s*\[!primary\]/gi, '> [!INFO]')
    .replace(/>\s*\[!success\]/gi, '> [!TIP]')
    .replace(/>\s*\[!alert\]/gi, '> [!DANGER]');
}

/**
 * Transform [!tabs] blocks to <Tabs> JSX components
 */
function transformTabs(content: string): {
  content: string;
  hasImport: boolean;
} {
  const tabsRegex =
    />\s*\[!tabs\]\s*\n((?:>\s*[^\n]+\n(?:>>\s*\n?(?:>>\s*[^\n]*\n)*)*)+)/gi;

  if (!tabsRegex.test(content)) {
    return { content, hasImport: false };
  }

  // Reset regex
  tabsRegex.lastIndex = 0;

  // Fix ><Tabs> pattern (Tabs after blockquote marker should be on new line)
  // Match both start of line and after newline
  let processedContent = content.replace(/\n><Tabs>/g, '\n<Tabs>');
  processedContent = processedContent.replace(/^><Tabs>/gm, '<Tabs>');

  const result = processedContent.replace(tabsRegex, (_, tabsContent) => {
    const lines = tabsContent.split('\n');
    const tabs: Array<{ title: string; content: string[] }> = [];
    let currentTab: { title: string; content: string[] } | null = null;

    for (const line of lines) {
      // Tab title: starts with > but not >>
      if (/^>\s*[^>]/.test(line) && !/^>>\s*/.test(line)) {
        const title = line.replace(/^>\s*/, '').trim();
        if (title && !title.startsWith('[!')) {
          if (currentTab) tabs.push(currentTab);
          currentTab = { title, content: [] };
        }
      }
      // Tab content: starts with >>
      else if (/^>>\s*/.test(line) && currentTab) {
        currentTab.content.push(line.replace(/^>>\s*/, ''));
      }
    }

    if (currentTab) tabs.push(currentTab);
    if (tabs.length === 0) return tabsContent;

    let jsx = '<Tabs>\n';
    for (const tab of tabs) {
      const cleanTitle = tab.title
        .replace(/^\s*-\s*/, '')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/"/g, "'")
        .trim();
      const tabContent = tab.content.join('\n').trim();
      jsx += `<Tab label="${cleanTitle}">\n\n${tabContent}\n\n</Tab>\n`;
    }
    jsx += '</Tabs>\n\n';
    return jsx;
  });

  return { content: result, hasImport: true };
}

/**
 * Transform @api blocks to <Api /> JSX components
 */
function transformApi(content: string): {
  content: string;
  hasImport: boolean;
} {
  // Match patterns like:
  // > @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/sap
  const apiRegex = />\s*@api\s*\{([^}]+)\}\s*(\S+)\s*(\w+)\s*(\S+)/gi;

  if (!apiRegex.test(content)) {
    return { content, hasImport: false };
  }

  // Reset regex
  apiRegex.lastIndex = 0;

  const result = content.replace(
    apiRegex,
    (_, version, section, method, route) => {
      return `<Api version="${version}" section="${section}" method="${method}" route={${JSON.stringify(route)}} />`;
    },
  );

  return { content: result, hasImport: true };
}

/**
 * Fix markdown links that MDX misinterprets as JSX
 * Links like [text](/links/...) or [text](/pages/...) confuse the MDX parser
 */
function fixMarkdownLinks(content: string): string {
  let result = content;

  // The issue: MDX sees [text](/path) and sometimes interprets /path as a closing tag
  // Solution: Use reference-style links or ensure proper escaping

  // Fix double </a> tags
  result = result.replace(/<\/a><\/a>/g, '</a>');
  result = result.replace(/<\/a>\s*<\/a>/g, '</a>');

  // Fix stray </a> after anchor links
  result = result.replace(/(<a id="[^"]+"><\/a>)<\/a>/g, '$1');

  // Fix </a> at end of markdown links (should not be there)
  result = result.replace(/\]\([^)]+\)<\/a>/g, (match) =>
    match.replace(/<\/a>$/, ''),
  );

  // Fix broken links in angle brackets: </path/to/something> -> [link](/path/to/something)
  // Only match paths with at least one slash after the leading slash (to avoid matching closing tags like </a>)
  result = result.replace(
    /<(\/[a-z][a-z0-9-]*\/[a-z0-9-]+(?:\/[a-z0-9-]+)*)>/gi,
    '[$1]($1)',
  );

  // Fix unclosed <a href="..."> tags - add </a> before end of line if missing
  result = result.replace(
    /<a href="[^"]*">\[[^\]]*\]\([^)]*\)(?!<\/a>)/g,
    (match) => `${match}</a>`,
  );

  return result;
}

/**
 * Escape JSX expressions in text content
 */
function escapeJsxExpressions(content: string): string {
  let result = content;

  // Build code block ranges to skip
  const codeBlockRanges: Array<[number, number]> = [];
  const codeBlockRegex = /```[\s\S]*?```|`[^`\n]+`/g;
  let match = codeBlockRegex.exec(result);
  while (match !== null) {
    codeBlockRanges.push([match.index, match.index + match[0].length]);
    match = codeBlockRegex.exec(result);
  }

  const isInCodeBlock = (index: number) =>
    codeBlockRanges.some(([start, end]) => index >= start && index < end);

  // Escape double braces {{ ... }} outside code blocks (template syntax)
  result = result.replace(/\{\{([^}]+)\}\}/g, (match, inner, offset) => {
    if (isInCodeBlock(offset)) return match;
    return `\\{\\{${inner}\\}\\}`;
  });

  // Fix partially escaped placeholders: <something\> -> \<something\>
  result = result.replace(/<([a-zA-Z][a-zA-Z0-9_-]*)\\>/g, '\\<$1\\>');

  // Fix double backslash before angle brackets: **\\<text\>** -> **\<text\>**
  result = result.replace(/\\\\</g, '\\<');

  // Fix partially escaped braces with pipes: {D\|J\|...} -> \{D\|J\|...\}
  result = result.replace(/\{([A-Z|\\]+)\}/g, (match) => {
    if (match.startsWith('\\{')) return match;
    return `\\${match.slice(0, -1)}\\}`;
  });

  // Escape operator groups like (<, >, =) that look like JSX
  result = result.replace(/\(<,\s*>,\s*=\)/g, '(\\<, \\>, =)');

  // Escape Calm/Nutanix template variables @@{...}@@ -> @@\{...\}@@
  result = result.replace(/@@\{([^}]+)\}@@/g, '@@\\{$1\\}@@');

  // Wrap Prometheus label patterns in backticks: {listener=ID} -> `{listener=ID}`
  result = result.replace(
    /(?<!`)(\{(?:listener|pool|member)=[A-Z]+\})(?!`)/g,
    '`$1`',
  );

  // Escape {variable} patterns not in code blocks
  result = result.replace(
    /\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g,
    (match, inner, offset) => {
      if (isInCodeBlock(offset)) return match;
      return `&#123;${inner}&#125;`;
    },
  );

  // Escape arrow patterns like ->text<- used for highlighting
  result = result.replace(/->\*\*([^*]+)\*\*<-/g, '-&gt;**$1**&lt;-');
  result = result.replace(/->-<-/g, '-&gt;-&lt;-');
  result = result.replace(/-><-/g, '-&gt;&lt;-');

  // Escape comparison operators that look like JSX
  result = result.replace(/(<)(\d)/g, '&lt;$2');
  result = result.replace(/<>/g, '&lt;&gt;');
  result = result.replace(/<->/g, '&lt;-&gt;');
  result = result.replace(/<=>/g, '&lt;=&gt;');
  // Escape less/greater than or equal - but not when part of HTML attribute
  result = result.replace(/([^"'])<=/g, '$1&lt;='); // less than or equal
  result = result.replace(/([^"'])>=/g, '$1&gt;='); // greater than or equal

  // Escape placeholder tags like <IP_Endpoint>, <value>, <name>, <objectId> etc.
  // Uppercase placeholders (UUID_of_volume, SAP_SID, etc.)
  // Exclude known JSX components: Tabs, Tab, Api, etc.
  result = result.replace(/<([A-Z][A-Za-z0-9_-]*)>/g, (match, tag) => {
    const jsxComponents = ['Tabs', 'Tab', 'Api'];
    if (jsxComponents.includes(tag)) return match;
    return `&lt;${tag}&gt;`;
  });
  // Lowercase placeholders with underscores/hyphens
  result = result.replace(/<([a-z][a-z0-9_]*[_-][a-z0-9_-]*)>/g, '&lt;$1&gt;');
  // CamelCase placeholders like <yourdockerhubId>, <backupName>, etc.
  result = result.replace(/<([a-z]+[A-Z][a-zA-Z0-9]*)>/g, '&lt;$1&gt;');

  // Simple lowercase placeholders (excluding valid HTML tags)
  // This list excludes: summary, details, code, span, div, etc.
  result = result.replace(
    /<(name|value|objectId|type|method|path|key|id|host|port|username|password|token|region|zone|project|cluster|namespace|container|image|version|tag|label|selector|annotation|resource|service|endpoint|url|uri|domain|subdomain|bucket|object|file|directory|volume|mount|secret|configmap|env|var|param|arg|flag|option|setting|config|profile|role|policy|permission|scope|limit|quota|size|count|number|index|offset|length|duration|interval|timeout|retry|delay|weight|priority|order|level|status|state|phase|condition|reason|message|description|comment|note|title|detail|info|warning|error|debug|trace|log|output|result|response|request|input|data|payload|body|header|query|form|cookie|session|cache|storage|memory|cpu|disk|network|gateway|router|switch|firewall|loadbalancer|proxy|server|client|node|worker|master|replica|shard|partition|topic|queue|exchange|binding|channel|stream|pipe|socket|connection|pool|transaction|batch|job|task|workflow|pipeline|stage|step|action|event|trigger|handler|listener|callback|hook|middleware|filter|interceptor|decorator|wrapper|adapter|bridge|facade|factory|builder|singleton|prototype|strategy|observer|visitor|iterator|mediator|command|chain|composite|flyweight|nullobject|alias|firmware|X)>/gi,
    '&lt;$1&gt;',
  );

  // Escape common command output tags
  result = result.replace(/<none>/gi, '&lt;none&gt;');
  result = result.replace(/<pending>/gi, '&lt;pending&gt;');
  result = result.replace(/<unknown>/gi, '&lt;unknown&gt;');
  result = result.replace(/<empty>/gi, '&lt;empty&gt;');

  return result;
}

/**
 * Add necessary imports after frontmatter
 */
function addImports(
  content: string,
  needsTabs: boolean,
  needsApi: boolean,
): string {
  if (!needsTabs && !needsApi) return content;

  const imports: string[] = [];
  if (needsTabs) {
    imports.push("import { Tab, Tabs } from '@rspress/core/theme';");
  }
  if (needsApi) {
    imports.push("import Api from '@components/Api';");
  }

  const frontmatterEnd = content.indexOf('---', 3);
  if (frontmatterEnd === -1) {
    return `${imports.join('\n')}\n\n${content}`;
  }

  const afterFrontmatter = frontmatterEnd + 3;
  return (
    content.slice(0, afterFrontmatter) +
    '\n\n' +
    imports.join('\n') +
    '\n' +
    content.slice(afterFrontmatter)
  );
}

/**
 * Main content transformation pipeline
 */
function transformContent(
  content: string,
  imageBasePath: string,
): {
  content: string;
  needsTabs: boolean;
  needsApi: boolean;
} {
  let result = content;

  // Phase 1: Basic cleanup
  result = fixFrontmatter(result);
  result = stripAttributes(result);
  result = fixCodeLanguages(result);
  result = updateImagePaths(result, imageBasePath);
  result = fixHtmlForMdx(result);
  result = fixMarkdownLinks(result);
  result = transformAdmonitions(result);

  // Phase 2: Component transformations
  const { content: withTabs, hasImport: needsTabs } = transformTabs(result);
  result = withTabs;

  const { content: withApi, hasImport: needsApi } = transformApi(result);
  result = withApi;

  // Phase 3: JSX escaping (for all MDX files)
  result = escapeJsxExpressions(result);

  // Phase 4: Add imports
  result = addImports(result, needsTabs, needsApi);

  return { content: result, needsTabs, needsApi };
}

// ============================================================================
// FILE PROCESSING
// ============================================================================

interface Stats {
  processed: number;
  skipped: number;
  images: number;
  withTabs: number;
  withApi: number;
}

function processGuide(
  guideDir: string,
  guideName: string,
  categoryPath: string,
  localeFilter: string | undefined,
  stats: Stats,
): void {
  const kebabGuideName = toKebabCase(guideName);
  const kebabCategoryPath = categoryPath.split('/').map(toKebabCase).join('/');
  const imageBasePath = `/images/guides/${kebabCategoryPath}/${kebabGuideName}`;

  // Copy images
  const imagesDir = path.join(guideDir, 'images');
  if (fs.existsSync(imagesDir)) {
    const targetImagesDir = path.join(
      PUBLIC_DIR,
      'images',
      'guides',
      kebabCategoryPath,
      kebabGuideName,
    );
    copyRecursive(imagesDir, targetImagesDir);
    stats.images += fs
      .readdirSync(imagesDir)
      .filter((f) => fs.statSync(path.join(imagesDir, f)).isFile()).length;
  }

  // Process guide files
  const files = fs.readdirSync(guideDir);
  for (const file of files) {
    if (!file.startsWith('guide.') || !file.endsWith('.md')) continue;

    const localeMatch = file.match(/guide\.([a-z]{2}-[a-z]{2})\.md/i);
    if (!localeMatch) continue;

    const sourceLocale = localeMatch[1].toLowerCase();
    const targetLocale = LOCALE_MAP[sourceLocale];

    if (!targetLocale) {
      stats.skipped++;
      continue;
    }

    if (localeFilter && targetLocale !== localeFilter) {
      stats.skipped++;
      continue;
    }

    const sourcePath = path.join(guideDir, file);
    const content = fs.readFileSync(sourcePath, 'utf-8');

    const {
      content: transformed,
      needsTabs,
      needsApi,
    } = transformContent(content, imageBasePath);

    if (needsTabs) stats.withTabs++;
    if (needsApi) stats.withApi++;

    // Write as .mdx (prefix with _ if hidden)
    const targetDir = path.join(
      DOCS_DIR,
      targetLocale,
      'guides',
      kebabCategoryPath,
    );
    fs.mkdirSync(targetDir, { recursive: true });

    const isHidden = isHiddenGuide(content);
    const filePrefix = isHidden ? '_' : '';
    const targetPath = path.join(
      targetDir,
      `${filePrefix}${kebabGuideName}.mdx`,
    );
    fs.writeFileSync(targetPath, transformed);
    stats.processed++;
  }
}

function processDirectory(
  dir: string,
  categoryPath: string,
  localeFilter: string | undefined,
  stats: Stats,
): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const subDir = path.join(dir, entry.name);
    const files = fs.readdirSync(subDir);
    const hasGuideFiles = files.some(
      (f) => f.startsWith('guide.') && f.endsWith('.md'),
    );

    if (hasGuideFiles) {
      processGuide(subDir, entry.name, categoryPath, localeFilter, stats);
    } else {
      // Nested directory
      processDirectory(
        subDir,
        `${categoryPath}/${entry.name}`,
        localeFilter,
        stats,
      );
    }
  }
}

function processCategory(
  category: string,
  localeFilter: string | undefined,
  stats: Stats,
): void {
  const categoryDir = path.join(BASE_DIR, category);
  if (!fs.existsSync(categoryDir)) {
    console.error(`Category not found: ${category}`);
    return;
  }

  console.log(`\nProcessing category: ${category}`);

  const entries = fs.readdirSync(categoryDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      console.log(`  Subcategory: ${entry.name}`);
      processDirectory(
        path.join(categoryDir, entry.name),
        `${category}/${entry.name}`,
        localeFilter,
        stats,
      );
    }
  }
}

// ============================================================================
// CLI
// ============================================================================

function main(): void {
  const args = process.argv.slice(2);

  // Parse --locale flag
  let localeFilter: string | undefined;
  const localeIndex = args.indexOf('--locale');
  if (localeIndex !== -1 && args[localeIndex + 1]) {
    localeFilter = args[localeIndex + 1];
    args.splice(localeIndex, 2);
  }

  // Parse --all flag
  const allFlag = args.includes('--all');
  if (allFlag) {
    args.splice(args.indexOf('--all'), 1);
  }

  if (!allFlag && args.length < 1) {
    console.log(
      'Usage: pnpm tsx scripts/import-docs.ts <category> [--locale <locale>]',
    );
    console.log(
      '       pnpm tsx scripts/import-docs.ts --all [--locale <locale>]',
    );
    console.log('');
    console.log('Categories:', CATEGORIES.join(', '));
    console.log('Locales: fr, en, de, es, it, pl, pt');
    console.log('');
    console.log('Examples:');
    console.log(
      '  pnpm tsx scripts/import-docs.ts account_and_service_management --locale fr',
    );
    console.log('  pnpm tsx scripts/import-docs.ts --all --locale fr');
    console.log('  pnpm tsx scripts/import-docs.ts --all');
    process.exit(1);
  }

  const categoriesToProcess = allFlag ? CATEGORIES : [args[0]];

  console.log('='.repeat(60));
  console.log('Documentation Import');
  console.log('='.repeat(60));
  if (localeFilter) {
    console.log(`Locale filter: ${localeFilter}`);
  }
  console.log(`Categories: ${categoriesToProcess.join(', ')}`);

  const stats: Stats = {
    processed: 0,
    skipped: 0,
    images: 0,
    withTabs: 0,
    withApi: 0,
  };

  for (const category of categoriesToProcess) {
    processCategory(category, localeFilter, stats);
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log('Import Summary');
  console.log('='.repeat(60));
  console.log(`Files processed: ${stats.processed}`);
  console.log(`Files skipped:   ${stats.skipped}`);
  console.log(`Images copied:   ${stats.images}`);
  console.log(`With Tabs:       ${stats.withTabs}`);
  console.log(`With Api:        ${stats.withApi}`);
}

main();
