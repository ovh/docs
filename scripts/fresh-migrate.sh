#!/bin/bash
# Fresh migration of ALL guides from base/ → docs/
#
# - Migrates all guides from base/pages/ using the existing migration pipeline
# - Preserves docs-only files (overview, key-concepts, getting-started, renamed guides)
# - Regenerates locale fallbacks (EN→FR) for missing locale files
# - Updates sidebar i18n keys
#
# Usage:
#   bash scripts/fresh-migrate.sh              # Full migration
#   bash scripts/fresh-migrate.sh --dry-run    # Preview without writing

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT_DIR"

DRYRUN=""
if [ "${1:-}" = "--dry-run" ]; then
  DRYRUN="--dry-run"
  echo "*** DRY RUN MODE ***"
  echo ""
fi

# ============================================================
# Step 1: List all base/ guides
# ============================================================
echo "=== Step 1: Discovering base/ guides ==="
find base/pages -name 'guide.fr-fr.md' -exec dirname {} \; \
  | sed 's|base/pages/||' \
  | sort > /tmp/all-base-guides.txt

TOTAL=$(wc -l < /tmp/all-base-guides.txt)
echo "  Found $TOTAL guides in base/"
echo ""

# ============================================================
# Step 2: Run migration (overwrites existing, creates new)
# ============================================================
echo "=== Step 2: Running migration pipeline ==="
npx tsx scripts/migrate/index.ts $DRYRUN --guides-file /tmp/all-base-guides.txt
echo ""

if [ -n "$DRYRUN" ]; then
  echo "Dry run complete. No files written."
  exit 0
fi

# ============================================================
# Step 3: Regenerate locale fallbacks
# ============================================================
echo "=== Step 3: Creating locale fallbacks ==="
python3 << 'PYEOF'
import re, os, shutil

LOCALES = ['en', 'de', 'es', 'it', 'pl', 'pt']
SIDEBAR_PATH = 'config/sidebar/index.md'

# Extract all guide paths from sidebar
with open(SIDEBAR_PATH) as f:
    content = f.read()

sidebar_guides = set()
for m in re.finditer(r'\+ \[[^\]]+\]\(([^)]+)\)', content):
    ref = m.group(1)
    if '/' in ref and not ref.startswith('products/'):
        sidebar_guides.add(ref)

print(f"  {len(sidebar_guides)} guides in sidebar")

total_fallbacks = 0
for locale in LOCALES:
    created = 0
    for guide in sorted(sidebar_guides):
        target = f'docs/{locale}/guides/{guide}.mdx'
        if os.path.exists(target):
            continue

        # Try EN first, then FR
        for fallback_locale in ['en', 'fr']:
            source = f'docs/{fallback_locale}/guides/{guide}.mdx'
            if os.path.exists(source):
                os.makedirs(os.path.dirname(target), exist_ok=True)
                shutil.copy2(source, target)
                created += 1
                break

    if created > 0:
        print(f"  {locale}: {created} fallbacks created")
        total_fallbacks += created

print(f"  Total: {total_fallbacks} fallback files created")
PYEOF
echo ""

# ============================================================
# Step 4: Update sidebar i18n
# ============================================================
echo "=== Step 4: Updating sidebar ==="
pnpm sidebar:sync-i18n 2>/dev/null || true
echo ""

# ============================================================
# Step 5: Validate
# ============================================================
echo "=== Step 5: Validation ==="
pnpm sidebar:validate 2>&1 | tail -3
echo ""

# ============================================================
# Step 6: Migration report
# ============================================================
echo "=== Migration Report ==="
for locale in fr en de es it pl pt; do
  count=$(find "docs/$locale/guides" -name '*.mdx' 2>/dev/null | wc -l)
  echo "  $locale: $count guides"
done
echo ""
echo "Done."
