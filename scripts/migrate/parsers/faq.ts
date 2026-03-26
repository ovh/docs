/**
 * FAQ parser: converts OVH [!faq] blockquotes to :::details collapsible sections.
 *
 * Input:
 *   > [!faq]
 *   >
 *   > Question text?
 *   >> Answer content
 *   >> More answer
 *   >
 *   > Another question?
 *   >> Another answer
 *
 * Output (Rspress :::details):
 *   :::details{title="Question text?"}
 *   Answer content
 *   More answer
 *   :::
 *
 *   :::details{title="Another question?"}
 *   Another answer
 *   :::
 */

interface FAQItemData {
  question: string;
  answer: string[];
}

interface FAQBlock {
  startLine: number;
  endLine: number;
  items: FAQItemData[];
}

export function findFAQBlocks(content: string): FAQBlock[] {
  const lines = content.split('\n');
  const blocks: FAQBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.match(/^>\s*\[!faq\]\s*$/)) {
      const startLine = i;
      const items: FAQItemData[] = [];
      let currentItem: FAQItemData | null = null;
      i++;

      while (i < lines.length) {
        const currentLine = lines[i];

        // Answer content (>> prefix)
        if (currentLine.match(/^>>\s?/) || currentLine.match(/^> >\s?/)) {
          if (currentItem) {
            const stripped = currentLine
              .replace(/^>>\s?/, '')
              .replace(/^> >\s?/, '');
            currentItem.answer.push(stripped);
          }
          i++;
        }
        // Question line (single > prefix with content, not >>)
        else if (currentLine.match(/^>\s+\S/) && !currentLine.match(/^>>/)) {
          const questionText = currentLine
            .replace(/^>\s+/, '')
            .replace(/^\*\*(.+)\*\*$/, '$1')
            .trim();
          if (questionText && !questionText.startsWith('[!')) {
            currentItem = { question: questionText, answer: [] };
            items.push(currentItem);
          }
          i++;
        }
        // Empty blockquote line
        else if (currentLine.match(/^>\s*$/)) {
          // Could be spacing between Q&A pairs
          if (currentItem && currentItem.answer.length > 0) {
            currentItem.answer.push('');
          }
          i++;
        }
        // End of blockquote
        else {
          break;
        }
      }

      // Trim trailing empty lines from each answer
      for (const item of items) {
        while (
          item.answer.length > 0 &&
          item.answer[item.answer.length - 1].trim() === ''
        ) {
          item.answer.pop();
        }
        while (item.answer.length > 0 && item.answer[0].trim() === '') {
          item.answer.shift();
        }
      }

      if (items.length > 0) {
        blocks.push({ startLine, endLine: i, items });
      }
    } else {
      i++;
    }
  }

  return blocks;
}

export function convertFAQ(content: string): {
  content: string;
  hasFAQ: boolean;
} {
  const blocks = findFAQBlocks(content);
  if (blocks.length === 0) {
    return { content, hasFAQ: false };
  }

  const lines = content.split('\n');
  const result: string[] = [];
  let lastEnd = 0;

  for (const block of blocks) {
    result.push(...lines.slice(lastEnd, block.startLine));

    for (const item of block.items) {
      const escapedQ = item.question.replace(/"/g, '&quot;');
      result.push(`:::details{title="${escapedQ}"}`);
      for (const line of item.answer) {
        result.push(line);
      }
      result.push(':::');
      result.push('');
    }

    lastEnd = block.endLine;
  }

  result.push(...lines.slice(lastEnd));

  return { content: result.join('\n'), hasFAQ: true };
}
