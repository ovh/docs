#!/usr/bin/env node
/**
 * One-time batch fix: converts all /products/ references to /guides/ paths in MDX files.
 *
 * These are category/overview page links with flat-hyphen slugs that map to
 * nested /guides/ directory paths.
 *
 * Usage:
 *   npx tsx scripts/fix-products-links.ts              # Apply changes
 *   npx tsx scripts/fix-products-links.ts --dry-run     # Preview without writing
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { glob } from 'glob';

const ROOT_DIR = path.resolve(import.meta.dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const DRY_RUN = process.argv.includes('--dry-run');

/**
 * Static mapping of /products/ slugs to /guides/ paths.
 * Verified against docs/fr/guides/ directory structure.
 */
const PRODUCTS_MAP: Record<string, string> = {
  // Account & Service Management
  'account-and-service-management-account-information':
    'account-and-service-management/account-information',
  'account-and-service-management-account-information-users':
    'account-and-service-management/account-information',
  'account-and-service-management-managing-billing-payments-and-services':
    'account-and-service-management/managing-billing-payments-and-services',

  // Bare Metal Cloud
  'bare-metal-cloud-dedicated-servers': 'bare-metal-cloud/dedicated-servers',
  'bare-metal-cloud-dedicated-servers-backup-restore':
    'bare-metal-cloud/dedicated-servers',
  'bare-metal-cloud-dedicated-servers-getting-started':
    'bare-metal-cloud/dedicated-servers',
  'bare-metal-cloud-virtual-private-configuration-servers-backups':
    'bare-metal-cloud/virtual-private-servers',
  'bare-metal-cloud-virtual-private-servers':
    'bare-metal-cloud/virtual-private-servers',
  'bare-metal-cloud-virtual-private-servers-configuration':
    'bare-metal-cloud/virtual-private-servers',

  // Hosted Private Cloud
  'hosted-private-cloud-hosted-private-cloud-powered-by-vmware':
    'hosted-private-cloud/hosted-private-cloud-powered-by-vmware',
  'hosted-private-cloud-hosted-private-cloud-powered-by-vmware-networking-secnumcloud-connectivity':
    'hosted-private-cloud/hosted-private-cloud-powered-by-vmware',
  'hosted-private-cloud-nutanix': 'hosted-private-cloud/nutanix-on-ovhcloud',

  // Manage & Operate
  'manage-operate-api-apiv6': 'manage-and-operate/api',
  'manage-operate-user-federation': 'manage-and-operate/iam',

  // Network
  network: 'network',
  'network-load-balancer': 'network/load-balancer',

  // Observability / Logs Data Platform
  'observability-logs-data-platform':
    'manage-and-operate/observability/logs-data-platform',
  'observability-logs-data-platform-getting-started':
    'manage-and-operate/observability/logs-data-platform',
  'observability-logs-data-platform-visualizing-querying-exploiting':
    'manage-and-operate/observability/logs-data-platform',

  // Public Cloud - AI & Machine Learning
  'public-cloud-ai-and-machine-learning': 'public-cloud/ai-machine-learning',
  'public-cloud-ai-and-machine-learning-ai-endpoints':
    'public-cloud/ai-machine-learning',
  'public-cloud-ai-and-machine-learning-ai-notebooks':
    'public-cloud/ai-machine-learning',
  'public-cloud-ai-and-machine-learning-ai-training-tutorials':
    'public-cloud/ai-machine-learning',

  // Public Cloud - Compute
  'public-cloud-compute': 'public-cloud/compute',
  'public-cloud-compute-instance-management': 'public-cloud/compute',

  // Public Cloud - Containers
  'public-cloud-containers-orchestration-managed-kubernetes-k8s':
    'public-cloud/containers-orchestration/managed-kubernetes',
  'public-cloud-containers-orchestration-managed-private-registry':
    'public-cloud/containers-orchestration/managed-private-registry',

  // Public Cloud - Data Analytics
  'public-cloud-data-analytics': 'public-cloud/data-analytics',
  'public-cloud-data-analytics-grafana': 'public-cloud/public-cloud-databases',
  'public-cloud-data-analytics-kafka': 'public-cloud/public-cloud-databases',

  // Public Cloud - Databases
  'public-cloud-databases': 'public-cloud/public-cloud-databases',
  'public-cloud-databases-mongodb': 'public-cloud/public-cloud-databases',

  // Public Cloud - Data Platform
  'public-cloud-data-platforms-logs-data-platform':
    'public-cloud/data-platform',

  // Public Cloud - Network
  'public-cloud-network': 'public-cloud/public-cloud-network-services',
  'public-cloud-network-concepts': 'public-cloud/public-cloud-network-services',

  // Public Cloud - Quantum
  'public-cloud-quantum-computing': 'public-cloud/quantum-computing',

  // Storage & Backup
  'storage-backup': 'storage-and-backup',
  'storage-file-storage': 'storage-and-backup/file-storage',
  'storage-object-storage': 'storage-and-backup/object-storage',

  // Web Cloud
  'web-cloud-clouddb': 'web-cloud/web-cloud-databases',
  'web-cloud-domains-domain-names': 'web-cloud/domains',
  'web-cloud-email-collaborative-solutions-email-pro':
    'web-cloud/email-and-collaborative-solutions/email-pro',
  'web-cloud-email-collaborative-solutions-microsoft-exchange':
    'web-cloud/email-and-collaborative-solutions/microsoft-exchange',
  'web-cloud-email-collaborative-solutions-mx-plan':
    'web-cloud/email-and-collaborative-solutions/mx-plan',
  'web-cloud-hosting': 'web-cloud/web-hosting',
  'web-cloud-internet-internet-access': 'web-cloud/internet/internet-access',
  'web-cloud-internet-overthebox': 'web-cloud/internet/overthebox',
  'web-cloud-phone-and-fax-fax': 'web-cloud/phone-and-fax/fax',
  'web-cloud-phone-and-fax-voip': 'web-cloud/phone-and-fax/voip',
  'web-cloud-phone-and-fax-voip-configuration-numbers-and-aliases':
    'web-cloud/phone-and-fax/voip',
  'web-cloud-ssl-gateway': 'web-cloud/ssl-gateway',
};

