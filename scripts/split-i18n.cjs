#!/usr/bin/env node
/**
 * i18n management scripts
 *
 * Split: node scripts/split-i18n.cjs split
 *   - Splits i18n.json into multiple files in i18n/ directory
 *
 * Merge: node scripts/split-i18n.cjs merge
 *   - Merges i18n/*.json files back into i18n.json
 *   - Run this before build or commit the result
 */

const fs = require('node:fs');
const path = require('node:path');

const rootI18nFile = path.join(__dirname, '../i18n.json');
const i18nDir = path.join(__dirname, '../i18n');

// Define how to group keys
const keyGroups = {
  common: (key) => !key.startsWith('sidebar.') && !key.startsWith('nav.'),
  nav: (key) => key.startsWith('nav.'),
  'sidebar-common': (key) => {
    const commonKeys = [
      'sidebar.documentation',
      'sidebar.apiReference',
      'sidebar.productChangelog',
      'sidebar.eLearning',
      'sidebar.migration',
      'sidebar.overview',
      'sidebar.configuration',
      'sidebar.firstSteps',
      'sidebar.gettingStarted',
      'sidebar.faq',
    ];
    return commonKeys.includes(key);
  },
  'sidebar-public-cloud': (key) => {
    return (
      key.startsWith('sidebar.publicCloud') ||
      key.startsWith('sidebar.compute') ||
      key.startsWith('sidebar.containers') ||
      key.startsWith('sidebar.databases') ||
      key.startsWith('sidebar.aiMl') ||
      key.startsWith('sidebar.networkServices') ||
      key.startsWith('sidebar.cloudPlatform')
    );
  },
  'sidebar-private-cloud': (key) => {
    return (
      key.startsWith('sidebar.privateCloud') ||
      key.startsWith('sidebar.vmware') ||
      key.startsWith('sidebar.nutanix') ||
      key.startsWith('sidebar.sap') ||
      key.startsWith('sidebar.opcp')
    );
  },
  'sidebar-bare-metal': (key) => {
    return (
      key.startsWith('sidebar.bareMetal') ||
      key.startsWith('sidebar.dedicatedServers') ||
      key.startsWith('sidebar.managedBareMetal') ||
      key.startsWith('sidebar.vps')
    );
  },
  'sidebar-web-cloud': (key) => {
    return (
      key.startsWith('sidebar.webCloud') ||
      key.startsWith('sidebar.webHosting') ||
      key.startsWith('sidebar.webCloudDatabases') ||
      key.startsWith('sidebar.domains') ||
      key.startsWith('sidebar.email') ||
      key.startsWith('sidebar.sms') ||
      key.startsWith('sidebar.voip') ||
      key.startsWith('sidebar.fax') ||
      key.startsWith('sidebar.internet') ||
      key.startsWith('sidebar.sslGateway') ||
      key.startsWith('sidebar.managedHosting')
    );
  },
  'sidebar-network': (key) => key.startsWith('sidebar.network'),
  'sidebar-storage-and-backup': (key) =>
    key.startsWith('sidebar.storageAndBackup'),
  'sidebar-manage-operate': (key) => key.startsWith('sidebar.manageAndOperate'),
  'sidebar-account': (key) => {
    return (
      key.startsWith('sidebar.accountAndServiceManagement') ||
      key.startsWith('sidebar.accountManagement') ||
      key.startsWith('sidebar.accountInformation') ||
      key.startsWith('sidebar.billing') ||
      key.startsWith('sidebar.iam') ||
      key.startsWith('sidebar.security') ||
      key.startsWith('sidebar.sso') ||
      key.startsWith('sidebar.responsibilitySharing') ||
      key.startsWith('sidebar.reversibility') ||
      key.startsWith('sidebar.startupProgram')
    );
  },
};

