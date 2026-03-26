/**
 * Code blocks parser: converts Pelican-style code fences to standard format.
 *
 * Transforms:
 *   ```{.console} -> ```console  (preserved — used for command output)
 *   ```{.bash}    -> ```bash
 *   ```{.python}  -> ```python
 *   ```{.output}  -> ```console  (output blocks use console, not text)
 *   ```{.ssh}     -> ```console
 *   etc.
 */

export function convertCodeBlocks(content: string): string {
  // Convert ```{.language} and ``` {.language} to ```language
  content = content.replace(/^``` ?\{\.(\w+)\}/gm, '```$1');

  // Normalize language names not recognized by Shiki
  const langMap: Record<string, string> = {
    'shell-session': 'bash',
    Dockerfile: 'dockerfile',
    Powershell: 'powershell',
    Python: 'python',
    SQL: 'sql',
    ApacheConf: 'apache',
    apacheconf: 'apache',
    conf: 'ini',
    output: 'console',
    ssh: 'console',
    htaccess: 'apache',
    config: 'ini',
    ansible: 'yaml',
    haproxy: 'text',
    curl: 'bash',
    Curl: 'bash',
  };
  const langPattern = new RegExp(
    `^\`\`\`(${Object.keys(langMap).join('|')})$`,
    'gm',
  );
  content = content.replace(langPattern, (_, lang) => `\`\`\`${langMap[lang]}`);

  // Fix bash[...] trailing artifacts
  content = content.replace(/^```bash\[.*\]$/gm, '```bash');

  return content;
}
