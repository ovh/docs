#!/usr/bin/env npx tsx
/**
 * Build all locales and combine outputs
 *
 * Usage:
 *   npx tsx scripts/build-all.ts [--parallel]
 *
 * Options:
 *   --parallel  Run locale builds in parallel (requires more memory)
 */

import { execSync, spawn } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'] as const;
const ROOT_DIR = path.resolve(__dirname, '..');

interface BuildResult {
  locale: string;
  success: boolean;
  duration: number;
  error?: string;
}

/**
 * Run a single locale build
 */
async function buildLocale(locale: string): Promise<BuildResult> {
  const startTime = Date.now();
  const configPath = path.join(ROOT_DIR, 'config', 'locales', `${locale}.ts`);

  console.log(`\n🔨 Building ${locale}...`);

  return new Promise((resolve) => {
    const child = spawn('npx', ['rspress', 'build', '-c', configPath], {
      cwd: ROOT_DIR,
      stdio: 'inherit',
      shell: true,
    });

    child.on('close', (code) => {
      const duration = Date.now() - startTime;
      if (code === 0) {
        console.log(
          `✅ ${locale} completed in ${(duration / 1000).toFixed(1)}s`,
        );
        resolve({ locale, success: true, duration });
      } else {
        console.error(`❌ ${locale} failed with code ${code}`);
        resolve({
          locale,
          success: false,
          duration,
          error: `Exit code ${code}`,
        });
      }
    });

    child.on('error', (err) => {
      const duration = Date.now() - startTime;
      console.error(`❌ ${locale} error: ${err.message}`);
      resolve({ locale, success: false, duration, error: err.message });
    });
  });
}

/**
 * Build all locales sequentially
 */
async function buildSequential(): Promise<BuildResult[]> {
  const results: BuildResult[] = [];

  for (const locale of LOCALES) {
    const result = await buildLocale(locale);
    results.push(result);

    // Stop on first failure
    if (!result.success) {
      console.error(`\n⚠️ Stopping due to build failure in ${locale}`);
      break;
    }
  }

  return results;
}

/**
 * Build all locales in parallel
 */
async function buildParallel(): Promise<BuildResult[]> {
  console.log(`\n🚀 Building ${LOCALES.length} locales in parallel...`);
  const promises = LOCALES.map((locale) => buildLocale(locale));
  return Promise.all(promises);
}

/**
 * Run post-build combine and processing
 */
function runPostBuild(): void {
  console.log('\n📦 Combining build outputs...');
  execSync('npx tsx scripts/combine-builds.ts', {
    cwd: ROOT_DIR,
    stdio: 'inherit',
  });

  console.log('\n🗺️ Generating sitemap...');
  execSync('npx tsx scripts/generate-sitemap.ts', {
    cwd: ROOT_DIR,
    stdio: 'inherit',
  });
}

/**
 * Print build summary
 */
function printSummary(results: BuildResult[]): void {
  console.log(`\n${'='.repeat(50)}`);
  console.log('BUILD SUMMARY');
  console.log('='.repeat(50));

  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);
  const totalDuration = results.reduce((sum, r) => sum + r.duration, 0);

  for (const result of results) {
    const status = result.success ? '✅' : '❌';
    const duration = (result.duration / 1000).toFixed(1);
    console.log(`${status} ${result.locale.padEnd(8)} ${duration}s`);
  }

  console.log('='.repeat(50));
  console.log(`Total: ${successful.length}/${results.length} succeeded`);
  console.log(`Time: ${(totalDuration / 1000).toFixed(1)}s`);

  if (failed.length > 0) {
    console.log(`\nFailed locales: ${failed.map((r) => r.locale).join(', ')}`);
  }
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  const startTime = Date.now();
  const isParallel = process.argv.includes('--parallel');

  console.log('🔥 OVHcloud Documentation Build');
  console.log(`Mode: ${isParallel ? 'Parallel' : 'Sequential'}`);
  console.log(`Locales: ${LOCALES.join(', ')}`);

  // Clean previous build
  const docBuildDir = path.join(ROOT_DIR, 'doc_build');
  if (fs.existsSync(docBuildDir)) {
    console.log('\n🧹 Cleaning previous build...');
    fs.rmSync(docBuildDir, { recursive: true });
  }

  // Build all locales
  let results: BuildResult[];
  if (isParallel) {
    results = await buildParallel();
  } else {
    results = await buildSequential();
  }

  // Print summary
  printSummary(results);

  // Check if all builds succeeded
  const allSucceeded = results.every((r) => r.success);

  if (allSucceeded) {
    // Run post-build processing
    runPostBuild();

    const totalDuration = Date.now() - startTime;
    console.log(
      `\n🎉 Build completed in ${(totalDuration / 1000).toFixed(1)}s`,
    );
  } else {
    console.error('\n❌ Build failed. Fix errors and try again.');
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Build script error:', err);
  process.exit(1);
});
