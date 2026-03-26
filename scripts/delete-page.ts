#!/usr/bin/env npx tsx
/**
 * Page Deletion CLI
 *
 * Interactive CLI to delete documentation pages:
 * - MDX files from specified locales
 * - Sidebar entry
 * - i18n translations
 *
 * Usage:
 *   pnpm page:delete
 */

import { checkbox, confirm, input } from '@inquirer/prompts';
import { deleteI18nKey, type Locale } from './lib/i18n-updater.js';
import {
  deletePages,
  findExistingPages,
  getRelativePath,
} from './lib/page-deleter.js';
import { deleteSidebarEntry, findSidebarEntry } from './lib/sidebar-updater.js';

const LOCALE_LABELS: Record<Locale, string> = {
  fr: 'French (FR)',
  en: 'English (EN)',
  de: 'German (DE)',
  es: 'Spanish (ES)',
  it: 'Italian (IT)',
  pl: 'Polish (PL)',
  pt: 'Portuguese (PT)',
};

async function main() {
  console.log('\n🗑️  Page Deletion CLI\n');

  // 1. Page path
  const pagePath = await input({
    message: 'Page path to delete (without locale prefix):',
    default: 'guides/',
    validate: (value) => {
      if (!value.startsWith('guides/')) {
        return 'Path must start with "guides/"';
      }
      if (value.endsWith('/')) {
        return 'Path should not end with "/"';
      }
      return true;
    },
  });

  // Find existing pages
  const existingPages = findExistingPages(pagePath);

  if (existingPages.length === 0) {
    console.log('\n❌ No pages found at this path.');
    console.log('   Make sure the path is correct (without .mdx extension).');
    process.exit(1);
  }

  console.log(`\n📁 Found ${existingPages.length} locale(s):`);
  for (const page of existingPages) {
    const hiddenLabel = page.isHidden ? ' (hidden)' : '';
    console.log(
      `   - ${page.locale}${hiddenLabel}: ${getRelativePath(page.filePath)}`,
    );
  }

  // Find sidebar entry
  const sidebarEntry = findSidebarEntry(pagePath);
  if (sidebarEntry) {
    console.log(`\n📑 Sidebar entry found:`);
    console.log(`   - File: ${sidebarEntry.file}`);
    console.log(`   - i18n key: ${sidebarEntry.i18nKey}`);
  } else {
    console.log(
      '\n📑 No sidebar entry found (page may be hidden or not linked)',
    );
  }

  // 2. Select locales to delete
  const localesToDelete = await checkbox<Locale>({
    message: 'Select locales to delete:',
    choices: existingPages.map((page) => ({
      value: page.locale,
      name: `${LOCALE_LABELS[page.locale]}${page.isHidden ? ' (hidden)' : ''}`,
      checked: true,
    })),
  });

  if (localesToDelete.length === 0) {
    console.log('No locales selected. Aborted.');
    process.exit(0);
  }

  // 3. Ask about sidebar and i18n deletion
  let deleteSidebar = false;
  let deleteI18n = false;

  if (sidebarEntry) {
    const deleteAll = localesToDelete.length === existingPages.length;

    if (deleteAll) {
      deleteSidebar = await confirm({
        message: `Delete sidebar entry from ${sidebarEntry.file}?`,
        default: true,
      });

      if (deleteSidebar) {
        deleteI18n = await confirm({
          message: `Delete i18n key "${sidebarEntry.i18nKey}"?`,
          default: true,
        });
      }
    } else {
      console.log(
        '\n⚠️  Not deleting all locales - sidebar and i18n will be kept.',
      );
    }
  }

  // Summary and confirmation
  console.log(`\n${'='.repeat(50)}`);
  console.log('📋 Deletion Summary\n');
  console.log(`  Path:    ${pagePath}`);
  console.log(`  Locales: ${localesToDelete.join(', ')}`);
  console.log(
    `  Sidebar: ${deleteSidebar ? 'Will be deleted' : 'Will be kept'}`,
  );
  console.log(`  i18n:    ${deleteI18n ? 'Will be deleted' : 'Will be kept'}`);
  console.log(`\n${'='.repeat(50)}`);

  const shouldProceed = await confirm({
    message: '⚠️  This action cannot be undone. Proceed with deletion?',
    default: false,
  });

  if (!shouldProceed) {
    console.log('Aborted.');
    process.exit(0);
  }

  // Execute deletion
  console.log('\n🗑️  Deleting...\n');

  try {
    // 1. Delete MDX files
    console.log('  Deleting MDX files...');
    const { deleted, notFound } = deletePages(pagePath, localesToDelete);

    for (const file of deleted) {
      console.log(`    ✓ ${getRelativePath(file)}`);
    }
    for (const locale of notFound) {
      console.log(`    ⊘ ${locale} (not found)`);
    }

    // 2. Delete sidebar entry
    if (deleteSidebar && sidebarEntry) {
      console.log('\n  Deleting sidebar entry...');
      const sidebarDeleted = deleteSidebarEntry(pagePath);
      if (sidebarDeleted) {
        console.log(`    ✓ Removed from ${sidebarEntry.file}`);
      } else {
        console.log(`    ⚠️  Could not find entry to delete`);
      }
    }

    // 3. Delete i18n key
    if (deleteI18n && sidebarEntry) {
      console.log('\n  Deleting i18n key...');
      const i18nDeleted = deleteI18nKey(sidebarEntry.i18nKey);
      if (i18nDeleted) {
        console.log(`    ✓ Removed "${sidebarEntry.i18nKey}" from i18n.json`);
      } else {
        console.log(`    ⚠️  Key not found in i18n.json`);
      }
    }

    console.log('\n✅ Deletion completed!\n');

    // Suggest next steps
    if (deleteSidebar) {
      console.log('Next steps:');
      console.log(`  1. Run "pnpm sidebar:validate" to verify no broken links`);
      console.log(`  2. Commit the changes`);
      console.log('');
    }
  } catch (error) {
    console.error('\n❌ Error during deletion:', error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
