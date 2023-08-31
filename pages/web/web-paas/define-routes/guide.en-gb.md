---
title: Define routes
slug: define-routes
section: Define-Routes
hidden: true
---

**Last updated 31st August 2023**



## Objective  

You might need to control how people access your web applications,
for example when you have [multiple apps](../create-apps/multi-app/_index.md) in one project.
Or you might just want to direct requests to specific places, such as removing the `www` at the start of all requests.

Control where external requests are directed by defining routes in a `{{< vendor/configfile "routes" >}}` file in your Git repository.
If you have a single route served by a single app, you don't need to include the file.
Your project then includes a [default route](#default-route-definition).

![Routes](images/routes-basic.png "0.5")

## Examples

These examples show how to define routes.

### Default route definition

If you don't include a file defining routes, a single default route is deployed.
If you have one app to direct traffic to and its name is `app`,
this is equivalent to the following:

```yaml {configFile="routes"}
"https://{default}/":
  type: upstream
  upstream: app:http
```

All traffic to your domain (say, `https://example.com`) is sent to your app.
This also includes redirecting requests from `http` to `https`.
It affects your [default domain](#default).

### Basic redirect definition

In a basic situation, you have one app to direct traffic to.
Say its name is `app`.
And say you want to redirect requests from `https://www.example.com` to `https://example.com`.

Define your routes like this:

```yaml {configFile="routes"}
"https://{default}/":
    type: upstream
    upstream: "app:http"
"https://www.{default}/":
    type: redirect
    to: "https://{default}/"
```

This affects your [default domain](#default).

You have one route that serves content (the one with the `upstream`)
and one that redirects to the first (the one with the `redirect`).

Redirects from `http` to `https` are generally included by default and don't need to be listed.

![The name of the app in your app configuration determines the value for the redirect.](images/routes-configs.png "0.5")

### Multi-app route definition

The specifics of configuring the Router container for multiple applications is explored in detail in the [Multiple apps](create-apps-multi-app/routes) documentation.

## Trailing slashes

All defined routes have at least a slash in the path.
So you might define routes for 2 apps named `app` and `api` as follows:

```yaml {configFile="routes"}

"https://{default}":
    type: upstream
    upstream: "app:http"
"https://subdomain.example.com":
    type: upstream
    upstream: "api:http"
```

Both of these routes would be resolved with trailing slashes.
So if you check your [`PLATFORM_ROUTES` variable](../development/variables/use-variables.md#use-provided-variables),
you see the following resolved routes (assuming `example.com` is your default domain):

```json
{
  "https://example.com/": {
    "primary": true,
    "id": null,
    "attributes": {},
    "type": "upstream",
    "upstream": "app",
    "original_url": "https://{default}"
  },
  "https://subdomain.example.com/": {
    "primary": false,
    "id": null,
    "attributes": {},
    "type": "upstream",
    "upstream": "api",
    "original_url": "https://subdomain.example.com"
  }
}
```

## Route placeholders

Each route in your configuration file is defined in one of two ways:

* An absolute URL such as `https://example.com/blog`
* A URL with a placeholder such as `https://{default}/blog`

The available placeholders are `{default}` and `{all}`.
They stand in for the [custom domains](../domains/steps/_index.md) you've defined in your project.

These domains can be top-level domains (`example.com`) or subdomains (`app.example.com`).

### `{default}`

`{default}` represents your default custom domain.
If you have set your default domain to `example.com`,
`example.com` and `{default}` in your `{{< vendor/configfile "routes" >}}` file have the same result for your Production environment.

You can use the `{default}` placeholder:

```yaml {configFile="routes"}
"https://{default}/blog":
    type: upstream
    upstream: "app:http"
```

And you can use an absolute URL:

```yaml {configFile="routes"}
"https://example.com/blog":
    type: upstream
    upstream: "app:http"
```

In both cases, the URLs for your Production environment are the same.

#### URLs in non-Production environments

URLs in non-Production environments follow a different pattern.

No matter how you have set your default domain (even if you don't have one),
using either the absolute URL or the `{default}` placeholder results in the same URL.

In any case, you get the same URL for a `feature` environment:

```txt
https://feature-t6dnbai-abcdef1234567.us-2.platformsh.site/blog
```

Note that the `example.com` prefix isn't part of the generated URL.

> [!primary]  
> 
> Before April 7, 2022, URLs in non-Production environments differed depending on whether or not you used the `{default}` placeholder.
> 
> If you used the `{default}` placeholder:
> 
> ```yaml {configFile="routes"}
> "https://{default}/blog":
>     type: upstream
>     upstream: "app:http"
> ```
> 
> The generated URL for the `feature` environment was:
> 
> ```txt
> https://feature-t6dnbai-abcdef1234567.us-2.platformsh.site/blog
> ```
> 
> If you used an absolute URL:
> 
> ```yaml {configFile="routes"}
> "https://example.com/blog":
>     type: upstream
>     upstream: "app:http"
> ```
> 
> The generated URL for the `feature` environment was:
> 
> ```txt
> https://example.com.feature-t6dnbai-abcdef1234567.us-2.platformsh.site/blog
> ```
> 
> 

### `{all}`

You can also set up multiple domains for a single project.
To define rules for all of them, use `{all}` in your template.

Say you have both `example.com` and `example.net` as domains in a project.
You can then define the following routes:

```yaml {configFile="routes"}
"https://{all}/":
    type: upstream
    upstream: "app:http"
"https://www.{all}/":
    type: redirect
    to: "https://{all}/"
```

The first route means you're serving the same content at multiple domains:
your app runs at both `https://example.com` and `https://example.net`.

The second route means that `https://www.example.com` redirects to `https://example.com`
_and_ `https://www.example.net` redirects to `https://example.net`.

If your project has no domains or only one, `{all}` behaves exactly like `{default}`.

If you have two routes sharing the same HTTP scheme, domain, and path
and the first route is using `{default}` and the second is using `{all}`,
the route using `{default}` takes precedence.
Say you have two apps named `app1` and `app2` and define two routes like this:

```yaml {configFile="routes"}
"https://{default}/":
    type: upstream
    upstream: "app1:http"
"https://{all}/":
    type: upstream
    upstream: "app2:http"
```

Requests to your default domain are served by `app1`.

## Wildcard routes

{{< vendor/name >}} supports wildcard routes, so you can map multiple subdomains to the same application.
Both `redirect` and `upstream` routes support wildcard routes.
Prefix a route with an asterisk (`*`), for example `*.{default}`.
If you have configured `example.com` as your default domain,
HTTP requests to `www.example.com`, `blog.example.com`, and `us.example.com` are all routed to the same endpoint.

It also works on development environments.
If you have a `feature` branch, it's `{default}` domain looks something like:
`feature-def123-vmwklxcpbi6zq.us.platform.sh` (depending on the project's region).
So requests to `blog.feature-def123-vmwklxcpbi6zq.us.platform.sh` and `us.feature-def123-vmwklxcpbi6zq.eu.platform.sh`
are both routed to the same endpoint.

Let's Encrypt wildcard certificates aren't supported (they would need DNS validation).
So if you want to use a wildcard route and protect it with HTTPS,
you need to provide a [custom TLS certificate](../domains/steps/tls.md).

> [!primary]  
> 
> In projects created before November 2017, the `.` in subdomains was replaced with a triple hyphen (`---`).
> It was switched to preserve `.` to simplify SSL handling and improve support for longer domains.
> If your project was created before November 2017, it still uses `---` to the left of the environment name.
> To switch to dotted-domains, [contact support](../overview/get-support.md).
> Doing so may change the domain name that your production domain name should `CNAME` to.
> 
> 

## Route identifiers

When your project has deployed and routes are generated,
all placeholders (`{default}` and `{all}`) are replaced with appropriate domain names
and any additional routes (such as redirecting HTTP to HTTPS) are created.
This means the final generated routes differ by environment and so shouldn't be hard coded in your app.
These routes are available in the `PLATFORM_ROUTES` environment variable as a base64-encoded JSON object.

To locate routes in a standardized fashion in any environment,
you may specify an `id` for on each route.
This identifier is the same across all environments.

Say you have two apps, `app1` and `app2`, that you want to serve at two subdomains, `site1` and `site2`.

You can define your routes like this:

```yaml {configFile="routes"}
"https://site1.{default}/":
    type: upstream
    upstream: 'app1:http'

"https://site2.{default}/":
    type: upstream
    id: 'the-second'
    upstream: 'app2:http'
```

To see the generated routes on your `feature` environment, run:

```bash
webpaas ssh -e feature 'echo $PLATFORM_ROUTES | base64 --decode | jq .'
```

The result is something like this:

```json
{
    "https://site1.feature-t6dnbai-abcdef1234567.us-2.platformsh.site/": {
        "primary": true,
        "id": null,
        "attributes": {},
        "type": "upstream",
        "upstream": "app1",
        "original_url": "https://site1.{default}/"
    },
    "https://site2.feature-t6dnbai-abcdef1234567.us-2.platformsh.site/": {
        "primary": null,
        "id": "the-second",
        "attributes": {},
        "type": "upstream",
        "upstream": "app2",
        "original_url": "https://site2.{default}/"
    },
    "http://site1.feature-t6dnbai-abcdef1234567.us-2.platformsh.site/": {
        "to": "https://site1.feature-t6dnbai-abcdef1234567.us-2.platformsh.site/",
        "original_url": "http://site1.{default}/",
        "type": "redirect",
        "primary": null,
        "id": null,
        "attributes": {}
    },
    "http://site2.feature-t6dnbai-abcdef1234567.us-2.platformsh.site/": {
        "to": "https://site2.feature-t6dnbai-abcdef1234567.us-2.platformsh.site/",
        "original_url": "http://site2.{default}/",
        "type": "redirect",
        "primary": null,
        "id": null,
        "attributes": {},
    }
}
```

The `site2` HTTPS route has an `id` specified as `the-second`, while the other routes have `null` for their `id`.
You can use this `id` to look up the domain of the route in every environment.

## Route attributes

You might want to add extra information to routes to identify them in your app.
Route `attributes` are arbitrary key-value pairs attached to a route.
This metadata has no impact on {{< vendor/name >}}, but is available in the `PLATFORM_ROUTES` environment variable.

So you can define a route like this:

```yaml {configFile="routes"}
"http://{default}/":
    type: upstream
    upstream: "app:http"
    attributes:
        "foo": "bar"
```

The attributes appear in the routes data like so:

```json
"https://feature-t6dnbai-abcdef1234567.us-2.platformsh.site/": {
    "primary": true,
    "id": null,
    "attributes": {
        "foo": "bar"
    },
    "type": "upstream",
    "upstream": "app",
    "original_url": "https://{default}/"
}
```

## Route limits

The maximum size of the routes document is 128&nbsp;KB, which should fit around 300 different routes.
If your `{{< vendor/configfile "routes" >}}` file would result in too large of a route information value, it's rejected.

The full list of generated route information is often much larger than what's specified in the `{{< vendor/configfile "routes" >}}` file.
For example, by default all HTTPS routes (and all uses of `{all}`) are duplicated to create HTTP redirect routes.
As a general rule, you should keep to your defined routes under 100.

If your `{{< vendor/configfile "routes" >}}` file is rejected for being too big, do one of the following:

* Move redirect routes to the application.
* Collapse the route definitions into a [regular expression-based redirect](./redirects.md#partial-redirects).

{{% lets_encrypt_limitations %}}

Non-default ports (other than `80` and `443`) aren't supported and can't be included in routes configuration.

## Route configuration reference

You can configure each route separately with the following properties:

| Name         | Type      | Required                | Description |
| ------------ | --------- | ----------------------- | ----------- |
| `type`       | `string`  | Yes                     | One of the following options:<ul><li>`upstream` means content is served at that route by an app and requires the `upstream` property to be set.</li><li>`redirect` means the route is redirected elsewhere in your project and requires the `to` property.</li><li>`proxy` means requests are redirected _outside_ your project and requires the `to` property. See more about [proxy routes](./proxy.md).</li></ul> |
| `upstream`   | `string`  | If `type` is `upstream` | The `name` of the app to be served (as defined in your [app configuration](../create-apps/_index.md)) followed by `:http`. Example: `app:http` |
| `to`         | `string`  | If `type` is `redirect` | The absolute URL or other route to which the given route should be redirected with an HTTP 301 status code. |
| `ssi`        | `boolean` | No                      | Whether [server side includes](./ssi.md) are enabled. |
| `redirects`  | Object    | No                      | Defines redirects for partial routes. For definition and options, see the [redirect rules](./redirects.md). |
| `cache`      | Object    | No                      | Defines caching policies for the given route. Enabled by default. For details and options, see [route caching](./cache.md). |
| `id`         | `string`  | No                      | A unique identifier for the route. See [route identifiers](#route-identifiers). |
| `primary`    | `boolean` | No                      | Whether the route is the primary route for the project. Can only be `true` for one route in the configuration file, but if you use the [`{all}` placeholder](#all), it can be `true` for multiple final routes. Defaults to the first defined `upstream` route. |
| `tls`        | Object    | No                      | TLS configuration. See [HTTPS](./https.md#optional-configure-tls-connections). |
| `attributes` | Object    | No                      | Any key-value pairs you want to make available to your app. See [route attributes](#route-attributes). |

## CLI access

The [{{< vendor/name >}} CLI](../administration/cli/_index.md) can show you the routes you have configured for an environment.
These are the routes as defined in the `{{< vendor/configfile "routes" >}}` file with the [placeholders](#route-placeholders)
plus the default redirect from HTTP to HTTPS.
They aren't the final generated routes.

Run the following command:

```bash
webpaas environment:routes
```

You get output similar to:

```bash
Routes on the project Example (abcdef123456), environment main (type: production):
+---------------------------+----------+---------------------------+
| Route                     | Type     | To                        |
+---------------------------+----------+---------------------------+
| https://app.{default}/    | upstream | app:http                  |
| https://app.{default}/api | upstream | api:http                  |
| http://app.{default}/     | redirect | https://app.{default}/    |
| http://app.{default}/api  | redirect | https://app.{default}/api |
+-----------------------+----------+-------------------------------+

To view a single route, run: webpaas route:get <route>
```

Viewing a single route gives you more detailed info, such as its cache and SSI settings.

## WebSocket routes

To use the WebSocket protocol on a route, `cache` must be disabled because WebSocket is incompatible with buffering,
which is a requirement for the router caching.

1\. Define a route that serves WebSocket:


```yaml {configFile="routes"}
"https://{default}/ws":
    type: upstream
    upstream: "app:http"
    cache:
        enabled: false

 # Below HTTP config may not be necessary for every Websocket client.
 "https://{default}/ws":
    type: upstream
    upstream: "app:http"
    cache:
        enabled: false   

```

2\. [Disable request buffering](../create-apps/app-reference.md#locations) in your app configuration.


```yaml {configFile="app"}
web:
  commands:
    start: /app/.linuxbrew/bin/websocketd --port=$PORT ./wsmanager.sh
  upstream:
    socket_family: tcp
    protocol: http
  locations:
    '/':
      passthru: true
      request_buffering:
        enabled: false
 ```

### `.htaccess` files

{{< vendor/name >}} uses Nginx servers, not Apache ones.
You [can't use `.htaccess` files with Nginx](https://www.nginx.com/resources/wiki/start/topics/examples/likeapache-htaccess/),
they are therefore ignored on {{< vendor/name >}}.
You can accomplish the same redirect and rewrite goals with your [routes](../define-routes/_index.md)
and [web server locations](../create-apps/web/_index.md).
