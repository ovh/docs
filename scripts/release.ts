import { execSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

function git(cmd: string): string {
  return execSync(`git ${cmd}`, { encoding: 'utf-8' }).trim();
}

function getCalVer(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const base = `${yyyy}.${mm}.${dd}`;

  // Check if a tag already exists for today
  let suffix = 0;
  let version = base;
  try {
    const existingTags = git(`tag -l "v${base}*"`).split('\n').filter(Boolean);
    if (existingTags.length > 0) {
      // Find the highest suffix
      for (const tag of existingTags) {
        const tagVersion = tag.replace(/^v/, '');
        if (tagVersion === base) {
          suffix = Math.max(suffix, 1);
        } else {
          const match = tagVersion.match(/^\d{4}\.\d{2}\.\d{2}\.(\d+)$/);
          if (match) {
            suffix = Math.max(suffix, Number.parseInt(match[1], 10) + 1);
          }
        }
      }
      version = `${base}.${suffix}`;
    }
  } catch {
    // No tags exist yet
  }

  return version;
}

interface Commit {
  hash: string;
  type: string;
  scope: string | null;
  subject: string;
}

function getCommitsSinceTag(tag: string | null): Commit[] {
  const range = tag ? `${tag}..HEAD` : 'HEAD';
  let log: string;
  try {
    log = git(`log ${range} --pretty=format:"%H|%s"`);
  } catch {
    return [];
  }

  const commits: Commit[] = [];
  for (const line of log.split('\n').filter(Boolean)) {
    const clean = line.replace(/^"|"$/g, '');
    const [hash, ...rest] = clean.split('|');
    const subject = rest.join('|');
    const match = subject.match(/^(\w+)(?:\(([^)]+)\))?!?:\s*(.+)$/);
    if (match) {
      commits.push({
        hash: hash.substring(0, 7),
        type: match[1],
        scope: match[2] || null,
        subject: match[3],
      });
    }
  }
  return commits;
}

function getLastTag(): string | null {
  try {
    const tags = git('tag -l "v*" --sort=-version:refname');
    return tags ? tags.split('\n')[0] : null;
  } catch {
    return null;
  }
}

function countDocsChanges(from: string | null): {
  count: number;
  locales: string[];
} {
  const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'];
  const range = from ? `${from}..HEAD` : 'HEAD';
  let files: string[];
  try {
    const output = git(`diff --name-only ${range} -- docs/`);
    files = output ? output.split('\n') : [];
  } catch {
    return { count: 0, locales: [] };
  }

  const mdFiles = files.filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
  const localesFound = new Set<string>();
  for (const f of mdFiles) {
    for (const locale of LOCALES) {
      if (f.startsWith(`docs/${locale}/`)) {
        localesFound.add(locale);
        break;
      }
    }
  }
  return { count: mdFiles.length, locales: [...localesFound].sort() };
}

function formatReleaseSection(
  version: string,
  commits: Commit[],
  docs: { count: number; locales: string[] },
): string {
  const features = commits.filter((c) => c.type === 'feat');
  const fixes = commits.filter((c) => c.type === 'fix');
  const maintenance = commits.filter((c) =>
    ['chore', 'ci', 'refactor', 'perf', 'style', 'test'].includes(c.type),
  );

  const lines: string[] = [`## ${version}`, ''];

  if (features.length > 0) {
    lines.push('### Features');
    for (const c of features) {
      const scope = c.scope ? `**${c.scope}:** ` : '';
      lines.push(`- ${scope}${c.subject}`);
    }
    lines.push('');
  }

  if (fixes.length > 0) {
    lines.push('### Fixes');
    for (const c of fixes) {
      const scope = c.scope ? `**${c.scope}:** ` : '';
      lines.push(`- ${scope}${c.subject}`);
    }
    lines.push('');
  }

  if (maintenance.length > 0) {
    lines.push('### Maintenance');
    for (const c of maintenance) {
      const scope = c.scope ? `**${c.scope}:** ` : '';
      lines.push(`- ${scope}${c.subject}`);
    }
    lines.push('');
  }

  if (docs.count > 0) {
    lines.push('### Documentation');
    const localeStr = docs.locales.join(', ');
    lines.push(`- ${docs.count} guides updated across ${localeStr}`);
    lines.push('');
  }

  return lines.join('\n');
}

function main() {
  const version = getCalVer();
  const tag = `v${version}`;
  const lastTag = getLastTag();

  console.log(`Preparing release ${tag}...`);
  if (lastTag) {
    console.log(`Previous release: ${lastTag}`);
  } else {
    console.log('No previous release found. This will be the first release.');
  }

  // Get commits and docs changes since last tag
  const commits = getCommitsSinceTag(lastTag);
  const docs = countDocsChanges(lastTag);

  if (commits.length === 0 && docs.count === 0) {
    console.log('No changes since last release. Skipping.');
    process.exit(0);
  }

  console.log(`Found ${commits.length} commits and ${docs.count} doc changes.`);

  // Generate release section
  const section = formatReleaseSection(version, commits, docs);

  // Update CHANGELOG.md
  const changelogPath = resolve(process.cwd(), 'CHANGELOG.md');
  let existing = '';
  if (existsSync(changelogPath)) {
    existing = readFileSync(changelogPath, 'utf-8');
  }

  let newChangelog: string;
  if (existing.startsWith('# Changelog')) {
    // Insert after the header
    const headerEnd = existing.indexOf('\n\n') + 2;
    newChangelog = `${existing.substring(0, headerEnd)}${section}\n---\n\n${existing.substring(headerEnd)}`;
  } else {
    newChangelog = `# Changelog\n\n${section}\n`;
  }

  writeFileSync(changelogPath, newChangelog, 'utf-8');
  console.log('Updated CHANGELOG.md');

  // Commit changelog
  git('add CHANGELOG.md');
  git(`commit -m "chore(scripts): release ${version}"`);
  console.log('Committed changelog update.');

  // Create tag
  git(`tag -a ${tag} -m "Release ${version}"`);
  console.log(`Created tag ${tag}`);

  console.log(`\nRelease ${version} complete!`);
  console.log(`Run 'git push && git push --tags' to publish.`);
}

main();
