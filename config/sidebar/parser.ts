/**
 * Parser for index.md → SidebarGroup[]
 *
 * Reads the markdown index file (source of truth for sidebar structure)
 * and produces an Rspress sidebar tree with i18n entries.
 *
 * Format:
 *   + Universe Name                                    → SidebarGroup (top-level)
 *       + [Product Label](products/category-ref)       → SidebarGroup (collapsed)
 *           + [Section Label](section-ref)             → SidebarGroup (collapsed)
 *               + [Guide Title](universe/product/slug) → SidebarItem (leaf, link)
 *
 * Classification rules:
 *   - indent 0, no link           → universe
 *   - link starting with products/→ product (group, collapsible)
 *   - link without / (section ref)→ section (group, collapsible)
 *   - link with / (guide slug)    → guide (leaf with link)
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import type { SidebarGroup, SidebarItem } from '@rspress/core';
import YAML from 'yaml';

type Locale = 'fr' | 'en' | 'de' | 'es' | 'it' | 'pl' | 'pt';

const NON_EN_LOCALES: Locale[] = ['fr', 'de', 'es', 'it', 'pl', 'pt'];

// Sidebar label for overview pages (overrides MDX frontmatter title)
const OVERVIEW_TRANSLATIONS: Record<Locale, string> = {
  en: 'Overview',
  fr: 'Aperçu',
  de: 'Übersicht',
  es: 'Descripción general',
  it: 'Panoramica',
  pl: 'Przegląd',
  pt: 'Visão geral',
};

// Universe-level translations (not in YAML files — universes have no ref)
const UNIVERSE_TRANSLATIONS: Record<string, Record<string, string>> = {
  'Account and service management': {
    fr: 'Gestion de compte',
    de: 'Kontoverwaltung',
    es: 'Gestión de cuenta',
    it: 'Gestione account',
    pl: 'Zarządzanie kontem',
    pt: 'Gestão de conta',
  },
  'Bare Metal Cloud': {
    fr: 'Bare Metal Cloud',
    de: 'Bare Metal Cloud',
    es: 'Bare Metal Cloud',
    it: 'Bare Metal Cloud',
    pl: 'Bare Metal Cloud',
    pt: 'Bare Metal Cloud',
  },
  'Hosted Private Cloud': {
    fr: 'Hosted Private Cloud',
    de: 'Hosted Private Cloud',
    es: 'Hosted Private Cloud',
    it: 'Hosted Private Cloud',
    pl: 'Hosted Private Cloud',
    pt: 'Hosted Private Cloud',
  },
  'Public Cloud': {
    fr: 'Public Cloud',
    de: 'Public Cloud',
    es: 'Public Cloud',
    it: 'Public Cloud',
    pl: 'Public Cloud',
    pt: 'Public Cloud',
  },
  'Web Cloud': {
    fr: 'Web Cloud',
    de: 'Web Cloud',
    es: 'Web Cloud',
    it: 'Web Cloud',
    pl: 'Web Cloud',
    pt: 'Web Cloud',
  },
  'Storage and Backup': {
    fr: 'Stockage et sauvegarde',
    de: 'Speicher und Backup',
    es: 'Almacenamiento y copia de seguridad',
    it: 'Storage e backup',
    pl: 'Przechowywanie i kopia zapasowa',
    pt: 'Armazenamento e backup',
  },
  Network: {
    fr: 'Réseau',
    de: 'Netzwerk',
    es: 'Red',
    it: 'Rete',
    pl: 'Sieć',
    pt: 'Rede',
  },
  'Manage and Operate': {
    fr: 'Gérer & Exploiter',
    de: 'Verwalten & Betreiben',
    es: 'Gestionar y operar',
    it: 'Gestire e operare',
    pl: 'Zarządzanie i operacje',
    pt: 'Gerir e operar',
  },
  'OVHcloud Labs': {
    fr: 'OVHcloud Labs',
    de: 'OVHcloud Labs',
    es: 'OVHcloud Labs',
    it: 'OVHcloud Labs',
    pl: 'OVHcloud Labs',
    pt: 'OVHcloud Labs',
  },
};

// -------------------------------------------------------------------
// Types
// -------------------------------------------------------------------

export interface ParseResult {
  universes: SidebarGroup[];
  i18nEntries: Record<string, Record<string, string>>;
}

interface ParsedLine {
  indent: number;
  label: string;
  ref: string | null;
  kind: 'universe' | 'product' | 'section' | 'guide';
}

interface StackEntry {
  parsed: ParsedLine;
  items: (SidebarGroup | SidebarItem)[];
}

type TranslationMap = Record<string, Record<string, string>>;

// -------------------------------------------------------------------
// Helpers
// -------------------------------------------------------------------

/**
 * Convert a slug from index.md to a /guides/ link.
 * Slugs are already in Rspress format (hyphens, lowercase).
 * e.g. public-cloud/compute/overview → /guides/public-cloud/compute/overview
 */
