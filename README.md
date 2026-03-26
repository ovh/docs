# OVHcloud Guides

Documentation site for OVHcloud built with [Rspress](https://rspress.dev/) v2.
Serves 7 locales (fr, en, de, es, it, pl, pt) with 9500+ MDX pages.

## Prerequisites

- Node.js 20+
- pnpm

## Quick Start

```bash
pnpm install
pnpm dev          # Start dev server
pnpm build        # Production build (all locales)
pnpm preview      # Preview production build
```

## Development

### Locale Selection

By default, `pnpm dev` serves **fr** and **en** locales only (for performance).
Use the `DEV_LOCALES` environment variable to control which locales are active:

```bash
DEV_LOCALES=fr pnpm dev          # French only (fastest)
DEV_LOCALES=fr,en,de pnpm dev    # French, English, German
DEV_LOCALES=fr,en pnpm dev       # French + English (default)
```

Only active locales have their content compiled, sidebar generated, and routes registered.
This significantly reduces SSR time on the large MDX codebase.

### Dev Performance Notes

With 9500+ MDX files, dev SSR is ~9s per page (Rspress MDX compilation overhead).
Optimizations applied:
- `lastUpdated` disabled in dev (runs git log per page), enabled in production only
- Shiki `markdown` and `mdx` langs removed (they disable lazy loading)
- Reducing DEV_LOCALES to a single locale helps with initial startup

## Build

### Configuration Split

- `rspress.config.ts` — Development, serves all active locales from one instance
- `rspress.config.build.ts` — Production, builds one locale at a time via `LOCALE` env var

### Build Commands

```bash
pnpm build            # Parallel builds, concurrency 2 (default)
pnpm build:fast       # Parallel builds, concurrency 4
pnpm build:low-mem    # Sequential builds, concurrency 1
```

### Build Process

1. `build:cache` generates the lastUpdated cache (git log dates)
2. Turborepo runs `build:{locale}` tasks in parallel
3. Each locale build outputs to `dist/{locale}/`
4. `build:combine` merges all locale builds into final `dist/`

### Single Locale Build

```bash
LOCALE=fr rspress build -c rspress.config.build.ts
```

## Project Structure

```
docs/
  {locale}/guides/        Content per locale (fr, en, de, es, it, pl, pt)
  public/                 Shared static assets
config/
  sidebar/                Sidebar definitions per product category
  nav/                    Navigation with localized external URLs
  shared.ts               Locale definitions, shared Rspress config
theme/
  index.tsx               Theme entry point (extends @rspress/core/theme-original)
  components/             UI components: Nav, Sidebar, Breadcrumbs, OverviewCTA...
  layouts/                Custom layouts: OverviewLayout, ELearningLayout, MigrationLayout
components/               Reusable MDX components: Carousel, LinkCard, Api...
scripts/                  Build & utility scripts
i18n.json                 UI translation keys
```

## Page Types

Configured via frontmatter `pageType`:

| Type | Description | Frontmatter |
|------|-------------|-------------|
| `doc` | Standard documentation page (default) | — |
| `overview` | Product overview with essentials, getting started, tutorials, go further, CTA | `pageType: overview` |
| `e-learning` | Training page with hero, courses list, CTA | `pageType: e-learning` |
| `migration` | Migration guide with sections, resources, CTA | `pageType: migration` |
| `home` | Landing page | `pageType: home` |

## Sidebar System

The sidebar is generated from a single markdown file and supports full i18n across all 7 locales.

### Architecture

| File | Role |
|------|------|
| `config/sidebar/index.md` | **Source of truth** — markdown tree defining the full sidebar structure |
| `config/sidebar/parser.ts` | Parses `index.md` into Rspress `SidebarGroup[]` with i18n keys |
| `config/sidebar/index.ts` | Entry point — creates the sidebar per locale, handles dev/prod routing |
| `config/sidebar/supplements.ts` | Header items (API ref, changelog…) and Security section (not in `index.md`) |
| `i18n.json` | Contains `sidebar.gen.*` translations for non-leaf labels |
| `base/pages/index-translations.{locale}.yaml` | Source YAML translations for products/sections |

### `index.md` format

```markdown
+ Universe Name                                      ← top-level group (indent 0, no link)
    + [Product Label](products/category-ref)          ← product group (link starts with products/)
        + [Section Label](section-ref)                ← section group (link without /)
            + [Guide Title](path/to/guide-slug)       ← leaf guide (link with /, Rspress path format)
```

Classification rules:
- **indent 0, no link** → universe (e.g. `+ Public Cloud`)
- **link starts with `products/`** → product group (collapsible)
- **link without `/`** → section group (collapsible)
- **link with `/`** → guide leaf (converted to `/guides/...` link)

### How translations work

- **Non-leaf nodes** (universes, products, sections) use i18n keys (`sidebar.gen.*`), resolved at render time from `i18n.json`
- **Leaf nodes** (guides) read titles directly from the MDX frontmatter of the target locale at build time

Universe names use hardcoded translations in `parser.ts` (`UNIVERSE_TRANSLATIONS`). Product/section labels come from `base/pages/index-translations.{locale}.yaml`.

### Updating the sidebar

**Add/remove/reorder a guide:**
1. Edit `config/sidebar/index.md` — add or remove the `+ [Guide Title](path/to/slug)` line
2. Run `pnpm sidebar:validate` to check all links resolve to existing `.mdx` files

**Add/remove a product or section:**
1. Edit `config/sidebar/index.md`
2. Run `pnpm sidebar:sync-i18n` to generate/update i18n keys in `i18n.json`

**Add a new universe:**
1. Add the `+ Universe Name` block in `config/sidebar/index.md`
2. Add translations in `UNIVERSE_TRANSLATIONS` in `config/sidebar/parser.ts`
3. Run `pnpm sidebar:sync-i18n`

### Validation

```bash
pnpm sidebar:validate   # Check sidebar links → existing .mdx files
pnpm sidebar:orphans    # Find guides not in the sidebar
pnpm sidebar:check      # Both above
pnpm sidebar:sync-i18n  # Sync i18n keys from index.md → i18n.json
```

## Routing (Dev vs Production)

Rspress strips the URL prefix for the default locale (`lang: 'fr'`):

| Mode | FR (default locale) | Other locales |
|------|---------------------|---------------|
| Dev  | `/guides/...`       | `/en/guides/...`, `/de/guides/...` |
| Prod | `/fr/guides/...`    | `/en/guides/...`, `/de/guides/...` |

This affects sidebar key matching — see `config/sidebar/index.ts`.

## External Links (`/links/`)

Documentation pages use `/links/` references for external URLs that vary by locale (OVHcloud Manager, API console, product pages, etc.). These are resolved at build time to concrete URLs via Rspress's native `replaceRules`.

### How it works

In MDX content, authors write locale-agnostic links:

```md
Log in to your [OVHcloud Control Panel](/links/manager).
Visit the [API console](/links/api).
Order a [VPS](/links/bare-metal/vps).
```

At build time, Rspress replaces `(/links/manager)` with the actual URL for the target locale — e.g. `(https://www.ovh.com/auth/...&ovhSubsidiary=fr)` for `fr`.

### Architecture

```
config/links.ts       ← Single source of truth: 219 link keys × 7 locales
config/link-rules.ts  ← Generates ReplaceRule[] from links.ts for a given locale
rspress.config.ts     ← Dev:  replaceRules for the first active locale
rspress.config.build.ts ← Prod: replaceRules for the LOCALE being built
```

Replacement happens **before** MDX compilation (native `String.replace()`), so it works with mdxRS and has no performance impact.

### Adding or updating a link

Edit `config/links.ts` directly. Each entry maps a key to its URL per locale:

```typescript
'bare-metal/vps': {
  'fr': 'https://www.ovhcloud.com/fr/vps/',
  'en': 'https://www.ovhcloud.com/en-gb/vps/',
  'de': 'https://www.ovhcloud.com/de/vps/',
  // ...
},
```

Then use `(/links/bare-metal/vps)` in any MDX file — it resolves automatically.

### Fallback chain

If a locale-specific URL is missing, the system falls back: **locale → `en` → first available**.

### Regenerating from legacy source

The file `config/links.ts` was originally generated from `base/links/` (the legacy link definitions). To regenerate:

```bash
npx tsx scripts/convert-links.ts
```

## Internal Links (legacy `/pages/` and `/products/`)

The legacy documentation system used `/pages/` and `/products/` paths for internal cross-references. These have been **permanently converted** to standard `/guides/` paths.

| Legacy pattern | New pattern | Example |
|---|---|---|
| `(/pages/public_cloud/compute/foo_bar)` | `(/guides/public-cloud/compute/foo-bar)` | Underscores → hyphens, `/pages/` → `/guides/` |
| `(/pages/bare_metal_cloud/dedicated_servers/ssh_intro#anchor)` | `(/guides/bare-metal-cloud/dedicated-servers/ssh-intro#anchor)` | Anchors preserved |
| `(/products/public-cloud-compute)` | `(/guides/public-cloud/compute)` | Flat slug → nested path |

New content should always use standard relative or absolute `/guides/` paths — never `/pages/` or `/products/`.

### Conversion scripts (one-time, already applied)

```bash
npx tsx scripts/fix-pages-links.ts     # /pages/ → /guides/ (52k replacements)
npx tsx scripts/fix-products-links.ts  # /products/ → /guides/ (1.4k replacements)
```

These scripts are idempotent and can be re-run safely (they only match remaining `/pages/` or `/products/` patterns).

## Tooling

```bash
pnpm lint               # Lint (Biome)
pnpm format             # Format (Biome)
pnpm check              # Lint + format with auto-fix
pnpm sidebar:check      # Validate sidebar (structure + orphan detection)
pnpm page:create        # Scaffold a new page
pnpm page:delete        # Delete a page across all locales
```

## Code Style

- **Biome** for linting & formatting (single quotes, space indentation)
- **SCSS** with Tailwind CSS v4 directives (`tw-dark` class for dark mode)
- **TypeScript** with strict mode
- Path alias: `@components` → `components/`
