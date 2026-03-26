#!/usr/bin/env npx tsx
/**
 * Migration script for converting docs from base/ to docs/<locale>/guides/
 *
 * Usage:
 *   npx tsx scripts/migrate-docs.ts <source-category> [subcategory]
 *
 * Example:
 *   npx tsx scripts/migrate-docs.ts account_and_service_management account_information
 *   npx tsx scripts/migrate-docs.ts account_and_service_management
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

// Locale mapping from source to target
const LOCALE_MAP: Record<string, string> = {
  'fr-fr': 'fr',
  'en-gb': 'en',
  'de-de': 'de',
  'es-es': 'es',
  'it-it': 'it',
  'pl-pl': 'pl',
  'pt-pt': 'pt',
};

const BASE_DIR = path.join(process.cwd(), 'base');
const DOCS_DIR = path.join(process.cwd(), 'docs');
const PUBLIC_DIR = path.join(DOCS_DIR, 'public');

/**
 * Convert snake_case to kebab-case
 */
function toKebabCase(str: string): string {
  return str
    .replace(/_/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Transform frontmatter to fix quote issues
 */
function transformFrontmatter(content: string): string {
  // Split content into frontmatter and body
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    return content;
  }

  let frontmatter = frontmatterMatch[1];
  const body = content.slice(frontmatterMatch[0].length);

  // Convert single-quoted title/excerpt to double quotes (to handle apostrophes)
  frontmatter = frontmatter.replace(
    /^(title|excerpt):\s*'(.*)'\s*$/gm,
    '$1: "$2"',
  );

  // Remove nested double quotes in title/excerpt (e.g., "Error "500"" → "Error 500")
  // Use [^"\n] to avoid matching across lines
  frontmatter = frontmatter.replace(
    /^(title|excerpt):\s*"([^"\n]*)"([^"\n]*)"([^"\n]*)"([^"\n]*)"?\s*$/gm,
    '$1: "$2$3$4$5"',
  );
  // Handle simpler case with just one nested quote pair
  frontmatter = frontmatter.replace(
    /^(title|excerpt):\s*"([^"\n]*)"([^"\n]*)"([^"\n]*)"\s*$/gm,
    '$1: "$2$3$4"',
  );

  return `---\n${frontmatter}\n---${body}`;
}

/**
 * Fix code block language tags that Shiki doesn't support
 */
function fixCodeBlockLanguages(content: string): string {
  let result = content;

  // Map of unsupported languages to supported alternatives (case-insensitive matching)
  const languageMap: Record<string, string> = {
    ssh: 'bash',
    htaccess: 'text',
    apacheconf: 'text',
    curl: 'bash',
    console: 'bash',
    Python: 'python', // Capital P variant
    Javascript: 'javascript', // Capital J variant
    Typescript: 'typescript', // Capital T variant
    JSON: 'json', // All caps variant
    YAML: 'yaml', // All caps variant
    XML: 'xml', // All caps variant
    SQL: 'sql', // All caps variant
    HTML: 'html', // All caps variant
    CSS: 'css', // All caps variant
    Dockerfile: 'dockerfile', // Capital D variant
    BASH: 'bash', // All caps variant
    Shell: 'bash', // Shell variant
    shell: 'bash', // Lowercase shell
    'bash-session': 'bash', // bash-session variant
    'shell-session': 'bash', // shell-session variant
    output: 'text', // output variant
    log: 'text', // log variant
    Powershell: 'powershell', // Capital P variant
    PowerShell: 'powershell', // Mixed case variant
    conf: 'ini', // conf -> ini
    config: 'ini', // config -> ini
    apache: 'text', // apache config
    nginx: 'text', // nginx config
    haproxy: 'text', // haproxy config
    properties: 'ini', // properties files
    env: 'bash', // env files
    cfg: 'ini', // cfg files
    txt: 'text', // txt files
    hcl: 'text', // HCL (Terraform)
  };

  for (const [unsupported, replacement] of Object.entries(languageMap)) {
    const regex = new RegExp(`\`\`\`${unsupported}\\b`, 'gi');
    result = result.replace(regex, `\`\`\`${replacement}`);
  }

  return result;
}

/**
 * Escape JSX expressions in plain text (curly braces that would be interpreted as JSX)
 * This is ONLY called for .mdx files that contain JSX components (Tabs, Api)
 */
