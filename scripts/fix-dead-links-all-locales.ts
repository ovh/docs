#!/usr/bin/env node
/**
 * Comprehensive dead link fixer for all locales.
 *
 * Resolution strategies (in order):
 * 1. Missing /guides/ prefix
 * 2. Case-insensitive match
 * 3. Directory → /overview, /key-concepts, or first child alphabetically
 * 4. Trailing slash removal
 * 5. Static REWRITES for known renames/moves
 * 6. Space in /links/ path (e.g. "/ links/foo" → "/links/foo")
 *
 * Usage:
 *   npx tsx scripts/fix-dead-links-all-locales.ts              # Apply
 *   npx tsx scripts/fix-dead-links-all-locales.ts --dry-run     # Preview
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { globSync } from 'glob';

const ROOT_DIR = path.resolve(import.meta.dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const DRY_RUN = process.argv.includes('--dry-run');

const locales = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'];

/**
 * Static rewrites for pages that were renamed, moved, or removed.
 * These apply across all locales — the script checks if the target exists
 * in each locale before applying.
 */
const REWRITES: Record<string, string> = {
  // --- Directory links → best landing page ---
  '/guides/public-cloud/compute': '/guides/public-cloud/compute/key-concepts',
  '/guides/public-cloud/quantum-computing':
    '/guides/public-cloud/quantum-computing/capabilities',
  '/guides/network/load-balancer/create-proxyprotocol/':
    '/guides/network/load-balancer/use-lb',

  // --- Renamed / moved pages ---
  '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/service-migration':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/ovf-tool',
  '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/vmware-vcenter-converter':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/ovf-tool',
  '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/vmware-migration-zerto':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/zerto-virtual-replication-customer-to-ovhcloud',
  '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/nsx-configurer-un-vpn-via-une-gateway-edge':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/nsx-12-configure-ipsec',
  '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/vcd-declare-public-gateway':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/vcd-link-ip-to-vrack',
  '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/SNC-responsibility-sharing':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/snc-getting-started',
  // Pages existing in fr/en but not in other locales — redirect to closest sibling
  '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/responsibility-sharing':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/snc-getting-started',
  '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/service-migration-vdc':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/ovf-tool',
  '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/private-gateway':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/snc-getting-started',

  // --- Managed bare metal ---
  '/guides/bare-metal-cloud/managed-bare-metal/vmware-ha-high-availability':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/vmware-ha-high-availability',
  '/guides/bare-metal-cloud/managed-bare-metal/vmware-storage-vmotion':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/vmware-storage-vmotion',
  '/guides/bare-metal-cloud/managed-bare-metal/vmware-tools-install':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/vmware-tools-install',
  '/guides/bare-metal-cloud/managed-bare-metal/veeam-backup-as-a-service':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/veeam-backup-as-a-service',

  // --- VPS pages ---
  '/guides/bare-metal-cloud/virtual-private-servers/apps-first-steps':
    '/guides/bare-metal-cloud/virtual-private-servers/starting-with-a-vps',
  '/guides/bare-metal-cloud/virtual-private-servers/config-additional-disk':
    '/guides/bare-metal-cloud/virtual-private-servers/starting-with-a-vps',
  '/guides/bare-metal-cloud/virtual-private-servers/configuring-ip-aliasing':
    '/guides/bare-metal-cloud/virtual-private-servers/configure-ipv6',
  '/guides/bare-metal-cloud/virtual-private-servers/install-env-web-dev-on-vps':
    '/guides/bare-metal-cloud/virtual-private-servers/starting-with-a-vps',
  '/guides/bare-metal-cloud/virtual-private-servers/install-n8n-on-vps':
    '/guides/bare-metal-cloud/virtual-private-servers/starting-with-a-vps',
  '/guides/bare-metal-cloud/virtual-private-servers/cpanel':
    '/guides/bare-metal-cloud/virtual-private-servers/starting-with-a-vps',
  '/guides/bare-metal-cloud/virtual-private-servers/vps-faq':
    '/guides/bare-metal-cloud/virtual-private-servers/starting-with-a-vps',

  // --- Dedicated servers ---
  '/guides/bare-metal-cloud/dedicated-servers/faq-esxi':
    '/guides/bare-metal-cloud/dedicated-servers/esxi-hardening',
  '/guides/bare-metal-cloud/dedicated-servers/raid-soft-uefi':
    '/guides/bare-metal-cloud/dedicated-servers/raid-soft',

  // --- Email / Collaborative solutions ---
  // mx-plan pages exist in fr but not in all locales — redirect to overview
  '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/email-roundcube':
    '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/overview',
  '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/email-roundcube#ou-et-comment-se-connecter-au-webmail-roundcube':
    '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/overview',
  '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/email-zimbra':
    '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/overview',
  '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/feature-auto-responses':
    '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/overview',
  '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/feature-delegation':
    '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/overview',
  '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/feature-mailing-list':
    '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/overview',
  // email-pro config pages → redirect to mx-plan equivalents (same content)
  '/guides/web-cloud/email-and-collaborative-solutions/email-pro/how-to-configure-android':
    '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/how-to-configure-android',
  '/guides/web-cloud/email-and-collaborative-solutions/email-pro/how-to-configure-ios':
    '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/how-to-configure-ios',
  '/guides/web-cloud/email-and-collaborative-solutions/email-pro/how-to-configure-mail-macos':
    '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/how-to-configure-mail-macos',
  '/guides/web-cloud/email-and-collaborative-solutions/email-pro/how-to-configure-outlook-2016':
    '/guides/web-cloud/email-and-collaborative-solutions/mx-plan/how-to-configure-outlook-2016',
  // exchange
  '/guides/web-cloud/email-and-collaborative-solutions/microsoft-exchange/office-outlook-license':
    '/guides/web-cloud/email-and-collaborative-solutions/microsoft-exchange/exchange-starting-hosted',
  '/guides/web-cloud/email-and-collaborative-solutions/microsoft-exchange/exchange-starting-private':
    '/guides/web-cloud/email-and-collaborative-solutions/microsoft-exchange/exchange-starting-hosted',
  // zimbra
  '/guides/web-cloud/email-and-collaborative-solutions/zimbra/zimbra-outlook-macos':
    '/guides/web-cloud/email-and-collaborative-solutions/zimbra/getting-started-zimbra',

  // --- Web hosting ---
  '/guides/web-cloud/web-hosting/diagnostic-ip-banned':
    '/guides/web-cloud/web-hosting/diagnostic-fix-500-internal-server-error',
  '/guides/web-cloud/web-hosting/diagnostic-request-blocked':
    '/guides/web-cloud/web-hosting/diagnostic-website-not-accessible',

  // --- Public Cloud ---
  '/guides/public-cloud/compute/launching-script-when-creating-instance':
    '/guides/public-cloud/compute/key-concepts',
  '/guides/public-cloud/compute/migrating-non-encrypted-to-encrypted-volume':
    '/guides/public-cloud/compute/create-and-configure-an-additional-disk-on-an-instance',
  '/guides/public-cloud/public-cloud-cross-functional/introduction-about-instances':
    '/guides/public-cloud/compute/key-concepts',
  '/guides/public-cloud/data-analytics/analytics/information-06-shared-responsibility':
    '/guides/public-cloud/data-analytics/analytics/analytics-getting-started',
  '/guides/public-cloud/containers-orchestration/managed-kubernetes/mks-plans':
    '/guides/public-cloud/containers-orchestration/managed-kubernetes/creating-a-cluster',

  // --- KMS ---
  '/guides/manage-and-operate/kms/okms-certificate-management':
    '/guides/manage-and-operate/kms/quick-start',

  // --- Account management ---
  '/guides/account-and-service-management/account-information/manage-messages':
    '/guides/account-and-service-management/account-information/faq-account-management',
  '/guides/account-and-service-management/managing-billing-payments-and-services/mandat-administratif':
    '/guides/account-and-service-management/managing-billing-payments-and-services/billing-best-practices',

  // --- Network ---
  // network-tools.mdx exists in fr only — redirect to ovhcloud-connect overview in other locales
  '/guides/network/network-tools': '/guides/network/ovhcloud-connect/overview',
  '/guides/network/load-balancer/create-proxyprotocol':
    '/guides/network/load-balancer/use-lb',

  // --- Storage (missing /guides/ prefix, pages don't exist in most locales) ---
  '/storage-and-backup/object-storage/s3-ecosystem':
    '/guides/storage-and-backup/object-storage/overview',
  '/storage-and-backup/object-storage/s3-restoring-objects':
    '/guides/storage-and-backup/object-storage/overview',
  '/storage-and-backup/file-storage/enterprise-file-storage/netapp-pci-connection-via-vrack':
    '/guides/storage-and-backup/file-storage/enterprise-file-storage/netapp-quick-start',
  '/manage-and-operate/cli/cli-getting-started':
    '/guides/manage-and-operate/api/console-preview',
  '/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/kms-cipher-trust':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/snc-getting-started',
};

