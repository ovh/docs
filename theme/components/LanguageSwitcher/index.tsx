import type React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';

const LOCALES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
] as const;

const LOCALE_CODES = new Set(LOCALES.map((l) => l.code));

function getLocaleInfo(pathname: string) {
  const pathParts = pathname.split('/').filter(Boolean);
  const firstPart = pathParts[0] || '';
  const currentLocale = LOCALE_CODES.has(firstPart) ? firstPart : 'fr';
  const pathWithoutLocale = LOCALE_CODES.has(firstPart)
    ? `/${pathParts.slice(1).join('/')}`
    : `/${pathParts.join('/')}`;
  return { currentLocale, pathWithoutLocale };
}

export function LanguageSwitcher() {
  // Use state to ensure client-side pathname is used after hydration
  const [pathname, setPathname] = useState('/fr/');

  useEffect(() => {
    // Update with actual window.location after mount
    setPathname(window.location.pathname);
  }, []);

  const { currentLocale, pathWithoutLocale } = getLocaleInfo(pathname);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // Strip any locale prefix from pathWithoutLocale to avoid /fr/en/... URLs
    const pathParts = pathWithoutLocale.split('/').filter(Boolean);
    const cleanPath = LOCALE_CODES.has(pathParts[0])
      ? `/${pathParts.slice(1).join('/')}`
      : pathWithoutLocale;
    const newPath = `/${newLocale}${cleanPath}`;
    window.location.href = newPath;
  };

  const currentLocaleData = LOCALES.find((l) => l.code === currentLocale);

  return (
    <div className="language-switcher">
      <select
        value={currentLocale}
        onChange={handleChange}
        aria-label="Select language"
        className="language-switcher__select"
      >
        {LOCALES.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.flag} {locale.label}
          </option>
        ))}
      </select>
      <span className="language-switcher__current">
        {currentLocaleData?.flag}
      </span>
    </div>
  );
}

export default LanguageSwitcher;
