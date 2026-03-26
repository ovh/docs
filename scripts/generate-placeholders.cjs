const fs = require('node:fs');
const path = require('node:path');

const LOCALES = ['fr', 'fr-ca', 'en', 'de', 'es', 'it', 'pl', 'pt'];
const DOCS_DIR = path.join(__dirname, '..', 'docs');

const placeholders = require('./placeholders.json');

const LOCALE_TITLES = {
  fr: 'titleFr',
  'fr-ca': 'titleFr',
  en: 'titleEn',
  de: 'titleEn',
  es: 'titleEn',
  it: 'titleEn',
  pl: 'titleEn',
  pt: 'titleEn',
};

const WARNING_TEXT = {
  fr: 'Cette page est en cours de construction.',
  'fr-ca': 'Cette page est en cours de construction.',
  en: 'This page is under construction.',
  de: 'Diese Seite befindet sich im Aufbau.',
  es: 'Esta página está en construcción.',
  it: 'Questa pagina è in fase di costruzione.',
  pl: 'Ta strona jest w budowie.',
  pt: 'Esta página está em construção.',
};

let created = 0;
let skipped = 0;

for (const entry of placeholders) {
  for (const locale of LOCALES) {
    const filePath = path.join(DOCS_DIR, locale, 'guides', `${entry.path}.mdx`);

    if (fs.existsSync(filePath)) {
      skipped++;
      continue;
    }

    const titleKey = LOCALE_TITLES[locale];
    const title = entry[titleKey];
    const warning = WARNING_TEXT[locale];

    const isOverview =
      entry.path.endsWith('/overview') || entry.path.includes('-overview');
    const pageTypeLine = isOverview ? '\npageType: overview' : '';

    const content = `---
title: "${title}"${pageTypeLine}
---

# ${title}

:::warning
${warning}
:::
`;

    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, content, 'utf-8');
    created++;
  }
}

console.log(
  `Done! Created ${created} files, skipped ${skipped} existing files.`,
);