function escapeJsxExpressions(content: string): string {
  let result = content;

  // Escape Nutanix Calm templating syntax @@{...}@@
  result = result.replace(/@@\{([^}]+)\}@@/g, '@@&#123;$1&#125;@@');

  // Wrap double curly braces (n8n/template syntax) in inline code backticks
  // This is better than entity escaping for readability
  // Match patterns like {{ ... }} including those with nested braces
  result = result.replace(
    /\{\{\s*([^}]+(?:\}[^}][^}]*)*)\s*\}\}/g,
    '`{{ $1 }}`',
  );

  // Escape standalone curly braces in template syntax like {variable}
  result = result.replace(/\{([A-Za-z_][A-Za-z0-9_.]*)\}/g, (_match, inner) => {
    // Don't escape if it looks like a valid JSX expression (starts with lowercase and is short)
    // or if it's inside a code block (we handle this elsewhere)
    return `&#123;${inner}&#125;`;
  });

  // Escape curly braces that look like variable references in text
  // This prevents MDX from interpreting {variableName} as JSX expressions
  result = result.replace(/\{([^}]+)\}/g, (match, innerContent) => {
    // Skip if it's empty or looks like code blocks (has newlines or is very long)
    if (
      !innerContent.trim() ||
      innerContent.includes('\n') ||
      innerContent.length > 50
    ) {
      return match;
    }
    // Skip if it starts with uppercase (React component) or contains special chars for JSX
    if (
      /^[A-Z]/.test(innerContent) ||
      innerContent.includes('"') ||
      innerContent.includes("'")
    ) {
      return match;
    }
    // Skip if already escaped
    if (match.includes('&#123;') || match.includes('&#125;')) {
      return match;
    }
    return `&#123;${innerContent}&#125;`;
  });

  // Escape comparison operators and arrows that look like HTML tags
  // <= and >= when followed by a number or space+number
  result = result.replace(/<=\s*(\d)/g, '&lt;= $1');
  result = result.replace(/>=\s*(\d)/g, '&gt;= $1');
  // Escape <-> and <=> arrows
  result = result.replace(/<->/g, '&lt;-&gt;');
  result = result.replace(/<=>/g, '&lt;=&gt;');
  // Escape empty angle brackets <> (JSX interprets as React fragment)
  result = result.replace(/<>/g, '&lt;&gt;');
  // Escape < followed by digit (version numbers like <1.0, <10, etc.)
  result = result.replace(/<(\d)/g, '&lt;$1');
  // Escape common command output tags that aren't real HTML
  result = result.replace(/<none>/gi, '&lt;none&gt;');
  result = result.replace(/<pending>/gi, '&lt;pending&gt;');
  result = result.replace(/<not set>/gi, '&lt;not set&gt;');
  result = result.replace(/<unknown>/gi, '&lt;unknown&gt;');
  result = result.replace(/<unset>/gi, '&lt;unset&gt;');
  result = result.replace(/<empty>/gi, '&lt;empty&gt;');

  // Escape angle brackets in placeholder text (e.g., <IP_Endpoint>, <value>, <your_token>)
  // Match patterns that look like placeholders (words with underscores, camelCase, etc.)
  result = result.replace(/<([a-zA-Z][a-zA-Z0-9_-]*)>/g, (match, inner) => {
    // Skip if it looks like a standard HTML tag
    if (
      /^(br|hr|img|input|link|meta|area|base|col|command|embed|keygen|param|source|track|wbr|a|p|div|span|ul|ol|li|table|tr|td|th|thead|tbody|h[1-6]|pre|code|blockquote|sup|sub|strong|em|i|b|u|s|del|ins|mark|small|big|q|cite|abbr|dfn|kbd|samp|var|time|ruby|rt|rp|bdi|bdo|wbr|details|summary|dialog|menu|menuitem|datalist|optgroup|option|progress|meter|output|canvas|svg|math|iframe|object|video|audio|source|track|map|figcaption|figure|picture|article|section|nav|aside|header|footer|main|address|hgroup|form|fieldset|legend|label|button|select|textarea|option|caption|colgroup|col|Tab|Tabs|Api)$/i.test(
        inner,
      )
    ) {
      return match;
    }
    // Skip if it's a common HTML-like pattern that's likely inside code
    if (/^(html|head|body|script|style|title|link)$/i.test(inner)) {
      return match;
    }
    return `&lt;${inner}&gt;`;
  });

  return result;
}

/**
 * Transform content according to migration rules
 */