function slugToLink(slug: string): string {
  return `/guides/${slug}`;
}

/**
 * Read the frontmatter `title` from an MDX/MD file.
 * Tries .mdx then .md extension.
 */
function readFrontmatterTitle(basePathNoExt: string): string | null {
  for (const ext of ['.mdx', '.md']) {
    try {
      const content = fs.readFileSync(basePathNoExt + ext, 'utf-8');
      const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
      if (!match) continue;
      const data = YAML.parse(match[1]);
      if (data?.title) return String(data.title);
    } catch {
      // File doesn't exist or can't be parsed
    }
  }
  return null;
}

/**
 * Convert a ref string to a camelCase i18n key segment.
 * e.g. "bare-metal-cloud-dedicated-servers-key-concepts" → "bareMetalCloudDedicatedServersKeyConcepts"
 */
function toCamelCase(str: string): string {
  return str
    .split('-')
    .map((word, i) =>
      i === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join('');
}

/**
 * Generate a sidebar.gen.* i18n key for a non-leaf node.
 */
function generateI18nKey(parsed: ParsedLine): string {
  if (parsed.kind === 'universe') {
    // Use camelCase of the label
    const slug = parsed.label
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    return `sidebar.gen.${toCamelCase(slug)}`;
  }
  // Products and sections always have a ref (guaranteed by classifyLine)
  const ref = parsed.ref ?? '';
  if (parsed.kind === 'product') {
    return `sidebar.gen.${toCamelCase(ref.replace(/^products\//, ''))}`;
  }
  // section
  return `sidebar.gen.${toCamelCase(ref)}`;
}

/**
 * Load translation YAML files from a directory.
 */
function loadTranslations(translationsDir: string): TranslationMap {
  const translations: TranslationMap = {};
  for (const locale of NON_EN_LOCALES) {
    const filePath = path.join(
      translationsDir,
      `index-translations.${locale}.yaml`,
    );
    if (fs.existsSync(filePath)) {
      translations[locale] =
        YAML.parse(fs.readFileSync(filePath, 'utf-8')) || {};
    }
  }
  return translations;
}

/**
 * Classify a parsed line.
 */
function classifyLine(
  indent: number,
  label: string,
  ref: string | null,
): ParsedLine {
  if (indent === 0 && !ref) {
    return { indent, label, ref, kind: 'universe' };
  }
  if (ref?.startsWith('products/')) {
    return { indent, label, ref, kind: 'product' };
  }
  if (ref?.includes('/')) {
    return { indent, label, ref, kind: 'guide' };
  }
  // Section: has a ref but no slash, or no ref at all (shouldn't happen at non-zero indent normally)
  return { indent, label, ref, kind: 'section' };
}

// -------------------------------------------------------------------
// Parser
// -------------------------------------------------------------------

/**
 * Parse index.md and produce an Rspress sidebar tree.
 *
 * @param indexMdPath   Path to the index.md source of truth
 * @param translationsDir  Directory containing index-translations.*.yaml
 * @param docsDir      Optional: docs root dir (e.g. `docs/`). When provided with locale,
 *                     leaf titles are read from the MDX frontmatter of the target locale.
 * @param locale       Optional: locale to read leaf titles for (e.g. 'fr')
 */
export function parseIndexMd(
  indexMdPath: string,
  translationsDir: string,
  docsDir?: string,
  locale?: string,
): ParseResult {
  const content = fs.readFileSync(indexMdPath, 'utf-8');
  const translations = loadTranslations(translationsDir);
  const lines = content.split('\n');

  const i18nEntries: Record<string, Record<string, string>> = {};
  const universes: SidebarGroup[] = [];

  // Stack for building the tree
  const stack: StackEntry[] = [];

  function flushTo(targetIndent: number): void {
    while (
      stack.length > 0 &&
      stack[stack.length - 1].parsed.indent >= targetIndent
    ) {
      const entry = stack.pop();
      if (!entry) break;
      const { parsed, items } = entry;

      // Build the sidebar node for this entry
      const i18nKey = generateI18nKey(parsed);

      // Build i18n translations
      const translations_for_key: Record<string, string> = {
        en: parsed.label,
      };

      if (parsed.kind === 'universe') {
        // Universes use hardcoded translations (no ref in YAML files)
        const universeTrans = UNIVERSE_TRANSLATIONS[parsed.label];
        if (universeTrans) {
          for (const loc of NON_EN_LOCALES) {
            if (universeTrans[loc]) {
              translations_for_key[loc] = universeTrans[loc];
            }
          }
        }
      }

      // Look up the translation ref for products/sections
      const translationRef =
        parsed.kind === 'product'
          ? (parsed.ref ?? '').replace(/^products\//, '')
          : parsed.ref;

      if (translationRef) {
        for (const loc of NON_EN_LOCALES) {
          const trans = translations[loc]?.[translationRef];
          if (trans) {
            translations_for_key[loc] = trans;
          }
        }
      }

      i18nEntries[i18nKey] = translations_for_key;

      let node: SidebarGroup;
      if (parsed.kind === 'universe') {
        node = {
          text: i18nKey,
          collapsed: true,
          items: items as SidebarItem[],
        };
      } else {
        node = {
          text: i18nKey,
          collapsed: true,
          collapsible: true,
          items: items as SidebarItem[],
        };
      }

      // Add to parent or to root
      if (stack.length > 0) {
        stack[stack.length - 1].items.push(node);
      } else {
        universes.push(node);
      }
    }
  }

  for (const line of lines) {
    if (!line.match(/^\s*\+\s/)) continue;

    const leadingSpaces = line.match(/^(\s*)/)?.[1].length || 0;
    const indent = Math.floor(leadingSpaces / 4);
    const stripped = line.replace(/^\s*\+\s+/, '');

    const linkMatch = stripped.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    const label = linkMatch ? linkMatch[1] : stripped.trim();
    const ref = linkMatch ? linkMatch[2] : null;

    const parsed = classifyLine(indent, label, ref);

    // Flush stack entries at the same or deeper indent
    flushTo(indent);

    if (parsed.kind === 'guide') {
      // Leaf node — add directly to parent
      // ref is guaranteed non-null for guides (classifyLine requires ref with '/')
      const link = slugToLink(ref as string);

      // Resolve locale-specific title from MDX frontmatter
      // Overview pages use a translated "Overview" label instead of the
      // frontmatter title (which duplicates the parent product name)
      let guideText = label;
      if ((ref as string).endsWith('/overview') && locale) {
        guideText = OVERVIEW_TRANSLATIONS[locale as Locale] ?? 'Overview';
      } else if (docsDir && locale) {
        const mdxBasePath = path.join(docsDir, locale, link.slice(1));
        const title = readFrontmatterTitle(mdxBasePath);
        if (title) {
          guideText = title;
        }
      }

      const guideItem: SidebarItem = {
        text: guideText,
        link,
      };
      if (stack.length > 0) {
        stack[stack.length - 1].items.push(guideItem);
      }
    } else {
      // Group node — push onto stack
      stack.push({ parsed, items: [] });
    }
  }

  // Flush remaining entries
  flushTo(0);

  return { universes, i18nEntries };
}
