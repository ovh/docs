import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'];

interface Commit {
  hash: string;
  type: string;
  scope: string | null;
  subject: string;
  body: string;
}

function git(cmd: string): string {
  return execSync(`git ${cmd}`, { encoding: 'utf-8' }).trim();
}

function getTags(): string[] {
  try {
    const tags = git('tag -l "v*" --sort=-version:refname');
    return tags ? tags.split('\n') : [];
  } catch {
    return [];
  }
}

function getCommits(from: string | null, to: string): Commit[] {
  const range = from ? `${from}..${to}` : to;
  let log: string;
  try {
    log = git(`log ${range} --pretty=format:"%H|%s|%b%n---END---"`);
  } catch {
    return [];
  }

  const commits: Commit[] = [];
  const entries = log.split('---END---').filter(Boolean);

  for (const entry of entries) {
    const lines = entry.trim().split('\n');
    if (!lines[0]) continue;

    const firstLine = lines[0].replace(/^"|"$/g, '');
    const [hash, ...rest] = firstLine.split('|');
    const subject = rest[0] || '';
    const body = `${rest.slice(1).join('|')}\n${lines.slice(1).join('\n')}`;

    const match = subject.match(/^(\w+)(?:\(([^)]+)\))?!?:\s*(.+)$/);
    if (match) {
      commits.push({
        hash: hash.substring(0, 7),
        type: match[1],
        scope: match[2] || null,
        subject: match[3],
        body: body.trim(),
      });
    }
  }

  return commits;
}

function countDocsChanges(
  from: string | null,
  to: string,
): { count: number; locales: string[] } {
  const range = from ? `${from}..${to}` : to;
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

interface ChangelogSection {
  version: string;
  date: string;
  features: Commit[];
  fixes: Commit[];
  maintenance: Commit[];
  docsCount: number;
  docsLocales: string[];
}

function buildSection(
  version: string,
  from: string | null,
  to: string,
): ChangelogSection {
  const commits = getCommits(from, to);
  const docs = countDocsChanges(from, to);

  const features = commits.filter((c) => c.type === 'feat');
  const fixes = commits.filter((c) => c.type === 'fix');
  const maintenance = commits.filter((c) =>
    ['chore', 'ci', 'refactor', 'perf', 'style', 'test'].includes(c.type),
  );

  // Extract date from CalVer tag (vYYYY.MM.DD)
  const date = version.replace(/^v/, '').replace(/\.\d+$/, '');

  return {
    version: version.replace(/^v/, ''),
    date,
    features,
    fixes,
    maintenance,
    docsCount: docs.count,
    docsLocales: docs.locales,
  };
}

function formatSection(section: ChangelogSection): string {
  const lines: string[] = [`## ${section.version}`, ''];

  if (section.features.length > 0) {
    lines.push('### Features');
    for (const c of section.features) {
      const scope = c.scope ? `**${c.scope}:** ` : '';
      lines.push(`- ${scope}${c.subject}`);
    }
    lines.push('');
  }

  if (section.fixes.length > 0) {
    lines.push('### Fixes');
    for (const c of section.fixes) {
      const scope = c.scope ? `**${c.scope}:** ` : '';
      lines.push(`- ${scope}${c.subject}`);
    }
    lines.push('');
  }

  if (section.maintenance.length > 0) {
    lines.push('### Maintenance');
    for (const c of section.maintenance) {
      const scope = c.scope ? `**${c.scope}:** ` : '';
      lines.push(`- ${scope}${c.subject}`);
    }
    lines.push('');
  }

  if (section.docsCount > 0) {
    lines.push('### Documentation');
    const localeStr = section.docsLocales.join(', ');
    lines.push(`- ${section.docsCount} guides updated across ${localeStr}`);
    lines.push('');
  }

  return lines.join('\n');
}

export function generateChangelog(): string {
  const tags = getTags();

  if (tags.length === 0) {
    console.log(
      'No tags found. Run `pnpm release` to create the first release.',
    );
    return '';
  }

  const sections: string[] = [];

  // Latest tag to HEAD (unreleased changes)
  const headCommits = getCommits(tags[0], 'HEAD');
  if (headCommits.length > 0) {
    const section = buildSection('Unreleased', tags[0], 'HEAD');
    section.version = 'Unreleased';
    sections.push(formatSection(section));
  }

  // Between tags
  for (let i = 0; i < tags.length; i++) {
    const to = tags[i];
    const from = tags[i + 1] || null;
    const section = buildSection(to, from, to);
    sections.push(formatSection(section));
  }

  const content = `# Changelog\n\n${sections.join('\n---\n\n')}\n`;
  return content;
}

export function generateSinceTag(tag: string): string {
  const section = buildSection(tag, tag, 'HEAD');
  return formatSection(section);
}

// CLI entry point
if (process.argv[1]?.endsWith('generate-changelog.ts')) {
  const changelog = generateChangelog();
  if (changelog) {
    const outputPath = resolve(process.cwd(), 'CHANGELOG.md');
    writeFileSync(outputPath, changelog, 'utf-8');
    console.log(`Changelog written to ${outputPath}`);
  }
}
