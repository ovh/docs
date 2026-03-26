/**
 * Links resolver: replaces /links/foo references with concrete URLs.
 *
 * Loads all files from the /links/ directory into a lookup map,
 * then resolves each (/links/foo) reference based on the file's locale.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

export interface LinksMap {
  [linkPath: string]: { [locale: string]: string };
}

/**
 * Build a map of all links from the links/ directory.
 * Each link file contains lines like: - [locale](url)
 */
export function buildLinksMap(linksDir: string): LinksMap {
  const map: LinksMap = {};

  function walkDir(dir: string, prefix: string = '') {
    if (!fs.existsSync(dir)) return;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath, prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.isFile()) {
        const linkKey = prefix ? `${prefix}/${entry.name}` : entry.name;
        const content = fs.readFileSync(fullPath, 'utf-8');
        const localeMap: { [locale: string]: string } = {};

        // Parse each line: - [locale](url)
        const lineRegex = /^\s*-\s*\[([^\]]+)\]\(([^)]+)\)/gm;
        for (const match of content.matchAll(lineRegex)) {
          localeMap[match[1]] = match[2];
        }

        map[linkKey] = localeMap;
      }
    }
  }

  walkDir(linksDir);
  return map;
}

/**
 * Resolve /links/ references in content for a given locale.
 */
export function resolveLinks(
  content: string,
  linksMap: LinksMap,
  locale: string,
): string {
  // Match markdown links: [text](/links/foo) or ((/links/foo))
  return content.replace(/\(\/links\/([^)]+)\)/g, (fullMatch, linkPath) => {
    const localeUrls = linksMap[linkPath];
    if (!localeUrls) {
      // Try without leading path segments
      for (const key of Object.keys(linksMap)) {
        if (key.endsWith(`/${linkPath}`) || key === linkPath) {
          const url =
            linksMap[key][locale] ||
            linksMap[key]['en-gb'] ||
            Object.values(linksMap[key])[0];
          if (url) return `(${url})`;
        }
      }
      console.warn(
        `  [links] Unresolved link: /links/${linkPath} for locale ${locale}`,
      );
      return fullMatch;
    }

    const url =
      localeUrls[locale] || localeUrls['en-gb'] || Object.values(localeUrls)[0];
    if (url) {
      return `(${url})`;
    }

    console.warn(`  [links] No URL for locale ${locale} in /links/${linkPath}`);
    return fullMatch;
  });
}
