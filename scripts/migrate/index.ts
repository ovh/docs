#!/usr/bin/env node
/**
 * OVHcloud Docs Migration Script: Pelican -> Rspress
 *
 * Orchestrates the full migration pipeline:
 *   1. Discover guides in pages/
 *   2. Transform content (frontmatter, admonitions, tabs, FAQ, API, etc.)
 *   3. Resolve links
 *   4. Copy images
 *   5. Generate _meta.json sidebar files
 *   6. Validate output
 *
 * Usage:
 *   pnpm migrate                        # Full migration
 *   pnpm migrate -- --dry-run           # Preview without writing
 *   pnpm migrate -- --universe account_and_service_management
 *   pnpm migrate -- --locale fr-fr
 *   pnpm migrate -- --guide account_and_service_management/account_information/ovhcloud-account-creation
 *   pnpm migrate -- --guides-file missing.txt  # Migrate guides listed in file (one path per line)
 *   pnpm migrate -- --validate          # Validate post-migration
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { glob } from 'glob';
import minimist from 'minimist';
import YAML from 'yaml';
import { externalLinks } from '../../config/links.js';
import type { Locale } from '../../config/shared.js';
import { generateAllMetaFiles } from './generators/sidebar-rspress.js';
import { convertActionsForMdx } from './parsers/action.js';
import { convertAdmonitions } from './parsers/admonitions.js';
import { convertApi } from './parsers/api.js';
import { convertCodeBlocks } from './parsers/code-blocks.js';
import { convertDetails } from './parsers/details.js';
import { convertFAQ } from './parsers/faq.js';
import { transformFrontmatter } from './parsers/frontmatter.js';
import { copyImages, rewriteImagePaths } from './parsers/images.js';
import { rewriteInternalLinks } from './parsers/internal-links.js';
import { convertTabs } from './parsers/tabs.js';
import { convertThumbnailsForMdx } from './parsers/thumbnail.js';
import { validateLinks } from './validate/links.js';
import { validateStructure } from './validate/structure.js';

// --- Configuration ---
const ROOT_DIR = path.resolve(import.meta.dirname, '../..');
const BASE_DIR = path.join(ROOT_DIR, 'base');
const PAGES_DIR = path.join(BASE_DIR, 'pages');
const RSPRESS_DIR = ROOT_DIR;
const DOCS_OUT_DIR = path.join(RSPRESS_DIR, 'docs');
const PUBLIC_DIR = path.join(DOCS_OUT_DIR, 'public');

/**
 * Locale mapping: Pelican locale -> Rspress short prefix.
 */
const LOCALE_MAP: Record<string, string> = {
  'fr-fr': 'fr',
  'en-gb': 'en',
  'de-de': 'de',
  'es-es': 'es',
  'it-it': 'it',
  'pl-pl': 'pl',
  'pt-pt': 'pt',
};

const ALL_LOCALES = Object.keys(LOCALE_MAP);

// --- CLI Args ---
const args = minimist(process.argv.slice(2));
const DRY_RUN = args['dry-run'] || false;
const FILTER_UNIVERSE = args.universe || null;
const FILTER_LOCALE = args.locale || null;
const FILTER_GUIDE = args.guide || null;
const GUIDES_FILE = args['guides-file'] || null;
const VALIDATE_ONLY = args.validate || false;
const GENERATE_META = args.meta || false; // Disabled by default; sidebar is managed in config/sidebar/

// --- Stats ---
const stats = {
  filesProcessed: 0,
  filesWritten: 0,
  filesMdx: 0,
  admonitions: 0,
  tabs: 0,
  faq: 0,
  api: 0,
  linksResolved: 0,
  imagesCopied: 0,
  metaFiles: 0,
  errors: [] as string[],
};

// --- MDX Curly Brace Escaping ---
/**
 * Fix nested double quotes inside HTML tag attributes.
 * e.g. alt="Result of "ipconfig" command" -> alt="Result of &quot;ipconfig&quot; command"
 */
