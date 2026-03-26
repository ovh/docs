/**
 * MDX page deleter - removes MDX files for specified locales
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALES, type Locale } from './i18n-updater.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');

export interface DeleteResult {
  deleted: string[];
  notFound: string[];
}

/**
 * Find all existing locales for a page path
 */
export function findExistingPages(pagePath: string): {
  locale: Locale;
  filePath: string;
  isHidden: boolean;
}[] {
  const results: { locale: Locale; filePath: string; isHidden: boolean }[] = [];

  // Extract filename to check for hidden variant
  const parts = pagePath.split('/');
  const filename = parts[parts.length - 1];
  const hiddenPath = [...parts.slice(0, -1), `_${filename}`].join('/');

  for (const locale of LOCALES) {
    // Check normal path
    const normalFilePath = path.join(DOCS_DIR, locale, `${pagePath}.mdx`);
    if (fs.existsSync(normalFilePath)) {
      results.push({ locale, filePath: normalFilePath, isHidden: false });
      continue;
    }

    // Check hidden path
    const hiddenFilePath = path.join(DOCS_DIR, locale, `${hiddenPath}.mdx`);
    if (fs.existsSync(hiddenFilePath)) {
      results.push({ locale, filePath: hiddenFilePath, isHidden: true });
    }
  }

  return results;
}

/**
 * Delete MDX files for specified locales
 */
export function deletePages(
  pagePath: string,
  locales?: Locale[],
): DeleteResult {
  const existingPages = findExistingPages(pagePath);
  const targetLocales = locales || LOCALES;

  const deleted: string[] = [];
  const notFound: string[] = [];

  for (const locale of targetLocales) {
    const page = existingPages.find((p) => p.locale === locale);

    if (page) {
      fs.unlinkSync(page.filePath);
      deleted.push(page.filePath);
    } else {
      notFound.push(locale);
    }
  }

  return { deleted, notFound };
}

/**
 * Get the relative path from docs root
 */
export function getRelativePath(absolutePath: string): string {
  return path.relative(DOCS_DIR, absolutePath);
}
