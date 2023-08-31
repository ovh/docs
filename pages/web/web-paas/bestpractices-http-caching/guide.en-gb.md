---
title: HTTP caching
slug: bestpractices-http-caching
section: Best practices
order: 10
---

**Last updated 31st August 2023**



## Objective  

You can configure HTTP caching for your site on {{< vendor/name >}} in several ways.
Which one you should use depends on your specific use case.

You should use only one of these at a time and disable any others.
Mixing them together most likely results in stale cache that can't be cleared.

## The {{< vendor/name >}} router cache

Every project includes a router instance that includes [optional HTTP caching](../define-routes/cache.md).
It's reasonably configurable and obeys HTTP cache directives, but doesn't support push-based clearing.

If you're uncertain what caching tool to use, start with this one.
It's enough for most uses.

## A Content Delivery Network (CDN)

{{< vendor/name >}} is compatible with most commercial CDNs.
If you have a Dedicated instance, it comes with the [Fastly CDN](../domains/cdn/fastly.md).

CDNs generally offer the best performance as they're the only option that includes multiple geographic locations.
But they do tend to be the most expensive option.

See more on setting up [Fastly](../domains/cdn/fastly.md) and [Cloudflare](../domains/cdn/cloudflare.md).
The methods for other CDNs are similar.

## Varnish

{{< vendor/name >}} offers a [Varnish service](../add-services/varnish.md) that you can insert between the router and your app.

It has roughly the same performance as the router cache.
Varnish is more configurable, but it requires you to be comfortable with Varnish Configuration Language (VCL).
{{< vendor/name >}} doesn't help with VCL configuration and a misconfiguration may be difficult to debug.

Varnish supports [clearing cache with a push](../add-services/varnish.md#clear-cache-with-a-push),
but access control is complicated by the inability to have [circular relationships](../add-services/varnish.md#circular-relationships).

Generally speaking, you should use Varnish only if your application requires push-based clearing or relies on Varnish-specific business logic.

## App-specific caching

Many web apps and frameworks include a built-in web cache layer that mimics what Varnish or the Router cache would do.
Most of the time they're slower than a dedicated caching service as they still require invoking the app server
and only serve as a fallback for users that don't have a dedicated caching service available.
Generally speaking, use app-specific web cache only when it includes app-specific business logic you depend on,
such as app-sensitive selective cache clearing or partial page caching.

Note that this refers only to HTTP caching.
Many apps have an internal app cache for data objects and similar information.
That should remain active regardless of the HTTP cache in use.

## Cookies and caching

HTTP-based caching systems generally default to including cookie values in cache keys
to avoid serving authenticated content to the wrong user.
While this is a safe default, it means that *any* cookie effectively disables the cache,
including mundane cookies like analytics.


The solution is to set which cookies should impact the cache and limit them to session cookies.
For the router cache, see [cookies in HTTP caching](../define-routes/cache.md#cookies).
For other cache systems, consult their documentation.
