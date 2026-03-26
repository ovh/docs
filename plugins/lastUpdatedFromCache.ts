/**
 * Rspress plugin to read lastUpdated timestamps from pre-generated cache.
 *
 * This replaces the built-in lastUpdated feature which runs `git log` per file,
 * using a pre-generated cache from `pnpm build:cache` instead.
 *
 * The cache file (.last-updated-cache.json) maps relative file paths to timestamps:
 *   { "fr/guides/path/file.mdx": 1234567890000, ... }
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import type { RspressPlugin } from '@rspress/core';

const CACHE_FILE = path.join(process.cwd(), '.last-updated-cache.json');

let cache: Record<string, number> | null = null;

function loadCache(): Record<string, number> {
  if (cache !== null) return cache;

  if (fs.existsSync(CACHE_FILE)) {
    try {
      cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
      return cache as Record<string, number>;
    } catch {
      console.warn('⚠️  Failed to parse lastUpdated cache');
    }
  }

  cache = {};
  return cache;
}

function formatDate(timestamp: number, lang: string): string {
  try {
    return new Date(timestamp).toLocaleDateString(lang || 'en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return new Date(timestamp).toISOString().split('T')[0];
  }
}

/**
 * Read the `lastUpdated` or `updated` frontmatter field from an MDX file.
 * Returns a timestamp (ms) or null if not found.
 */
function readFrontmatterDate(filepath: string): number | null {
  try {
    const head = fs.readFileSync(filepath, 'utf-8').slice(0, 1000);
    const fmMatch = head.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!fmMatch) return null;

    const fm = fmMatch[1];
    // Try lastUpdated first, then updated
    const dateMatch =
      fm.match(/^lastUpdated:\s*(.+)$/m) || fm.match(/^updated:\s*(.+)$/m);
    if (!dateMatch) return null;

    const dateStr = dateMatch[1].trim().replace(/['"]/g, '');
    const ts = new Date(dateStr).getTime();
    return Number.isNaN(ts) ? null : ts;
  } catch {
    return null;
  }
}

export function pluginLastUpdatedFromCache(): RspressPlugin {
  return {
    name: 'plugin-last-updated-from-cache',
    async extendPageData(pageData) {
      const { _filepath, lang } = pageData;

      // Priority 1: frontmatter lastUpdated/updated field
      const fmDate = readFrontmatterDate(_filepath);
      if (fmDate) {
        pageData.lastUpdatedTime = formatDate(fmDate, lang || 'en');
        return;
      }

      // Priority 2: git-based cache
      const timestamps = loadCache();
      const docsDir = path.join(process.cwd(), 'docs');
      const relativePath = path.relative(docsDir, _filepath);

      const timestamp = timestamps[relativePath];
      if (timestamp) {
        pageData.lastUpdatedTime = formatDate(timestamp, lang || 'en');
      }
    },
  };
}
