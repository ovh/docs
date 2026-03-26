// Supported locales
export const locales = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'] as const;
export type Locale = (typeof locales)[number];

// Default locale for fallback
export const defaultLocale: Locale = 'fr';

// Nav item with localized links - used internally and exposed via themeConfig.nav
export interface NavItemConfig {
  text: string; // i18n key
  links: Record<Locale, string>;
}

// Declarative nav items with all localized links
const navItems: NavItemConfig[] = [
  {
    text: 'nav.webmail',
    links: {
      fr: 'https://www.ovhcloud.com/fr/mail/',
      en: 'https://www.ovhcloud.com/en-gb/mail/',
      de: 'https://www.ovhcloud.com/de/mail/',
      es: 'https://www.ovhcloud.com/es-es/mail/',
      it: 'https://www.ovhcloud.com/it/mail/',
      pl: 'https://www.ovhcloud.com/pl/mail/',
      pt: 'https://www.ovhcloud.com/pt/mail/',
    },
  },
  {
    text: 'nav.customerAccount',
    links: {
      fr: 'https://www.ovh.com/auth/?onsuccess=https%3A//www.ovh.com/manager&ovhSubsidiary=FR',
      en: 'https://www.ovh.com/auth/?onsuccess=https%3A//www.ovh.com/manager&ovhSubsidiary=GB',
      de: 'https://www.ovh.com/auth/?onsuccess=https%3A//www.ovh.com/manager&ovhSubsidiary=DE',
      es: 'https://www.ovh.com/auth/?onsuccess=https%3A//www.ovh.com/manager&ovhSubsidiary=ES',
      it: 'https://www.ovh.com/auth/?onsuccess=https%3A//www.ovh.com/manager&ovhSubsidiary=IT',
      pl: 'https://www.ovh.com/auth/?onsuccess=https%3A//www.ovh.com/manager&ovhSubsidiary=PL',
      pt: 'https://www.ovh.com/auth/?onsuccess=https%3A//www.ovh.com/manager&ovhSubsidiary=PT',
    },
  },
  {
    text: 'nav.support',
    links: {
      fr: 'https://help.ovhcloud.com/csm/fr-home',
      en: 'https://help.ovhcloud.com/csm/en-gb-home',
      de: 'https://help.ovhcloud.com/csm/de-home',
      es: 'https://help.ovhcloud.com/csm/es-es-home',
      it: 'https://help.ovhcloud.com/csm/it-home',
      pl: 'https://help.ovhcloud.com/csm/pl-home',
      pt: 'https://help.ovhcloud.com/csm/pt-home',
    },
  },
];

// Export nav config for rspress.config.ts - contains full localized data
export const nav = navItems;
