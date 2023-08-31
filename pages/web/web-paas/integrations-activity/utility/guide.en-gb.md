---
title: Utility routines
slug: utility
section: Activity
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

## Route access

```javascript
/**
 * Returns just those routes that point to a valid upstream.
 *
 * This method is similar to routes(), but filters out redirect routes that are rarely
 * useful for app configuration. If desired it can also filter to just those routes
 * whose upstream is a given application name. To retrieve routes that point to the
 * current application where the code is being run, use:
 *
 * routes = getUpstreamRoutes(applicationName);
 *
 * @param {string} [appName]
 *   The name of the upstream app on which to filter, if any.
 * @return {object}
 *   An object map of route definitions. The generated URLs of the routes are added as a "url" key.
 */
function getUpstreamRoutes(appName) {
  return Object.entries(activity.payload.deployment.routes).reduce(
    (upstreams, [url, route]) =>
      route.type === "upstream" &&
      (!appName || appName === route.upstream.split(":")[0])
        ? {
            ...upstreams,
            [url]: {
              ...route,
              url,
            },
          }
        : upstreams,
    {}
  );
}
```

```javascript
/**
 * Returns the primary route.
 *
 * The primary route is the one marked primary in `{{< vendor/configfile "routes" >}}`, or else
 * the first non-redirect route in that file if none are marked.
 *
 * @return {object}
 *   The route definition. The generated URL of the route is added as a "url" key.
 */
function getPrimaryRoute() {
  return Object.entries(activity.payload.deployment.routes).reduce(
    (primary, [url, route]) =>
      route.primary
        ? {
            ...route,
            url,
          }
        : primary,
    {}
  );
}
```

```javascript
/**
 * Returns the route definition that has the specified id.
 *
 * Note: If no route ID was specified in {{< vendor/configfile "routes" >}} then it will not be possible
 * to look up a route by ID.
 *
 * @param {string} id
 *   The ID of the route to load.
 * @return {object}
 *   The route definition. The generated URL of the route is added as a "url" key.
 * @throws {Error}
 *   If there is no route by that ID, an exception is thrown.
 */
function getRoute(id) {
  const found = Object.entries(activity.payload.deployment.routes).reduce(
    (foundRoute, [url, route]) =>
      route.id === id
        ? {
            ...route,
            url,
          }
        : foundRoute,
    null
  );

  if (found === null) {
    throw new Error(`No such route id found: ${id}`);
  }

  return found;
}
```
