/**
 * Sidebar config updater - adds new entries to sidebar TypeScript files
 */

import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Project, SyntaxKind } from 'ts-morph';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const SIDEBAR_DIR = path.join(ROOT_DIR, 'config', 'sidebar');

/**
 * Mapping of path prefixes to sidebar config files and sections
 */
export const SIDEBAR_MAP: Record<
  string,
  { file: string; section: string; variable: string }
> = {
  'guides/public-cloud/compute': {
    file: 'public-cloud.ts',
    section: 'compute',
    variable: 'publicCloudSidebar',
  },
  'guides/public-cloud/public-cloud-databases': {
    file: 'public-cloud.ts',
    section: 'databases',
    variable: 'publicCloudSidebar',
  },
  'guides/public-cloud/ai-machine-learning': {
    file: 'public-cloud.ts',
    section: 'aiMl',
    variable: 'publicCloudSidebar',
  },
  'guides/public-cloud/containers-orchestration': {
    file: 'public-cloud.ts',
    section: 'containers',
    variable: 'publicCloudSidebar',
  },
  'guides/hosted-private-cloud': {
    file: 'private-cloud.ts',
    section: 'privateCloud',
    variable: 'privateCloudSidebar',
  },
  'guides/bare-metal-cloud/dedicated-servers': {
    file: 'bare-metal.ts',
    section: 'dedicatedServers',
    variable: 'bareMetalSidebar',
  },
  'guides/bare-metal-cloud/virtual-private-servers': {
    file: 'bare-metal.ts',
    section: 'vps',
    variable: 'bareMetalSidebar',
  },
  'guides/web-cloud/web-hosting': {
    file: 'web-cloud.ts',
    section: 'webHosting',
    variable: 'webCloudSidebar',
  },
  'guides/web-cloud/domains': {
    file: 'web-cloud.ts',
    section: 'domains',
    variable: 'webCloudSidebar',
  },
  'guides/web-cloud/email': {
    file: 'web-cloud.ts',
    section: 'email',
    variable: 'webCloudSidebar',
  },
  'guides/network/load-balancer': {
    file: 'network.ts',
    section: 'loadBalancer',
    variable: 'networkSidebar',
  },
  'guides/network/additional-ip': {
    file: 'network.ts',
    section: 'additionalIp',
    variable: 'networkSidebar',
  },
  'guides/manage-and-operate/api': {
    file: 'manage-and-operate.ts',
    section: 'api',
    variable: 'manageAndOperateSidebar',
  },
  'guides/manage-and-operate/iam': {
    file: 'manage-and-operate.ts',
    section: 'iam',
    variable: 'manageAndOperateSidebar',
  },
  'guides/manage-and-operate/observability': {
    file: 'manage-and-operate.ts',
    section: 'observability',
    variable: 'manageAndOperateSidebar',
  },
  'guides/account-and-service-management/account-information': {
    file: 'account-and-service-management.ts',
    section: 'accountInformation',
    variable: 'accountAndServiceManagementSidebar',
  },
  'guides/account-and-service-management/managing-billing-payments-and-services':
    {
      file: 'account-and-service-management.ts',
      section: 'billing',
      variable: 'accountAndServiceManagementSidebar',
    },
};

export interface SidebarConfig {
  file: string;
  section: string;
  variable: string;
}

/**
 * Detect sidebar config from page path
 */
export function detectSidebarConfig(pagePath: string): SidebarConfig | null {
  // Sort by length descending to match most specific path first
  const sortedPrefixes = Object.keys(SIDEBAR_MAP).sort(
    (a, b) => b.length - a.length,
  );

  for (const prefix of sortedPrefixes) {
    if (pagePath.startsWith(prefix)) {
      return SIDEBAR_MAP[prefix];
    }
  }

  return null;
}

/**
 * Get available sidebar sections
 */
export function getAvailableSections(): string[] {
  const sections = new Set<string>();
  for (const config of Object.values(SIDEBAR_MAP)) {
    sections.add(config.section);
  }
  return Array.from(sections).sort();
}

/**
 * Add a sidebar entry to the config file
 * This appends to the first items array found in the section
 */