function fixNestedQuotesInHtmlTags(content: string): string {
  return content.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]+)>/g,
    (fullMatch, tagName, attrs) => {
      if (tagName === 'code' || tagName === 'pre') return fullMatch;

      const _fixedAttrs = attrs.replace(
        /(\w+)="([^"]*)"(?=[^=]*(?:=|>|$))/g,
        (attrMatch: string) => {
          return attrMatch;
        },
      );

      const imgAltFix = attrs.replace(
        /alt="([^"]*)"([^"]*)"([^"]*)"$/,
        (_m: string, before: string, inner: string, after: string) =>
          `alt="${before}&quot;${inner}&quot;${after}"`,
      );

      const result = imgAltFix.replace(
        /="([^"]*?)"([a-zA-Z])/g,
        (_m: string, val: string, next: string) => `="${val}&quot;${next}`,
      );

      return `<${tagName} ${result}>`;
    },
  );
}

/** Standard HTML tags that should not be escaped when found in prose. */
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
  'center',
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

/**
 * Escape bare < and > in prose that aren't part of HTML/JSX tags.
 */
function escapeBareAngleBrackets(content: string): string {
  const lines = content.split('\n');
  let inCodeFence = false;
  const result: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      inCodeFence = !inCodeFence;
      result.push(line);
      continue;
    }
    if (inCodeFence) {
      result.push(line);
      continue;
    }
    if (trimmed.startsWith('import ')) {
      result.push(line);
      continue;
    }
    if (!line.includes('<')) {
      result.push(line);
      continue;
    }

    let escaped = '';
    let i = 0;
    while (i < line.length) {
      if (line[i] === '`') {
        const end = line.indexOf('`', i + 1);
        if (end !== -1) {
          escaped += line.slice(i, end + 1);
          i = end + 1;
          continue;
        }
      }

      if (line[i] === '<') {
        const rest = line.slice(i + 1);
        // Detect placeholder patterns like <S3_ENDPOINT>, <VPS_IP>, <IP-DE-VOTRE-SERVICE-EFS>
        // These are ALL_CAPS with digits/underscores/hyphens — not valid HTML/JSX tags
        const placeholderMatch = rest.match(
          /^([A-Z][A-Z0-9]*(?:[_-][A-Z0-9]+)*)>/,
        );
        if (placeholderMatch) {
          const placeholder = `<${placeholderMatch[1]}>`;
          escaped += `\`${placeholder}\``;
          i += placeholder.length;
          continue;
        }
        // Detect lowercase/mixed-case placeholder-like tags that aren't valid HTML (e.g. <region>, <yourdockerhubId>)
        const lowercaseTagMatch = rest.match(/^([a-z][a-zA-Z0-9_-]*)>/);
        if (lowercaseTagMatch && !VALID_HTML_TAGS.has(lowercaseTagMatch[1])) {
          const placeholder = `<${lowercaseTagMatch[1]}>`;
          escaped += `\`${placeholder}\``;
          i += placeholder.length;
          continue;
        }
        if (/^[a-zA-Z/!]/.test(rest)) {
          escaped += '<';
        } else {
          escaped += '&lt;';
        }
      } else {
        escaped += line[i];
      }
      i++;
    }

    result.push(escaped);
  }

  return result.join('\n');
}

/**
 * Escapes literal { and } in MDX prose content to prevent JSX interpretation.
 */
