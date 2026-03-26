import {
  addLeadingSlash,
  normalizeHrefInRuntime,
  removeBase,
  useI18n,
  useLang,
  useLocation,
  usePage,
  useSite,
  useVersion,
} from '@rspress/core/runtime';
import { useMemo } from 'react';
import {
  defaultLocale,
  type Locale,
  type NavItemConfig,
} from '../../../config/nav';

function replaceLang(
  rawUrl: string,
  lang: {
    current: string;
    target: string;
    default: string;
  },
  version: {
    current: string;
    default: string;
  },
  cleanUrls: boolean,
  isPageNotFound: boolean,
) {
  let url = removeBase(rawUrl);
  // rspress.rs/builder + switch to en -> rspress.rs/builder/en/index.html
  if (!url || isPageNotFound) {
    url = '/';
  }

  url = normalizeHrefInRuntime(url);

  let versionPart = '';
  let langPart = '';
  let purePathPart = '';

  const parts = url.split('/').filter(Boolean);

  if (version.current && version.current !== version.default) {
    versionPart = parts.shift() || '';
  }

  // Check if URL actually starts with the current locale prefix
  const firstPart = parts[0];
  const urlHasLocalePrefix = firstPart === lang.current;
  const isProduction = process.env.NODE_ENV === 'production';

  // Strip locale prefix if present in URL
  if (urlHasLocalePrefix) {
    parts.shift();
  }

  // Add target locale prefix if:
  // - target is not the default locale, OR
  // - we're in production (where default locale also has prefix)
  if (lang.target !== lang.default || isProduction) {
    langPart = lang.target;
  }

  purePathPart = parts.join('/') || '';

  if ((versionPart || langPart) && !purePathPart) {
    purePathPart = cleanUrls ? 'index' : 'index.html';
  }

  return addLeadingSlash(
    [versionPart, langPart, purePathPart].filter(Boolean).join('/'),
  );
}

export function useLangsMenu() {
  const { page } = usePage();
  const { site } = useSite();
  const currentVersion = useVersion();
  const { pathname, search } = useLocation();
  // Use hardcoded 'fr' as the actual site default, not site.lang
  // (In production builds, site.lang is set to each locale being built)
  const defaultLang = 'fr';
  const defaultVersion = site.multiVersion.default || '';
  const localeLanguages = Object.values(
    site.locales || site.themeConfig.locales || {},
  );
  const cleanUrls = site.route?.cleanUrls || false;
  const hasMultiLanguage = localeLanguages.length > 1;
  const { lang: currentLang, pageType } = page;

  const translationMenuData = hasMultiLanguage
    ? {
        items: localeLanguages.map((item) => {
          return {
            text: item?.label,
            link: replaceLang(
              pathname + search,
              {
                current: currentLang,
                target: item.lang,
                default: defaultLang,
              },
              {
                current: currentVersion,
                default: defaultVersion,
              },
              cleanUrls,
              pageType === '404',
            ),
          };
        }),
        activeValue: localeLanguages.find((item) => currentLang === item.lang)
          ?.label,
      }
    : { items: [] };
  return translationMenuData;
}

function replaceVersion(
  rawUrl: string,
  version: {
    current: string;
    target: string;
    default: string;
  },
  cleanUrls: boolean,
  isPageNotFound: boolean,
) {
  let url = removeBase(rawUrl);
  // rspress.rs/builder + switch to en -> rspress.rs/builder/en/index.html
  if (!url || isPageNotFound) {
    url = normalizeHrefInRuntime('/');
  }
  let versionPart = '';

  const parts = url.split('/').filter(Boolean);

  if (version.target !== version.default) {
    versionPart = version.target;
    if (version.current !== version.default) {
      parts.shift();
    }
  } else {
    parts.shift();
  }

  let restPart = parts.join('/') || '';

  if (versionPart && !restPart) {
    restPart = cleanUrls ? 'index' : 'index.html';
  }

  return addLeadingSlash([versionPart, restPart].filter(Boolean).join('/'));
}

export function useVersionsMenu() {
  const { page } = usePage();
  const { site } = useSite();
  const currentVersion = useVersion();
  const { pathname } = useLocation();
  const cleanUrls = site.route?.cleanUrls || false;
  const defaultVersion = site.multiVersion.default || '';
  const versions = site.multiVersion.versions || [];
  const versionsMenuData = {
    items: versions.map((version) => ({
      text: version,
      link: replaceVersion(
        pathname,
        {
          current: currentVersion,
          target: version,
          default: defaultVersion,
        },
        cleanUrls,
        page.pageType === '404',
      ),
    })),
    text: currentVersion,
    activeValue: currentVersion,
  };
  return versionsMenuData;
}

/**
 * Custom hook that returns nav items with localized links and translated text.
 * Reads nav config from themeConfig.nav (set in rspress.config.ts).
 * Text is translated using i18n keys defined in i18n.json.
 */
export function useLocalizedNav() {
  const { site } = useSite();
  const lang = useLang();
  const t = useI18n<Record<string, string>>();

  return useMemo(() => {
    const locale = (lang as Locale) || defaultLocale;
    const navItems = (site.themeConfig.nav || []) as unknown as NavItemConfig[];

    return navItems.map((item) => ({
      // Use i18n translation for text
      text: t(item.text),
      link: item.links[locale] || item.links[defaultLocale],
    }));
  }, [site.themeConfig.nav, lang, t]);
}
