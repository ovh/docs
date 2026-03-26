#!/usr/bin/env npx tsx
/**
 * Pre-generate git lastUpdated timestamps for all MDX files
 *
 * This script runs a single git command to get timestamps for all files,
 * replacing 80,000+ individual git log calls during parallel locale builds.
 *
 * Output: .last-updated-cache.json with format:
 *   { "fr/guides/path/file.mdx": 1234567890000, ... }
 *
 * Usage:
 *   pnpm build:cache
 */

import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const CACHE_FILE = path.join(ROOT_DIR, '.last-updated-cache.json');

console.log('📅 Generating lastUpdated cache...');
const startTime = Date.now();

/**
 * Get last commit timestamp for all tracked files in a single git call.
 * Uses git log with --name-only to efficiently get file paths per commit.
 */
function generateCache(): Record<string, number> {
  const cache: Record<string, number> = {};

  try {
    // Single git command to get all commits with their timestamps and affected files
    // Format: timestamp<newline>file1<newline>file2<newline><empty line><newline>...
    const result = execSync(
      'git log --format="%at" --name-only --diff-filter=ACMR -- "*.mdx" "*.md"',
      {
        cwd: DOCS_DIR,
        encoding: 'utf-8',
        maxBuffer: 200 * 1024 * 1024, // 200MB buffer for large repos
      },
    );

    let currentTimestamp: number | null = null;
    const lines = result.split('\n');

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      // Check if this is a timestamp line (all digits)
      if (/^\d+$/.test(trimmed)) {
        currentTimestamp = Number.parseInt(trimmed, 10) * 1000; // Convert to ms
      } else if (
        currentTimestamp &&
        (trimmed.endsWith('.mdx') || trimmed.endsWith('.md'))
      ) {
        // Only set if not already set (first occurrence = most recent commit)
        if (!cache[trimmed]) {
          cache[trimmed] = currentTimestamp;
        }
      }
    }
  } catch (error) {
    console.error('⚠️  Git log failed, falling back to empty cache:', error);
    return {};
  }

  return cache;
}

const cache = generateCache();
const fileCount = Object.keys(cache).length;

// Write cache to file
fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));

const duration = Date.now() - startTime;
console.log(`   ✓ Generated cache for ${fileCount} files in ${duration}ms`);
console.log(`   ✓ Cache saved to .last-updated-cache.json`);
