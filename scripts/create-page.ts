#!/usr/bin/env npx tsx
/**
 * Page Creation CLI
 *
 * Interactive CLI to create new documentation pages with:
 * - MDX files for specified locales
 * - Sidebar entry
 * - i18n translations
 *
 * Usage:
 *   pnpm page:create
 */

import { checkbox, confirm, input, select } from '@inquirer/prompts';
import {
  addI18nKey,
  generateI18nKey,
  hasI18nKey,
  LOCALES,
  type Locale,
} from './lib/i18n-updater.js';
import {
  createPages,
  type PageType,
  pageExists,
  type Visibility,
} from './lib/page-creator.js';
import {
  addSidebarEntry,
  detectSidebarConfig,
  getAvailableSections,
  type SidebarConfig,
} from './lib/sidebar-updater.js';

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
  console.log('\n📄 Page Creation CLI\n');

  // 1. Page path
  const pagePath = await input({
    message: 'Page path (without locale prefix):',
    default: 'guides/',
    validate: (value) => {
      if (!value.startsWith('guides/')) {
        return 'Path must start with "guides/"';
      }
      if (value.endsWith('/')) {
        return 'Path should not end with "/"';
      }
      if (value.includes('//')) {
        return 'Path should not contain "//"';
      }
      return true;
    },
  });

  // Check if page already exists
  const existingLocales = pageExists(pagePath);
  if (existingLocales.length > 0) {
    console.log(`\n⚠️  Page already exists in: ${existingLocales.join(', ')}`);
    const shouldContinue = await confirm({
      message: 'Continue anyway? (will skip existing locales)',
      default: false,
    });
    if (!shouldContinue) {
      console.log('Aborted.');
      process.exit(0);
    }
  }

  // 2. Page type
  const pageType = await select<PageType>({
    message: 'Page type:',
    choices: [
      { value: 'doc', name: 'doc (default - regular documentation page)' },
      {
        value: 'overview',
        name: 'overview (landing/index page with OverviewLayout)',
      },
    ],
    default: 'doc',
  });

  // 3. Visibility
  const visibility = await select<Visibility>({
    message: 'Visibility:',
    choices: [
      { value: 'public', name: 'public (added to sidebar)' },
      { value: 'hidden', name: 'hidden (prefixed with _, not in sidebar)' },
    ],
    default: 'public',
  });

  // 4. Locales to create
  const selectedLocales = await checkbox<Locale>({
    message: 'Locales to create:',
    choices: LOCALES.map((locale) => ({
      value: locale,
      name: LOCALE_LABELS[locale],
      checked: !existingLocales.includes(locale),
    })),
  });

  if (selectedLocales.length === 0) {
    console.log('No locales selected. Aborted.');
    process.exit(0);
  }

  // 5. Titles per locale
  console.log(
    '\n📝 Enter titles for each locale (press Enter to use FR title as fallback):\n',
  );

  const titles: Partial<Record<Locale, string>> = {};

  // Always ask for FR first as it's the primary locale
  titles.fr = await input({
    message: `Title (FR):`,
    validate: (value) => (value.length > 0 ? true : 'Title is required'),
  });

  // Ask for other selected locales
  for (const locale of selectedLocales) {
    if (locale === 'fr') continue;

    const title = await input({
      message: `Title (${locale.toUpperCase()}):`,
      default: titles.fr,
    });
    titles[locale] = title;
  }

  // 6. Excerpts per locale
  console.log('\n📝 Enter excerpts/descriptions:\n');

  const excerpts: Partial<Record<Locale, string>> = {};

  excerpts.fr = await input({
    message: `Excerpt (FR):`,
    default: '',
  });

  for (const locale of selectedLocales) {
    if (locale === 'fr') continue;

    const excerpt = await input({
      message: `Excerpt (${locale.toUpperCase()}):`,
      default: excerpts.fr,
    });
    excerpts[locale] = excerpt;
  }

  // 7. Sidebar configuration (only for public pages)
  let sidebarConfig: SidebarConfig | null = null;
  let i18nKey = '';

  if (visibility === 'public') {
    // Auto-detect sidebar config
    sidebarConfig = detectSidebarConfig(pagePath);

    if (sidebarConfig) {
      console.log(
        `\n📂 Detected sidebar: ${sidebarConfig.file} → ${sidebarConfig.section}`,
      );
      const useDetected = await confirm({
        message: 'Use detected sidebar configuration?',
        default: true,
      });

      if (!useDetected) {
        const sections = getAvailableSections();
        const selectedSection = await select({
          message: 'Select sidebar section:',
          choices: sections.map((s) => ({ value: s, name: s })),
        });

        // Find config for selected section
        const configs = Object.values(
          await import('./lib/sidebar-updater.js').then((m) => m.SIDEBAR_MAP),
        );
        sidebarConfig =
          configs.find((c) => c.section === selectedSection) || null;
      }
    } else {
      console.log('\n⚠️  Could not auto-detect sidebar section.');
      const sections = getAvailableSections();
      const selectedSection = await select({
        message: 'Select sidebar section:',
        choices: sections.map((s) => ({ value: s, name: s })),
      });

      const { SIDEBAR_MAP } = await import('./lib/sidebar-updater.js');
      const configs = Object.values(SIDEBAR_MAP);
      sidebarConfig =
        configs.find((c) => c.section === selectedSection) || null;
    }

    if (sidebarConfig) {
      // Generate i18n key
      i18nKey = generateI18nKey(pagePath, sidebarConfig.section);

      // Check if key exists
      if (hasI18nKey(i18nKey)) {
        console.log(`\n⚠️  i18n key "${i18nKey}" already exists.`);
        i18nKey = await input({
          message: 'Enter a different i18n key:',
          default: i18nKey,
          validate: (value) =>
            hasI18nKey(value) ? 'Key already exists' : true,
        });
      } else {
        const useGeneratedKey = await confirm({
          message: `Use generated i18n key "${i18nKey}"?`,
          default: true,
        });

        if (!useGeneratedKey) {
          i18nKey = await input({
            message: 'Enter custom i18n key:',
            validate: (value) =>
              hasI18nKey(value) ? 'Key already exists' : true,
          });
        }
      }
    }
  }

  // Summary and confirmation
  console.log(`\n${'='.repeat(50)}`);
  console.log('📋 Summary\n');
  console.log(`  Path:       ${pagePath}`);
  console.log(`  Type:       ${pageType}`);
  console.log(`  Visibility: ${visibility}`);
  console.log(`  Locales:    ${selectedLocales.join(', ')}`);
  console.log(`  Title (FR): ${titles.fr}`);
  if (visibility === 'public' && sidebarConfig) {
    console.log(
      `  Sidebar:    ${sidebarConfig.file} → ${sidebarConfig.section}`,
    );
    console.log(`  i18n key:   ${i18nKey}`);
  }
  console.log(`\n${'='.repeat(50)}`);

  const shouldProceed = await confirm({
    message: 'Create page?',
    default: true,
  });

  if (!shouldProceed) {
    console.log('Aborted.');
    process.exit(0);
  }

  // Execute creation
  console.log('\n🚀 Creating page...\n');

  try {
    // 1. Create MDX files
    console.log('  Creating MDX files...');
    const { created, skipped } = createPages({
      pagePath,
      pageType,
      visibility,
      titles,
      excerpts,
      locales: selectedLocales,
    });

    for (const file of created) {
      console.log(`    ✓ ${file}`);
    }
    for (const file of skipped) {
      console.log(`    ⊘ ${file} (skipped - already exists)`);
    }

    // 2. Add i18n key (only for public pages)
    if (visibility === 'public' && i18nKey) {
      console.log('\n  Adding i18n key...');
      addI18nKey(i18nKey, titles);
      console.log(`    ✓ Added "${i18nKey}" to i18n.json`);
    }

    // 3. Add sidebar entry (only for public pages)
    if (visibility === 'public' && sidebarConfig && i18nKey) {
      console.log('\n  Adding sidebar entry...');
      addSidebarEntry(pagePath, i18nKey, sidebarConfig);
      console.log(`    ✓ Added entry to ${sidebarConfig.file}`);
    }

    console.log('\n✅ Page created successfully!\n');

    // Suggest next steps
    console.log('Next steps:');
    console.log(`  1. Edit the MDX files to add content`);
    console.log(`  2. Run "pnpm sidebar:validate" to verify links`);
    console.log(`  3. Run "pnpm dev" to preview the page`);
    console.log('');
  } catch (error) {
    console.error('\n❌ Error creating page:', error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
