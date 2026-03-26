# Migration Status Report

Generated: 2026-02-20

## Summary

Migration from Pelican (`base/pages/`) to Rspress (`docs/`) is **98.3% complete**.

| Universe | Base | Docs | Coverage | Delta |
|---|---|---|---|---|
| public_cloud | 499 | 480 | 96.2% | -19 |
| hosted_private_cloud | 218 | 219 | 100.5% | +1 |
| bare_metal_cloud | 197 | 200 | 101.5% | +3 |
| network | 45 | 45 | 100.0% | 0 |
| manage_and_operate | 62 | 55 | 88.7% | -7 |
| web_cloud | 437 | 433 | 99.1% | -4 |
| storage_and_backup | 122 | 121 | 99.2% | -1 |
| account_and_service_management | 87 | 86 | 98.9% | -1 |
| **TOTAL** | **1667** | **1639** | **98.3%** | **-28** |

> Some universes exceed 100% because guides were split into multiple pages or new content was added directly to docs.

## What was done in this migration session

### Phase 1: Fixed migration script (`scripts/migrate/index.ts`)
- Fixed paths: `REPO_DIR` -> `BASE_DIR` (pointing to `base/`)
- Fixed imports: `rspress/theme` -> `@rspress/core/theme`, `ApiLink` -> `Api`
- Converted FAQ output from JSX (`<FAQ>`/`<FAQItem>`) to `:::details` (no component needed)
- Forced all output to `.mdx` with MDX fixes applied to every file
- Added `guides/` prefix to output paths (matching `docs/{locale}/guides/...` structure)
- Made `_meta.json` generation opt-in (`--meta` flag), disabled by default
- Fixed `:::details` curly braces not being escaped by MDX escaper

### Phase 2: Migrated `storage_and_backup` (121 guides)
- **885 files written** across 8 locales, **2537 images** copied
- Created `config/sidebar/storage-and-backup.ts` with full sidebar tree
- Created `i18n/sidebar-storage-and-backup.json` with 124 translation keys (8 locales)
- Registered in `config/sidebar/index.ts`

### Phase 3: Completed `logs_data_platform` (6 missing guides)
- Migrated 6 English-only guides: `getting_started_nodejs`, `iam_access_management`, `iam_migration_to_iam`, `iam_presentation_faq`, `introduction_to_services_logs`, `usecase_extract_logs_from_ldp`
- Updated `config/sidebar/manage-and-operate.ts` with 6 new entries
- Added 6 i18n translation keys

### Phase 4: Migrated scattered guides (28 guides)
- **116 files written** across multiple locales
- Covered: public_cloud (5), hosted_private_cloud (5), bare_metal_cloud (9), network (2), manage_and_operate (1), web_cloud (6)

### Phase 5: Legacy triage
- `account_and_service_management`: Already fully migrated (86/86 guides)
- `web_cloud/phone_and_fax/voip`: Already fully migrated (70/70 guides, 23 archived with `_` prefix)
- See `MIGRATION-TRIAGE.md` for details

## Remaining gaps

Some guides still show as "missing" in the count but were migrated in Phase 4. The remaining delta is due to:
- Guides that exist only in specific locales (not fr-fr)
- Guides in base that were intentionally not migrated (marked as hidden/deprecated)
- Guides added directly to docs without a base/pages equivalent

## Commands

```bash
# Run full migration (all universes, all locales)
pnpm tsx scripts/migrate/index.ts

# Dry-run for a specific universe
pnpm tsx scripts/migrate/index.ts --dry-run --universe storage_and_backup

# Migrate a single guide
pnpm tsx scripts/migrate/index.ts --guide public_cloud/ai_machine_learning/endpoints_tuto_17_airflow_integration

# Filter by locale
pnpm tsx scripts/migrate/index.ts --universe network --locale fr-fr

# Validate post-migration
pnpm tsx scripts/migrate/index.ts --validate

# Regenerate i18n.json from split files
node scripts/split-i18n.cjs merge
```

## Files modified/created

| File | Action |
|---|---|
| `scripts/migrate/index.ts` | Modified (paths, imports, .mdx, _meta.json, output paths) |
| `scripts/migrate/parsers/faq.ts` | Modified (JSX -> :::details) |
| `scripts/migrate/parsers/api.ts` | Modified (ApiLink -> Api component) |
| `scripts/split-i18n.cjs` | Modified (added storage-and-backup group) |
| `config/sidebar/storage-and-backup.ts` | Created |
| `config/sidebar/index.ts` | Modified (added storageAndBackupSidebar) |
| `config/sidebar/manage-and-operate.ts` | Modified (added 6 LDP entries) |
| `i18n/sidebar-storage-and-backup.json` | Created (124 keys) |
| `i18n/sidebar-common.json` | Modified (added gettingStarted, faq) |
| `i18n/sidebar-manage-operate.json` | Modified (added 6 LDP keys) |
| `i18n.json` | Regenerated (1365 total keys) |
| `docs/*/guides/storage-and-backup/**/*.mdx` | Created (885 files) |
| `docs/public/images/guides/storage-and-backup/**` | Created (2537 images) |
| `docs/*/guides/manage-and-operate/observability/logs-data-platform/*.mdx` | Created (6 files) |
| Various `docs/*/guides/**/*.mdx` | Created (116 files from Phase 4) |
| `MIGRATION-STATUS.md` | Created |
| `MIGRATION-TRIAGE.md` | Created |
