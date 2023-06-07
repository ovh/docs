---
title: HTTP caching
updated: 2021-06-03
---

**Last updated 3rd June 2021**


## Objective  

There are several different "levels" at which you could configure HTTP caching for your site on Web PaaS.  Which one you want to use depends on your specific use case.  You should use only one of these at a time and disable any others. Mixing them together will most likely result in stale and unclearable caches.

* **The Web PaaS [Router cache](/pages/web/web-paas/configuration-routes/cache)**.  Every project includes a router instance, which includes optional HTTP caching.  It is reasonably configurable and obeys HTTP cache directives, but does not support push-based clearing.  If you are uncertain what caching tool to use, start with this one.  It is more than sufficient for the majority of use cases.

* **A Content Delivery Network (CDN)**.  Web PaaS is compatible with most commercial CDNs.    A CDN will generally offer the best performance as it is the only option that includes multiple geographic locations, but it also tends to be the most expensive.  Functionality will vary widely depending on the CDN.  

* **[Varnish](/pages/web/web-paas/configuration-services/varnish)**.  Web PaaS offers a Varnish service that you can declare as part of your application and insert between the router and your application.  Performance will be roughly comparable to the Router cache.  Varnish is more configurable than the Router cache as you are able to customize your VCL file, but make sure you are comfortable with Varnish configuration.  Web PaaS does not provide assistance with VCL configuration and a misconfiguration may cause difficult to debug behavior.  Generally speaking, you should use Varnish only if your application requires push-based clearing or relies on Varnish-specific business logic.

* **Application-specific caching**.  Many web applications and frameworks include a built-in web cache layer that mimics what Varnish or the Router cache would do.  Most of the time they will be slower than a dedicated caching service as they still require invoking the application server, and only serve as a fallback for users that do not have a dedicated caching service available.  Generally speaking the only reason to use an application-specific web cache is if it includes some application-specific business logic that you depend on, such as application-sensitive selective cache clearing or partial page caching.

Note that this refers only to HTTP level caching.  Many applications have an internal application cache for data objects or similar.  That should remain active regardless of the HTTP cache in use.

## Cookies and caching

HTTP-based caching systems generally default to including cookie values in cache keys so as to avoid serving authenticated content to the wrong user.  While a safe default, it also has the side effect that *any* cookie will effectively disable the cache, including mundane cookies like analytics.  

The solution is to specifically allow the cookies that should impact the cache and include only the application session cookie(s).  For the Router cache see [our documentation](/pages/web/web-paas/configuration-routes/cache#cookies).  For other cache systems consult their documentation.