function transformContent(
  content: string,
  guideName: string,
  categoryPath: string,
): { content: string; needsTabsImport: boolean; needsApiImport: boolean } {
  // First, fix frontmatter quote issues
  let result = transformFrontmatter(content);
  let needsTabsImport = false;
  let needsApiImport = false;

  // 1. Remove markdown attributes: {.thumbnail}, {.thumbnail width=*}, {.action}, {.external-link}, {.ref}, {.w-*}
  result = result.replace(/\{\.thumbnail(?:\s+[^}]*)?\}/g, '');
  result = result.replace(/\{\.action\}/g, '');
  result = result.replace(/\{\.external-link\}/g, '');
  result = result.replace(/\{\.ref\}/g, '');
  result = result.replace(/\{\.w-\d+\}/g, '');
  // Remove any remaining single-class attributes
  result = result.replace(/\{\.[a-z][a-z0-9_-]*\}/gi, '');

  // 2. Replace <br> with <br /> and fix malformed self-closing tags
  result = result.replace(/<br\s*\/?>/gi, '<br />');
  // Fix invalid </br> self-closing pattern
  result = result.replace(/<\/br>/gi, '<br />');
  // Fix patterns like <br /www. where there's no space before the next element
  result = result.replace(/<br\s*\/(\w)/gi, '<br />\n$1');

  // 2b. Remove data URI images (they break MDX processing)
  result = result.replace(/<img\s+src="data:[^"]+"\s*[^>]*\/?>/gi, '');

  // 2c. Make <img> tags self-closing if they aren't already
  result = result.replace(/<img\s+([^>]*[^/])>/gi, '<img $1 />');

  // 2d. Fix unclosed <li> tags in <ol>/<ul> blocks
  result = result.replace(/<li>([^<]*?)(?=<\/ol>|<\/ul>)/gi, '<li>$1</li>');
  // Fix more complex unclosed <li> with content spanning lines
  result = result.replace(
    /<li>([^<]*(?:<[^/][^>]*>[^<]*)*?)(?=\n<\/ol>|\n<\/ul>)/gi,
    '<li>$1</li>',
  );

  // 3. Convert <https://url> to [url](https://url)
  result = result.replace(/<(https?:\/\/[^>]+)>/g, '[$1]($1)');

  // 4. Close unclosed <sup> tags (also handle within table cells and paragraphs)
  result = result.replace(
    /<sup>([^<]*?)(?=<sup>|$|\n\n|\||\n)/g,
    '<sup>$1</sup>',
  );
  // Fix <sup> tags within paragraphs that don't close before end of content
  result = result.replace(/<sup>(\d+)(?=[^\d<])/g, '<sup>$1</sup>');
  // Fix <sup> at end of table cells (before |)
  result = result.replace(/<sup>([^<|]+)(?=\s*\|)/g, '<sup>$1</sup>');

  // 4b. Fix malformed <sup> patterns
  // Fix patterns like <sup>6</sup><sup> | (unclosed sup before table separator)
  result = result.replace(/<sup>(\d+)<\/sup><sup>\s*\|/g, '<sup>$1</sup> |');
  // Fix patterns like Exempté</sup><sup>2</sup> (stray closing tag)
  result = result.replace(/Exempté<\/sup><sup>/g, 'Exempté<sup>');
  // Fix patterns like S3<sup>1</sup | (missing closing bracket)
  result = result.replace(/<sup>(\d+)<\/sup\s*\|/g, '<sup>$1</sup> |');

  // 5. Replace <a name="x"> with <a id="x"></a>
  result = result.replace(/<a\s+name="([^"]+)">/gi, '<a id="$1"></a>');

  // 6. Close unclosed <a> tags (simple cases)
  result = result.replace(
    /<a\s+id="([^"]+)">\s*(?!<\/a>)/gi,
    '<a id="$1"></a>',
  );
  // Close <a href="..."> tags that don't have closing tags (within same line)
  result = result.replace(
    /<a\s+href="([^"]+)">([^<]*?)(?=\n)/gi,
    '<a href="$1">$2</a>',
  );

  // 6b. Fix double closing tags like </a></a>
  result = result.replace(/<\/a><\/a>/gi, '</a>');

  // 6c. Fix patterns like </a>[1]</a> (extra closing tag after anchor)
  result = result.replace(/<\/a>\[(\d+)\]<\/a>/g, '</a> [$1]');

  // 6d. Escape email addresses in angle brackets like <email@domain.com>
  result = result.replace(
    /<([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})>/g,
    '**$1**',
  );

  // 6e. Fix malformed </b> tag (often a typo for <br />)
  result = result.replace(/<\/b>\s*\*\*Outgoing\*\*/g, '. **Outgoing**');
  result = result.replace(
    /<\/b>\s*<br\s*\/?>\*\*Sortant\*\*/g,
    '. **Sortant**',
  );
  // Remove stray closing </b> tags
  result = result.replace(/<\/b>(?![^<]*<b>)/g, '');
  // Fix unclosed <b> tags - add closing tag at end of line
  result = result.replace(/<b>([^<\n]+)(?=\n)/g, '<b>$1</b>');

  // 6f. Fix malformed {.action patterns (including malformed `{.action]` syntax)
  result = result.replace(/`([^`]+)`\{\.action\./g, '`$1`.');
  result = result.replace(/`([^`]+)`\{\.action\}/g, '`$1`');
  result = result.replace(/`([^`]+)`\{\.action\]/g, '`$1`'); // Fix missing closing brace

  // 6g. Fix URLs in angle brackets that look like tags
  result = result.replace(/<([\w.-]+\.[\w.-]+\.[a-z]{2,})>/gi, '`$1`');
  result = result.replace(/<([\w.-]+@[\w.-]+)>/gi, '`$1`');

  // 6h. Replace smart quotes with regular quotes
  result = result.replace(/[\u201C\u201D\u201E\u201F]/g, '"');
  result = result.replace(/[\u2018\u2019\u201A\u201B]/g, "'");

  // 6i. Fix malformed self-closing tags like <br/www or <br />www (missing newline after />)
  // Only match when followed by a domain pattern, not general paths
  result = result.replace(/<br\s*\/(?=www\.)/gi, '<br />\n');
  // Fix <br />www patterns - add newline between br and www
  result = result.replace(/<br\s*\/>\s*(?=www\.)/gi, '<br />\n');

  // 6j. Fix unclosed strong tags: <strong>text<strong> -> <strong>text</strong>
  result = result.replace(/<strong>([^<]*)<strong>/g, '<strong>$1</strong>');
  // Fix orphaned </strong> without matching opening tag in paragraph
  result = result.replace(/<p>([^<]*)<\/strong>/g, '<p>$1');
  // Fix <b> tags that span across table cells - close them at end of cell content
  result = result.replace(/<b>([^<]*?)(?=\s*\|)/g, '<b>$1</b>');

  // 6k. Quote unquoted HTML attributes (rowspan, colspan)
  result = result.replace(/rowspan=(\d+)/g, 'rowspan="$1"');
  result = result.replace(/colspan=(\d+)/g, 'colspan="$1"');

  // 6l. Fix placeholder tags with backslash escapes: <SAP_SID\> -> `<SAP_SID>`
  result = result.replace(/<([A-Z][A-Z0-9_]*)\\>/g, '`<$1>`');
  // Also fix lowercase variants with backslash: <date\> -> `<date>`
  result = result.replace(/<([a-z][a-z0-9_]*)\\>/g, '`<$1>`');

  // 6l2. Fix curly braces with backslash-escaped pipes: {D\|J\|...} -> &#123;D|J|...&#125;
  // This pattern appears in SAP documentation paths
  result = result.replace(/\{([A-Z|\\]+)\}/g, (match, inner) => {
    if (inner.includes('\\|')) {
      // Contains escaped pipes, escape the braces
      return `&#123;${inner.replace(/\\\|/g, '|')}&#125;`;
    }
    return match;
  });

  // 6m. Fix arrow notation that looks like HTML: ->-<- and variants
  result = result.replace(/->-<-/g, '-\\>-\\<-');
  result = result.replace(/->\*\*([^*]+)\*\*<-/g, '-\\>**$1**\\<-');

  // 6n. Fix malformed anchor links: <a href="#x">[text](#y) -> [text](#x)
  result = result.replace(
    /<a href="#([^"]+)">\[([^\]]+)\]\([^)]+\)/g,
    '[$2](#$1)',
  );

  // 6o. Convert nested HTML lists in blockquotes/tabs to markdown
  // Handle <ol start="N"><li> patterns
  result = result.replace(/<ol start="(\d+)">\s*<li>/gi, '\n$1. ');
  result = result.replace(/<\/li>\s*<ul>/gi, '\n');
  result = result.replace(/<\/ul>\s*<\/ol>/gi, '\n');

  // 6p. Clean up orphaned HTML list tags in markdown context
  // Remove </li><li> sequences in markdown (convert to proper list items)
  result = result.replace(/<\/li>\s*<li>/gi, '\n- ');
  // Remove orphaned </ol> and </li> tags at end of lines
  result = result.replace(/<\/ol>\s*$/gm, '');
  result = result.replace(/<\/li>\s*$/gm, '');
  // Clean up orphaned <li> tags (convert to list items)
  result = result.replace(/^\s*<li>/gim, '- ');
  // Remove orphaned </p> tags
  result = result.replace(/<\/p>\s*$/gm, '');

  // 6p2. Fix broken link syntax that looks like HTML tags: </products/...>
  result = result.replace(/<\/([a-z][a-z0-9-_/]+)>/gi, '`/$1`');

  // 6q. Remove <center> tags (not valid in MDX)
  result = result.replace(/<\/?center>/gi, '');

  // 6q2. Fix iframe tags - make self-closing if needed, but don't create duplicates
  // First, ensure all existing iframes with content keep their structure
  // Then, close any unclosed iframes at end of line
  result = result.replace(/<iframe([^>]*)>\s*$/gm, '<iframe$1></iframe>');
  // Fix double closing tags </iframe></iframe> -> </iframe>
  result = result.replace(/<\/iframe>\s*<\/iframe>/g, '</iframe>');

  // 6q3. Fix unclosed <summary> tags
  result = result.replace(
    /<summary>([^<]*?)(?=\n\n|\n<)/g,
    '<summary>$1</summary>',
  );

  // 6q4. Fix unclosed <code> tags in paragraphs
  result = result.replace(/<code>([^<]*?)(?=\n\n|\n<|\|)/g, '<code>$1</code>');
  // Fix <code> tags that span to end of line without closing
  result = result.replace(/<code>([^<\n]+)(?=\n)/g, '<code>$1</code>');

  // 6q5. Fix unclosed <em>, <strong>, <ins>, <span>, <div> tags
  result = result.replace(/<em>([^<]*?)(?=\n\n|\n<)/g, '<em>$1</em>');
  result = result.replace(
    /<strong>([^<]*?)(?=\n\n|\n<)/g,
    '<strong>$1</strong>',
  );
  result = result.replace(/<ins>([^<]*?)(?=\n\n|\n<)/g, '<ins>$1</ins>');
  result = result.replace(/<span>([^<]*?)(?=\n\n|\n<)/g, '<span>$1</span>');

  // 6q6. Fix unclosed <th> and <td> tags in table context
  result = result.replace(/<th>([^<]*?)(?=\n<)/g, '<th>$1</th>');
  // Fix unclosed <td> tags more aggressively
  result = result.replace(
    /<td>([^<]*?)(?=\n<td>|\n<\/tr>|\n<tr>)/gi,
    '<td>$1</td>',
  );
  // Fix td tags that span multiple lines without closing
  result = result.replace(/<td>\n([^<]*?)(?=\n<)/gi, '<td>\n$1</td>');

  // 6q7. Fix <img> tags that aren't self-closing
  result = result.replace(/<img\s+([^>]*[^/])>(?!\s*<\/img>)/gi, '<img $1 />');

  // 6r. Fix unclosed <td> tags in HTML tables
  result = result.replace(/<td>([^<]*?)(?=<\/tr>)/gi, '<td>$1</td>');

  // 6s. Fix unclosed <span> tags in table cells (GfmTableCell context)
  result = result.replace(/<span>([^<]*?)(?=\s*\|)/g, '<span>$1</span>');
  // Fix <span> tags that span to end of line/paragraph without closing
  result = result.replace(/<span>([^<\n]+)(?=\n\n|\n<)/g, '<span>$1</span>');
  // Fix <span> at end of lines
  result = result.replace(/<span>([^<]+)(?=\n)/g, '<span>$1</span>');

  // 7. Remove <style>...</style> tags (including unclosed ones)
  result = result.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  // Also remove orphaned <style> blocks that never close (match CSS-like content until we hit a markdown heading)
  result = result.replace(/<style[^>]*>[\s\S]*?(?=\n##\s|\n---)/gi, '');

  // 7b. Remove <script> tags (they break MDX)
  result = result.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  result = result.replace(/<script[^>]*>[^<]*$/gim, ''); // Unclosed script tags

  // 7c. Fix backtick-escaped closing tags like `/iframe`, `/div`, `/script`
  result = result.replace(/`\/iframe`/g, '</iframe>');
  result = result.replace(/`\/div`/g, '</div>');
  result = result.replace(/`\/script`/g, '</script>');
  result = result.replace(/`\/span`/g, '</span>');
  result = result.replace(/`\/code`/g, '</code>');
  result = result.replace(/`\/pre`/g, '</pre>');
  result = result.replace(/`\/sup`/g, '</sup>');
  result = result.replace(/`\/sub`/g, '</sub>');
  result = result.replace(/`\/a`/g, '</a>');
  result = result.replace(/`\/p`/g, '</p>');
  result = result.replace(/`\/li`/g, '</li>');
  result = result.replace(/`\/ul`/g, '</ul>');
  result = result.replace(/`\/ol`/g, '</ol>');
  result = result.replace(/`\/td`/g, '</td>');
  result = result.replace(/`\/tr`/g, '</tr>');
  result = result.replace(/`\/th`/g, '</th>');
  result = result.replace(/`\/table`/g, '</table>');

  // 7f. Remove stray </a> at end of markdown links
  result = result.replace(/\]\([^)]+\)<\/a>/g, (match) =>
    match.replace(/<\/a>$/, ''),
  );

  // 7a. Remove HTML comments (will be converted to MDX comments only for .mdx files later)
  // For now, just strip them as they can cause issues in both formats
  result = result.replace(/<!--[\s\S]*?-->/g, '');

  // 7b. Convert <pre class="..."><code class="..."> blocks to fenced code blocks
  result = result.replace(
    /<pre[^>]*>\s*<code[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/gi,
    (_match, codeContent) => {
      const code = codeContent.trim();
      return `\n\`\`\`\n${code}\n\`\`\`\n`;
    },
  );

  // 7c. Handle unclosed <pre><code> patterns (spanning multiple blocks)
  result = result.replace(/<pre[^>]*>\s*<code>/gi, '\n```\n');
  result = result.replace(/<\/code>\s*<\/pre>/gi, '\n```\n');

  // 7d. Handle blockquote-wrapped pre/code patterns (common in migration)
  // Convert <pre class="..."><code class="...">content</code></pre> in blockquotes
  result = result.replace(
    /> <pre[^>]*><code[^>]*>([^<]+)<\/code><\/pre>/g,
    '>\n> ```bash\n> $1\n> ```',
  );
  // Also handle without the blockquote prefix
  result = result.replace(
    /<pre[^>]*><code[^>]*>([^<]+)<\/code><\/pre>/gi,
    '\n```bash\n$1\n```\n',
  );

  // 7e. Clean up stray closing tags that appear after code block conversion
  // These can happen when the original markup was malformed
  result = result.replace(/^```\n[\s\S]*?\n```\n\s*<\/code>/gm, (match) => {
    return match.replace(/<\/code>$/, '');
  });
  result = result.replace(/^\s*<\/code>\s*$/gm, '');
  result = result.replace(/^\s*<\/pre>\s*$/gm, '');

  // 7b. Remove embedded video players (iframes with style) that break MDX
  result = result.replace(
    /<div\s+style="[^"]*"[^>]*>[\s\S]*?<\/div><script[^>]*><\/script>/gi,
    '',
  );

  // 7c. Convert HTML style attributes to JSX (for remaining simple cases)
  // Remove style attributes entirely for now as they break MDX
  result = result.replace(/\s+style="[^"]*"/gi, '');

  // 8. Remove markdownlint comments
  result = result.replace(/<!--\s*markdownlint[^>]*-->/gi, '');

  // 9. JSX-specific escaping is now handled conditionally in applyMdxTransformations
  // Only applied when the file needs .mdx extension (has Tabs or Api components)

  // 11. Admonition transformations
  result = result.replace(/>\s*\[!primary\]/gi, '> [!INFO]');
  result = result.replace(/>\s*\[!success\]/gi, '> [!TIP]');
  result = result.replace(/>\s*\[!alert\]/gi, '> [!DANGER]');

  // 11. Transform [!tabs] blocks to <Tabs> components
  const tabsRegex =
    />\s*\[!tabs\]\s*\n((?:>\s*[^\n]+\n(?:>>\s*\n?(?:>>\s*[^\n]*\n)*)*)+)/gi;
  if (tabsRegex.test(result)) {
    needsTabsImport = true;
    result = result.replace(tabsRegex, (_match, tabsContent) => {
      return transformTabsBlock(tabsContent);
    });
  }

  // 12. Transform [!api] blocks to <Api> components
  const apiRegex =
    />\s*\[!api\]\s*\n>\s*\n?>\s*@api\s*\{([^}]+)\}\s*(\S+)\s*(\w+)\s*(\S+)\s*\n?>\s*\n?/gi;
  if (apiRegex.test(result)) {
    needsApiImport = true;
    result = result.replace(
      apiRegex,
      (_match, version, section, method, route) => {
        // Escape curly braces in route using JSX escape sequence
        const _escapedRoute = route
          .replace(/\{/g, "{'{'}")
          .replace(/\}/g, "{'}'}");
        return `<Api version="${version}" section="${section}" method="${method}" route={${JSON.stringify(route)}} />\n\n`;
      },
    );
  }

  // 13. Update image paths from relative to absolute public paths
  const imageBasePath = `/images/guides/${categoryPath}/${guideName}`;
  result = result.replace(
    /!\[([^\]]*)\]\(\.?\/?(images\/)?([^)]+)\)/g,
    (match, alt, _imagesDir, imgPath) => {
      // If it's already an absolute path or external URL, leave it
      if (imgPath.startsWith('/') || imgPath.startsWith('http')) {
        return match;
      }
      // If it references /pages/assets/, update to new path structure
      if (imgPath.startsWith('/pages/assets/')) {
        return `![${alt}](${imgPath})`;
      }
      return `![${alt}](${imageBasePath}/${imgPath})`;
    },
  );

  // 13b. Update HTML img tag paths from relative to absolute public paths
  // Handle src anywhere in the img tag (not just first attribute)
  result = result.replace(
    /(<img\s+[^>]*)src="(images\/[^"]+)"([^>]*>)/gi,
    (_match, before, imgPath, after) => {
      return `${before}src="${imageBasePath}/${imgPath.replace('images/', '')}"${after}`;
    },
  );

  // 14. Fix code block language tags that Shiki doesn't support
  result = fixCodeBlockLanguages(result);

  // Note: JSX escaping is only applied for .mdx files in addImports function

  return { content: result, needsTabsImport, needsApiImport };
}

