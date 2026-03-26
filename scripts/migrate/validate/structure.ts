/**
 * Structure validator: verifies the migrated file structure is correct.
 * Adapted for Rspress: docs/ is the content root, docs/public/ for assets.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { glob } from 'glob';

interface StructureError {
  type: string;
  message: string;
  path?: string;
}

export async function validateStructure(
  rspressDir: string,
): Promise<StructureError[]> {
  const errors: StructureError[] = [];

  const docsDir = path.join(rspressDir, 'docs');
  const publicDir = path.join(docsDir, 'public');

  // Check docs directory exists
  if (!fs.existsSync(docsDir)) {
    errors.push({ type: 'missing_dir', message: 'docs/ directory missing' });
    return errors;
  }

  // Check locale directories (Rspress uses short prefixes)
  const expectedLocaleDirs = ['fr', 'en'];
  for (const locale of expectedLocaleDirs) {
    const localeDir = path.join(docsDir, locale);
    if (!fs.existsSync(localeDir)) {
      errors.push({
        type: 'missing_locale',
        message: `Locale directory missing: ${locale}`,
        path: localeDir,
      });
    }
  }

  // Check default locale (fr) has content
  const frDir = path.join(docsDir, 'fr');
  if (fs.existsSync(frDir)) {
    const frFiles = await glob('**/*.{md,mdx}', { cwd: frDir });
    if (frFiles.length === 0) {
      errors.push({
        type: 'missing_locale',
        message: 'Default locale (fr) has no content',
        path: frDir,
      });
    }
  }

  // Check for files with broken frontmatter
  const mdFiles = await glob('{fr,en,de,es,it,pl,pt}/**/*.{md,mdx}', {
    cwd: docsDir,
  });
  for (const file of mdFiles) {
    const fullPath = path.join(docsDir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');

    // Check frontmatter exists
    if (!content.startsWith('---')) {
      errors.push({
        type: 'missing_frontmatter',
        message: `File missing frontmatter`,
        path: file,
      });
      continue;
    }

    // Check frontmatter closes
    const secondDash = content.indexOf('---', 3);
    if (secondDash === -1) {
      errors.push({
        type: 'broken_frontmatter',
        message: `Frontmatter not properly closed`,
        path: file,
      });
    }

    // Check for remaining Pelican-style syntax
    if (
      content.includes('> [!primary]') ||
      content.includes('> [!warning]') ||
      content.includes('> [!alert]') ||
      content.includes('> [!info]')
    ) {
      errors.push({
        type: 'unconverted_admonition',
        message: `File still contains unconverted admonitions`,
        path: file,
      });
    }

    if (content.includes('> [!tabs]')) {
      errors.push({
        type: 'unconverted_tabs',
        message: `File still contains unconverted tabs`,
        path: file,
      });
    }

    if (content.includes('> [!faq]')) {
      errors.push({
        type: 'unconverted_faq',
        message: `File still contains unconverted FAQ`,
        path: file,
      });
    }

    if (content.includes('> [!api]')) {
      errors.push({
        type: 'unconverted_api',
        message: `File still contains unconverted API blocks`,
        path: file,
      });
    }
  }

  // Check images referenced in docs exist
  for (const file of mdFiles) {
    const fullPath = path.join(docsDir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');

    const imgRegex = /!\[[^\]]*\]\(\/images\/([^)]+)\)/g;
    for (const match of content.matchAll(imgRegex)) {
      const imgPath = path.join(publicDir, 'images', match[1]);
      if (!fs.existsSync(imgPath)) {
        errors.push({
          type: 'missing_image',
          message: `Referenced image not found: /images/${match[1]}`,
          path: file,
        });
      }
    }
  }

  return errors;
}
