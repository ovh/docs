/**
 * i18n.json updater - adds new sidebar translation keys
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const I18N_PATH = path.join(ROOT_DIR, 'i18n.json');

export const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'] as const;
export type Locale = (typeof LOCALES)[number];

export interface I18nTranslations {
  [locale: string]: string;
}

export interface I18nData {
  [key: string]: I18nTranslations;
}

/**
 * Read the i18n.json file
 */
export function readI18n(): I18nData {
  const content = fs.readFileSync(I18N_PATH, 'utf-8');
  return JSON.parse(content);
}

/**
 * Write the i18n.json file (preserves formatting)
 */
export function writeI18n(data: I18nData): void {
  const content = JSON.stringify(data, null, 2);
  fs.writeFileSync(I18N_PATH, `${content}\n`);
}

/**
 * Check if an i18n key already exists
 */
export function hasI18nKey(key: string): boolean {
  const data = readI18n();
  return key in data;
}

/**
 * Add a new i18n key with translations
 */
export function addI18nKey(
  key: string,
  translations: Partial<Record<Locale, string>>,
): void {
  const data = readI18n();

  if (key in data) {
    throw new Error(`i18n key "${key}" already exists`);
  }

  // Build translations object with all locales
  const fullTranslations: I18nTranslations = {};
  for (const locale of LOCALES) {
    // Use provided translation, fallback to FR, then to key name
    fullTranslations[locale] =
      translations[locale] || translations.fr || key.split('.').pop() || key;
  }

  // Insert key in alphabetical order
  const keys = Object.keys(data);
  keys.push(key);
  keys.sort();

  const newData: I18nData = {};
  for (const k of keys) {
    newData[k] = k === key ? fullTranslations : data[k];
  }

  writeI18n(newData);
}

/**
 * Delete an i18n key
 */
export function deleteI18nKey(key: string): boolean {
  const data = readI18n();

  if (!(key in data)) {
    return false;
  }

  delete data[key];
  writeI18n(data);
  return true;
}

/**
 * Generate an i18n key from a page path
 * e.g., guides/public-cloud/compute/my-new-guide -> sidebar.compute.myNewGuide
 */
export function generateI18nKey(
  pagePath: string,
  sidebarSection: string,
): string {
  // Extract the filename from path
  const parts = pagePath.split('/');
  const filename = parts[parts.length - 1];

  // Convert kebab-case to camelCase
  const camelCase = filename.replace(/-([a-z])/g, (_, letter) =>
    letter.toUpperCase(),
  );

  return `sidebar.${sidebarSection}.${camelCase}`;
}
