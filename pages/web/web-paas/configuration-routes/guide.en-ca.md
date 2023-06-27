---
title: Routes
updated: 2021-06-02
---

**Last updated 2nd June 2021**


## Objective  

Web PaaS allows you to define the routes used in your environments.


A route describes how an incoming HTTP request is going to be processed by Web PaaS. The routes are defined using the `.platform/routes.yaml` file in your Git repository.

If you don't have one, use the commands below to create it:

```bash
$ mkdir .platform
$ touch .platform/routes.yaml
```

![Routes](images/routes-basic.png "0.5")

## Route templates

The YAML file is composed of a list of routes and their configuration. A route can either be an absolute URL or a URL template that looks like: `http://www.{default}/` or `https://{default}/blog` where `{default}` will be substituted by the default fully qualified domain name configured in the project. So if your default domain is `example.com`, these routes will be resolved to `http://www.example.com/` and `https://example.com/blog` in the master environment.

Web PaaS will also generate a domain for every active development environment.  It will receive a domain name based on the region, project ID, branch name, and a per-environment random string. The domain name itself is not guaranteed stable, although the pattern is consistent.

> [!primary]  
> Web PaaS supports running multiple applications per environment. The `.platform/routes.yaml` file defines how to route requests to different applications.
> 

## Route configuration

Each route can be configured separately. It has the following properties

* `type` can be:
  * `upstream` serves an application
    * It will then also have an `upstream` property which will be the name of the application (as defined in `.platform.app.yaml`), followed by ":http" (see examples below).
  * `redirect` redirects to another route
    * It will then be followed by a `to` property, this defines a HTTP 301 redirect to any URL or another route (see examples below).
* `cache` controls [caching behavior of the route](/pages/web/web-paas/configuration-routes/cache).
* `ssi` controls whether Server Side Includes are enabled. For more information: see [SSI](/pages/web/web-paas/configuration-routes/ssi).
* `redirects` controls [redirect rules](/pages/web/web-paas/configuration-routes/redirects) associated with the route.

![Routes files](images/routes-configs.png "0.5")

> [!primary]  
> For the moment, the value of upstream is always in the form: `<application-name>:http`.  `<application-name>` is the `name` defined in `.platform.app.yaml` file.  `:php` is a deprecated application endpoint; use `:http` instead.  In the future, Web PaaS will support multiple endpoints per application.
> 

## Route limits

Although there is no fixed limit on the number of routes that can be defined, there is a cap on the size of generated route information.
This limitation comes from the Linux kernel, which caps the size of environment variables.
The kernel limit on environment variables is 32 pages. Each page is 4k on x86 processors, resulting in a maximum environment variable length of 131072 bytes.
If your `routes.yaml` file would result in too large of a route information value it will be rejected.

The full list of generated route information is often much larger than what is literally specified in the `routes.yaml` file.  For example, by default all HTTPS routes will be duplicated to create an HTTP redirect route.  Also, the `{all}` placeholder will create two routes (one HTTP, one HTTPS) for each domain that is configured.

