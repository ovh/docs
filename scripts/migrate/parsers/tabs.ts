/**
 * Tabs parser: converts OVH [!tabs] blockquotes to Rspress <Tabs>/<Tab>.
 *
 * Input:
 *   > [!tabs]
 *   > Tab Title 1
 *   >> Content for tab 1
 *   >> More content
 *   > Tab Title 2
 *   >> Content for tab 2
 *
 * Output (MDX):
 *   <Tabs>
 *     <Tab label="Tab Title 1">
 *       Content for tab 1
 *       More content
 *     </Tab>
 *     <Tab label="Tab Title 2">
 *       Content for tab 2
 *     </Tab>
 *   </Tabs>
 */

interface TabData {
  label: string;
  content: string[];
}

export interface TabsBlock {
  startLine: number;
  endLine: number;
  tabs: TabData[];
}

export function findTabsBlocks(content: string): TabsBlock[] {
  const lines = content.split('\n');
  const blocks: TabsBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.match(/^>\s*\[!tabs\]\s*$/)) {
      const startLine = i;
      const tabs: TabData[] = [];
      let currentTab: TabData | null = null;
      i++;

      while (i < lines.length) {
        const currentLine = lines[i];

        // Tab content line (>> prefix = nested blockquote)
        if (currentLine.match(/^>>\s?/) || currentLine.match(/^> >/)) {
          if (currentTab) {
            const stripped = currentLine
              .replace(/^>>\s?/, '')
              .replace(/^> >\s?/, '');
            currentTab.content.push(stripped);
          }
          i++;
        }
        // Tab title line (single > prefix, not >>)
        else if (currentLine.match(/^>\s+\S/) && !currentLine.match(/^>>/)) {
          const title = currentLine
            .replace(/^>\s+/, '')
            .replace(/^\*\*(.+)\*\*$/, '$1')
            .replace(/<[^>]+>/g, '') // Strip HTML tags (e.g. <a id="...">) from labels
            .trim();
          if (title && !title.startsWith('[!')) {
            currentTab = { label: title, content: [] };
            tabs.push(currentTab);
          }
          i++;
        }
        // Empty blockquote line
        else if (currentLine.match(/^>\s*$/)) {
          if (currentTab) {
            currentTab.content.push('');
          }
          i++;
        }
        // End of blockquote
        else {
          break;
        }
      }

      // Trim trailing empty lines from each tab's content
      for (const tab of tabs) {
        while (
          tab.content.length > 0 &&
          tab.content[tab.content.length - 1].trim() === ''
        ) {
          tab.content.pop();
        }
        while (tab.content.length > 0 && tab.content[0].trim() === '') {
          tab.content.shift();
        }
      }

      if (tabs.length > 0) {
        blocks.push({ startLine, endLine: i, tabs });
      }
    } else {
      i++;
    }
  }

  return blocks;
}

export function convertTabs(content: string): {
  content: string;
  hasTabs: boolean;
} {
  const blocks = findTabsBlocks(content);
  if (blocks.length === 0) {
    return { content, hasTabs: false };
  }

  const lines = content.split('\n');
  const result: string[] = [];
  let lastEnd = 0;

  for (const block of blocks) {
    // Add lines before this block
    result.push(...lines.slice(lastEnd, block.startLine));

    // Generate MDX tabs (Rspress uses <Tab> instead of <TabItem>)
    result.push('<Tabs>');
    for (const tab of block.tabs) {
      const escapedLabel = tab.label.replace(/"/g, '&quot;');
      result.push(`  <Tab label="${escapedLabel}">`);
      for (const line of tab.content) {
        result.push(`    ${line}`);
      }
      result.push('  </Tab>');
    }
    result.push('</Tabs>');
    result.push('');

    lastEnd = block.endLine;
  }

  // Add remaining lines
  result.push(...lines.slice(lastEnd));

  return { content: result.join('\n'), hasTabs: true };
}
