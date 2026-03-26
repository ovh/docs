#!/usr/bin/env python3
"""
Post-migration dead links & images verification.

Scans all MDX files in docs/ for:
1. Broken internal links (/guides/... pointing to non-existent files)
2. Missing images (/images/... not found in docs/public/)
3. Unresolved /links/ shortcodes (not in config/links.ts)

Usage:
    python3 scripts/verify-migration.py
    python3 scripts/verify-migration.py --locale fr
"""

import os
import re
import sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS_DIR = os.path.join(ROOT, 'docs')
PUBLIC_DIR = os.path.join(DOCS_DIR, 'public')
LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt']

# Parse args
locale_filter = None
if '--locale' in sys.argv:
    idx = sys.argv.index('--locale')
    if idx + 1 < len(sys.argv):
        locale_filter = sys.argv[idx + 1]


def find_mdx_files(locale):
    """Find all MDX files for a locale."""
    base = os.path.join(DOCS_DIR, locale, 'guides')
    files = []
    for root, _, names in os.walk(base):
        for name in names:
            if name.endswith('.mdx'):
                files.append(os.path.join(root, name))
    return files


def scan_file(filepath, locale):
    """Scan a single MDX file for dead links and missing images."""
    with open(filepath) as f:
        content = f.read()

    rel_path = os.path.relpath(filepath, DOCS_DIR)
    issues = []

    # Track code fences to skip them
    in_code = False
    for lineno, line in enumerate(content.split('\n'), 1):
        stripped = line.strip()
        if stripped.startswith('```'):
            in_code = not in_code
            continue
        if in_code:
            continue

        # Internal links: [text](/guides/...)
        for m in re.finditer(r'\]\(/guides/([^)#]+)', line):
            target = m.group(1).rstrip('/')
            mdx = os.path.join(DOCS_DIR, locale, 'guides', target + '.mdx')
            md = os.path.join(DOCS_DIR, locale, 'guides', target + '.md')
            idx = os.path.join(DOCS_DIR, locale, 'guides', target, 'index.mdx')
            if not os.path.exists(mdx) and not os.path.exists(md) and not os.path.exists(idx):
                issues.append(('dead_link', f'/guides/{target}', rel_path, lineno))

        # Relative links: [text](./slug)
        for m in re.finditer(r'\]\(\./([^)#]+)', line):
            slug = m.group(1).rstrip('/')
            target = os.path.join(os.path.dirname(filepath), slug + '.mdx')
            if not os.path.exists(target):
                issues.append(('dead_link', f'./{slug}', rel_path, lineno))

        # Images: /images/... in src="" or markdown
        for m in re.finditer(r'(?:src="|!\[[^\]]*\]\()(/images/[^")\s]+)', line):
            img_path = m.group(1)
            full = os.path.join(PUBLIC_DIR, img_path.lstrip('/'))
            if not os.path.exists(full):
                issues.append(('missing_image', img_path, rel_path, lineno))

        # Unresolved /links/
        for m in re.finditer(r'\]\(/links/([^)]+)\)', line):
            issues.append(('unresolved_link', f'/links/{m.group(1)}', rel_path, lineno))

    return issues


def main():
    locales = [locale_filter] if locale_filter else LOCALES

    all_dead_links = defaultdict(list)  # target → [(file, line)]
    all_missing_images = defaultdict(list)
    all_unresolved = defaultdict(list)

    total_files = 0
    for locale in locales:
        files = find_mdx_files(locale)
        total_files += len(files)
        for f in files:
            issues = scan_file(f, locale)
            for kind, target, rel_path, lineno in issues:
                if kind == 'dead_link':
                    all_dead_links[target].append((rel_path, lineno))
                elif kind == 'missing_image':
                    all_missing_images[target].append((rel_path, lineno))
                elif kind == 'unresolved_link':
                    all_unresolved[target].append((rel_path, lineno))

    # Report
    print('=' * 70)
    print(f'  POST-MIGRATION VERIFICATION REPORT')
    print(f'  Scanned {total_files} MDX files across {len(locales)} locale(s)')
    print('=' * 70)

    dead_files = set()
    for refs in all_dead_links.values():
        for f, _ in refs:
            dead_files.add(f)
    img_files = set()
    for refs in all_missing_images.values():
        for f, _ in refs:
            img_files.add(f)
    link_files = set()
    for refs in all_unresolved.values():
        for f, _ in refs:
            link_files.add(f)

    total_dead = sum(len(v) for v in all_dead_links.values())
    total_img = sum(len(v) for v in all_missing_images.values())
    total_links = sum(len(v) for v in all_unresolved.values())

    print(f'\n  Broken internal links: {total_dead} occurrences ({len(all_dead_links)} unique targets, {len(dead_files)} files)')
    print(f'  Missing images:        {total_img} occurrences ({len(all_missing_images)} unique targets, {len(img_files)} files)')
    print(f'  Unresolved /links/:    {total_links} occurrences ({len(all_unresolved)} unique targets, {len(link_files)} files)')

    if all_dead_links:
        print(f'\n--- Top broken internal links ---')
        for target, refs in sorted(all_dead_links.items(), key=lambda x: -len(x[1]))[:20]:
            print(f'  {target} ({len(refs)} refs)')

    if all_missing_images:
        print(f'\n--- Top missing images ---')
        for target, refs in sorted(all_missing_images.items(), key=lambda x: -len(x[1]))[:20]:
            print(f'  {target} ({len(refs)} refs)')

    if all_unresolved:
        print(f'\n--- Top unresolved /links/ ---')
        for target, refs in sorted(all_unresolved.items(), key=lambda x: -len(x[1]))[:20]:
            print(f'  {target} ({len(refs)} refs)')

    total_issues = total_dead + total_img + total_links
    print(f'\n{"=" * 70}')
    if total_issues == 0:
        print('  ALL CLEAR - No dead links or missing images found.')
    else:
        print(f'  TOTAL: {total_issues} issues found.')
    print('=' * 70)

    return 1 if total_dead > 0 else 0


if __name__ == '__main__':
    sys.exit(main())
