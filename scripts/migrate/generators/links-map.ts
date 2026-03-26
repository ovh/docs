/**
 * Links map generator: builds and caches the /links/ lookup map.
 * This is a thin wrapper around the links-resolver parser
 * for use by the main orchestrator.
 */

import { buildLinksMap, type LinksMap } from '../parsers/links-resolver.js';

let cachedMap: LinksMap | null = null;

export function getLinksMap(linksDir: string): LinksMap {
  if (!cachedMap) {
    cachedMap = buildLinksMap(linksDir);
  }
  return cachedMap;
}
