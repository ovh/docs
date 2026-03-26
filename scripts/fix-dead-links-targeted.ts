#!/usr/bin/env node
/**
 * Targeted fix for remaining dead links after the automated fix pass.
 *
 * Handles:
 * 1. Directory links → redirect to overview/key-concepts/first-child
 * 2. Renamed pages → point to new filename
 * 3. Hidden pages (_prefix) → remove the link or point elsewhere
 *
 * Usage:
 *   npx tsx scripts/fix-dead-links-targeted.ts              # Apply
 *   npx tsx scripts/fix-dead-links-targeted.ts --dry-run     # Preview
 */

import * as fs from 'node:fs';
import { globSync } from 'glob';

const DOCS_DIR = 'docs';
const DRY_RUN = process.argv.includes('--dry-run');

/**
 * Static mapping of dead link → replacement link.
 * Covers directory links, renamed pages, and known missing pages.
 */
const REWRITES: Record<string, string> = {
  // --- Directory links → best landing page ---
  '/guides/public-cloud/containers-orchestration/managed-kubernetes':
    '/guides/public-cloud/containers-orchestration/managed-kubernetes/creating-a-cluster',
  '/guides/public-cloud/containers-orchestration/managed-private-registry':
    '/guides/public-cloud/containers-orchestration/managed-private-registry/creating-a-private-registry',
  '/guides/public-cloud/public-cloud-network-services':
    '/guides/public-cloud/public-cloud-network-services/concepts-01-public-cloud-networking-concepts',
  '/guides/public-cloud/data-analytics':
    '/guides/public-cloud/data-analytics/analytics/analytics-getting-started',
  '/guides/account-and-service-management/managing-billing-payments-and-services':
    '/guides/account-and-service-management/managing-billing-payments-and-services/key-concepts',
  '/guides/storage-and-backup':
    '/guides/storage-and-backup/object-storage/overview',
  '/guides/network': '/guides/network/network-tools',
  '/guides/public-cloud/data-platform':
    '/guides/public-cloud/data-platform/general-what-is-the-data-platform',

  // --- Renamed / moved pages ---
  '/guides/manage-and-operate/observability/logs-data-platform/iam-access-management':
    '/guides/manage-and-operate/observability/logs-data-platform/getting-started-roles-permission',
  '/guides/manage-and-operate/observability/logs-data-platform/iam-presentation-faq':
    '/guides/manage-and-operate/observability/logs-data-platform/overview',
  '/guides/manage-and-operate/observability/logs-data-platform/iam-presentation-faq/':
    '/guides/manage-and-operate/observability/logs-data-platform/overview',
  '/guides/manage-and-operate/api/api-right-delegation':
    '/guides/manage-and-operate/api/manage-service-account',
  '/guides/manage-and-operate/observability/logs-data-platform/introduction-to-services-logs':
    '/guides/manage-and-operate/observability/logs-data-platform/getting-started-introduction-to-ldp',
  '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/nsx-deploying-edge-gateway':
    '/guides/hosted-private-cloud/hosted-private-cloud-powered-by-vmware/nsx-10-add-new-tier1-gateway',
  '/guides/bare-metal-cloud/dedicated-servers/changing-admin-password-on-windows':
    '/guides/bare-metal-cloud/dedicated-servers/rcw-changing-admin-password-on-windows',

  // --- Kafka pages moved from data-analytics to public-cloud-databases ---
  '/guides/public-cloud/data-analytics/analytics/kafka-create-cluster':
    '/guides/public-cloud/public-cloud-databases/kafka-02-getting-started',
  '/guides/public-cloud/data-analytics/analytics/kafka-incoming-connections':
    '/guides/public-cloud/public-cloud-databases/kafka-01-capabilities',

  // --- Missing prefix + missing page ---
  '/storage-and-backup/block-storage/cloud-disk-array/ceph-access-cluster/':
    '/guides/storage-and-backup/block-storage/cloud-disk-array/ceph-check-cluster-status',
};

// ---------- Process ----------
const allFiles = globSync(`${DOCS_DIR}/**/guides/**/*.mdx`);

let totalFixes = 0;
let filesModified = 0;

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let newContent = content;

  for (const [from, to] of Object.entries(REWRITES)) {
    // Match the exact link (with optional anchor after it)
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\(${escaped}(#[^)]*)?\\)`, 'g');
    newContent = newContent.replace(regex, (_match, anchor) => {
      totalFixes++;
      return `(${to}${anchor || ''})`;
    });
  }

  if (newContent !== content) {
    filesModified++;
    if (!DRY_RUN) {
      fs.writeFileSync(file, newContent, 'utf-8');
    }
  }
}

console.log(
  DRY_RUN ? '=== TARGETED FIX (DRY RUN) ===' : '=== TARGETED FIX ===',
);
console.log(`Fixed: ${totalFixes} links in ${filesModified} files`);
if (DRY_RUN) console.log('(Dry run — no files were modified)');