As a general rule we recommend keeping the defined routes under 100.  Should you find your `routes.yaml` file rejected due to an excessive size the best alternative is to move any redirect routes to the application rather than relying on the router, or collapsing them into a [regular expression-based redirect](/pages/web/web-paas/configuration-routes/redirects#partial-redirects) within a route definition.

Let's Encrypt also limits an environment to 100 configured domains.  If you try to add more than that some of them will fail to get an SSL certificate.

## Routes examples

Here is an example of a basic `.platform/routes.yaml` file:

```yaml
"https://{default}/":
  type: upstream
  upstream: "app:http"
"https://www.{default}/":
  type: redirect
  to: "https://{default}/"
```

In this example, we will route both the apex domain and the www subdomain to an [application called "app"](/pages/web/web-paas/configuration-app/name), the www subdomain being redirected to the apex domain using an HTTP 301 `Moved Permanently` response.

In the following example, we are not redirecting from the www subdomain to the apex domain but serving from both:

```yaml
"https://{default}/":
    type: upstream
    upstream: "app:http"

"https://www.{default}/":
    type: upstream
    upstream: "app:http"
```

## Route placeholders

You can configure any number of domains on a project when you are ready to make it live.  Only one of them may be set as the "default" domain.  In the `routes.yaml` file a route can be defined either literally or using one of two special placeholders: `{default}` and `{all}`.

The magic value `{default}` will be replaced with the production domain name configured as the default on your account in the production branch.  In a non-production branch it will be replaced with the project ID and environment ID so that it is always unique.

The magic value `{all}` will be replaced by all of the domain names configured on the account. That is, if two domains `example1.com` and `example2.com` are configured, then a route named `https://www.{all}/` will result in two routes in production: `https://www.example1.com` and `https://www.example2.com`.  That can be useful in cases when a single application is serving two different websites simultaneously.  In a non-production branch it will be replaced with the project ID and environment ID for each domain, in the same fashion as a static route below.

If there are no domains defined on a project (as is typical in development before launch) then the `{all}` placeholder will behave exactly like the `{default}` placeholder.

It's also entirely possible to use an absolute URL in the route. In that case, it will be used as-is in a production environment.  On a development environment it will be mangled to include the project ID and environment name.  For example:

```yaml
"https://www.example.com/":
    type: upstream
    upstream: "app:http"
"https://blog.example.com/":
    type: upstream
    upstream: "blog:http"
```

In this case, there are two application containers `app` and `blog`.  In a production environment, they would be accessible at `www.example.com` and `blog.example.com`, respectively.  On a development branch named `sprint`, however, they would be accessible at URLs something like:

```bash
https://www.example.com.sprint-7onpvba-tvh56f275i3um.eu-2.webpaas.ovh.net/
https://blog.example.com.sprint-7onpvba-tvh56f275i3um.eu-2.webpaas.ovh.net/
```

If your project involves only a single apex domain with one app or multiple apps under subdomains, it's generally best to use the `{default}` placeholder.  If you are running [multiple applications](/pages/web/web-paas/configuration-app/multi-app) on different apex domains then you will need to use a static domain for all but one of them.

Please note that when there are two routes sharing the same HTTP scheme, domain, and path, where the first route is using the `{default}` placeholder and the other is using the `{all}` placeholder, the route using `{default}` takes precedence.

## Route identifiers

All routes defined for an environment are available to the application in its `PLATFORM_ROUTES` environment variable, which contains a base64-encoded JSON object. This object can be parsed by the language of your choice to give your application access to the generated routes.

When routes are generated, all placeholders will be replaced with appropriate domains names, and depending on your configuration, additional route entries may be generated (e.g. automatic HTTP to HTTPS redirects). To make it easier to locate routes in a standardized fashion, you may specify an `id` key on each route which remains stable across environments. You may also specify a single route as `primary`, which will cause it to be highlighted in the web management console but will have no impact on the runtime environment.

Consider this `routes.yaml` configuration example:

```yaml
"https://site1.{default}/":
    type: upstream
    upstream: 'site1:http'

"https://site2.{default}/":
    type: upstream
    id: 'the-second'
    upstream: 'site2:http'
```

This example defines two routes, on two separate subdomains, pointing at two separate app containers. (However, they could just as easily be pointing at the same container for our purposes).  On a branch named `test`, the JSON object that would be base64-encoded in the `PLATFORM_ROUTES` environment variable would look like this:

```json
{
    "https://site1.test-t6dnbai-abcdef1234567.us-2.webpaas.ovh.net/": {
        "primary": 1,
        "id": null,
        "type": "upstream",
        "upstream": "site1",
        "original_url": "https://site1.{default}/"
        // ...
    },
    "https://site2.test-t6dnbai-abcdef1234567.us-2.webpaas.ovh.net/": {
        "primary": null,
        "id": "the-second",
        "type": "upstream",
        "upstream": "site2",
        "original_url": "https://site2.{default}/"
        // ...
    },
    "http://site1.test-t6dnbai-abcdef1234567.us-2.webpaas.ovh.net/": {
        "to": "https://site1.test-t6dnbai-abcdef1234567.us-2.webpaas.ovh.net/",
        "original_url": "http://site1.{default}/",
        "type": "redirect",
        "primary": null,
        "id": null
    },
    "http://site2.test-t6dnbai-abcdef1234567.us-2.webpaas.ovh.net/": {
        "to": "https://site2.test-t6dnbai-abcdef1234567.us-2.webpaas.ovh.net/",
        "original_url": "http://site2.{default}/",
        "type": "redirect",
        "primary": null,
        "id": null
    }
}
```

(Some keys omitted for space.)  Note that the `site2` HTTPS route has an `id` specified as `the-second` while other routes have no ID. Futhermore, because we did not specify a `primary` route, the first non-redirect route defined is marked as the primary route by default. In each case, the `original_url` specified in the configuration file is accessible if desired.

That makes it straightforward to look up the domain of a particular route, given its `id`, regardless of what branch it's on, from within application code.
That could be used, for example, for specifically allowing inbound requests.

## Route attributes

Route attributes are an arbitrary key/value pair attached to a route.  This metadata does not have any impact on Web PaaS, but will be available in the route definition structure in `$PLATFORM_ROUTES`.

```yaml
"http://{default}/":
    type: upstream
    upstream: "app:http"
    attributes:
        "foo": "bar"
```

Attributes will appear in the routes data like so:

```json
"https://site1.test-t6dnbai-abcdef1234567.us-2.webpaas.ovh.net/": {
    "primary": 1,
    "id": null,
    "type": "upstream",
    "upstream": "site1",
    "original_url": "https://site1.{default}/",
    "attributes": {
        "foo": "bar"
    },
    // ...
}
```

These extra attributes may be used to "tag" routes in more complex scenarios that can then be read by your application.

## CLI Access

You can get a list of the configured routes of an environment by running `webpaas environment:routes`.

![WebPaas Routes CLI](images/platform-routes-cli.png "0.3")

If you need to see more detailed info, such as cache and ssi, use `webpaas route:get`


## Wildcard routes

Web PaaS supports wildcard routes, so you can map multiple subdomains to the same application. This works both for redirect and upstream routes. You can simply prefix the route with a star (`*`), for example `*.example.com`, and HTTP request to `www.example.com`, `blog.example.com`, `us.example.com` will all get routed to the same endpoint.

For your master environment, this would function as a catch-all domain once you [added the parent domain](/pages/web/web-paas/administration-web/configure-project#domains) to the project settings.

For development environments, we will also be able to handle this. Here is how:

Let's say we have a project on the EU cluster whose ID is "vmwklxcpbi6zq" and we created a branch called "add-theme". It's environment name will be similar to `add-theme-def123`.  The generated apex domain of this environment will be `add-theme-def123-vmwklxcpbi6zq.ovhcloud-fr-1.webpaas.ovh.net`. If we have a `http://*.{default}/` route defined, the generated route will be `http://*.add-theme-def123-vmwklxcpbi6zq.ovhcloud-fr-1.webpaas.ovh.net/`. This means you could put any subdomain before the left-most `.` to reach your application. HTTP request to both `http://foo.add-theme-def123-vmwklxcpbi6zq.ovhcloud-fr-1.webpaas.ovh.net/` and `http://bar.add-theme-def123-vmwklxcpbi6zq.ovhcloud-fr-1.webpaas.ovh.net/` URLs will be routed to your application properly. However, request to `http://*.add-theme-def123-vmwklxcpbi6zq.ovhcloud-fr-1.webpaas.ovh.net/` will not be routed since it is not a legitimate domain name.

Be aware, however, that we do not support Let's Encrypt wildcard certificates (they would need DNS validation).  That means if you want to use a wildcard route and protect it with HTTPS you will need to provide a custom TLS certificate

> [!primary]  
> In projects created before November 2017 the `.` in subdomains was replaced with a triple dash (`---`).  It was switched to preserve `.` to simplify SSL handling and improve support for longer domains.  If your project was created before November 2017 then it will still use `---` to the left of the environment name.  If you wish to switch to dotted-domains please file a support ticket and we can do that for you.  Be aware that doing so may change the domain name that your production domain name should CNAME to.
> 

## WebSocket routes

To use WebSocket on a route, `cache` must be disabled because WebSocket is incompatible with buffering, which is a requirement of caching on our router.  Here is an example to define a route that serves WebSocket:

```yaml
"https://{default}/ws":
    type: upstream
    upstream: "app:http"
    cache:
        enabled: false
```

You will also need to [disable request buffering](/pages/web/web-paas/configuration-app/web#locations) in the `.platform.app.yaml`.

```yaml
web:
  locations:
    '/':
      passthru: true
      request_buffering:
        enabled: false
```
