---
title: HTTP cache
updated: 2021-03-31
---

**Last updated 31st March 2021**


## Objective  

Web PaaS supports HTTP caching at the server level. Caching is enabled by default, but is only applied to `GET` and `HEAD` requests.

The cache can be controlled using the `cache` key in your `.platform/routes.yaml` file.

If a request is cacheable, Web PaaS builds a cache key from several request properties and stores the response associated with this key. When a request comes with the same cache key, the cached response is reused.

When caching is on...

* you can configure cache behaviour for different location blocks in your `.platform.app.yaml`;
* the router will respect whatever cache headers are sent by the application;
* cookies will bypass the cache;
* responses with the `Cache-Control` header set to `Private`, `No-Cache`, or `No-Store` are not cached.

## Basic usage

The HTTP cache is enabled by default, however you may wish to override this behaviour.

To configure the HTTP cache, add a `cache` key to your route in `.platform/routes.yaml`. You may like to start with the defaults:

```yaml
https://{default}/:
    type: upstream
    upstream: app:http
    cache:
        enabled: true
        default_ttl: 0
        cookies: ['*']
        headers: ['Accept', 'Accept-Language']
```

## Example

In this example, requests will be cached based on the URI, the `Accept` header, `Accept-Language` header, and `X-Language-Locale` header; Any response that lacks a `Cache-Control` header will be cached for 60 seconds; and the presence of any cookie in the request will disable caching of that response.

```yaml
https://{default}/:
    type: upstream
    upstream: app:http
    cache:
        enabled: true
        headers: ['Accept', 'Accept-Language', 'X-Language-Locale']
        cookies: ['*']
        default_ttl: 60
```

## How it works

### The cache key

If a request is cacheable, Web PaaS builds a cache key from several request properties and stores the response associated with this key. When a request comes with the same cache key, the cached response is reused.

There are two parameters that let you control this key: `headers` and `cookies`.

The default value for these keys are the following:

```yaml
cache:
    enabled: true
    cookies: ['*']
    headers: ['Accept', 'Accept-Language']
```

### Duration

The cache duration is decided based on the `Cache-Control` response header value. If no `Cache-Control` header is in the response, then the value of `default_ttl` key is used.

### Conditional requests

Conditional requests using `If-Modified-Since` and `If-None-Match` are both supported. Our web server does not honor the `Pragma` request header.

### Cache revalidation

When the cache is expired (indicated by `Last-Modified` header in the response) the web server will send a request to your application with `If-Modified-Since` header.

If the `If-None-Match` header is sent in the conditional request when `Etag` header is set in the cached response, your application can extend the validity of the cache by replying `HTTP 304 Not Modified`.

### Flushing

The HTTP cache does not support a complete cache flush, however, you can invalidate the cache by setting `cache: false`.

## Cache configuration properties

### `enabled`

Turns the cache on or off for a route.

> [!primary]  
> **Type:** Boolean
> 
> **Required:** Yes
> 
> **Values**
> * `true`: enable the cache for this route [default, but only if the `cache` key is not actually specified]
> * `false`: disable the cache for this route
> 

### `headers`

Adds specific header fields to the cache key, enabling caching of separate responses for those headers.

For example, if the `headers` key is the following, Web PaaS will cache a different response for each value of the `Accept` HTTP request header only:

```yaml
cache:
  enabled: true
  headers: ["Accept"]
```

> [!primary]  
> **Type:** List
> 
> **Values:**
> * `['Accept', 'Accept-Language']`: Cache on Accept & Accept-Language [default]
> 

#### Header behaviors

The cache is only applied to `GET` and `HEAD` requests. Some headers trigger specific behaviours in the cache.

Header field | Cache behavior
-------------|----------------
`Cache-Control`|Responses with the `Cache-Control` header set to `Private`, `No-Cache`, or `No-Store` are not cached. All other values override `default_ttl`.
`Vary`|A list of header fields to be taken into account when constructing the cache key. Multiple header fields can be listed, separted by commas. The Cache key is the union of the values of the Header fields listed in Vary header, and whatever's listed in the `routes.yaml` file.
`Set-Cookie`|Not cached
`Accept-Encoding`, `Connection`, `Proxy-Authorization`, `TE`, `Upgrade`|Not allowed, and will throw an error
`Cookie`|Not allowed, and will throw an error. Use the `cookies` value, instead.
`Pragma`|Ignored

