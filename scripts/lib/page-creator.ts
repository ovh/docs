/**
 * MDX page creator - creates MDX files for specified locales
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALES, type Locale } from './i18n-updater.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');

export type PageType = 'doc' | 'overview';
export type Visibility = 'public' | 'hidden';

export interface PageConfig {
  /** Page path without locale (e.g., guides/public-cloud/compute/my-guide) */
  pagePath: string;
  /** Page type */
  pageType: PageType;
  /** Visibility (hidden pages get _ prefix) */
  visibility: Visibility;
  /** Titles per locale */
  titles: Partial<Record<Locale, string>>;
  /** Excerpts per locale */
  excerpts: Partial<Record<Locale, string>>;
  /** Locales to create (default: all) */
  locales?: Locale[];
}

/**
 * Generate MDX content for a page
 */
function generateMdxContent(
  pageType: PageType,
  title: string,
  excerpt: string,
): string {
  if (pageType === 'overview') {
    return `---
title: "${title}"
excerpt: "${excerpt}"
pageType: overview
---

# ${title}

${excerpt}
`;
  }

  // Default: doc
  return `---
title: "${title}"
excerpt: "${excerpt}"
---

# ${title}

## Introduction

TODO: Add introduction

## Prerequisites

TODO: Add prerequisites

## Instructions

TODO: Add step-by-step instructions

## Go further

TODO: Add related links
`;
}

/**
 * Get the filename for a page based on visibility
 */
function getFilename(pagePath: string, visibility: Visibility): string {
  const parts = pagePath.split('/');
  const filename = parts[parts.length - 1];

  if (visibility === 'hidden') {
    parts[parts.length - 1] = `_${filename}`;
  }

  return parts.join('/');
}

/**
 * Check if a page already exists in any locale
 */
export function pageExists(pagePath: string): Locale[] {
  const existingLocales: Locale[] = [];

  for (const locale of LOCALES) {
    const filePath = path.join(DOCS_DIR, locale, `${pagePath}.mdx`);
    const hiddenFilePath = path.join(
      DOCS_DIR,
      locale,
      `${getFilename(pagePath, 'hidden')}.mdx`,
    );

    if (fs.existsSync(filePath) || fs.existsSync(hiddenFilePath)) {
      existingLocales.push(locale);
    }
  }

  return existingLocales;
}

/**
 * Create MDX pages for specified locales
 */
export function createPages(config: PageConfig): {
  created: string[];
  skipped: string[];
} {
  const locales = config.locales || [...LOCALES];
  const created: string[] = [];
  const skipped: string[] = [];

  const actualPath = getFilename(config.pagePath, config.visibility);

  for (const locale of locales) {
    const filePath = path.join(DOCS_DIR, locale, `${actualPath}.mdx`);

    // Check if file exists
    if (fs.existsSync(filePath)) {
      skipped.push(filePath);
      continue;
    }

    // Get title and excerpt for this locale (fallback to FR, then EN)
    const title =
      config.titles[locale] ||
      config.titles.fr ||
      config.titles.en ||
      'Untitled';
    const excerpt =
      config.excerpts[locale] || config.excerpts.fr || config.excerpts.en || '';

    // Generate content
    const content = generateMdxContent(config.pageType, title, excerpt);

    // Ensure directory exists
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });

    // Write file
    fs.writeFileSync(filePath, content, 'utf-8');
    created.push(filePath);
  }

  return { created, skipped };
}

/**
 * Get the relative path from docs root
 */
export function getRelativePath(absolutePath: string): string {
  return path.relative(DOCS_DIR, absolutePath);
}
