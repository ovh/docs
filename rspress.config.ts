/**
 * Development configuration - serves all locales from a single Rspress instance
 *
 * Usage:
 *   pnpm dev                      # serves fr + en (default)
 *   DEV_LOCALES=fr pnpm dev       # serves fr only
 *   DEV_LOCALES=fr,en,de pnpm dev # serves fr, en, de
 *
 * For production builds, use rspress.config.build.ts via Turborepo.
 */
import * as path from 'node:path';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig, type NavItem } from '@rspress/core';
import { generateLinkRules } from './config/link-rules';
import { nav } from './config/nav';
import type { Locale } from './config/shared';
import { sidebar } from './config/sidebar';

// Dev performance: only serve selected locales (default: fr + en)
const allLocales = [
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

const devLocales = (process.env.DEV_LOCALES || 'fr,en').split(',');
const activeLocales = allLocales.filter((l) => devLocales.includes(l.lang));
const excludedLocales = allLocales
  .filter((l) => !devLocales.includes(l.lang))
  .map((l) => l.lang);

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  // Dev mode: no heavy plugins - faster hot reload
  plugins: [],
  builderConfig: {
    plugins: [pluginSass()],
    source: {
      define: {
        FEEDBACK_API_URL: JSON.stringify(process.env.FEEDBACK_API_URL ?? ''),
      },
    },
    resolve: {
      alias: {
        '@components': path.join(__dirname, 'components'),
      },
    },
    dev: {
      lazyCompilation: {
        entries: true,
        imports: true,
      },
    },
  },
  globalStyles: path.join(__dirname, 'styles/index.css'),
  title: 'OVHcloud Documentation',
  icon: '/images/favicon.png',
  logo: {
    light: '/images/logo-ovhcloud-dark.svg',
    dark: '/images/logo-ovhcloud-dark.svg',
  },
  lang: activeLocales[0]?.lang || 'fr',
  locales: [...activeLocales],
  markdown: {
    link: {
      checkDeadLinks: true,
    },
    shiki: {
      // Removed 'markdown' and 'mdx' - they disable lazy loading and slow down dev SSR
      // @see https://github.com/shikijs/shiki/issues/853#issuecomment-2507237577
      langs: [
        'tsx',
        'json',
        'bash',
        'yaml',
        'ts',
        'js',
        'python',
        'dockerfile',
        'powershell',
        'sh',
        'sql',
        'console',
      ],
    },
  },
  // In dev, resolve /links/ to the first active locale (default: fr)
  replaceRules: generateLinkRules((activeLocales[0]?.lang || 'fr') as Locale),

  route: {
    cleanUrls: true,
    exclude: excludedLocales.map((l) => `${l}/**/*`),
  },
  ssg: {
    experimentalWorker: true,
  },
  llms: true,
  themeConfig: {
    enableScrollToTop: true,
    hideNavbar: 'auto',
    lastUpdated: process.env.NODE_ENV === 'production',
    editLink: {
      docRepoBaseUrl: 'https://github.com/ovh/docs/tree/develop-beta',
    },
    // Nav uses custom format with localized links, processed by useLocalizedNav() hook
    nav: nav as unknown as NavItem[],
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
