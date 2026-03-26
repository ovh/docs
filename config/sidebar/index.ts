import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Sidebar } from '@rspress/core';
import { parseIndexMd } from './parser';
import { getHeaderItems, type Locale, securitySidebar } from './supplements';

// All supported locales with their route prefix
// In dev mode: first DEV_LOCALES locale uses '/', others use '/{locale}/'
// In production per-locale builds: each locale builds with base='/${locale}/',
//   so routes are relative to base and sidebar key should be '/' for all
const isDev = process.env.NODE_ENV !== 'production';

// In dev mode, only generate sidebar for active locales (perf optimization)
const devLocaleList = isDev
  ? (process.env.DEV_LOCALES || 'fr,en').split(',')
  : null;

// In dev, the first locale in DEV_LOCALES becomes the default (no URL prefix)
const defaultDevLocale = isDev ? devLocaleList?.[0] || 'fr' : null;

const allLocales = Object.fromEntries(
  ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'].map((locale) => [
    locale,
    isDev ? (locale === defaultDevLocale ? '/' : `/${locale}/`) : '/',
  ]),
) as Record<string, string>;
// In production per-locale builds, only generate sidebar for the current LOCALE
// (all locales map to key '/', so Object.fromEntries would keep only the last one)
const buildLocale = !isDev ? process.env.LOCALE || 'fr' : 'fr';
const locales = isDev
  ? (Object.fromEntries(
      Object.entries(allLocales).filter(([k]) => devLocaleList?.includes(k)),
    ) as typeof allLocales)
  : ({ [buildLocale]: '/' } as Record<string, string>);

// Resolve __dirname for both CJS (Rspress bundler) and ESM (tsx) contexts
const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const SIDEBAR_DIR = path.resolve(_dirname);
const TRANSLATIONS_DIR = path.resolve(_dirname, '../../base/pages');
const DOCS_DIR = path.resolve(_dirname, '../../docs');

// Build sidebar per locale (leaf titles come from locale-specific MDX frontmatter)
function createSidebar(locale: Locale) {
  const { universes } = parseIndexMd(
    path.join(SIDEBAR_DIR, 'index.md'),
    TRANSLATIONS_DIR,
    DOCS_DIR,
    locale,
  );

  // Move "Account and service management" out of universes to place it
  // at the bottom, just before the Security section (matching old layout)
  const accountKey = 'sidebar.gen.accountAndServiceManagement';
  const accountUniverse = universes.find((u) => u.text === accountKey);
  const mainUniverses = universes.filter((u) => u.text !== accountKey);

  return [
    // Documentation section
    ...getHeaderItems(locale),

    // Main product categories (from index.md)
    { dividerType: 'solid' },
    ...mainUniverses,

    // Account & Security
    { dividerType: 'solid' },
    ...(accountUniverse ? [accountUniverse] : []),
    securitySidebar,
  ];
}

// Auto-generate sidebar for all locales
export const sidebar = Object.fromEntries(
  Object.entries(locales).map(([locale, routePrefix]) => [
    routePrefix,
    createSidebar(locale as Locale),
  ]),
) as Sidebar;
