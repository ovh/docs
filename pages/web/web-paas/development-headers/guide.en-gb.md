---
title: HTTP Headers
updated: 2021-03-26
---

**Last updated 26th March 2021**


## Objective  

Web PaaS adds a number of HTTP headers to both inbound and outbound messages.  We do not, however, modify or block existing headers on either request or response.


## Request headers

Web PaaS adds the following HTTP headers in the router to give the application information about the connection.  These are stable and may be examined by the application as necessary.

* `X-Forwarded-Proto`: The protocol forwarded to the application, e.g. "http", "https".
* `X-Client-IP`: The remote IP address of the request.
* `X-Client-SSL`: Set "on" only if the client is using SSL connection, otherwise the header is not added.
* `X-Original-Route`: The route in `.platform/routes.yaml` which is used currently, e.g. `https://{default}/`.


## Response headers

Web PaaS adds a number of response headers automatically to assist in debugging connections.  These headers should be treated as a semi-private API.  Do not code against them, but they may be inspected to help determine how Web PaaS handled the request to aid in debugging.

* `X-Platform-Cache`: Either `HIT` or `MISS` to indicate if the router in your cluster served the response from its own cache or if the request was passed through to the application.
* `X-Platform-Cluster`: The ID of the cluster that received the request.  The cluster name is formed from the project ID and environment ID.
* `X-Platform-Processor`: The ID of the container that generated the response.  The container ID is the cluster ID plus the container name.
* `X-Platform-Router`: The ID of the router that served the request.  The router ID is the processor ID of the router container, specifically.

## Custom headers

Apart from those listed above, your application is responsible for setting its own response headers.

To add headers to static files, use the `headers` key in the application's [web locations configuration](/pages/web/web-paas/configuration-app/web#how-can-i-control-the-headers-sent-with-my-files).
