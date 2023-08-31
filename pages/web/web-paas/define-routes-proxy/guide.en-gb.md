---
title: Proxy routes
slug: define-routes-proxy
section: Define-Routes
---

**Last updated 31st August 2023**


> [!primary]  
> 
> Only use this feature to address edge cases where you need to proxy to another, outside project.</br>
> **Do not use this for internal routing.**</br>
> To expose your app to the outside world, see [how to define routes](../define-routes/_index.md).
> 
> 
​
Sometimes you want your app to pass requests on to a different {{< vendor/name >}} project.
Basic redirects only work within the same project, so use proxy routes for routes elsewhere.​

You can define an external proxy on your {{< vendor/name >}} project by defining a route like the following:

```yaml {configFile="routes"}
https://{default}/foo:
    type: proxy
    to: https://www.example.com
```

This route passes requests for `https://{default}/foo/index.html` to `https://www.example.com/foo/index.html`.
​
You can also define a proxy route to an URL composed of an IP address and a port:

```yaml {configFile="routes"}
https://{default}/foo:
    type: proxy
    to: https://192.0.2.0:8000
```

## URL paths

In the basic example above, the route preserves the URL path, `/foo`, in the request.

If you want to proxy a route to `https://www.example.com` without the URL path `/foo`,
add a trailing slash `/` to the `to` definition.

```yaml {configFile="routes"}
https://{default}/foo:
    type: proxy
    to: https://www.example.com/
```

The trailing slash makes the proxy route interpret the location as having a different path.
So requests for `https://{default}/foo/index.html` are forwarded to `https://www.example.com/index.html`.

To override the URL path entirely, define a route that contains its own path.
For example:

```yaml {configFile="routes"}
https://{default}/foo:
    type: proxy
    to: https://www.example.com/bar
```

This route passes requests for `https://{default}/foo/index.html` to `https://www.example.com/bar/index.html`.

## Multiple apps with the same base URL

You can use proxy routes to map a single domain to multiple {{< vendor/name >}} projects with their own subdomain/domain names.
You might have a need to access multiple projects, each hosting specific applications for different languages.
You want to serve them all at the same base URL with different paths
(`https://example.com/en`, `https://example.com/fr`, and so on).

Because domains can't be reused at {{< vendor/name >}}, you can't just set the same domain for all projects.
Use proxy routes so a single project can access different projects using the same base URL.

In the following example, a single project specifies proxy routes to three apps with the same `default` base URL.
Each app handles a different language.

```yaml {configFile="routes"}
https://{default}/en:
    type: proxy
    to: https://en.example.com/

https://{default}/jp:
    type: proxy
    to: https://jp.example.com/

https://{default}/pt:
    type: proxy
    to: https://pt.example.com/
```

The apps behind the proxy need to ensure links to assets are shown to the target domain.
For example, by changing `https://en.example.com/style.css` to `https://example.com/en/style.css`.

The following diagram shows the example project forwarding specific requests to the correct app.

``` mermaid
sequenceDiagram
    participant User
    participant Project as Proxy project
    participant En as En project
    participant Jp as Jp project
    participant Pt as Pt project
    User->>+Project: example.com/en/index.html
    Project->>+En: en.example.com/index.html
    Note over En: Changes asset links
    En-->>-Project: index.html
    Project-->>-User: index.html
    User->>+Project: example.com/jp/index.html
    Project->>+Jp: jp.example.com/index.html
    Note over Jp: Changes asset links
    Jp-->>-Project: index.html
    Project-->>-User: index.html
    User->>+Project: example.com/pt/index.html
    Project->>+Pt: pt.example.com/index.html
    Note over Pt: Changes asset links
    Pt-->>-Project: index.html
    Project-->>-User: index.html
```

### Large projects

This architecture makes the router of a single project into the central element of your app.
This setup may make scaling more difficult as the router scales with the size of that project.
The router can become a bottleneck for all external sites and acts as a single point of failure.
​
For larger projects, you should handle multiple websites with the same base URL via a [CDN](../domains/cdn/_index.md).
