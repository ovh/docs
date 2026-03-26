#!/bin/bash
# Migration des guides restants de base/ vers docs/
# Usage: bash scripts/migrate-remaining.sh [--dry-run]
#
# Uses --guides-file to process all 195 guides in a single Node.js process.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GUIDES_FILE="$SCRIPT_DIR/migrate-remaining-guides.txt"

DRYRUN=""
if [ "${1:-}" = "--dry-run" ]; then
  DRYRUN="--dry-run"
fi

echo "=== Migrating remaining guides from base/ to docs/ ==="
echo "  Guides file: $GUIDES_FILE"
echo "  Guide count: $(grep -c '^[^#]' "$GUIDES_FILE" | tr -d ' ')"
echo ""

npx tsx scripts/migrate/index.ts $DRYRUN --guides-file "$GUIDES_FILE"