function escapeMdxCurlyBraces(content: string): string {
  const lines = content.split('\n');
  let inCodeFence = false;
  const result: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      inCodeFence = !inCodeFence;
      result.push(line);
      continue;
    }

    if (inCodeFence) {
      result.push(line);
      continue;
    }

    if (trimmed.startsWith('import ')) {
      result.push(line);
      continue;
    }

    // Skip Rspress container directives (:::tip{title="..."}, :::details{...}, etc.)
    if (trimmed.startsWith(':::')) {
      result.push(line);
      continue;
    }

    if (!line.includes('{') && !line.includes('}')) {
      result.push(line);
      continue;
    }

    let escaped = '';
    let i = 0;
    while (i < line.length) {
      if (line[i] === '`') {
        const end = line.indexOf('`', i + 1);
        if (end !== -1) {
          escaped += line.slice(i, end + 1);
          i = end + 1;
          continue;
        }
      }

      if (
        line[i] === '<' &&
        i + 1 < line.length &&
        /[a-zA-Z/]/.test(line[i + 1])
      ) {
        let j = i + 1;
        let inStr = false;
        let strChar = '';
        while (j < line.length) {
          if (inStr) {
            if (line[j] === strChar && line[j - 1] !== '\\') {
              inStr = false;
            }
          } else if (line[j] === '"' || line[j] === "'") {
            inStr = true;
            strChar = line[j];
          } else if (line[j] === '>') {
            escaped += line.slice(i, j + 1);
            i = j + 1;
            break;
          }
          j++;
        }
        if (j >= line.length) {
          escaped += line.slice(i);
          i = line.length;
        }
        continue;
      }

      if (line[i] === '{') {
        escaped += '&#123;';
      } else if (line[i] === '}') {
        escaped += '&#125;';
      } else {
        escaped += line[i];
      }
      i++;
    }

    result.push(escaped);
  }

  return result.join('\n');
}

/**
 * Resolve /links/ references in content using the centralized externalLinks map.
 */
function resolveLinks(content: string, locale: Locale): string {
  return content.replace(/\(\/links\/([^)]+)\)/g, (fullMatch, linkPath) => {
    const urls = externalLinks[linkPath];
    if (!urls) {
      // Try partial match (ends with)
      for (const key of Object.keys(externalLinks)) {
        if (key.endsWith(`/${linkPath}`) || key === linkPath) {
          const url =
            externalLinks[key][locale] ??
            externalLinks[key].en ??
            Object.values(externalLinks[key])[0];
          if (url) return `(${url})`;
        }
      }
      console.warn(
        `  [links] Unresolved link: /links/${linkPath} for locale ${locale}`,
      );
      return fullMatch;
    }

    const url = urls[locale] ?? urls.en ?? Object.values(urls)[0];
    if (url) return `(${url})`;

    console.warn(`  [links] No URL for locale ${locale} in /links/${linkPath}`);
    return fullMatch;
  });
}

// --- Main ---
async function main() {
  console.log('=== OVHcloud Docs Migration: Pelican -> Rspress ===\n');

  if (VALIDATE_ONLY) {
    await runValidation();
    return;
  }

  if (DRY_RUN) {
    console.log('*** DRY RUN MODE - No files will be written ***\n');
  }

  // Step 1: Links loaded from config/links.ts
  console.log('Step 1: Loading centralized links map...');
  console.log(
    `  Loaded ${Object.keys(externalLinks).length} link definitions\n`,
  );

  // Step 2: Discover guides
  console.log('Step 2: Discovering guides...');
  const guides = await discoverGuides();
  console.log(`  Found ${guides.length} guide files\n`);

  // Step 3: Process each guide
  console.log('Step 3: Processing guides...');
  for (const guide of guides) {
    try {
      await processGuide(guide);
    } catch (err) {
      const msg = `Error processing ${guide.sourcePath}: ${(err as Error).message}`;
      stats.errors.push(msg);
      console.error(`  ERROR: ${msg}`);
    }
  }

  // Step 4: Generate sidebar _meta.json files (disabled by default, use --meta to enable)
  if (GENERATE_META) {
    console.log('\nStep 4: Generating sidebar _meta.json files...');
    const activeLocales = Object.values(LOCALE_MAP);
    stats.metaFiles = generateAllMetaFiles(
      PAGES_DIR,
      DOCS_OUT_DIR,
      activeLocales,
      DRY_RUN,
    );

    if (DRY_RUN) {
      console.log(`  Would generate ${stats.metaFiles} _meta.json files`);
    } else {
      console.log(`  Generated ${stats.metaFiles} _meta.json files`);
    }
  } else {
    console.log(
      '\nStep 4: Skipping _meta.json generation (use --meta to enable)',
    );
  }

  // Print summary
  console.log('\n=== Migration Summary ===');
  console.log(`  Files processed: ${stats.filesProcessed}`);
  console.log(`  Files written:   ${stats.filesWritten}`);
  console.log(`  .mdx files:      ${stats.filesMdx}`);
  console.log(`  Admonitions:     ${stats.admonitions}`);
  console.log(`  Tabs:            ${stats.tabs}`);
  console.log(`  FAQ:             ${stats.faq}`);
  console.log(`  API:             ${stats.api}`);
  console.log(`  Images copied:   ${stats.imagesCopied}`);
  console.log(`  _meta.json:      ${stats.metaFiles}`);
  console.log(`  Errors:          ${stats.errors.length}`);

  if (stats.errors.length > 0) {
    console.log('\nErrors:');
    for (const err of stats.errors) {
      console.log(`  - ${err}`);
    }
  }
}

