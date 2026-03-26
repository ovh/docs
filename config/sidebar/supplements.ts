/**
 * Sidebar supplements — elements not in index.md.
 *
 * - Header items (documentation links, changelog, e-learning, migration)
 * - Security sidebar (IAM/SSO — curated manually, cross-cutting section)
 * - Tag overrides for guides that need badges (beta, new, etc.)
 */

import type { SidebarGroup, SidebarItem } from '@rspress/core';

export type Locale = 'fr' | 'en' | 'de' | 'es' | 'it' | 'pl' | 'pt';

// -------------------------------------------------------------------
// Localized external URLs
// -------------------------------------------------------------------

const localizedUrls: Record<string, Record<Locale, string>> = {
  changelog: {
    fr: 'https://www.ovhcloud.com/fr/roadmap-changelog/',
    en: 'https://www.ovhcloud.com/en-gb/roadmap-changelog/',
    de: 'https://www.ovhcloud.com/de/roadmap-changelog/',
    es: 'https://www.ovhcloud.com/es-es/roadmap-changelog/',
    it: 'https://www.ovhcloud.com/it/roadmap-changelog/',
    pl: 'https://www.ovhcloud.com/pl/roadmap-changelog/',
    pt: 'https://www.ovhcloud.com/pt/roadmap-changelog/',
  },
};

// -------------------------------------------------------------------
// Header items (before product categories)
// -------------------------------------------------------------------

export function getHeaderItems(locale: Locale): SidebarItem[] {
  return [
    { sectionHeaderText: 'sidebar.documentation' } as SidebarItem,
    { text: 'sidebar.apiReference', link: 'https://eu.api.ovh.com/console/' },
    {
      text: 'sidebar.productChangelog',
      link: localizedUrls.changelog[locale],
    },
    { text: 'sidebar.eLearning', link: '/guides/e-learning/' },
    { text: 'sidebar.migration', link: '/guides/migration/' },
  ];
}

// -------------------------------------------------------------------
// Security sidebar (curated — not in index.md)
// -------------------------------------------------------------------

const BASE_PATH = '/guides/account-and-service-management';

export const securitySidebar: SidebarGroup = {
  text: 'sidebar.security',
  collapsed: true,
  items: [
    // IAM
    {
      text: 'sidebar.iam',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'sidebar.overview',
          link: `${BASE_PATH}/account-information/iam-overview`,
        },
        {
          text: 'sidebar.keyConcepts',
          link: `${BASE_PATH}/account-information/iam-key-concepts`,
        },
        {
          text: 'sidebar.firstSteps',
          link: `${BASE_PATH}/account-information/iam-control-panel-access`,
        },
        {
          text: 'sidebar.configuration',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'sidebar.iam.policyUi',
              link: `${BASE_PATH}/account-information/iam-policy-ui`,
            },
            {
              text: 'sidebar.iam.policiesApi',
              link: `${BASE_PATH}/account-information/iam-policies-api`,
            },
            {
              text: 'sidebar.iam.permissionGroups',
              link: `${BASE_PATH}/account-information/iam-permission-groups`,
            },
            {
              text: 'sidebar.iam.serviceAccount',
              link: `${BASE_PATH}/account-information/authenticate-api-with-service-account`,
            },
          ],
        },
      ],
    },
    // SSO / SAML
    {
      text: 'sidebar.sso',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'sidebar.overview',
          link: `${BASE_PATH}/account-information/sso-overview`,
        },
        {
          text: 'sidebar.keyConcepts',
          link: `${BASE_PATH}/account-information/sso-key-concepts`,
        },
        {
          text: 'sidebar.firstSteps',
          link: `${BASE_PATH}/account-information/sso-getting-started`,
        },
        {
          text: 'sidebar.configuration',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'sidebar.sso.adfs',
              link: `${BASE_PATH}/account-information/ovhcloud-account-connect-saml-adfs`,
            },
            {
              text: 'sidebar.sso.azureAd',
              link: `${BASE_PATH}/account-information/ovhcloud-account-connect-saml-azure-ad`,
            },
            {
              text: 'sidebar.sso.googleWorkspace',
              link: `${BASE_PATH}/account-information/ovhcloud-account-connect-saml-google-workspace`,
            },
            {
              text: 'sidebar.sso.okta',
              link: `${BASE_PATH}/account-information/ovhcloud-account-connect-saml-okta`,
            },
          ],
        },
      ],
    },
    // Security certifications & specifications
    {
      text: 'sidebar.security.certifications',
      link: `${BASE_PATH}/account-information/security-certifications`,
    },
    {
      text: 'sidebar.security.hds',
      link: `${BASE_PATH}/account-information/hds-certification`,
    },
    {
      text: 'sidebar.security.issp',
      link: `${BASE_PATH}/account-information/information-system-security-policy`,
    },
    {
      text: 'sidebar.security.dedicatedServers',
      link: `${BASE_PATH}/account-information/security-specifications-dedicated-servers`,
    },
    {
      text: 'sidebar.security.blockStorage',
      link: `${BASE_PATH}/account-information/security-specification-block-storage`,
    },
    {
      text: 'sidebar.security.privateCloudVmware',
      link: `${BASE_PATH}/account-information/security-specification-privatecloud-vmware`,
    },
    {
      text: 'sidebar.security.privateCloudSnc',
      link: `${BASE_PATH}/account-information/security-specification-privatecloud-snc`,
    },
  ],
};

// -------------------------------------------------------------------
// Tag overrides (badges for specific guides)
// -------------------------------------------------------------------

export const tagOverrides: Record<string, string> = {
  '/guides/public-cloud/quantum-computing/': 'beta',
};