/**
 * Transform a [!tabs] block into <Tabs> JSX
 */
function transformTabsBlock(tabsContent: string): string {
  const lines = tabsContent.split('\n');
  const tabs: Array<{ title: string; content: string[] }> = [];
  let currentTab: { title: string; content: string[] } | null = null;

  for (const line of lines) {
    // Tab title line: starts with > but not >>
    if (/^>\s*[^>]/.test(line) && !/^>>\s*/.test(line)) {
      const title = line.replace(/^>\s*/, '').trim();
      if (title && !title.startsWith('[!')) {
        if (currentTab) {
          tabs.push(currentTab);
        }
        currentTab = { title, content: [] };
      }
    }
    // Tab content line: starts with >>
    else if (/^>>\s*/.test(line)) {
      const contentLine = line.replace(/^>>\s*/, '');
      if (currentTab) {
        currentTab.content.push(contentLine);
      }
    }
  }

  if (currentTab) {
    tabs.push(currentTab);
  }

  if (tabs.length === 0) {
    return tabsContent; // Return original if parsing failed
  }

  let jsx = '<Tabs>\n';
  for (const tab of tabs) {
    const content = tab.content.join('\n').trim();
    // Strip markdown formatting from tab title for JSX attribute
    // Also replace special characters that break JSX attribute parsing
    const cleanTitle = tab.title
      .replace(/^\s*-\s*/, '') // Remove leading dash
      .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold **
      .replace(/\*([^*]+)\*/g, '$1') // Remove italic *
      .replace(/`([^`]+)`/g, '$1') // Remove inline code
      .replace(/"/g, "'") // Replace double quotes with single
      .replace(/\?/g, '') // Remove question marks that break parsing
      .replace(/\[/g, '(')
      .replace(/\]/g, ')') // Replace brackets
      .replace(/\\/g, '/') // Replace backslashes
      .trim();
    jsx += `<Tab label="${cleanTitle}">\n\n${content}\n\n</Tab>\n`;
  }
  jsx += '</Tabs>\n\n';

  return jsx;
}

/**
 * Apply MDX-specific transformations (JSX escaping)
 * Only called when the file will be .mdx
 */
function applyMdxTransformations(content: string): string {
  let result = content;

  // Escape JSX expressions in plain text
  result = escapeJsxExpressions(result);

  // Escape angle brackets in prose text that look like comparisons (but not in code blocks or real JSX)
  // Match patterns like (<, >, =) which are comparison operators in text
  result = result.replace(/\((<), (>), =\)/g, '(&lt;, &gt;, =)');
  // Match patterns like < 100000 (comparison in text)
  result = result.replace(/\s(<)\s(\d)/g, ' &lt; $2');
  result = result.replace(/\s(>)\s(\d)/g, ' &gt; $2');

  return result;
}

/**
 * Add necessary imports after frontmatter
 */
function addImports(
  content: string,
  needsTabsImport: boolean,
  needsApiImport: boolean,
): string {
  const needsMdx = needsTabsImport || needsApiImport;

  // Apply MDX-specific transformations only when needed
  const processedContent = needsMdx
    ? applyMdxTransformations(content)
    : content;

  if (!needsTabsImport && !needsApiImport) {
    return processedContent;
  }

  const imports: string[] = [];
  if (needsTabsImport) {
    imports.push("import { Tab, Tabs } from '@rspress/core/theme';");
  }
  if (needsApiImport) {
    imports.push("import Api from '@components/Api';");
  }

  // Find end of frontmatter
  const frontmatterEnd = processedContent.indexOf('---', 3);
  if (frontmatterEnd === -1) {
    return `${imports.join('\n')}\n\n${processedContent}`;
  }

  const afterFrontmatter = frontmatterEnd + 3;
  return (
    processedContent.slice(0, afterFrontmatter) +
    '\n\n' +
    imports.join('\n') +
    '\n' +
    processedContent.slice(afterFrontmatter)
  );
}

/**
 * Copy images from source to public directory
 */
function copyImages(
  sourceDir: string,
  guideName: string,
  categoryPath: string,
): void {
  const imagesDir = path.join(sourceDir, 'images');
  if (!fs.existsSync(imagesDir)) {
    return;
  }

  const targetDir = path.join(
    PUBLIC_DIR,
    'images',
    'guides',
    categoryPath,
    guideName,
  );
  fs.mkdirSync(targetDir, { recursive: true });

  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    const sourcePath = path.join(imagesDir, file);
    const targetPath = path.join(targetDir, file);

    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`  Copied image: ${file}`);
    }
  }
}

/**
 * Process a single guide directory
 */
function processGuide(
  guideDir: string,
  guideName: string,
  categoryPath: string,
  localeFilter?: string,
): void {
  console.log(`\nProcessing guide: ${guideName}`);

  const kebabGuideName = toKebabCase(guideName);
  const kebabCategoryPath = categoryPath.split('/').map(toKebabCase).join('/');

  // Copy images first (only if no locale filter or if any locale matches)
  if (!localeFilter) {
    copyImages(guideDir, kebabGuideName, kebabCategoryPath);
  }

  // Process each locale file
  const files = fs.readdirSync(guideDir);
  let processedAny = false;

  for (const file of files) {
    if (!file.startsWith('guide.') || !file.endsWith('.md')) {
      continue;
    }

    // Extract locale from filename (e.g., guide.fr-fr.md -> fr-fr)
    const localeMatch = file.match(/guide\.([a-z]{2}-[a-z]{2})\.md/);
    if (!localeMatch) {
      continue;
    }

    const sourceLocale = localeMatch[1];
    const targetLocale = LOCALE_MAP[sourceLocale];

    if (!targetLocale) {
      console.log(`  Skipping unsupported locale: ${sourceLocale}`);
      continue;
    }

    // Skip if locale filter is set and doesn't match
    if (localeFilter && targetLocale !== localeFilter) {
      continue;
    }

    // Copy images for this guide if we're filtering by locale and haven't copied yet
    if (localeFilter && !processedAny) {
      copyImages(guideDir, kebabGuideName, kebabCategoryPath);
    }
    processedAny = true;

    const sourcePath = path.join(guideDir, file);
    const content = fs.readFileSync(sourcePath, 'utf-8');

    // Transform content
    const {
      content: transformedContent,
      needsTabsImport,
      needsApiImport,
    } = transformContent(content, kebabGuideName, kebabCategoryPath);

    // Add imports if needed
    const finalContent = addImports(
      transformedContent,
      needsTabsImport,
      needsApiImport,
    );

    // Write to target location
    const targetDir = path.join(
      DOCS_DIR,
      targetLocale,
      'guides',
      kebabCategoryPath,
    );
    fs.mkdirSync(targetDir, { recursive: true });

    // Always use .mdx extension for consistency with other locales
    const fileExtension = '.mdx';
    const targetPath = path.join(
      targetDir,
      `${kebabGuideName}${fileExtension}`,
    );
    fs.writeFileSync(targetPath, finalContent);
    console.log(`  Created: ${targetLocale}/${kebabGuideName}${fileExtension}`);
  }
}

/**
 * Process a subcategory directory (contains guide directories)
 */
function processSubcategory(
  subcategoryDir: string,
  categoryPath: string,
  localeFilter?: string,
): void {
  const entries = fs.readdirSync(subcategoryDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    // Skip if it's not a guide directory (should contain guide.*.md files)
    const guideDir = path.join(subcategoryDir, entry.name);
    const files = fs.readdirSync(guideDir);
    const hasGuideFiles = files.some(
      (f) => f.startsWith('guide.') && f.endsWith('.md'),
    );

    if (hasGuideFiles) {
      processGuide(guideDir, entry.name, categoryPath, localeFilter);
    } else {
      // This might be another level of nesting
      processSubcategory(
        guideDir,
        `${categoryPath}/${entry.name}`,
        localeFilter,
      );
    }
  }
}

/**
 * Main migration function
 */
function migrate(
  category: string,
  subcategory?: string,
  localeFilter?: string,
): void {
  const categoryDir = path.join(BASE_DIR, category);

  if (!fs.existsSync(categoryDir)) {
    console.error(`Category not found: ${category}`);
    process.exit(1);
  }

  const localeMsg = localeFilter ? ` (locale: ${localeFilter})` : '';
  console.log(`\n=== Migrating ${category}${localeMsg} ===`);

  if (subcategory) {
    // Process specific subcategory
    const subcategoryDir = path.join(categoryDir, subcategory);
    if (!fs.existsSync(subcategoryDir)) {
      console.error(`Subcategory not found: ${subcategory}`);
      process.exit(1);
    }
    processSubcategory(
      subcategoryDir,
      `${category}/${subcategory}`,
      localeFilter,
    );
  } else {
    // Process all subcategories
    const entries = fs.readdirSync(categoryDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        console.log(`\n--- Subcategory: ${entry.name} ---`);
        processSubcategory(
          path.join(categoryDir, entry.name),
          `${category}/${entry.name}`,
          localeFilter,
        );
      }
    }
  }

  console.log('\n=== Migration complete ===');
}

// CLI entry point
const args = process.argv.slice(2);

// Parse --locale flag
let localeFilter: string | undefined;
const localeIndex = args.indexOf('--locale');
if (localeIndex !== -1 && args[localeIndex + 1]) {
  localeFilter = args[localeIndex + 1];
  args.splice(localeIndex, 2);
}

if (args.length < 1) {
  console.log(
    'Usage: npx tsx scripts/migrate-docs.ts <category> [subcategory] [--locale <locale>]',
  );
  console.log('');
  console.log('Locales: fr, en, de, es, it, pl, pt');
  console.log('');
  console.log('Example:');
  console.log(
    '  npx tsx scripts/migrate-docs.ts account_and_service_management',
  );
  console.log(
    '  npx tsx scripts/migrate-docs.ts account_and_service_management --locale fr',
  );
  console.log(
    '  npx tsx scripts/migrate-docs.ts web_cloud domains --locale en',
  );
  process.exit(1);
}

migrate(args[0], args[1], localeFilter);
