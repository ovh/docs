/**
 * Production build configuration for per-locale builds
 *
 * Usage:
 *   LOCALE=fr rspress build -c rspress.config.build.ts
 *
 * This config is used by Turborepo to build each locale in parallel.
 * The LOCALE environment variable determines which locale to build.
 */
import * as path from 'node:path';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rspress/core';
import { generateLinkRules } from './config/link-rules';
import { nav } from './config/nav';
import type { Locale } from './config/shared';
import { locales } from './config/shared';
import { sidebar } from './config/sidebar';
import { pluginLastUpdatedFromCache } from './plugins/lastUpdatedFromCache';

const locale = process.env.LOCALE || 'fr';
const BASE_DIR = process.cwd();

export default defineConfig({
  root: path.join(BASE_DIR, 'docs', locale),
  base: `/${locale}/`,
  outDir: path.join(BASE_DIR, 'dist', locale),
  publicDir: path.join(BASE_DIR, 'docs', 'public'),

  // All locales included for language switcher functionality
  locales: [...locales],
  lang: locale,

  // Use cached lastUpdated plugin instead of built-in (avoids 80k+ git calls)
  plugins: [pluginLastUpdatedFromCache()],

  builderConfig: {
    plugins: [pluginSass()],
    html: {
      meta: {
        robots: 'noindex, nofollow',
      },
    },
    source: {
      define: {
        FEEDBACK_API_URL: JSON.stringify(process.env.FEEDBACK_API_URL ?? ''),
      },
    },
    resolve: {
      alias: {
        '@components': path.join(BASE_DIR, 'components'),
      },
    },
    output: {
      // Disable source maps in production for smaller output
      sourceMap: {
        js: false,
        css: false,
      },
    },
  },

  globalStyles: path.join(BASE_DIR, 'styles/index.css'),
  title: 'OVHcloud Documentation',
  icon: '/images/favicon.png',
  logo: {
    light: '/images/logo-ovhcloud-dark.svg',
    dark: '/images/logo-ovhcloud-dark.svg',
  },

  llms: true,

  search: false,

  markdown: {
    crossCompilerCache: true,
    link: {
      checkDeadLinks: true,
    },
    shiki: {
      langs: [
        'bash',
        'json',
        'yaml',
        'typescript',
        'javascript',
        'python',
        'dockerfile',
        'powershell',
        'text',
        'xml',
        'sql',
        'php',
        'ini',
        'console',
        'sh',
      ],
    },
  },

  replaceRules: generateLinkRules(locale as Locale),

  route: {
    cleanUrls: true,
  },

  ssg: {
    experimentalWorker: true,
  },

  themeConfig: {
    enableScrollToTop: true,
    hideNavbar: 'auto',
    lastUpdated: true,
    editLink: {
      docRepoBaseUrl: 'https://github.com/ovh/docs/tree/develop-beta',
    },
    nav: nav as Parameters<typeof defineConfig>[0]['themeConfig']['nav'],
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/ovh/docs',
      },
    ],
    footer: {
      message:
        '<div><a href="https://www.ovhcloud.com/" target="_blank" rel="nofollow">© Copyright 1999-2026 OVH SAS.</a></div>',
    },
  },
});
