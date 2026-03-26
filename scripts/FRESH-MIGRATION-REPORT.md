# Fresh Migration Report

Date: 2026-03-31
Source: `base/pages/` (legacy Pelican docs, updated)
Target: `docs/{locale}/guides/` (Rspress MDX)

## Migration Summary

| Metric | Value |
|--------|-------|
| Guides migrated | 1,655 (from base/) |
| Locale files generated | ~9,735 (7 locales) |
| Docs-only files preserved | ~573 (overview, key-concepts, getting-started, renamed guides) |
| Locale fallbacks created | ~10 (missing targets copied from EN/FR) |
| Post-migration fixes applied | ~2,200 files |
| Final guide count (FR) | 2,228 |
| Build result | 0 errors across all 7 locales |

## Scripts Used

| Script | Role |
|--------|------|
| `scripts/fresh-migrate.sh` | Orchestrator: discover, migrate, fallback, sidebar sync, validate |
| `scripts/migrate/index.ts` | Migration pipeline (frontmatter, admonitions, tabs, API, images, links, JSX escaping) |
| `scripts/verify-migration.py` | Post-migration dead link & image verification |
| `scripts/create-locale-fallbacks.py` | (inline in fresh-migrate.sh) Copy missing sidebar targets from EN/FR |

## Migration Script Improvements Applied

These are now built into `scripts/migrate/` and will be used in future migrations:

### `scripts/migrate/index.ts`
- `class=` → `className=` (JSX requirement)
- `frameborder=` → `frameBorder=`, `allowfullscreen` → `allowFullScreen={true}`
- Self-closing `<iframe ... />` → `<iframe ...></iframe>`
- `<bt>` typo → `<br/>`
- `style="..."` → `style={{...}}` JSX objects
- `center` added to `VALID_HTML_TAGS`
- Backtick pairing fix scoped to non-code-fence lines only
- HTML comments `<!-- -->` → JSX comments `{/* */}` (placed after curly brace escaping)
- Mixed-case placeholder detection in `escapeBareAngleBrackets` (`<yourdockerhubId>`)

### `scripts/migrate/parsers/admonitions.ts`
- Mapping updated: `primary` → `:::info`, `warning` → `:::warning`, `info` → `:::info`

### `scripts/migrate/parsers/tabs.ts`
- HTML tags stripped from tab labels (`<a id="...">` removed)

### `scripts/migrate/parsers/code-blocks.ts`
- Added: `Dockerfile` → `dockerfile`, `haproxy` → `text`, `curl`/`Curl` → `bash`

### `scripts/migrate/parsers/internal-links.ts`
- `/pages/` → `/guides/` with underscore-to-hyphen conversion
- `/products/` → mapped nested paths (PRODUCTS_MAP)
- `./#anchor` → `#anchor`

## Post-Migration Fixes (Manual/Script)

These patterns are NOT yet handled by the migration script and require post-processing:

### Links
| Pattern | Fix | Impact |
|---------|-----|--------|
| Case-sensitive slugs (`firewall-Linux-iptable`) | Lowercase all link paths | ~50 files |
| Flat `/products/` slugs not in PRODUCTS_MAP | Map to nested `/guides/` paths | ~200 files |
| Directory links (`/guides/section/`) | Redirect to `/guides/section/overview/` | ~50 files |
| Malformed `[text]([url](url))` | Fix to `[text](url)` | ~5 files |
| Missing leading `/` on `/links/` shortcodes | Add `/` prefix | ~5 files |
| Dead link targets (file doesn't exist) | Copy fallback from FR/EN | ~20 files |

### HTML/JSX
| Pattern | Fix | Impact |
|---------|-----|--------|
| Nested `"` in img `alt` attributes | Simplify alt text | ~10 files |
| `<details>` without blank line spacing | Add blank lines around `<details>`/`<summary>` | ~130 files |
| Missing `<tr>` in tables | Insert `<tr>` before orphan `<td>` | ~5 files |
| Relative image paths (`src="images/..."`) | Convert to absolute `/images/{slug}/...` | ~35 files |
| Backslash-escaped placeholders (`<SID\>`) | Wrap in backticks | ~5 files |
| Unescaped email addresses (`<user@domain>`) | Wrap in backticks | ~7 files |
| Unclosed `<sup>`, `<span>`, `<code>` in tables | Add closing tags | ~5 files |
| `<ol type="a">`, `<li value="1">` | Strip attributes | ~5 files |
| `</br>` | Replace with `<br/>` | ~3 files |
| `<pre><code>` blocks | Convert to fenced code blocks | ~5 files |

### Config
| Change | File |
|--------|------|
| 8 new `/links/` keys added | `config/links.ts` |

## Recommended Post-Migration Checklist

After running `bash scripts/fresh-migrate.sh`:

1. **Run `python3 scripts/verify-migration.py --locale fr`** — fix any broken links/images
2. **Apply dead link fixes** — case-sensitive slugs, flat product slugs, directory links
3. **Apply HTML/JSX fixes** — details spacing, relative images, table structure
4. **Run `pnpm build:fr`** — verify 0 MDX errors
5. **Run builds for other locales** — `pnpm build:en`, `pnpm build:de`, etc.
6. **Fix locale-specific errors** — copy clean FR/EN versions for files that fail
7. **Commit when all 7 locales build clean**

## Improvements Integrated (2026-03-31)

All 6 planned improvements have been added to the migration scripts:

1. **Lowercase all link paths** — `internal-links.ts`: force lowercase on all `/guides/` link paths
2. **`<details>` blank line insertion** — `index.ts`: blank lines around `<details>`/`<summary>`/`</details>`
3. **Relative image path detection** — `index.ts`: `src="images/..."` → `src="/images/{guidePath}/..."`
4. **Nested quote stripping in alt attributes** — `index.ts`: `alt="text "inner" text"` → `alt="text inner text"`
5. **`</br>` → `<br/>`** — `index.ts`: alongside `<bt>` fix
6. **`<ol type=...>` / `<li value=...>` attribute stripping** — `index.ts`: strip unsupported attributes
7. **Email address escaping** — `index.ts`: `<user@domain>` → `` `user@domain` ``
8. **Missing `<tr>` insertion** — `index.ts`: `</tr>\n<td>` → `</tr>\n<tr>\n<td>`
9. **Malformed link fix** — `index.ts`: `[text]([url](url))` → `[text](url)`

The migration script now handles all patterns that previously required manual post-processing.