// ---------- Build route maps per locale ----------
const routeMaps = new Map<string, Set<string>>();

for (const locale of locales) {
  const files = globSync(`${DOCS_DIR}/${locale}/**/*.mdx`);
  const routes = new Set<string>();

  for (const file of files) {
    // Skip hidden files
    if (path.basename(file).startsWith('_')) continue;
    let route = file
      .replace(`${DOCS_DIR}/${locale}/`, '/')
      .replace(/\.mdx$/, '');
    if (route.endsWith('/index')) route = route.slice(0, -6) || '/';
    routes.add(route);
  }

  routeMaps.set(locale, routes);
}

// ---------- Resolution strategies ----------
function findFirstChild(dirPath: string, routes: Set<string>): string | null {
  const prefix = dirPath.endsWith('/') ? dirPath : `${dirPath}/`;
  const children: string[] = [];
  for (const route of routes) {
    if (route.startsWith(prefix) && !route.slice(prefix.length).includes('/')) {
      children.push(route);
    }
  }
  if (children.length === 0) return null;
  // Prefer overview > key-concepts > getting-started > first alphabetically
  for (const preferred of ['overview', 'key-concepts', 'getting-started']) {
    const match = children.find((c) => c.endsWith(`/${preferred}`));
    if (match) return match;
  }
  children.sort();
  return children[0];
}

