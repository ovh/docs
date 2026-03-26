/**
 * Images parser: rewrites image paths from relative to absolute public/ paths.
 *
 * Transforms:
 *   ![alt](images/foo.png)
 *   -> ![alt](/images/{universe}/{product}/{guide}/foo.png)
 *
 * Images are shared across locales (one copy in docs/public/).
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

/**
 * Rewrite image paths in content and return list of images to copy.
 */
export function rewriteImagePaths(
  content: string,
  guidePath: string, // e.g. "account_and_service_management/account_information/ovhcloud-account-creation"
): { content: string; imagesToCopy: Array<{ from: string; to: string }> } {
  const imagesToCopy: Array<{ from: string; to: string }> = [];

  // Convert guide path underscores to hyphens for public/ path
  const publicPath = guidePath
    .split('/')
    .map((s) => s.replace(/_/g, '-'))
    .join('/');

  // Match image references: ![alt](images/foo.png) or ![alt](./images/foo.png)
  const newContent = content.replace(
    /!\[([^\]]*)\]\((?:\.\/)?images\/([^)]+)\)/g,
    (_match, alt, imageName) => {
      const targetPath = `/images/${publicPath}/${imageName}`;
      imagesToCopy.push({
        from: `images/${imageName}`,
        to: targetPath,
      });
      return `![${alt}](${targetPath})`;
    },
  );

  return { content: newContent, imagesToCopy };
}

/**
 * Copy images from source guide directory to docs/public/.
 */
export function copyImages(
  sourceDir: string,
  targetDir: string,
  imagesToCopy: Array<{ from: string; to: string }>,
): void {
  for (const img of imagesToCopy) {
    const srcPath = path.join(sourceDir, img.from);
    const destPath = path.join(targetDir, img.to);

    if (fs.existsSync(srcPath)) {
      const destDir = path.dirname(destPath);
      fs.mkdirSync(destDir, { recursive: true });

      // Only copy if not already exists (images shared across locales)
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}
