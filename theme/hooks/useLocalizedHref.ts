import { useLocaleSiteData, withBase } from '@rspress/core/runtime';

/**
 * Resolve an internal href with the correct locale prefix.
 *
 * - Dev: default locale uses `/`, others use `/{lang}/` (e.g. `/en/`)
 * - Prod: `withBase` adds `/${locale}/` from the per-locale build config
 */
function localizeHref(href: string, langRoutePrefix: string): string {
  if (!href || href.startsWith('http') || href.startsWith('#')) return href;

  const withLocale =
    langRoutePrefix === '/'
      ? href
      : `/${langRoutePrefix}${href.replace(/^\//, '')}`;

  return withBase(withLocale);
}

/**
 * Hook that returns a function to localize hrefs.
 * Call the hook once at the component top level, then use the returned
 * function anywhere (including inside .map() callbacks).
 */
export function useLocalizeHref(): (href: string) => string {
  const { langRoutePrefix } = useLocaleSiteData();
  return (href: string) => localizeHref(href, langRoutePrefix);
}
