#!/usr/bin/env npx tsx
/**
 * Combine per-locale build outputs into a single deployment directory
 *
 * This script performs:
 * 1. Public assets deduplication (moves fr/public to shared dist/public)
 * 1.5. Images deduplication (symlinks dist/{locale}/images -> ../images)
 * 2. Root redirect creation (/ -> /fr/)
 * 3. Combined sitemap.xml generation
 * 4. robots.txt placement
 *
 * Usage:
 *   pnpm build:combine
 *
 * Input: dist/<locale>/ directories (from Turborepo parallel builds)
 * Output: dist/ (combined, deduplicated output)
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'] as const;
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const SITE_URL = 'https://docs.ovhcloud.com';

const totalStartTime = Date.now();
console.log('📦 Post-build processing...\n');

// Check which locales were built
const builtLocales = LOCALES.filter((locale) => {
  const localeDir = path.join(DIST_DIR, locale);
  return fs.existsSync(localeDir);
});

if (builtLocales.length === 0) {
  console.error('❌ No locale builds found in dist/');
  process.exit(1);
}

console.log(
  `Found ${builtLocales.length} locale builds: ${builtLocales.join(', ')}\n`,
);

// ============================================================================
// 1. DEDUPLICATE PUBLIC ASSETS
// ============================================================================
console.log('1️⃣  Deduplicating public assets...');
let sectionStart = Date.now();

const sourcePublic = path.join(DIST_DIR, builtLocales[0], 'public');
const sharedPublic = path.join(DIST_DIR, 'public');

if (fs.existsSync(sourcePublic) && !fs.existsSync(sharedPublic)) {
  // Move first locale's public to shared location
  fs.renameSync(sourcePublic, sharedPublic);
  console.log(`   ✓ Moved ${builtLocales[0]}/public -> dist/public`);
}

// Remove duplicate public folders from other locales
for (const locale of builtLocales) {
  const localePublic = path.join(DIST_DIR, locale, 'public');
  if (fs.existsSync(localePublic)) {
    fs.rmSync(localePublic, { recursive: true, force: true });
    console.log(`   ✓ Removed ${locale}/public (duplicate)`);
  }
}
console.log(`   ⏱ Completed in ${Date.now() - sectionStart}ms`);

// ============================================================================
// 1.5 DEDUPLICATE IMAGES (using symlinks)
// ============================================================================
console.log('\n1.5️⃣ Deduplicating images...');
sectionStart = Date.now();

const sourceImages = path.join(DIST_DIR, builtLocales[0], 'images');
const sharedImages = path.join(DIST_DIR, 'images');

if (fs.existsSync(sourceImages) && !fs.existsSync(sharedImages)) {
  // Move first locale's images to shared location
  fs.renameSync(sourceImages, sharedImages);
  console.log(`   ✓ Moved ${builtLocales[0]}/images -> dist/images`);
}

// Replace images folders with symlinks in all locales
for (const locale of builtLocales) {
  const localeImages = path.join(DIST_DIR, locale, 'images');

  // Remove existing folder if present (and not already a symlink)
  if (
    fs.existsSync(localeImages) &&
    !fs.lstatSync(localeImages).isSymbolicLink()
  ) {
    fs.rmSync(localeImages, { recursive: true, force: true });
    console.log(`   ✓ Removed ${locale}/images (duplicate)`);
  }

  // Create symlink: dist/{locale}/images -> ../images
  if (!fs.existsSync(localeImages)) {
    fs.symlinkSync('../images', localeImages, 'dir');
    console.log(`   ✓ Created symlink ${locale}/images -> ../images`);
  }
}
console.log(`   ⏱ Completed in ${Date.now() - sectionStart}ms`);

// ============================================================================
// 2. CREATE ROOT REDIRECT
// ============================================================================
console.log('\n2️⃣  Creating root redirect...');
sectionStart = Date.now();

const rootIndexHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=/fr/">
  <link rel="canonical" href="${SITE_URL}/fr/">
  <title>Redirecting to OVHcloud Documentation...</title>
</head>
<body>
  <p>Redirecting to <a href="/fr/">French documentation</a>...</p>
</body>
</html>`;

fs.writeFileSync(path.join(DIST_DIR, 'index.html'), rootIndexHtml);
console.log('   ✓ Created dist/index.html (redirects to /fr/)');

// Also create 301.map if it doesn't exist
const redirectMapPath = path.join(DIST_DIR, '301.map');
if (!fs.existsSync(redirectMapPath)) {
  fs.writeFileSync(redirectMapPath, '/ /fr/;\n');
  console.log('   ✓ Created dist/301.map');
}
console.log(`   ⏱ Completed in ${Date.now() - sectionStart}ms`);

// ============================================================================
// 3. GENERATE COMBINED SITEMAP
// ============================================================================
console.log('\n3️⃣  Generating combined sitemap...');
sectionStart = Date.now();

function collectHtmlFiles(dir: string, basePath: string): string[] {
  const urls: string[] = [];

  if (!fs.existsSync(dir)) return urls;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip public, static, and hidden directories
      if (!['public', 'static', '.'].includes(entry.name[0])) {
        urls.push(...collectHtmlFiles(fullPath, `${basePath}/${entry.name}`));
      }
    } else if (entry.name.endsWith('.html')) {
      // Clean URL: remove .html and index
      let urlPath = `${basePath}/${entry.name}`;
      urlPath = urlPath.replace(/\/index\.html$/, '/');
      urlPath = urlPath.replace(/\.html$/, '');
      urls.push(urlPath);
    }
  }

  return urls;
}

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

let totalUrls = 0;
for (const locale of builtLocales) {
  const localeDir = path.join(DIST_DIR, locale);
  const urls = collectHtmlFiles(localeDir, `/${locale}`);
  totalUrls += urls.length;

  for (const url of urls) {
    sitemapContent += `  <url><loc>${SITE_URL}${url}</loc></url>\n`;
  }
}

sitemapContent += '</urlset>\n';

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapContent);
console.log(`   ✓ Generated sitemap.xml (${totalUrls} URLs)`);
console.log(`   ⏱ Completed in ${Date.now() - sectionStart}ms`);

// ============================================================================
// 4. COPY ROBOTS.TXT TO ROOT
// ============================================================================
console.log('\n4️⃣  Setting up robots.txt...');
sectionStart = Date.now();

const robotsSrc = path.join(sharedPublic, 'robots.txt');
const robotsDst = path.join(DIST_DIR, 'robots.txt');

if (fs.existsSync(robotsSrc)) {
  fs.copyFileSync(robotsSrc, robotsDst);
  console.log('   ✓ Copied robots.txt to dist root');
} else {
  // Create default robots.txt
  const defaultRobots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(robotsDst, defaultRobots);
  console.log('   ✓ Created default robots.txt');
}
console.log(`   ⏱ Completed in ${Date.now() - sectionStart}ms`);

// ============================================================================
// 5. REMOVE FLEXSEARCH INDEX (replaced by Pagefind)
// ============================================================================
// (Also see step 5.5 below for accent-normalized text injection)
console.log('\n5️⃣  Removing FlexSearch index files (replaced by Pagefind)...');
sectionStart = Date.now();

import { execSync } from 'node:child_process';

for (const locale of builtLocales) {
  const staticDir = path.join(DIST_DIR, locale, 'static');
  if (fs.existsSync(staticDir)) {
    const searchFiles = fs
      .readdirSync(staticDir)
      .filter((f) => f.startsWith('search_index'));
    for (const file of searchFiles) {
      fs.unlinkSync(path.join(staticDir, file));
      console.log(`   ✓ Removed ${locale}/static/${file}`);
    }
  }
}
console.log(`   ⏱ Completed in ${Date.now() - sectionStart}ms`);

// ============================================================================
// 5.5. INJECT ACCENT-NORMALIZED TEXT (enables accent-insensitive search)
// ============================================================================
// Pagefind indexes HTML text as-is, so "dédié" ≠ "dedie".
// We inject a hidden <p> with accent-stripped text alongside each page's
// content so Pagefind indexes both variants.
console.log('\n5.5️⃣ Injecting accent-normalized text for search...');
sectionStart = Date.now();

function normalizeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function postProcessHtml(dir: string): {
  normalized: number;
  weighted: number;
} {
  let normalized = 0;
  let weighted = 0;
  if (!fs.existsSync(dir)) return { normalized, weighted };
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['pagefind', 'public', 'images', 'static'].includes(entry.name)) {
        const sub = postProcessHtml(fullPath);
        normalized += sub.normalized;
        weighted += sub.weighted;
      }
    } else if (entry.name.endsWith('.html')) {
      let html = fs.readFileSync(fullPath, 'utf-8');
      let changed = false;

      // 1. Boost h1 weight so exact title matches rank first
      if (!html.includes('data-pagefind-weight')) {
        html = html.replace(
          /<h1([^>]*)>/gi,
          '<h1$1 data-pagefind-weight="10">',
        );
        weighted++;
        changed = true;
      }

      // 2. Clear header-anchor text so "#" doesn't appear in sub-result titles
      html = html.replace(
        /(<a\s[^>]*class="[^"]*header-anchor[^"]*"[^>]*>)\s*#\s*(<\/a>)/gi,
        '$1 $2',
      );

      // 3. Inject accent-normalized text for accent-insensitive search
      if (!html.includes('data-pagefind-normalized')) {
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        if (bodyMatch) {
          const text = bodyMatch[1]
            .replace(/<script[\s\S]*?<\/script>/gi, '')
            .replace(/<style[\s\S]*?<\/style>/gi, '')
            .replace(/<pre[\s\S]*?<\/pre>/gi, '')
            .replace(/<code[\s\S]*?<\/code>/gi, '')
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
          const norm = normalizeAccents(text);
          if (norm !== text) {
            // 3a. Inject normalized h1 with high weight so accent-free title
            //     searches rank the right page first (mirrors step 1 for stripped queries)
            const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
            const normH1 = h1Match
              ? normalizeAccents(h1Match[1].replace(/<[^>]+>/g, '').trim())
              : '';
            const titleBoost = normH1
              ? `<p data-pagefind-weight="10" data-pagefind-normalized-title style="display:none">${normH1}</p>`
              : '';

            // 3b. Inject normalized body text at default weight
            html = html.replace(
              '</body>',
              `${titleBoost}<p data-pagefind-normalized style="display:none">${norm}</p></body>`,
            );
            normalized++;
            changed = true;
          }
        }
      }

      if (changed) fs.writeFileSync(fullPath, html);
    }
  }
  return { normalized, weighted };
}

const { normalized: normalizedCount, weighted: weightedCount } =
  postProcessHtml(DIST_DIR);
console.log(`   ✓ Boosted h1 weight in ${weightedCount} HTML files`);
console.log(`   ✓ Injected normalized text in ${normalizedCount} HTML files`);
console.log(`   ⏱ Completed in ${Date.now() - sectionStart}ms`);

// ============================================================================
// 6. RUN PAGEFIND INDEXING
// ============================================================================
console.log('\n6️⃣  Running Pagefind search indexing...');
sectionStart = Date.now();

try {
  execSync(
    `npx pagefind --site ${DIST_DIR} --glob "**/*.html" --exclude-selectors "pre, code, .rp-codeblock, .rp-codeblock__title, nav, footer, header, aside, .rp-sidebar, .rp-outline, .rp-nav, .rp-doc-layout__sidebar, .rp-doc-layout__outline, .rspress-breadcrumbs, .rp-doc-footer, .rp-home-layout__content, .rp-search-button, .rp-callout__title, button, .header-anchor, [data-pagefind-ignore], .ovh-api-main, .ovh-api-region-select"`,
    { stdio: 'inherit', cwd: ROOT_DIR },
  );
  console.log(`   ✓ Pagefind index generated`);
} catch (error) {
  console.error(
    '   ⚠ Pagefind indexing failed (search will fall back to FlexSearch)',
  );
  console.error(error);
}
console.log(`   ⏱ Completed in ${Date.now() - sectionStart}ms`);

// ============================================================================
// SUMMARY
// ============================================================================
const totalTime = Date.now() - totalStartTime;
console.log(`\n${'='.repeat(60)}`);
console.log(`✅ POST-BUILD PROCESSING COMPLETE in ${totalTime}ms`);
console.log('='.repeat(60));
console.log(`Output: ${DIST_DIR}`);
console.log(`Locales: ${builtLocales.join(', ')}`);
console.log(`Sitemap: ${totalUrls} URLs`);
console.log('\nGenerated files:');
console.log('  - dist/index.html (root redirect)');
console.log('  - dist/301.map (redirect mapping)');
console.log('  - dist/sitemap.xml (combined sitemap)');
console.log('  - dist/robots.txt (SEO)');
console.log(
  '  - dist/<locale>/llms.txt (per-locale LLMs index, generated by Rspress)',
);
console.log('  - dist/public/ (shared assets)');
console.log('  - dist/pagefind/ (search index)');
