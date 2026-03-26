import { useI18n, usePageData } from '@rspress/core/runtime';
import { Link } from '@rspress/core/theme-original';
import { useMemo } from 'react';
import './Breadcrumbs.css';

/**
 * Convert a slug segment like "ai-machine-learning" to a camelCase i18n key
 * fragment like "aiMachineLearning".
 */
function toCamelCase(slug: string): string {
  return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

export default function Breadcrumbs() {
  const { siteData, page } = usePageData();
  const t = useI18n();
  const routePath = page.routePath;
  const segments = routePath.split('/').filter(Boolean);

  // Build a map of routePath -> page title for leaf pages
  const pageMap = useMemo(() => {
    const pages = (
      siteData as {
        pages?: Array<{ routePath: string; title?: string }>;
      }
    ).pages;
    if (!pages) return new Map<string, string>();
    const map = new Map<string, string>();
    for (const p of pages) {
      if (p.title) map.set(p.routePath, p.title);
    }
    return map;
  }, [siteData]);

  // Build a set of all known route paths for quick lookup
  const routeSet = useMemo(() => {
    return new Set(pageMap.keys());
  }, [pageMap]);

  if (segments.length === 0) return null;

  const breadcrumbs: Array<{
    title: string;
    link: string | null;
  }> = [];

  let currentPath = '';
  // Build the cumulative camelCase key for i18n sidebar lookup
  let cumulativeKey = '';

  for (const segment of segments) {
    currentPath += `/${segment}`;

    // Skip locale and "guides" segments — they add no value to navigation
    if (['guides', 'en', 'fr', 'de', 'es', 'it', 'pl', 'pt'].includes(segment)) continue;

    // Build cumulative i18n key: e.g. "publicCloud", "publicCloudAiMachineLearning"
    const camel = toCamelCase(segment);
    cumulativeKey = cumulativeKey ? cumulativeKey + camel.charAt(0).toUpperCase() + camel.slice(1) : camel;

    // Try to resolve title in priority order:
    // 1. Page title (for leaf pages)
    // 2. Sidebar i18n key (for intermediate sections)
    // 3. Fallback: humanized slug
    let title: string;
    const pageTitle = pageMap.get(currentPath);
    const i18nKey = `sidebar.gen.${cumulativeKey}`;
    let i18nTitle: string | undefined;
    try {
      const val = t(i18nKey);
      if (val && val !== i18nKey) i18nTitle = val;
    } catch {
      // Key not found — ignore
    }

    if (pageTitle) {
      title = pageTitle;
    } else if (i18nTitle) {
      title = i18nTitle;
    } else {
      title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    }

    // Check if this path has a page, or an overview page
    let link: string | null = null;
    if (routeSet.has(currentPath)) {
      link = currentPath;
    } else if (routeSet.has(`${currentPath}/overview`)) {
      link = `${currentPath}/overview`;
    }

    breadcrumbs.push({ title, link });
  }

  const crumbs = [
    { title: 'Home', link: '/' as string | null },
    ...breadcrumbs,
  ];

  return (
    <nav aria-label="Breadcrumb" className="rspress-breadcrumbs">
      <ol>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          const key = `${crumb.link ?? 'no-link'}-${index}`;

          return (
            <li key={key} className="breadcrumb-item">
              {isLast || !crumb.link ? (
                <span>{crumb.title}</span>
              ) : (
                <Link href={crumb.link}>{crumb.title}</Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="breadcrumb-separator">
                  ›
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