function resolveLink(href: string, routes: Set<string>): string | null {
  const hashIdx = href.indexOf('#');
  const pathPart = hashIdx !== -1 ? href.slice(0, hashIdx) : href;
  const anchor = hashIdx !== -1 ? href.slice(hashIdx) : '';
  const normalized = pathPart.replace(/\/+$/, '') || '/';

  // Already valid
  if (routes.has(normalized)) return null;

  // 1. Static REWRITES
  const rewriteKey = anchor ? `${normalized}${anchor}` : normalized;
  if (REWRITES[rewriteKey]) {
    const target = REWRITES[rewriteKey];
    const targetPath = target.split('#')[0];
    if (routes.has(targetPath))
      return `${target}${anchor && !REWRITES[rewriteKey].includes('#') ? anchor : ''}`;
  }
  if (REWRITES[normalized]) {
    const target = REWRITES[normalized];
    const targetPath = target.split('#')[0];
    if (routes.has(targetPath)) return `${target}${anchor}`;
  }

  // 2. Missing /guides/ prefix
  if (!normalized.startsWith('/guides/')) {
    const withPrefix = `/guides${normalized}`;
    if (routes.has(withPrefix)) return `${withPrefix}${anchor}`;
    // Also try with prefix + REWRITES
    if (REWRITES[withPrefix]) {
      const target = REWRITES[withPrefix];
      const targetPath = target.split('#')[0];
      if (routes.has(targetPath)) return `${target}${anchor}`;
    }
    // Try directory resolution with prefix
    const child = findFirstChild(withPrefix, routes);
    if (child) return `${child}${anchor}`;
  }

  // 3. Case-insensitive match
  const lowerNorm = normalized.toLowerCase();
  for (const route of routes) {
    if (route.toLowerCase() === lowerNorm) return `${route}${anchor}`;
  }

  // 4. Directory → find best child
  const child = findFirstChild(normalized, routes);
  if (child) return `${child}${anchor}`;

  // 5. Trailing slash
  const deduped = normalized.replace(/\/\/+/g, '/');
  if (deduped !== normalized && routes.has(deduped))
    return `${deduped}${anchor}`;

  return undefined as unknown as null; // unfixable
}