// --- Guide Discovery ---
interface GuideInfo {
  sourcePath: string; // Full path to source file
  guideDir: string; // Directory containing the guide
  guidePath: string; // Relative path: universe/product/guide-name
  locale: string; // Pelican locale e.g. "fr-fr"
  rspressLocale: string; // Rspress locale e.g. "fr"
  metaPath: string; // Path to meta.yaml
}

async function discoverGuides(): Promise<GuideInfo[]> {
  let patterns: string[] = [];

  if (GUIDES_FILE) {
    // Read guide paths from file (one per line)
    const guidePaths = fs
      .readFileSync(GUIDES_FILE, 'utf-8')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'));
    patterns = guidePaths.map((g) => `pages/${g}/guide.*.md`);
  } else if (FILTER_GUIDE) {
    patterns = [`pages/${FILTER_GUIDE}/guide.*.md`];
  } else if (FILTER_UNIVERSE) {
    patterns = [`pages/${FILTER_UNIVERSE}/**/guide.*.md`];
  } else {
    patterns = ['pages/**/guide.*.md'];
  }

  const files: string[] = [];
  for (const pattern of patterns) {
    const matched = await glob(pattern, { cwd: BASE_DIR });
    files.push(...matched);
  }
  const guides: GuideInfo[] = [];

  for (const file of files) {
    // Parse: pages/{universe}/{product}/{guide}/guide.{locale}.md
    const match = file.match(/^pages\/(.+)\/guide\.([a-z]{2}-[a-z]{2,4})\.md$/);
    if (!match) continue;

    const guidePath = match[1];
    const locale = match[2];

    // Filter by locale if specified
    if (FILTER_LOCALE && locale !== FILTER_LOCALE) continue;

    // Only process known locales (es-us excluded)
    if (!ALL_LOCALES.includes(locale)) continue;

    const rspressLocale = LOCALE_MAP[locale];
    if (!rspressLocale) continue;

    guides.push({
      sourcePath: path.join(BASE_DIR, file),
      guideDir: path.join(BASE_DIR, 'pages', guidePath),
      guidePath,
      locale,
      rspressLocale,
      metaPath: path.join(BASE_DIR, 'pages', guidePath, 'meta.yaml'),
    });
  }

  return guides;
}