async function main() {
  console.log(
    DRY_RUN
      ? '=== Fix /products/ links (DRY RUN) ==='
      : '=== Fix /products/ links ===',
  );

  const files = await glob('**/*.mdx', { cwd: DOCS_DIR, absolute: true });
  console.log(`Found ${files.length} MDX files\n`);

  let totalReplacements = 0;
  let filesModified = 0;
  const unmapped = new Map<string, number>();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    let replacements = 0;

    const newContent = content.replace(
      /\(\/products\/([^)]*)\)/g,
      (fullMatch, productRef: string) => {
        // Split slug and anchor/trailing content
        const hashIndex = productRef.indexOf('#');
        let slug: string;
        let anchor: string;
        if (hashIndex !== -1) {
          slug = productRef.slice(0, hashIndex);
          anchor = productRef.slice(hashIndex);
        } else {
          slug = productRef;
          anchor = '';
        }

        // Strip trailing slash from slug
        slug = slug.replace(/\/$/, '');

        const guidesPath = PRODUCTS_MAP[slug];
        if (!guidesPath) {
          unmapped.set(slug, (unmapped.get(slug) || 0) + 1);
          return fullMatch;
        }

        replacements++;
        return `(/guides/${guidesPath}${anchor})`;
      },
    );

    if (replacements > 0) {
      totalReplacements += replacements;
      filesModified++;

      if (!DRY_RUN) {
        fs.writeFileSync(file, newContent, 'utf-8');
      }
    }
  }

  console.log(`Replacements: ${totalReplacements}`);
  console.log(`Files modified: ${filesModified}`);

  if (unmapped.size > 0) {
    console.log(`\nUnmapped /products/ slugs (left unchanged):`);
    for (const [slug, count] of [...unmapped.entries()].sort(
      (a, b) => b[1] - a[1],
    )) {
      console.log(`  ${slug} (${count} occurrences)`);
    }
  }

  if (DRY_RUN) {
    console.log('\n(Dry run — no files were modified)');
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
