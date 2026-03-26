/**
 * Internal links parser: rewrites /pages/ and /products/ references to new Rspress paths.
 *
 * Transforms:
 *   /pages/account_and_service_management/account_information/manage-ovh-password
 *   -> /guides/account-and-service-management/account-information/manage-ovh-password/
 *
 *   /products/public-cloud-ai-and-machine-learning
 *   -> /guides/public-cloud/ai-machine-learning/
 *
 * Note: Rspress uses shorter locale prefixes (fr, en, de...) but internal links
 * are locale-relative so no locale prefix is needed in the path.
 */

/**
 * Maps /products/ slugs to their Rspress /guides/ equivalents.
 */
const PRODUCTS_MAP: Record<string, string> = {
  'public-cloud-ai-and-machine-learning-ai-endpoints':
    '/guides/public-cloud/ai-machine-learning/',
  'public-cloud-ai-and-machine-learning-ai-notebooks':
    '/guides/public-cloud/ai-machine-learning/',
  'public-cloud-ai-and-machine-learning':
    '/guides/public-cloud/ai-machine-learning/',
  'public-cloud-databases': '/guides/public-cloud/public-cloud-databases/',
  'public-cloud-quantum-computing': '/guides/public-cloud/quantum-computing/',
  'storage-object-storage': '/guides/storage-and-backup/object-storage/',
  'storage-backup': '/guides/storage-and-backup/',
};

export function rewriteInternalLinks(content: string): string {
  // Rewrite /pages/ links
  content = content.replace(
    /\(\/pages\/([^)]+)\)/g,
    (_match, pagePath: string) => {
      const newPath = pagePath
        .split('/')
        .map((segment: string) => segment.replace(/_/g, '-'))
        .join('/');
      return `(/guides/${newPath}/)`;
    },
  );

  // Lowercase all /guides/ link paths (avoid case-sensitive dead links)
  content = content.replace(
    /\(\/guides\/([^)#]+)/g,
    (_match, guidePath: string) => `(/guides/${guidePath.toLowerCase()}`,
  );

  // Fix relative ./#anchor links → #anchor (Rspress resolves ./ to parent directory)
  content = content.replace(/\(\.\/#/g, '(#');

  // Rewrite /products/ links
  content = content.replace(
    /\(\/products\/([^)]+)\)/g,
    (_match, productSlug: string) => {
      const mapped = PRODUCTS_MAP[productSlug];
      if (mapped) return `(${mapped})`;
      console.warn(`  [links] Unmapped /products/ link: ${productSlug}`);
      return `(/guides/${productSlug}/)`;
    },
  );

  return content;
}
