/**
 * Shared configuration for per-locale Rspress builds
 *
 * This module exports common settings used by all locale-specific configs.
 * Plugins like llms and sitemap are run post-build to reduce memory usage.
 */

import * as path from 'node:path';
import { pluginSass } from '@rsbuild/plugin-sass';
import type { UserConfig } from '@rspress/core';
import { nav } from './nav';
import { sidebar } from './sidebar';

// All supported locales - included in every build for language switcher
export const locales = [
  {
    lang: 'fr',
    label: '🇫🇷 Français',
    title: 'OVHcloud Documentation',
    description: 'Documentation OVHcloud',
  },
  {
    lang: 'en',
    label: '🇬🇧 English',
    title: 'OVHcloud Documentation',
    description: 'OVHcloud Documentation',
  },
  {
    lang: 'de',
    label: '🇩🇪 Deutsch',
    title: 'OVHcloud Dokumentation',
    description: 'OVHcloud Dokumentation',
  },
  {
    lang: 'es',
    label: '🇪🇸 Español',
    title: 'Documentación OVHcloud',
    description: 'Documentación OVHcloud',
  },
  {
    lang: 'it',
    label: '🇮🇹 Italiano',
    title: 'Documentazione OVHcloud',
    description: 'Documentazione OVHcloud',
  },
  {
    lang: 'pl',
    label: '🇵🇱 Polski',
    title: 'Dokumentacja OVHcloud',
    description: 'Dokumentacja OVHcloud',
  },
  {
    lang: 'pt',
    label: '🇵🇹 Português',
    title: 'Documentação OVHcloud',
    description: 'Documentação OVHcloud',
  },
] as const;

export type Locale = (typeof locales)[number]['lang'];

// Base directory for resolving paths
const BASE_DIR = path.resolve(__dirname, '..');

/**
 * Shared configuration used by all locale builds
 * Note: plugins (llms, sitemap) are intentionally excluded - they run post-build
 */
export const sharedConfig: Partial<UserConfig> = {
  // All locales included for language switcher functionality
  locales: [...locales],
  lang: 'fr',

  // No heavy plugins during build - run post-build instead
  plugins: [],

  builderConfig: {
    plugins: [pluginSass()],
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

  markdown: {
    link: {
      checkDeadLinks: false,
    },
    shiki: {
      // Optimized language set - only commonly used languages
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
      ],
    },
  },

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
      docRepoBaseUrl: 'https://github.com/ovh/docs',
    },
    nav: nav as unknown as UserConfig['themeConfig']['nav'],
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
        '<div><a href="https://www.ovhcloud.com/" target="_blank" rel="nofollow">© Copyright 1999-2025 OVH SAS.</a></div>',
    },
  },
};

/**
 * Create a locale-specific configuration
 *
 * Note: Each locale directory has a symlink to the shared public/ folder
 */
export function createLocaleConfig(locale: Locale): Partial<UserConfig> {
  return {
    ...sharedConfig,
    root: path.join(BASE_DIR, 'docs', locale),
    base: `/${locale}/`,
    outDir: path.join(BASE_DIR, 'doc_build', locale),
  };
}
