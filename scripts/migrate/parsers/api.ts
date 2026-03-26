/**
 * API parser: converts OVH [!api] blockquotes to <Api> components.
 *
 * Input:
 *   > [!api]
 *   >
 *   > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
 *   >
 *
 * Output (MDX):
 *   <Api version="v1" section="/ipLoadbalancing" method="POST" route={"/ipLoadbalancing/\{serviceName\}/tcp/route"} />
 */

interface ApiBlockData {
  version: string;
  basePath: string;
  method: string;
  endpoint: string;
}

interface ApiBlock {
  startLine: number;
  endLine: number;
  apis: ApiBlockData[];
}

export function findApiBlocks(content: string): ApiBlock[] {
  const lines = content.split('\n');
  const blocks: ApiBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.match(/^>\s*\[!api\]\s*$/)) {
      const startLine = i;
      const apis: ApiBlockData[] = [];
      i++;

      while (i < lines.length) {
        const currentLine = lines[i];

        if (currentLine.match(/^>\s*$/) || currentLine.match(/^>\s/)) {
          const stripped = currentLine.replace(/^>\s?/, '').trim();

          // Parse @api {version} /basePath METHOD /full/endpoint
          const apiMatch = stripped.match(
            /^@api\s+\{(\w+)\}\s+(\/\S+)\s+(GET|POST|PUT|DELETE|PATCH)\s+(\/\S+)/,
          );
          if (apiMatch) {
            apis.push({
              version: apiMatch[1],
              basePath: apiMatch[2],
              method: apiMatch[3],
              endpoint: apiMatch[4],
            });
          }
          i++;
        } else {
          break;
        }
      }

      if (apis.length > 0) {
        blocks.push({ startLine, endLine: i, apis });
      }
    } else {
      i++;
    }
  }

  return blocks;
}

export function convertApi(content: string): {
  content: string;
  hasApi: boolean;
} {
  const blocks = findApiBlocks(content);
  if (blocks.length === 0) {
    return { content, hasApi: false };
  }

  const lines = content.split('\n');
  const result: string[] = [];
  let lastEnd = 0;

  for (const block of blocks) {
    result.push(...lines.slice(lastEnd, block.startLine));

    for (const api of block.apis) {
      // Escape curly braces in route for JSX (backslash-escape inside string expression)
      const escapedRoute = api.endpoint
        .replace(/\{/g, '\\{')
        .replace(/\}/g, '\\}');
      result.push(
        `<Api version="${api.version}" section="${api.basePath}" method="${api.method}" route={"${escapedRoute}"} />`,
      );
    }
    result.push('');

    lastEnd = block.endLine;
  }

  result.push(...lines.slice(lastEnd));

  return { content: result.join('\n'), hasApi: true };
}