// --- Guide Processing ---
async function processGuide(guide: GuideInfo) {
  stats.filesProcessed++;

  // Read source content
  let content = fs.readFileSync(guide.sourcePath, 'utf-8');

  // Read meta.yaml
  let meta = null;
  if (fs.existsSync(guide.metaPath)) {
    try {
      meta = YAML.parse(fs.readFileSync(guide.metaPath, 'utf-8'));
    } catch {
      // Ignore invalid meta
    }
  }

  // Step 1: Transform frontmatter
  content = transformFrontmatter(content, meta);

  // Step 2: Convert code blocks ({.language} -> language)
  content = convertCodeBlocks(content);

  // Step 3: Convert tabs (before admonitions so nested admonitions inside
  // tab content are revealed for conversion)
  const tabsResult = convertTabs(content);
  content = tabsResult.content;
  if (tabsResult.hasTabs) stats.tabs++;

  // Step 4: Convert FAQ
  const faqResult = convertFAQ(content);
  content = faqResult.content;
  if (faqResult.hasFAQ) stats.faq++;

  // Step 5: Convert API blocks
  const apiResult = convertApi(content);
  content = apiResult.content;
  if (apiResult.hasApi) stats.api++;

  // Step 5b: Convert /// details blocks
  const detailsResult = convertDetails(content);
  content = detailsResult.content;

  // Step 6: Convert admonitions (after tabs/FAQ/API so nested admonitions are caught)
  const origAdmonitions = (
    content.match(/>\s*\[!(primary|warning|alert|info|success)\]/g) || []
  ).length;
  content = convertAdmonitions(content);
  stats.admonitions += origAdmonitions;

  // Step 7: Resolve /links/ references
  const beforeLinks = content;
  content = resolveLinks(content, guide.rspressLocale as Locale);
  if (content !== beforeLinks) stats.linksResolved++;

  // Step 8: Rewrite internal /pages/ links
  content = rewriteInternalLinks(content);

  // Step 9: Rewrite image paths
  const imageResult = rewriteImagePaths(content, guide.guidePath);
  content = imageResult.content;

  // For Rspress (mdxRs: true), apply action/thumbnail transforms to ALL files
  // This eliminates the need for remark plugins (incompatible with Rust MDX compiler)
  content = convertActionsForMdx(content);
  content = convertThumbnailsForMdx(content);

  // Always output .mdx — apply MDX fixes to all files for consistency
  // Fix self-closing HTML tags for MDX compatibility
  content = content.replace(/<br\s*>/gi, '<br/>');
  content = content.replace(/<hr\s*>/gi, '<hr/>');
  content = content.replace(/<img\s+([^>]*[^/])>/gi, '<img $1/>');

  // Quote unquoted HTML attributes (e.g. rowspan=8 -> rowspan="8") for MDX/JSX compatibility
  content = content.replace(
    /(<[a-zA-Z][^>]*\s)([a-zA-Z-]+)=([^"'{>\s][^>\s]*)/g,
    '$1$2="$3"',
  );

  // Convert inline style="..." strings to JSX style objects
  content = content.replace(/style="([^"]*)"/g, (_match, cssString: string) => {
    const props = cssString
      .split(';')
      .filter(Boolean)
      .map((prop: string) => {
        const [key, ...valParts] = prop.split(':');
        const value = valParts.join(':').trim();
        const camelKey = key
          .trim()
          .replace(/-([a-z])/g, (_: string, c: string) => c.toUpperCase());
        return `${camelKey}:"${value}"`;
      })
      .join(', ');
    return `style={{${props}}}`;
  });

  // Strip inline <style> blocks (curly braces cause MDX parsing errors)
  content = content.replace(/<style>[\s\S]*?<\/style>/gi, '');

  // Strip any remaining Pandoc-style {.class} attributes that would break MDX
  content = content.replace(/\{\.[\w-]+(?:\s+[\w-]+="[^"]*")*\}/g, '');

  // Convert autolinks <https://...> to [url](url) (MDX interprets <url> as JSX tags)
  content = content.replace(/<(https?:\/\/[^>]+)>/g, '[$1]($1)');

  // Fix nested quotes in HTML attributes
  content = fixNestedQuotesInHtmlTags(content);

  // Fix unmatched double backticks (``text`) → single backticks (`text`)
  // Prevents MDX from seeing exposed <placeholders> between mismatched backticks
  content = content.replace(/``([^`]+)`(?!`)/g, '`$1`');

  // Escape bare < in prose that aren't part of HTML/JSX tags or code
  content = escapeBareAngleBrackets(content);

  // Fix unclosed <a> tags - convert to markdown links
  content = content.replace(
    /<a\s+href="([^"]*)"[^>]*>([^<]*?)(?:\[([^\]]*)\]\([^)]*\))?(?![\s\S]*?<\/a>)/g,
    (_match, href, text, linkText) => {
      const label = linkText || text.trim() || href;
      return `[${label}](${href})`;
    },
  );

  // Escape remaining curly braces in prose content
  content = escapeMdxCurlyBraces(content);

  // Convert HTML comments to JSX comments AFTER curly brace escaping
  // (so the {/* */} delimiters don't get escaped)
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Add imports at the top (after frontmatter) for JSX components only
  const imports: string[] = [];
  if (tabsResult.hasTabs) {
    imports.push("import { Tab, Tabs } from '@rspress/core/theme';");
  }
  if (apiResult.hasApi) {
    imports.push("import Api from '@components/Api';");
  }

  if (imports.length > 0) {
    const fmEnd = content.indexOf('---', 3);
    if (fmEnd !== -1) {
      const afterFm = fmEnd + 3;
      content =
        content.slice(0, afterFm) +
        '\n\n' +
        imports.join('\n') +
        '\n' +
        content.slice(afterFm);
    }
  }

  stats.filesMdx++;

  // Build output path — always .mdx, with guides/ prefix matching docs structure
  const outputSlug = guide.guidePath
    .split('/')
    .map((s) => s.replace(/_/g, '-').toLowerCase())
    .join('/');
  const outputPath = path.join(
    DOCS_OUT_DIR,
    guide.rspressLocale,
    'guides',
    `${outputSlug}.mdx`,
  );

  if (DRY_RUN) {
    console.log(`  [dry-run] ${guide.sourcePath} -> ${outputPath}`);
    return;
  }

  // Write output file
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content, 'utf-8');
  stats.filesWritten++;

  // Copy images to docs/public/
  if (imageResult.imagesToCopy.length > 0) {
    copyImages(guide.guideDir, PUBLIC_DIR, imageResult.imagesToCopy);
    stats.imagesCopied += imageResult.imagesToCopy.length;
  }
}

// --- Validation ---
async function runValidation() {
  console.log('Running post-migration validation...\n');

  // Validate structure
  console.log('Checking structure...');
  const structErrors = await validateStructure(RSPRESS_DIR);
  if (structErrors.length === 0) {
    console.log('  Structure OK\n');
  } else {
    console.log(`  ${structErrors.length} structure issues found:`);
    for (const err of structErrors) {
      console.log(
        `  [${err.type}] ${err.message}${err.path ? ` (${err.path})` : ''}`,
      );
    }
    console.log('');
  }

  // Validate links
  console.log('Checking links...');
  const linkErrors = await validateLinks(DOCS_OUT_DIR);
  if (linkErrors.length === 0) {
    console.log('  All links OK\n');
  } else {
    console.log(`  ${linkErrors.length} link issues found:`);
    const shown = linkErrors.slice(0, 50);
    for (const err of shown) {
      console.log(`  ${err.file}:${err.line} - ${err.reason}: ${err.link}`);
    }
    if (linkErrors.length > 50) {
      console.log(`  ... and ${linkErrors.length - 50} more`);
    }
    console.log('');
  }

  const total = structErrors.length + linkErrors.length;
  if (total === 0) {
    console.log('Validation PASSED - no issues found.');
  } else {
    console.log(`Validation found ${total} total issues.`);
    process.exit(1);
  }
}

// --- Entry point ---
main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
