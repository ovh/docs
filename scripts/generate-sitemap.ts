#!/usr/bin/env npx tsx
/**
 * Generate combined sitemap.xml from all locale builds
 *
 * Usage:
 *   npx tsx scripts/generate-sitemap.ts
 *
 * Scans doc_build_final/ for HTML files and generates a sitemap.xml
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'doc_build_final');
const SITE_URL = 'https://docs.ovhcloud.com';

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

/**
 * Recursively find all HTML files
 */
function findHtmlFiles(dir: string, files: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      findHtmlFiles(fullPath, files);
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Convert file path to URL
 */
function pathToUrl(filePath: string): string {
  // Get relative path from output directory
  let relativePath = path.relative(OUTPUT_DIR, filePath);

  // Convert to URL format
  relativePath = relativePath.replace(/\\/g, '/');

  // Remove index.html
  if (relativePath.endsWith('/index.html')) {
    relativePath = relativePath.slice(0, -10); // Remove /index.html
  } else if (relativePath === 'index.html') {
    relativePath = '';
  } else if (relativePath.endsWith('.html')) {
    relativePath = relativePath.slice(0, -5); // Remove .html
  }

  return `${SITE_URL}/${relativePath}`;
}

/**
 * Determine priority based on URL depth
 */
function getPriority(url: string): string {
  const path = url.replace(SITE_URL, '');
  const depth = (path.match(/\//g) || []).length;

  if (depth <= 1) return '1.0'; // Root and locale index
  if (depth <= 2) return '0.9'; // Category pages
  if (depth <= 3) return '0.8'; // Subcategory pages
  return '0.7'; // Individual guides
}

/**
 * Generate sitemap XML
 */
function generateSitemap(entries: SitemapEntry[]): string {
  const urlEntries = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Main function
 */
function main(): void {
  console.log('🗺️ Generating sitemap...\n');

  if (!fs.existsSync(OUTPUT_DIR)) {
    console.error('❌ Output directory not found:', OUTPUT_DIR);
    console.error('   Run build:combine first.');
    process.exit(1);
  }

  // Find all HTML files
  const htmlFiles = findHtmlFiles(OUTPUT_DIR);
  console.log(`Found ${htmlFiles.length} HTML files`);

  // Create sitemap entries
  const today = new Date().toISOString().split('T')[0];
  const entries: SitemapEntry[] = htmlFiles.map((file) => {
    const url = pathToUrl(file);
    return {
      loc: url,
      lastmod: today,
      changefreq: 'weekly',
      priority: getPriority(url),
    };
  });

  // Sort by URL for consistency
  entries.sort((a, b) => a.loc.localeCompare(b.loc));

  // Generate XML
  const sitemap = generateSitemap(entries);

  // Write sitemap
  const sitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);

  console.log(`\n✅ Sitemap generated: ${sitemapPath}`);
  console.log(`   ${entries.length} URLs indexed`);
}

main();
