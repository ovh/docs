---
title: Serve static sites
slug: static
section: Web
---

**Last updated 31st August 2023**



## Objective  

Static site generators are a popular way to create fast sites.
Because there's no need to wait for responses from servers, the sites may load faster.

As an example, this documentation is built using a tool called Hugo and served by {{< vendor/name >}} as a static site.
You can see the [entire repository on GitHub](https://github.com/platformsh/platformsh-docs),
including its [app configuration](https://github.com/platformsh/platformsh-docs/blob/main/docs/.platform.app.yaml).

To learn how to serve your static site using {{< vendor/name >}},
you can start with the required [minimal app configuration](#minimal-app-configuration) and build on it,
or jump straight to an [example of a complete configuration](#complete-example-configuration).

## Minimal app configuration

To successfully serve a static site using {{< vendor/name >}},
you need to set up a minimal app configuration similar to the following:

```yaml {configFile="app"}
app:
  # The type of the application to build.
  type: "nodejs:18"

  # The web key configures the web server running in front of your app.
  web:
    locations:
      /: 
        # Static site generators usually output built static files to a specific directory.
        # Define this directory (must be an actual directory inside the root directory of your app)
        # as the root for your static site.
        root: "public"
        # Files to consider when serving a request for a directory.
        index:
          - index.html
```

See more information on the required minimal settings:
- [Top-level properties](../app-reference.md#top-level-properties).

- [`web` property](../app-reference.md#web).

- [`locations` properties](../app-reference.md#locations).


## Add more features

### Allow static files but not dynamic files on PHP containers

If you have a PHP container,
you might want to enable client-side scripts but disable server-side scripts.

To enable static files that don't match any rule while disabling server-side scripts on a PHP container,
use the following configuration:

```yaml {configFile="app"}
web:
    locations:
        '/':
            ...
            scripts: false
            allow: true
```

See more information on [`locations` properties](../app-reference.md#locations).

### Create cache rules

You can create sensible cache rules to improve performance.
For example, if you publish new content regularly without updating images or site files much,
you might want to cache text files for a day but all image files for longer.

To do so, use a configuration similar to the following:

```yaml {configFile="app"}
web:
    locations:
        '/':
            ...
            expires: 24h
            rules:
                \.(css|js|gif|jpe?g|png|svg)$:
                    expires: 4w
```

### Conserve the server

Because your site is completely static, it doesn't need the server to be running.
To set a background process that blocks the server and conserves resources,
use the following configuration:

```yaml {configFile="app"}
web:
    commands:
        start: sleep infinity
```

You can also use this place to start small programs,
such as a [script to handle 404 errors](https://community.platform.sh/t/custom-404-page-for-a-static-website/637).

## Complete example configuration

```yaml {configFile="app"}
name: app

type: 'python:3.11'

web:
    locations:
        '/':
            # The public directory of the application relative to its root
            root: 'public'
            # The files to look for when serving a directory
            index: 
              - 'index.html'
            # Disable server-side scripts
            scripts: false
            allow: true
            # Set caching policy
            expires: 24h
            rules:
                \.(css|js|gif|jpe?g|png|svg)$:
                    expires: 4w

    commands:
        # Run a no-op process that uses no CPU resources since this is a static site
        start: sleep infinity
```