export function addSidebarEntry(
  pagePath: string,
  i18nKey: string,
  config: SidebarConfig,
): void {
  const filePath = path.join(SIDEBAR_DIR, config.file);
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  // Build the link path
  const link = `/${pagePath}`;

  // Find the variable declaration
  const variable = sourceFile.getVariableDeclaration(config.variable);
  if (!variable) {
    throw new Error(
      `Could not find variable "${config.variable}" in ${config.file}`,
    );
  }

  // Get the initializer (the object literal)
  const initializer = variable.getInitializer();
  if (
    !initializer ||
    initializer.getKind() !== SyntaxKind.ObjectLiteralExpression
  ) {
    throw new Error(`Variable "${config.variable}" is not an object literal`);
  }

  // Find the items array - we need to navigate to the right section
  // For now, find the first items array and append there
  const itemsArrays = initializer.getDescendantsOfKind(
    SyntaxKind.ArrayLiteralExpression,
  );

  if (itemsArrays.length === 0) {
    throw new Error(`No items array found in ${config.variable}`);
  }

  // Find the deepest items array that's not empty, or the first one
  let targetArray = itemsArrays[0];
  for (const arr of itemsArrays) {
    const parent = arr.getParent();
    if (parent?.getKind() === SyntaxKind.PropertyAssignment) {
      const propAssign = parent.asKind(SyntaxKind.PropertyAssignment);
      const name = propAssign?.getName();
      if (name === 'items') {
        // Check if this is in the right section by looking at sibling text property
        const siblings = propAssign?.getParent()?.getChildren() || [];
        for (const sibling of siblings) {
          if (sibling.getKind() === SyntaxKind.PropertyAssignment) {
            const sibProp = sibling.asKind(SyntaxKind.PropertyAssignment);
            if (sibProp?.getName() === 'text') {
              const textValue = sibProp.getInitializer()?.getText() || '';
              if (textValue.includes(`sidebar.${config.section}`)) {
                targetArray = arr;
                break;
              }
            }
          }
        }
      }
    }
  }

  // Create the new entry
  const newEntry = `{
          text: '${i18nKey}',
          link: '${link}',
        }`;

  // Add to the array
  const elements = targetArray.getElements();
  if (elements.length > 0) {
    // Add after the last element
    const lastElement = elements[elements.length - 1];
    lastElement.replaceWithText(
      `${lastElement.getText()},\n        ${newEntry}`,
    );
  } else {
    // Empty array, just add
    targetArray.addElement(newEntry);
  }

  // Save the file
  sourceFile.saveSync();
}

/**
 * Get the list of sidebar config files
 */
export function getSidebarFiles(): string[] {
  return [...new Set(Object.values(SIDEBAR_MAP).map((c) => c.file))];
}

export interface SidebarEntry {
  i18nKey: string;
  link: string;
  file: string;
}

/**
 * Find a sidebar entry by link path
 */
export function findSidebarEntry(linkPath: string): SidebarEntry | null {
  const link = linkPath.startsWith('/') ? linkPath : `/${linkPath}`;

  for (const configFile of getSidebarFiles()) {
    const filePath = path.join(SIDEBAR_DIR, configFile);
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(filePath);
    const text = sourceFile.getFullText();

    // Simple regex to find link entries
    const linkRegex = new RegExp(
      `text:\\s*['"]([^'"]+)['"][^}]*link:\\s*['"]${link.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`,
      'g',
    );

    const match = linkRegex.exec(text);
    if (match) {
      return {
        i18nKey: match[1],
        link,
        file: configFile,
      };
    }

    // Also check template literal format
    const templateRegex = new RegExp(
      `text:\\s*['"]([^'"]+)['"][^}]*link:\\s*\`[^}]*${link.replace(/^\/guides/, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\``,
      'g',
    );

    const templateMatch = templateRegex.exec(text);
    if (templateMatch) {
      return {
        i18nKey: templateMatch[1],
        link,
        file: configFile,
      };
    }
  }

  return null;
}

/**
 * Delete a sidebar entry by link path
 */
export function deleteSidebarEntry(linkPath: string): boolean {
  const link = linkPath.startsWith('/') ? linkPath : `/${linkPath}`;

  for (const configFile of getSidebarFiles()) {
    const filePath = path.join(SIDEBAR_DIR, configFile);
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(filePath);

    // Find all object literals that have a link property matching our path
    const objectLiterals = sourceFile.getDescendantsOfKind(
      SyntaxKind.ObjectLiteralExpression,
    );

    for (const obj of objectLiterals) {
      const linkProp = obj.getProperty('link');
      if (!linkProp) continue;

      const linkValue = linkProp
        .asKind(SyntaxKind.PropertyAssignment)
        ?.getInitializer()
        ?.getText();

      if (!linkValue) continue;

      // Check if this is our link (handle both string and template literals)
      const cleanLinkValue = linkValue.replace(/['"` ]/g, '');
      const normalizedLink = link.replace(/^\//, '');

      if (
        cleanLinkValue === `'${link}'` ||
        cleanLinkValue === `"${link}"` ||
        cleanLinkValue === link ||
        cleanLinkValue.endsWith(normalizedLink)
      ) {
        // Found the entry - remove it using text replacement
        const start = obj.getStart();
        const end = obj.getEnd();
        const fullText = sourceFile.getFullText();

        // Find trailing comma and whitespace
        let removeEnd = end;
        const afterText = fullText.slice(end);
        const trailingMatch = afterText.match(/^\s*,?\s*/);
        if (trailingMatch) {
          removeEnd = end + trailingMatch[0].length;
        }

        // Also handle leading comma if no trailing comma
        let removeStart = start;
        const beforeText = fullText.slice(0, start);
        const leadingMatch = beforeText.match(/,\s*$/);
        if (leadingMatch && !trailingMatch?.[0].includes(',')) {
          removeStart = start - leadingMatch[0].length;
        }

        // Handle leading whitespace/newline
        const leadingWhitespace = beforeText.match(/\n\s*$/);
        if (leadingWhitespace) {
          removeStart = start - leadingWhitespace[0].length;
        }

        sourceFile.replaceText([removeStart, removeEnd], '');
        sourceFile.saveSync();
        return true;
      }
    }
  }

  return false;
}
