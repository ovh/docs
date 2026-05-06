---
title: "Configuring HTTP/2 on an OVH Load Balancer service"
excerpt: "Find out how to choose and configure the frontends of your OVHcloud Load Balancer service, for usage with the HTTP/2 protocol"
updated: 2026-01-15
---

> [!primary]
> **Notice on HTTP/2 native support**
>
> Since June 2025, HTTP and TLS frontends used by OVHcloud Load Balancer services natively support the HTTP/2 protocol.
>
> However, the following guide remains applicable for TCP frontends, which may be useful in high performance, low latency applications.
>
> In order to enable HTTP/2 on existing HTTP and TLS frontends, you must make the following refresh call via the API, where **{serviceName}** is the internal name of your Load Balancer.
>

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

## Objective

This guide serves two primary purposes:

- To help you understand the distinctions between TCP, HTTP, and TLS frontends on an OVHcloud Load Balancer, enabling you to determine if a TCP frontend is the most suitable choice for your specific application requirements, especially when dealing with HTTP/2 traffic.
- If a TCP frontend is deemed desirable, to then provide step-by-step instructions on how to configure it to effectively balance HTTP/2 traffic across your backend servers.

## Requirements

You will need:

- An [OVHcloud Load Balancer](/links/network/load-balancer) service;
- A TCP frontend on your Load Balancer;
- A TCP backend cluster with at least one server added to it;
- Backend servers configured to support and respond with HTTP/2;
- Access to the [OVHcloud API](/links/api).

## Instructions

### Why use HTTP/2?

HTTP/2 brings numerous advantages to enhance the performance and efficiency of your applications:

- *Faster load times* thanks to multiplexing, which allows multiple requests to be sent in parallel on the same connection.
- *Reduced latency* by limiting the exchanges between the client and the server.
- *Optimized network performance* through header compression.

### Differences between HTTP/2 and TCP frontends

A TCP frontend operates at Layer 4 (the transport layer) of the OSI model. When you configure a TCP frontend, the load balancer establishes a TCP connection between the client and a backend server. This means the load balancer doesn't inspect or understand the HTTP/2 data within the TCP stream. Consequently, TCP frontends offer high performance due to minimal processing needs.

However, because it doesn't understand the application protocol, it cannot perform advanced HTTP-specific optimizations, like content-based routing or HTTP header manipulation.

HTTP and TLS frontends, conversely, operate at Layer 7 (the application layer). When a client connects to an HTTP/2-compatible frontend, the load balancer fully decodes the HTTP/2 frames before establishing a connection with a backend server.

By understanding the application protocol, an HTTP/2-compatible frontend can provide numerous advanced features. These include SSL/TLS termination (offloading encryption/decryption from backend servers), content-based routing (e.g., routing requests to different backend pools based on URL path or headers), request/response modification, and HTTP/2 multiplexing.

**You should use a TCP frontend when:**

- You need to load balance other non-HTTP services (e.g., databases, custom TCP applications, SSH);
- You require maximum performance and minimal latency;
- Your backend servers are already handling SSL/TLS termination;
- You don't need advanced HTTP-specific features like content-based routing, HTTP header manipulation, or HTTP/2 protocol-level optimizations.

**You should use an HTTP/2-compatible frontend when:**

- You are primarily load balancing web traffic (HTTP/HTTPS);
- You want to leverage the performance benefits of HTTP/2 between the client and the load balancer;
- You need to offload SSL/TLS termination from your backend servers;
- You require advanced routing logic based on HTTP headers, URLs, or other application-layer attributes;
- You want to optimize the client-side experience by taking advantage of HTTP/2 features.

*If you choose to use a TCP frontend, follow the next steps of this guide to configure it for HTTP/2 usage*.

### Configure a TCP frontend for use with HTTP/2

> [!warning]
>
> The order in which you create elements is important: the routes must be configured before you attach them to rules.
> 

#### Add a route

We will add a route to our service.

##### Via the API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
> 

> [!warning]
>
> The weight parameter allows you to define the evaluation order of your routes, the first one that is validated will be executed.
> 

Parameters:

|Field|Value and description|
|---|---|
|serviceName|Identifier of your OVHcloud Load Balancer service|
|frontendId|Identifier of your TCP Frontend port 443|
|displayName|"HTTP2 TCP route"|
|weight|(empty)|
|action.type|"farm"|
|action.target|Identifier of your TCP farm that must be able to handle HTTP/2|

#### Add a rule

We will now add a rule to our route.

##### From the OVHcloud API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
> 

Parameters:

|Field|Value and description|
|---|---|
|serviceName|Identifier of your OVHcloud Load Balancer service|
|routeId|Identifier of the previously created route|
|field|"protocol" The name of the field that must be checked by the rule|
|match|"is" The type of check to perform|
|pattern|"http/2.0" The value to check for the specified field|

#### Apply the modifications

The modifications made to your OVH Load Balancer must be *explicitly applied* in each of the zones configured for your service. Only at this point will they be visible to your website visitors. This way, you can make complex configuration changes in one go.

If you have several zones, you must apply the same configuration for each of them.

#### Refresh a zone

##### From the OVHcloud API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

Parameters:

|Field|Value and description|
|---|---|
|serviceName|Identifier of your OVHcloud Load Balancer service|
|zone|Identifier of the zone on which you want to apply your configuration|

#### Confirm

After you have completed these steps, you should have a functional load balancer service for your HTTP/2 servers. You can now confirm the status of your service by requesting it from your OVH Load Balancer service, then verifying the response version:

```bash
curl -I --http2 https://www.ovh.co.uk/
HTTP/2 200
```

## Go further

If you want more information about the HTTP/2 protocol, please visit <https://http2.github.io/>.

Join our [community of users](/links/community).