// Process in order of specificity (more specific matchers first)
const orderedGroups = [
  'sidebar-common',
  'sidebar-public-cloud',
  'sidebar-private-cloud',
  'sidebar-bare-metal',
  'sidebar-web-cloud',
  'sidebar-network',
  'sidebar-storage-and-backup',
  'sidebar-manage-operate',
  'sidebar-account',
  'nav',
  'common',
];

// ============================================
// SPLIT: i18n.json -> i18n/*.json
// ============================================
function split() {
  if (!fs.existsSync(rootI18nFile)) {
    console.error(`Error: ${rootI18nFile} not found`);
    process.exit(1);
  }

  const i18nData = JSON.parse(fs.readFileSync(rootI18nFile, 'utf8'));

  // Create output directory if needed
  if (!fs.existsSync(i18nDir)) {
    fs.mkdirSync(i18nDir, { recursive: true });
  }

  // Split data into groups
  const groups = {};
  for (const groupName of orderedGroups) {
    groups[groupName] = {};
  }

  for (const [key, value] of Object.entries(i18nData)) {
    let found = false;
    for (const groupName of orderedGroups) {
      if (keyGroups[groupName](key)) {
        groups[groupName][key] = value;
        found = true;
        break;
      }
    }
    if (!found) {
      console.warn(`Warning: Key "${key}" not assigned to any group`);
      groups.common[key] = value;
    }
  }

  // Write each group to a file
  let totalKeys = 0;
  for (const [groupName, data] of Object.entries(groups)) {
    if (Object.keys(data).length > 0) {
      const outputFile = path.join(i18nDir, `${groupName}.json`);
      fs.writeFileSync(outputFile, `${JSON.stringify(data, null, 2)}\n`);
      console.log(
        `Written ${Object.keys(data).length} keys to ${groupName}.json`,
      );
      totalKeys += Object.keys(data).length;
    }
  }

  console.log(
    `\nSplit complete: ${totalKeys} keys across ${Object.keys(groups).length} files`,
  );
  console.log(
    'Edit files in i18n/ directory, then run: node scripts/split-i18n.cjs merge',
  );
}

// ============================================
// MERGE: i18n/*.json -> i18n.json
// ============================================
function merge() {
  if (!fs.existsSync(i18nDir)) {
    console.error(`Error: ${i18nDir} directory not found. Run 'split' first.`);
    process.exit(1);
  }

  const merged = {};

  // Read all JSON files from i18n directory
  const files = fs
    .readdirSync(i18nDir)
    .filter((f) => f.endsWith('.json'))
    .sort(); // Consistent ordering

  if (files.length === 0) {
    console.error('Error: No JSON files found in i18n/ directory');
    process.exit(1);
  }

  for (const file of files) {
    const filePath = path.join(i18nDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const keyCount = Object.keys(data).length;

    // Merge keys, sorted alphabetically
    for (const [key, value] of Object.entries(data)) {
      if (merged[key]) {
        console.warn(`Warning: Duplicate key "${key}" in ${file}`);
      }
      merged[key] = value;
    }

    console.log(`Merged ${keyCount} keys from ${file}`);
  }

  // Sort keys alphabetically for consistent output
  const sortedMerged = {};
  for (const key of Object.keys(merged).sort()) {
    sortedMerged[key] = merged[key];
  }

  // Write merged file
  fs.writeFileSync(rootI18nFile, `${JSON.stringify(sortedMerged, null, 2)}\n`);

  console.log(
    `\nMerge complete: ${Object.keys(sortedMerged).length} keys written to i18n.json`,
  );
}

// ============================================
// CLI
// ============================================
const command = process.argv[2];

switch (command) {
  case 'split':
    split();
    break;
  case 'merge':
    merge();
    break;
  default:
    console.log(`Usage: node scripts/split-i18n.cjs <command>

Commands:
  split  - Split i18n.json into i18n/*.json files for easier editing
  merge  - Merge i18n/*.json files back into i18n.json (run before build)

Workflow:
  1. Run 'split' once to create editable files
  2. Edit files in i18n/ directory as needed
  3. Run 'merge' before building or committing
`);
    process.exit(1);
}
