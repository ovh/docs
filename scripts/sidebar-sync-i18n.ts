/**
 * Sync sidebar.gen.* i18n keys from index.md + YAML translations → i18n.json
 *
 * - Reads index.md and YAML translation files via the parser
 * - Generates/updates sidebar.gen.* keys in i18n.json
 * - Removes obsolete sidebar.gen.* keys (sections removed from index.md)
 * - Preserves all other i18n keys
 *
 * Usage: pnpm sidebar:sync-i18n
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseIndexMd } from '../config/sidebar/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const I18N_PATH = path.join(ROOT, 'i18n.json');
const INDEX_MD_PATH = path.join(ROOT, 'config/sidebar/index.md');
const TRANSLATIONS_DIR = path.join(ROOT, 'base/pages');

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'] as const;

function main() {
  // Parse index.md to get i18n entries
  const { i18nEntries } = parseIndexMd(INDEX_MD_PATH, TRANSLATIONS_DIR);

  // Read existing i18n.json
  const i18n: Record<string, Record<string, string>> = JSON.parse(
    fs.readFileSync(I18N_PATH, 'utf-8'),
  );

  // Remove all existing sidebar.gen.* keys
  const existingGenKeys = Object.keys(i18n).filter((k) =>
    k.startsWith('sidebar.gen.'),
  );
  let removed = 0;
  for (const key of existingGenKeys) {
    if (!i18nEntries[key]) {
      delete i18n[key];
      removed++;
    }
  }

  // Add/update sidebar.gen.* keys
  let added = 0;
  let updated = 0;
  for (const [key, translations] of Object.entries(i18nEntries)) {
    // Ensure all locales are present (fill missing with en value)
    const entry: Record<string, string> = {};
    for (const locale of LOCALES) {
      entry[locale] = translations[locale] || translations.en;
    }

    if (!i18n[key]) {
      added++;
    } else {
      updated++;
    }
    i18n[key] = entry;
  }

  // Sort keys alphabetically
  const sorted: Record<string, Record<string, string>> = {};
  for (const key of Object.keys(i18n).sort()) {
    sorted[key] = i18n[key];
  }

  // Write back
  fs.writeFileSync(I18N_PATH, `${JSON.stringify(sorted, null, 2)}\n`);

  console.log(
    `sidebar:sync-i18n: ${added} added, ${updated} updated, ${removed} removed`,
  );
  console.log(`Total sidebar.gen.* keys: ${Object.keys(i18nEntries).length}`);
}

main();