// ---------- Fix space in /links/ paths ----------
const spaceLinkRegex = /\(\/ links\//g;

// ---------- Process files ----------
const linkRegex = /(\[[^\]]*\]\()([^)]+)(\))/g;

let totalFixes = 0;
let filesModified = 0;
const unfixableLinks = new Map<
  string,
  { count: number; locales: Set<string> }
>();

for (const locale of locales) {
  // biome-ignore lint/style/noNonNullAssertion: locale is from the same locales array used to build routeMaps
  const routes = routeMaps.get(locale)!;
  const files = globSync(`${DOCS_DIR}/${locale}/**/*.mdx`);
  let localeFixes = 0;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    let fixes = 0;

    // Fix space in /links/ paths first
    let newContent = content.replace(spaceLinkRegex, '(/links/');
    if (newContent !== content) fixes++;

    newContent = newContent.replace(linkRegex, (full, prefix, href, suffix) => {
      // Skip external, anchors-only, mailto, assets
      if (/^https?:\/\//.test(href)) return full;
      if (href.startsWith('#')) return full;
      if (href.startsWith('mailto:')) return full;
      if (
        /\.(png|jpe?g|gif|svg|webp|pdf|zip|tar|gz|sh|py|txt|csv|xml|json|ya?ml)$/i.test(
          href,
        )
      )
        return full;
      if (href.startsWith('/links/')) return full;

      // Only absolute internal links
      if (!href.startsWith('/')) return full;

      // Skip OS file paths and old-style locale-prefixed links (not actual routes)
      if (/^\/(mnt|var|etc|tmp|usr|opt|home|root|dev|proc|sys)\//.test(href))
        return full;
      if (/^\/(fr|en|de|es|it|pl|pt|ca|gb|asia|au|ie|sg|us|in)\//i.test(href))
        return full;

      // Check if already valid
      const pathPart =
        href.split('#')[0].split('?')[0].replace(/\/+$/, '') || '/';
      if (routes.has(pathPart)) return full;

      const fixed = resolveLink(href, routes);
      if (fixed === null) return full;
      if (fixed === undefined || (fixed as unknown) === null) {
        const key = href.split('#')[0].replace(/\/+$/, '');
        if (!unfixableLinks.has(key)) {
          unfixableLinks.set(key, { count: 0, locales: new Set() });
        }
        // biome-ignore lint/style/noNonNullAssertion: guaranteed by set above
        const entry = unfixableLinks.get(key)!;
        entry.count++;
        entry.locales.add(locale);
        return full;
      }

      fixes++;
      return `${prefix}${fixed}${suffix}`;
    });

    if (fixes > 0) {
      totalFixes += fixes;
      localeFixes += fixes;
      filesModified++;
      if (!DRY_RUN) {
        fs.writeFileSync(file, newContent, 'utf-8');
      }
    }
  }

  if (localeFixes > 0) {
    console.log(`  ${locale}: ${localeFixes} fixes`);
  }
}

console.log(`\n${'='.repeat(60)}`);
console.log(
  DRY_RUN
    ? 'FIX DEAD LINKS ALL LOCALES (DRY RUN)'
    : 'FIX DEAD LINKS ALL LOCALES',
);
console.log(`${'='.repeat(60)}`);
console.log(`Fixed: ${totalFixes} links in ${filesModified} files`);

if (unfixableLinks.size > 0) {
  console.log(
    `\nUnfixable: ${[...unfixableLinks.values()].reduce((s, e) => s + e.count, 0)} occurrences (${unfixableLinks.size} unique)`,
  );
  const sorted = [...unfixableLinks.entries()].sort(
    (a, b) => b[1].count - a[1].count,
  );
  for (const [link, info] of sorted.slice(0, 30)) {
    console.log(`  [${info.count}x] ${link} (${[...info.locales].join(', ')})`);
  }
  if (sorted.length > 30) console.log(`  ... and ${sorted.length - 30} more`);
}

if (DRY_RUN) console.log('\n(Dry run — no files were modified)');
