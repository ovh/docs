import fs from 'node:fs';
import path from 'node:path';
import { glob } from 'glob';
import { parse as parseYaml } from 'yaml';

const BASE_DIR = path.resolve(import.meta.dirname, '..', 'base', 'pages');
const DOCS_FR = path.resolve(import.meta.dirname, '..', 'docs', 'fr');
const OUTPUT = path.resolve(import.meta.dirname, 'slug-mapping.json');

interface MappingEntry {
  fullSlug: string;
  newSlug: string;
  basePath: string;
  exists: boolean;
}

async function main() {
  const metaFiles = await glob('**/meta.yaml', { cwd: BASE_DIR });
  console.log(`Found ${metaFiles.length} meta.yaml files`);

  const mapping: Record<string, MappingEntry> = {};
  let existing = 0;
  let missing = 0;
  let stripped = 0;
  let unchanged = 0;

  for (const metaFile of metaFiles) {
    const content = fs.readFileSync(path.join(BASE_DIR, metaFile), 'utf-8');
    const meta = parseYaml(content);
    const fullSlug: string | undefined = meta.full_slug;

    if (!fullSlug) continue;

    // basePath = directory path relative to BASE_DIR (e.g. public_cloud/compute/pre_installed_applications)
    const basePath = path.dirname(metaFile);

    // Convert to MDX path using same logic as migration script
    const mdxPath =
      'guides/' +
      basePath
        .split('/')
        .map((s) => s.replace(/_/g, '-').toLowerCase())
        .join('/') +
      '.mdx';

    // Check existence in fr locale (reference)
    const exists = fs.existsSync(path.join(DOCS_FR, mdxPath));

    // Compute newSlug by stripping directory prefix from fullSlug
    const parts = basePath.split('/');
    const newSlug = stripPrefix(fullSlug, parts);

    if (newSlug !== fullSlug) {
      stripped++;
    } else {
      unchanged++;
    }

    if (exists) {
      existing++;
    } else {
      missing++;
    }

    mapping[mdxPath] = { fullSlug, newSlug, basePath, exists };
  }

  // Verify no empty newSlug
  const emptySlugCount = Object.values(mapping).filter(
    (e) => !e.newSlug,
  ).length;

  fs.writeFileSync(OUTPUT, `${JSON.stringify(mapping, null, 2)}\n`);

  const total = Object.keys(mapping).length;
  console.log(`\nResults:`);
  console.log(`  Total entries:    ${total}`);
  console.log(`  MDX exists (fr):  ${existing}`);
  console.log(`  MDX missing (fr): ${missing}`);
  console.log(`  Slug stripped:    ${stripped}`);
  console.log(`  Slug unchanged:   ${unchanged}`);
  if (emptySlugCount > 0) {
    console.log(`  ⚠ Empty newSlug:  ${emptySlugCount}`);
  }
  console.log(`\nWritten to ${OUTPUT}`);
}

/**
 * Strip directory prefix from fullSlug.
 *
 * Try progressively:
 * 1. {category-kebab}-{subcategory-kebab}- (e.g. "public-cloud-compute-")
 * 2. {subcategory-kebab}- (e.g. "dedicated-servers-")
 * 3. Keep fullSlug as-is
 */
function stripPrefix(fullSlug: string, pathParts: string[]): string {
  if (pathParts.length < 2) return fullSlug;

  const category = pathParts[0].replace(/_/g, '-').toLowerCase();
  const subcategory = pathParts[1].replace(/_/g, '-').toLowerCase();

  // Try full prefix: category-subcategory-
  const fullPrefix = `${category}-${subcategory}-`;
  if (fullSlug.startsWith(fullPrefix)) {
    const result = fullSlug.slice(fullPrefix.length);
    return result || fullSlug;
  }

  // Try subcategory only
  const subPrefix = `${subcategory}-`;
  if (fullSlug.startsWith(subPrefix)) {
    const result = fullSlug.slice(subPrefix.length);
    return result || fullSlug;
  }

  return fullSlug;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
