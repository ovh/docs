/**
 * Thumbnail parser: handles {.thumbnail} on images for MDX files.
 *
 * In .md files, the remark plugin handles this.
 * In .mdx files, curly braces are interpreted as JSX, so we need to
 * replace ![alt](src){.thumbnail} with <img className="thumbnail" alt="alt" src="src" />
 *
 * Also handles extended attributes like {.thumbnail width="400"}
 */

export function convertThumbnailsForMdx(content: string): string {
  // Replace ![alt](src){.thumbnail ...attrs} with HTML img tag
  // Handles: {.thumbnail}, {.thumbnail width="400"}, etc.
  return content.replace(
    /!\[([^\]]*)\]\(([^)]+)\)\{\.thumbnail([^}]*)\}/g,
    (_match, alt, src, extraAttrs) => {
      let attrs = `className="thumbnail" alt="${alt}" src="${src}" loading="lazy"`;

      // Parse additional attributes like width="400"
      const widthMatch = extraAttrs.match(/width="?(\d+)"?/);
      if (widthMatch) {
        attrs += ` style={{ maxWidth: '${widthMatch[1]}px' }}`;
      }

      return `<img ${attrs} />`;
    },
  );
}
