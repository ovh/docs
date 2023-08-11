---
title: Utility routines
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

The following utility routines can help simplify common tasks in your activity scripts.  They are free to copy, modify, bend, fold, spindle, and mutilate as needed for your own scripts.  They also demonstrate some common patterns for working with the `activity` and `project` data structures.

## General utilities

```javascript
/**
 * Returns a key/value object containing all variables relevant for the activity.
 *
 * That includes project level variables, plus any variables visible for
 * the relevant environment for the activity, if any.
 *
 * Note that JSON-encoded values will show up as a string, and need to be
 * decoded with JSON.parse().
 */
function getEnvironmentVariables() {
  return activity.payload.deployment.variables.reduce(
    (vars, { name, value }) => ({
      ...vars,
      [name]: value,
    }),
    {}
  );
}
```


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
 * The primary route is the one marked primary in `routes.yaml`, or else
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
 * Note: If no route ID was specified in routes.yaml then it will not be possible
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