A full list of HTTP headers is available on [Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields).

### `cookies`

A list of allowed cookie names to include values for in the cache key.

All cookies will bypass the cache when using the default (`['*']`) or if the `Set-Cookie` header is present.

For example, for the cache key to depend on the value of the `foo` cookie in the request.  Other cookies will be ignored.

```yaml
cache:
  enabled: true
  cookies: ["foo"]
```

> [!primary]  
> **Type:** List
> 
> **Values:**
> * `['*']`: any request with a cookie will bypass the cache [default]
> * `[]`: Ignore all cookies
> * `['cookie_1','cookie_2']`: A list of allowed cookies to include in the cache key. All other cookies are ignored.
> 

A cookie value may also be a regular expression.  An entry that begins and ends with a `/` will be interpreted as a PCRE regular expression to match the cookie name.  For example:

```yaml
cache:
  enabled: true
  cookies: ['/^SS?ESS/']
```

Will cause all cookies beginning with `SESS` or `SSESS` to be part of the cache key, as a single value.  Other cookies will be ignored for caching.  If your site uses a session cookie as well as 3rd party cookies, say from an analytics service, this is the recommended approach.

### `default_ttl`

Defines the default time-to-live for the cache, in seconds, for non-static responses, when the response does not specify one.

The cache duration is decided based on the `Cache-Control` response header value. If no `Cache-Control` header is in the response, then the value of `default_ttl` is used. If the application code returns a `Cache-Control` header or if your `.platform.app.yaml` file is configured to set a cache lifetime, then this value is ignored in favor of the application headers.

The `default_ttl` only applies to **non-static responses**, that is, those generated by your application.

To set a cache lifetime for static resources configure that in your [.platform.app.yaml](/pages/web/web-paas/configuration-app/web#locations) file. All static assets will have a Cache-Control header with a max age defaulting to 0 (which is the default for `expires` in the `.platform.app.yaml`).

> [!primary]  
> **Type:** integer
> 
> **Values:**
> * `0`: Do not cache [default]. This prevents caching, _unless_ the response specifies a `Cache-Control` header value.
> 

## Debugging

Web PaaS adds an `X-Platform-Cache` header to each request which show whether your request is a cache HIT, MISS or BYPASS. This can be useful when trying to determine whether it is your application, the HTTP cache, or another proxy or CDN which is not behaving as expected.

If in doubt, disable the cache using `cache: false`.

## Advanced caching strategies

### Cache per route

If you need fine-grained caching, you can set up caching rules for several routes separately:

```yaml
https://{default}/:
  type: upstream
  upstream: app:http
  cache:
    enabled: true

https://{default}/foo/:
  type: upstream
  upstream: app:http
  cache:
    enabled: false

https://{default}/foo/bar/:
  type: upstream
  upstream: app:http
  cache:
    enabled: true
```

With this configuration, the following routes are cached:

-   `https://{default}/`

-   `https://{default}/foo/bar/`

-   `https://{default}/foo/bar/baz/`


And the following routes are **not** cached:

-   `https://{default}/foo/`

-   `https://{default}/foo/baz/`


> [!primary]  
> Regular expressions in routes are **not** supported.
> 

### Allowing only specific cookies

Some applications use cookies to invalidate cache responses, but expect other cookies to be ignored. This is a simple case of allowing only a subset of cookies to invalidate the cache.

```yaml
cache:
  enabled: true
  cookies: ["MYCOOKIE"]
```

### Cache HTTP and HTTPS separately using the `Vary` header

Set the Vary header to `X-Forwarded-Proto` [custom request header](/pages/web/web-paas/development-headers) to render content based on the request protocol (i.e. HTTP or HTTPS). By adding `Vary: X-Forwarded-Proto` to the response header, HTTP and HTTPS content would be cached separately.

### Cache zipped content separately

Use `Vary: Accept-Encoding` to serve different content depending on the encoding. Useful for ensuring that gzipped content is not served to clients that can't read it.
