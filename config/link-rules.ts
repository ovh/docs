/**
 * Generates Rspress replaceRules from the centralized external links map.
 *
 * Each rule replaces (/links/key) with (concrete-url) in MDX content,
 * applied before MDX compilation via Rspress's native replaceRules mechanism.
 */

import type { ReplaceRule } from '@rspress/shared';
import { externalLinks } from './links';
import type { Locale } from './shared';

/**
 * Generate replaceRules for a given locale.
 * Falls back: locale → 'en' → first available URL.
 */
export function generateLinkRules(locale: Locale): ReplaceRule[] {
  return Object.entries(externalLinks)
    .map(([key, urls]) => {
      const url = urls[locale] ?? urls.en ?? Object.values(urls)[0];
      if (!url) return null;
      // Escape regex special characters in the link key
      const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return {
        search: new RegExp(`\\(/links/${escaped}\\)`, 'g'),
        replace: `(${url})`,
      };
    })
    .filter((r): r is ReplaceRule => r !== null);
}
