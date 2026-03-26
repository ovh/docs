#!/usr/bin/env npx tsx
/**
 * Generate LLMs files (llms.txt and llms-full.txt) per locale
 *
 * Usage:
 *   npx tsx scripts/generate-llms.ts
 *
 * Generates files compatible with llms.txt specification for AI consumption
 * @see https://llmstxt.org/
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'doc_build_final');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const SITE_URL = 'https://docs.ovhcloud.com';

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'] as const;

interface DocEntry {
  title: string;
  path: string;
  content: string;
}

/**
 * Extract title from MDX frontmatter
 */
function extractTitle(content: string): string {
  const match = content.match(/^---[\s\S]*?title:\s*["']?(.+?)["']?\s*$/m);
  return match?.[1] || 'Untitled';
}

/**
 * Strip MDX/Markdown syntax for plain text
 */
function stripMarkdown(content: string): string {
  let result = content;

  // Remove frontmatter
  result = result.replace(/^---[\s\S]*?---\n*/m, '');

  // Remove imports
  result = result.replace(/^import\s+.*$/gm, '');

  // Remove JSX components
  result = result.replace(/<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>/g, '');
  result = result.replace(/<[A-Z][^>]*\/>/g, '');

  // Convert headers to plain text with markers
  result = result.replace(/^#{1,6}\s+(.+)$/gm, '\n## $1\n');

  // Remove markdown links, keep text
  result = result.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  // Remove images
  result = result.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');

  // Remove bold/italic
  result = result.replace(/\*\*([^*]+)\*\*/g, '$1');
  result = result.replace(/\*([^*]+)\*/g, '$1');
  result = result.replace(/__([^_]+)__/g, '$1');
  result = result.replace(/_([^_]+)_/g, '$1');

  // Remove inline code backticks
  result = result.replace(/`([^`]+)`/g, '$1');

  // Remove code blocks
  result = result.replace(/```[\s\S]*?```/g, '[code block]');

  // Remove HTML tags
  result = result.replace(/<[^>]+>/g, '');

  // Clean up whitespace
  result = result.replace(/\n{3,}/g, '\n\n');
  result = result.trim();

  return result;
}

/**
 * Find all MDX files in a locale directory
 */
function findMdxFiles(dir: string, files: string[] = []): string[] {
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      findMdxFiles(fullPath, files);
    } else if (entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Generate llms.txt (index) for a locale
 */
function generateLlmsTxt(locale: string, docs: DocEntry[]): string {
  const header = `# OVHcloud Documentation (${locale.toUpperCase()})

> This file provides an index of OVHcloud documentation for LLM consumption.
> Full content available in llms-full.txt

## Documentation Index

`;

  const entries = docs
    .map((doc) => `- [${doc.title}](${SITE_URL}/${locale}${doc.path})`)
    .join('\n');

  return header + entries;
}

/**
 * Generate llms-full.txt (full content) for a locale
 */
function generateLlmsFullTxt(locale: string, docs: DocEntry[]): string {
  const header = `# OVHcloud Documentation - Full Content (${locale.toUpperCase()})

> Complete documentation content for LLM training and consumption.
> Generated: ${new Date().toISOString()}

`;

  const content = docs
    .map(
      (doc) => `---
## ${doc.title}
URL: ${SITE_URL}/${locale}${doc.path}
---

${doc.content}

`,
    )
    .join('\n');

  return header + content;
}

/**
 * Process a single locale
 */
function processLocale(locale: string): void {
  console.log(`\n📝 Processing ${locale}...`);

  const localeDocsDir = path.join(DOCS_DIR, locale);
  const outputLocaleDir = path.join(OUTPUT_DIR, locale);

  if (!fs.existsSync(localeDocsDir)) {
    console.log(`   ⚠️ No docs found for ${locale}, skipping`);
    return;
  }

  // Find all MDX files
  const mdxFiles = findMdxFiles(localeDocsDir);
  console.log(`   Found ${mdxFiles.length} MDX files`);

  // Process each file
  const docs: DocEntry[] = [];

  for (const file of mdxFiles) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      const title = extractTitle(content);
      const plainContent = stripMarkdown(content);

      // Get relative path for URL
      const relativePath = path
        .relative(localeDocsDir, file)
        .replace(/\.mdx$/, '')
        .replace(/\\/g, '/');

      docs.push({
        title,
        path: `/${relativePath}`,
        content: plainContent,
      });
    } catch (err) {
      console.error(`   ⚠️ Error processing ${file}:`, err);
    }
  }

  // Sort by path
  docs.sort((a, b) => a.path.localeCompare(b.path));

  // Ensure output directory exists
  fs.mkdirSync(outputLocaleDir, { recursive: true });

  // Generate and write llms.txt
  const llmsTxt = generateLlmsTxt(locale, docs);
  const llmsTxtPath = path.join(outputLocaleDir, 'llms.txt');
  fs.writeFileSync(llmsTxtPath, llmsTxt);
  console.log(`   ✅ llms.txt (${docs.length} entries)`);

  // Generate and write llms-full.txt
  const llmsFullTxt = generateLlmsFullTxt(locale, docs);
  const llmsFullPath = path.join(outputLocaleDir, 'llms-full.txt');
  fs.writeFileSync(llmsFullPath, llmsFullTxt);
  const sizeKb = (Buffer.byteLength(llmsFullTxt) / 1024).toFixed(1);
  console.log(`   ✅ llms-full.txt (${sizeKb} KB)`);
}

/**
 * Main function
 */
function main(): void {
  console.log('🤖 Generating LLMs files...');

  if (!fs.existsSync(OUTPUT_DIR)) {
    console.error('❌ Output directory not found:', OUTPUT_DIR);
    console.error('   Run build:combine first.');
    process.exit(1);
  }

  // Process each locale
  for (const locale of LOCALES) {
    processLocale(locale);
  }

  console.log('\n✅ LLMs files generated for all locales');
}

main();
