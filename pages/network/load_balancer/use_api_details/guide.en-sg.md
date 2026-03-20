---
title: Details of API functions
excerpt: Details of API functionalities
updated: 2025-09-29
---

## Objective

This guide provides a detailed description of all API functions for the OVHcloud Load Balancer.

## Prerequisite

- Consult the guide [First steps with the OVHcloud APIs](/pages/manage_and_operate/api/first-steps) to familiarize yourself with the use of OVHcloud APIv6.

## Instructions

### Manage your OVHcloud Load Balancer service via the API

All API calls that are made in the section */ipLoadbalancing* are available on [this page](/links/console).

> [!primary]
>
> In the calls below all fields marked with an asterisk `*` are mandatory.
> 

> [!primary]
>
> The Frontends, Farms and Servers are specific to the protocol (HTTP, TCP or UDP) in which they are defined.
> Compatibility between these components is only possible within the same protocol.
> For example, an HTTP Frontend can only be paired with an HTTP Farm, and cannot be used with a UDP Farm.
> 

## Services and zones

### OVHcloud Load Balancer

#### List active services

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing
> 

#### List the zones available for the OVHcloud Load Balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/availableZones
> 

#### Return details of a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |

#### Modify a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |
| `Ip.displayName` |  | The name you want to give to the service (String of characters) |
| `Ip.sslConfiguration` |  | The SSL configuration you want to assign to the service (Value) |

#### List the services attached to the OVHcloud Load Balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/allowedServers
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |

#### List existing farms and their type

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/definedFarms
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |
| `vrackNetworkId` |  | Allows filtering according to the vrack network |

#### List the areas that can be attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableServerZones
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |

#### List the different probes that can be used

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFarmProbes
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |

#### List the different types of farms that can be used

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFarmType
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |

#### List the different types of frontends that can be used

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFrontendType
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |

#### List the different types of routing actions that can be used

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteActions
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |

#### List the different types of routing rules that can be used

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteRules
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |

### Service

#### Get service information

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/serviceInfos
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |

#### Modify service information

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/serviceInfos
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters) |
| `Service.automatic` |  | Enables automatic service renewal (Boolean)) |
| `Service.deleteAtExpiration` |  | Enables the deletion of the service upon expiration. (Boolean) |
| `Service.forced` |  | Forces automatic renewal (Boolean) |
| `Service.period` |  | Fill in the renewal term (String of characters) |

### Zones

#### List active zones for a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/zone
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, ex. : IP-1.2.3.4 (String of characters) |

#### Get the details of a zone

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/zone/{name}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `name` | Yes | The name of the requested zone |

#### Delete a zone

The service will be discontinued on the expiry date.

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/zone/{name}/terminate
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `name` | Yes | The service will be discontinued on the expiry date. |

#### Undo the deletion of a zone

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `name` | Yes | The name of the zone to be deleted |

## HTTP Protocol
Accessing HTTP protocol related elements (Frontend, Firmware, etc.).

### HTTP farms

#### List HTTP farms attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `zone` |  | The name of the zone (String of characters) |

#### Adding a new HTTP farm to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `zone` | Yes | The name of the zone (String of characters) |
| `displayName` |  | The name you wish to give to your farm (String of characters) |
| `balance` |  | Your farm's load distribution method (Value) |
| `port` |  | The listening port on your farm. Inherited from the frontend if undefined (Number, 1..65535) |
| `stickiness` |  | The type of connection persistence to use for your farm (Value) |
| `probe` |  | The type of probe to use on your farm (Probe HTTP) |
| `probe.forceSsl` |  | SSL activation is forced for the probe (Boolean) |
| `probe.interval` |  | The interval in seconds between each probe test. Must be greater than 30. Default is 30. (Number) |
| `probe.match` |  | The method of correspondence used. default' uses the standard behavior of HAProxy. status' is only supported for HTTP probes (value) [contains, default, internal, matches, status] |
| `probe.negate` |  | The behavior of the 'match' operator is reversed (Boolean) |
| `probe.method` |  | The HTTP method used in type 'http'. HEAD' can save bandwidth. GET' by default (Value) [HEAD, GET, OPTIONS, internal] |
| `probe.pattern` |  | The format of the server response when "UP". Empty for 'default', comma separated status list for 'status', text for 'contains', regular expression for 'matches' (String of characters) |
| `probe.port` |  | The port that the probe should use to test the servers attached to your farm. Ignored for 'oco' probes. If not defined, the farm port is used (Number) |
| `probe.type` |  | The type of the probe; its operation (Value) [HTTP, internal, MySQL, OCO, PgSQL, SMTP, TCP] |
| `probe.url` |  | The address to be used by the probe for HTTP type probes. The type is ignored if this parameter is set to (String of characters) |

#### Getting the details of an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your HTTP farm (Number) |

#### Modify the properties of an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your HTTP farm (Number) |
| `BackendHttp.displayName` |  | The name of the farm (String of characters) |
| `BackendHttp.balance` |  | The type of load distribution (Value) |
| `BackendHttp.port` |  | The farm's listening port (Number, 1..65000) |
| `BackendHttp.probe` |  | The type of probe to be used (HTTP probe) |
| `BackendHttp.stickiness` |  | The type of connection persistence (Value) |

#### Delete an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your HTTP farm (Number) |

### HTTP Servers

#### List the servers linked to the HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your HTTP farm (Number) |
| `cookie` |  | Filter Values by Cookie (String of characters) |
| `address` |  | Filter Values by IPv4 address (IPv4) |
| `status` |  | Filter Values by server status (Value) |

#### Adding a server to an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |
| `address` | Yes | The IPv4 address of your server (IPv4) |
| `backup` |  | If your server is configured as a backup server (Boolean) |
| `chain` |  | The Value of the Intermediate SSL Certificate (String of characters) |
| `cookie` |  | The Value of your Cookie (String of characters) |
| `displayName` |  | The name given to your server (String of characters) |
| `port` |  | The listening port of your server. Inherited from your farm if not defined (Number, 1..65535) |
| `probe` |  | The type of probe to be used (Value) |
| `proxyProtocolVersion` |  | The proxyProtocol version to use, |
| `ssl` | Yes | If the requests sent to your servers need to be encrypted with SSL (Boolean) |
| `weight` | Yes | The weight of your server for your farm. A server with high weight receives more requests (Number) |
| `status` | Yes | If your server is activated or not (Boolean) |

#### Get the details of a server linked to an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `serverId` | Yes | The identifier of your server (Number) |
| `farmId` | Yes | The identifier of your farm (Number) |

#### Modify the properties of an HTTP server

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `serverId` | Yes | The identifier of your server-link (Number) |
| `farmId` | Yes | The identifier of your farm (Number) |
| `BackendHttpServer.backup` |  | If your server is configured as a backup server (Boolean) |
| `BackendHttpServer.chain` |  | The Value of the Intermediate SSL Certificate (String of characters) |
| `BackendHttpServer.cookie` |  | The Value of your Cookie (String of characters) |
| `BackendHttpServer.displayName` |  | The name of your server (String of characters) |
| `BackendHttpServer.port` |  | The listening port of your server (Number, 1..65535) |
| `BackendHttpServer.probe` |  | The type of probe to be used (Value) |
| `BackendHttpServer.proxyProtocolVersion` |  | The proxyProtocol version to use, |
| `BackendHttpServer.ssl` |  | If the requests sent to your servers need to be encrypted with SSL (Boolean) |
| `BackendHttpServer.status` |  | If your server is activated or not (Boolean) |
| `BackendHttpServer.weight` |  | The weight of your server for your farm (Number) |

#### Removing a server from an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `serverId` | Yes | The identifier of your server (Number) |
| `farmId` | Yes | The identifier of your farm (Number) |

### Frontends HTTP

#### List HTTP frontends attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `defaultFarmId` |  | The identifier of the HTTP farm to which the HTTP frontend is linked (Number) |
| `port` |  | The listening port on your frontend (Number, 1..65535) |
| `zone` |  | The name of your zone, ex: all (String of characters) |

#### Add an HTTP frontend to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `allowedSource` |  | The list of client IP addresses that have access to the Load Balancer (IPv4) |
| `dedicatedIpfo` |  | The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[]) |
| `defaultFarmId` |  | The default HTTP farm identifier for your frontend (Number) |
| `defaultSslId` |  | The default SSL Certificate ID (Number) |
| `disabled` |  | If your HTTP frontend is disabled or enabled (Boolean) |
| `displayName` |  | The name of your HTTP frontend (String of characters) |
| `hsts` |  | If support for *https strict, HTTP Strict Transport Security* is enabled or disabled (Boolean) |
| `httpHeader` |  | The custom *http* header to add (String of characters) |
| `port` | Yes | The listening port on your frontend (Number, 1..65535) |
| `redirectLocation` |  | The redirection URL *http* (String of characters) |
| `ssl` |  | Whether requests sent to the HTTP farm should be encrypted with SSL or not (Boolean) |
| `zone` | Yes | The name of your zone, ex: all (String of characters) |

### Get the details of an HTTP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` | Yes | The identifier of your HTTP frontend (Number) |

#### Modify the properties of an HTTP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` | Yes | The identifier of your HTTP frontend (Number) |
| `FrontendHttp.allowedSource` |  | The list of client IP addresses that have access to the Load Balancer (IPv4[]) |
| `FrontendHttp.dedicatedIpfo` |  | The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[]) |
| `FrontendHttp.defaultSslId` |  | The default SSL Certificate ID (Number) |
| `FrontendHttp.disabled` |  | If your HTTP frontend is disabled or enabled (Boolean) |
| `FrontendHttp.displayName` |  | The name of your HTTP frontend (String of characters) |
| `FrontendHttp.hsts` |  | If support for *https strict, HTTP Strict Transport Security* is enabled or disabled (Boolean) |
| `FrontendHttp.httpHeader` |  | The custom *http* header to add (String of characters) |
| `FrontendHttp.ssl` |  | Whether requests sent to the HTTP farm should be encrypted with SSL or not (Boolean) |

#### Delete an HTTP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` | Yes | The identifier of your frontend (Number) |

### Routes HTTP
Routes are evaluated one by one, testing their routing rules. The first route validating all its rules sees its action executed, and stops the evaluation of the remaining routes. The order of execution is defined by the type and weight of the route.

#### List the HTTP routes attached to a Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` |  | The identifier of an HTTP frontend (Number) |

#### Add a new HTTP route to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/route
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `action` | Yes | The action triggered when all the rules of your route are validated (RouteHttpAction) |
| `action.status` |  | The expected HTTP return code (Number) |
| `action.target` |  | The farm identifier, or the template for the URL (String of characters) |
| `action.type` |  | The action on your route (String of characters) |
| `displayName` |  | The name of your route (String of characters) |
| `frontendId` |  | The Identifier of the HTTP frontend for which your route is applied (Number) |
| `weight` |  | The priority of your route. (Number) [0 - 255] |

#### Get the details of an HTTP route

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your route (number) |

#### Modify the properties of an HTTP route

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your route (number) |
| `routeHttp.action` | Yes | The action triggered when all the rules of your route are validated (RouteHttpAction) |
| `routeHttp.status` |  | The expected HTTP return code (Number) |
| `routeHttp.target` |  | The farm identifier, or the template for the URL (String of characters) |
| `routeHttp.type` |  | The action on your route (String of characters) |
| `routeHttp.displayName` |  | The name of your route (String of characters) |
| `routeHttp.frontendId` |  | The Identifier of the HTTP frontend for which your route is applied (Number) |
| `routeHttp.weight` |  | The priority of your route. (Number) [0 - 255] |

#### Delete an HTTP route

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your route (number) |

### Routing rules

#### List the routing rules attached to an HTTP route

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your HTTP route (Number) |

#### Add routing rules attached to an HTTP route

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your HTTP route (Number) |
| `field` | Yes | The name of the field to be tested with the "match" operator (String of characters) |
| `match` | Yes | The comparison operator (value) (contains, endsWith, exists, in, internal, is, matches, startsWith) |
| `negate` |  | The behavior of the operator :code:`match` is reversed (Boolean) |
| `pattern` |  | The schema or the regular expression used by the "match" operator (Regex / String of characters) |
| `subField` |  | The name of the sub-field, if applicable. Can be a cookie or a header name, for example (String of characters) |

#### Get the details of a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your HTTP route (Number) |
| `ruleId` | Yes | The identifier of your HTTP routing rule (Number) |

#### Modify the properties of a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your HTTP route (Number) |
| `ruleId` | Yes | The identifier of your HTTP routing rule (Number) |
| `RouteRule.field` |  | The name of the field to be tested via the "match" operator (String of characters) |
| `RouteRule.match` |  | The comparison operator to use (contains, endsWith, exists, in, internal, is, matches, startsWith) |
| `RouteRule.negate` |  | If the "match" operator is inverted or not (Boolean) |
| `RouteRule.pattern` |  | The Value or regular expression to use with the "match" operator (Regex / String of characters) |
| `RouteRule.subField` |  | The name of the sub-field if applicable (String of characters) |

#### Delete a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your HTTP route (Number) |
| `ruleId` | Yes | The identifier of your HTTP routing rule (Number) |

## Protocol TCP
Access the elements related to the TCP protocol (Frontend, Farm, etc.).

### TCP Farms

#### List TCP farms attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `zone` |  | The name of your zone, ex: all (String of characters) |

#### Add a new TCP farm to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `balance` |  | Your farm's load sharing method (Value) |
| `displayName` |  | The name you wish to give to your farm (String of characters) |
| `port` |  | The listening port on your farm. Inherited from the frontend if not defined (Number, 1..65535) |
| `probe` |  | The type of probe to use on your farm (HTTP probe) |
| `probe.forceSsl` |  | Activation of the SSL is forced for the probe (Boolean) |
| `probe.interval` |  | The interval (in seconds) between each probe test. Must be greater than 30. Default is 30 (Number) |
| `probe.match` |  | The method of correspondence used. default' uses the standard HAProxy behavior. status' is only supported for HTTP probes. (Value) (contains, default, internal, matches, status) |
| `probe.negate` |  | The behavior of the :code:`match` operator is reversed. (Boolean) |
| `probe.method` |  | The HTTP method used in :code:`type` 'http'. HEAD' can save bandwidth. GET' by default (Value) (HEAD, GET, OPTIONS, internal) |
| `probe.pattern` |  | server response when "UP". Empty for 'default', comma separated status list for 'status', text for 'contains', regular expression for 'matches'. (String of characters) |
| `probe.port` |  | The port that the probe should use to test the servers attached to your farm. Ignored for 'oco' probes. If not defined, the farm port is used (Number) |
| `probe.type` |  | The type of the probe; its operation (Value) (HTTP, internal, MySQL, OCO, PgSQL, SMTP ou TCP) |
| `probe.url` |  | The address to be used by the probe for HTTP type probes. The :code:`type` is ignored if this parameter is defined (String of characters) |
| `stickiness` |  | The type of connection persistence to use for your farm (Value) |
| `zone` | Yes | The name of your zone, ex: all (String of characters) |

#### Get the details of a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |

#### Modify the properties of a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |
| `BackendTcp.balance` |  | The type of load distribution (Value) |
| `BackendTcp.displayName` |  | The name of the farm (String of characters) |
| `BackendTcp.port` |  | The farm's listening port (Number, 1..65000) |
| `BackendTcp.probe` |  | The type of probe to be used (Sonde TCP) |
| `BackendTcp.stickiness` |  | The type of connection persistence (Value) |

#### Delete a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |

### TCP Servers

#### List the servers linked to the TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |
| `cookie` |  | Filter Values by Cookie (String of characters) |
| `address` |  | Filter Values by IPv4 address (IPv4) |
| `status` |  | Filter Values by Server Status (Value) |

#### Add a server to a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |
| `address` | Yes | The IPv4 address of your server (IPv4) |
| `backup` |  | If your server is configured as a backup server (Boolean) |
| `chain` |  | The Value of the Intermediate SSL Certificate (String of characters) |
| `displayName` |  | The name given to your server (String of characters) |
| `port` |  | The listening port of your server. Inherited from your farm if not defined (Number, 1..65535) |
| `probe` |  | The type of probe to be used (Value) |
| `proxyProtocolVersion` |  | The proxyProtocol version to use, |
| `ssl` | Yes | If the requests sent to your servers need to be encrypted with SSL (Boolean) |
| `weight` | Yes | The weight of your server for your farm. A high weight server receives more requests (Number) |
| `status` | Yes | If your server is activated or not (Boolean) |

#### Get the details of a server linked to a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `serverId` | Yes | The identifier of your server (Number) |
| `farmId` | Yes | The identifier of your farm (Number) |

#### Modify the properties of a TCP server

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `serverId` | Yes | The identifier of your server-link (Number) |
| `farmId` | Yes | The identifier of your farm (Number) |
| `BackendTcpServer.backup` |  | If your server is configured as a backup server (Boolean) |
| `BackendTcpServer.chain` |  | The Value of the Intermediate SSL Certificate (String of characters) |
| `BackendTcpServer.displayName` |  | The name of your server (String of characters) |
| `BackendTcpServer.port` |  | The listening port of your server (Number, 1..65535) |
| `BackendTcpServer.probe` |  | The type of probe to be used (Value) |
| `BackendTcpServer.proxyProtocolVersion` |  | The proxyProtocol version to use, |
| `BackendTcpServer.ssl` |  | If the requests sent to your servers need to be encrypted with SSL (Boolean) |
| `BackendTcpServer.status` |  | If your server is activated or not (Boolean) |
| `BackendTcpServer.weight` |  | The weight of your server for your farm (Number) |

#### Delete a server from a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `serverId` | Yes | The identifier of your server (Number) |
| `farmId` | Yes | The identifier of your farm (Number) |

### Frontends TCP

#### List TCP frontends attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `defaultFarmId` |  | The identifier of the TCP farm to which the TCP frontend is linked (Number) |
| `port` |  | The listening port on your frontend (Number, 1..65535) |
| `zone` |  | The name of your zone, ex: all (String of characters) |

#### Add a TCP frontend to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `allowedSource` |  | The list of client IP addresses that have access to the Load Balancer (IPv4) |
| `dedicatedIpfo` |  | The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[]) |
| `defaultFarmId` |  | The default TCP farm identifier for your frontend (Number) |
| `defaultSslId` |  | The default SSL Certificate ID (Number) |
| `disabled` |  | If your TCP frontend is disabled or enabled (Boolean) |
| `displayName` |  | The name of your TCP frontend (String of characters) |
| `port` | Yes | The listening port on your frontend (Number, 1..65535) |
| `ssl` |  | Whether requests sent to the TCP farm should be encrypted with SSL or not (Boolean) |
| `zone` | Yes | The name of your zone, ex: all (String of characters) |

#### Get the details of a TCP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` | Yes | The identifier of your frontend TCP (Number) |

#### Modify the properties of a TCP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` | Yes | The identifier of your frontend TCP (Number) |
| `FrontendTcp.allowedSource` |  | The list of client IP addresses that have access to the Load Balancer (IPv4[]) |
| `FrontendTcp.dedicatedIpfo` |  | The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[]) |
| `FrontendTcp.defaultSslId` |  | The default SSL Certificate ID (Number) |
| `FrontendTcp.disabled` |  | If your HTTP frontend is disabled or enabled (Boolean) |
| `FrontendTcp.displayName` |  | The name of your HTTP frontend (String of characters) |
| `FrontendTcp.ssl` |  | Whether requests sent to the HTTP farm should be encrypted with SSL or not (Boolean) |

#### Delete a TCP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` | Yes | The identifier of your frontend (Number) |

### Routes TCP
Routes are evaluated one by one, testing their routing rules. The first route validating all its rules sees its action executed, and stops the evaluation of the remaining routes. The order of execution is defined by the type and weight of the route.

#### List TCP routes attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` |  | The identifier of a TCP frontend (Number) |

#### Add a new TCP route to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `action` | Yes | The action triggered when all the rules of your route are validated (RouteHttpAction) |
| `action.target` |  | The farm identifier, or the template for the URL (String of characters) |
| `action.type` |  | The action on your route (String of characters) |
| `displayName` |  | The name of your route (String of characters) |
| `frontendId` |  | The Identifier of the TCP frontend for which your route is applied (Number) |
| `weight` |  | The priority of your route. (Number) [0 - 255] |

#### Get the details of a TCP route

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your route (number) |

#### Modify the properties of a TCP route

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your route (number) |
| `routeTcp.action` |  | The action to carry out (routeTcpAction) |
| `routeTcp.target` |  | The farm identifier, or the template for the URL (String of characters) |
| `routeTcp.type` |  | The action on your route (String of characters) |
| `routeTcp.displayName` |  | The name of your route (String of characters) |
| `routeTcp.frontendId` |  | The TCP frontend for which your route is applied (Number) |
| `routeTcp.weight` |  | The priority of your route (Number) [0 - 255] |

#### Delete a TCP route

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your route (number) |

### Routing rules

#### List the routing rules attached to a TCP route

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your TCP route (Number) |

#### Add routing rules attached to a TCP route

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your TCP route (Number) |
| `field` | Yes | The name of the field to be tested with the "match" operator (String of characters) |
| `match` | Yes | The comparison operator (value) (contains, endsWith, exists, in, internal, is, matches, startsWith) |
| `negate` |  | The behavior of the :code:`match` operator is reversed. (Boolean) |
| `pattern` |  | The schema or the regular expression used by the "match" operator (Regex / String of characters) |
| `subField` |  | The name of the sub-field, if applicable. Can be a cookie or a header name, for example (String of characters) |

#### Get the details of a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your TCP route (Number) |
| `ruleId` | Yes | The identifier of your HTTP routing rule (Number) |

#### Modify the properties of a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your TCP route (Number) |
| `ruleId` | Yes | The identifier of your HTTP routing rule (Number) |
| `RouteRule.field` |  | The name of the field to be tested via the "match" operator (String of characters) |
| `RouteRule.match` |  | The comparison operator to use (contains, endsWith, exists, in, internal, is, matches, startsWith) |
| `RouteRule.negate` |  | If the "match" operator is inverted or not (Boolean) |
| `RouteRule.pattern` |  | The Value or regular expression to use with the "match" operator (Regex / String of characters) |
| `RouteRule.subField` |  | The name of the sub-field if applicable (String of characters) |

#### Delete a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `routeId` | Yes | The identifier of your TCP route (Number) |
| `ruleId` | Yes | The identifier of your HTTP routing rule (Number) |

## UDP Protocol
Access the UDP protocol elements (Frontend, Farm, etc.).

### UDP Farms

#### List UDP trusses attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `zone` |  | The name of your zone, ex: all (String of characters) |

#### Add a new UDP farm to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `displayName` |  | The name you wish to give to your farm (String of characters) |
| `port` |  | The listening port on your farm. Inherited from the frontend if not defined (Number, 1..65535) |
| `zone` | Yes | The name of your zone, ex: all (String of characters) |

#### Get the details of a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |

#### Modify the properties of a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |
| `BackendUdp.displayName` |  | The name of the farm (String of characters) |
| `BackendUdp.port` |  | The farm's listening port (Number, 1..65000) |

#### Delete a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |

### UDP Servers

#### List the servers linked to the UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |
| `address` |  | Filter Values by IPv4 address (IPv4) |
| `status` |  | Filter Values by Server Status (Value) |

#### Adding a server to a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `farmId` | Yes | The identifier of your farm (Number) |
| `address` | Yes | The IPv4 address of your server (IPv4) |
| `displayName` |  | The name given to your server (String of characters) |
| `port` |  | The listening port of your server. Inherited from your farm if not defined (Number, 1..65535) |
| `status` | Yes | If your server is activated or not (Boolean) |

#### Get the details of a server linked to a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `serverId` | Yes | The identifier of your server (Number) |
| `farmId` | Yes | The identifier of your farm (Number) |

#### Modify the properties of a UDP server

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `serverId` | Yes | The identifier of your server (Number) |
| `farmId` | Yes | The identifier of your farm (Number) |
| `BackendUdpServer.displayName` |  | The name of your server (String of characters) |
| `BackendUdpServer.port` |  | The listening port of your server (Number, 1..65535) |
| `BackendUdpServer.status` |  | If your server is activated or not (Boolean) |

#### Removing a server from a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `serverId` | Yes | The identifier of your server UDP (Number) |
| `farmId` | Yes | The identifier of your farm UDP (Number) |

### Frontends UDP

#### List UDP frontends attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `defaultFarmId` |  | The identifier of the UDP farm to which the UDP frontend is linked (Number) |
| `port` |  | The listening port on your frontend (Number, 1..65535) |
| `zone` |  | The name of your zone, ex: all (String of characters) |

#### Add a UDP frontend to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `dedicatedIpfo` |  | The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[]) |
| `defaultFarmId` | Yes | The default UDP farm identifier for your frontend (Number) |
| `disabled` |  | If your UDP frontend is disabled or enabled (Boolean) |
| `displayName` |  | The name of your UDP frontend (String of characters) |
| `port` | Yes | The listening port on your frontend (Number, 1..65535) |
| `zone` | Yes | The name of your zone, ex: all (String of characters) |

#### Get the details of a UDP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` | Yes | The identifier of your frontend UDP (Number) |

#### Modify the properties of a UDP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` | Yes | The identifier of your frontend UDP (Number) |
| `FrontendUdp.dedicatedIpfo` |  | The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[]) |
| `FrontendUdp.disabled` |  | If your UDP frontend is disabled or enabled (Boolean) |
| `FrontendUdp.displayName` |  | The name of your UDP frontend (String of characters) |

#### Delete a UDP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `frontendId` | Yes | The identifier of your frontend UDP (Number) |

## Other features

### Additional IP

#### List Additional IPs routed on a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/failover
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |

### Service Status

#### Obtenir l'état des instances d'un service OVHcloud Load Balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/instancesState
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |

#### List the output IPs used by OVH for NAT

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/natIp
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |

#### Apply changes to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/refresh
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |

### SSL Certificates

#### List SSL certificates of a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `fingerprint` |  | Lists the fingerprint of the SSL certificate (String of characters) |
| `serial` |  | Lists the identification number of the SSL certificate (String of characters) |
| `type` |  | Type of SSL certificate (Value) |

#### Add a new SSL object

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/ssl
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `certificate` | Yes | Adding the SSL certificate (String of characters) |
| `chain` |  | Adding the intermediate SSL certificate (String of characters) |
| `key` | Yes | Adding the private key (String of characters) |

#### Get the details of an SSL object

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl/{id}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `id` | Yes | The identifier of your SSL certificate (Number) |

#### Delete an SSL object

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `id` | Yes | The identifier of your SSL certificate (Number) |

### Tasks

#### List current tasks for a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `action` | Yes | Consultation of available tasks (Values) |

#### Get the details of a task

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task/{id}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `id` | Yes | The identifier of your task (Number) |

### Contact

#### Initiate a contact change

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/changeContact
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `contactAdmin` |  | The OVH NIC to be configured for the Admin contact of this service (String of characters) |
| `contactBilling` |  | The OVH NIC to be configured for the Admin contact of this service (String of characters) |
| `contactTech` |  | The OVH NIC to be configured for the Admin contact of this service (String of characters) |

### vRack

#### Description of the private networks attached to the load balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/vrack/network
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `subnet` |  | Allows to filter according to the network used |
| `vlan` |  | Allows to filter according to the vlan used |

#### Add a private network in the vRack

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/vrack/network
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `displayName` |  | The name you want to give to the network (String of characters) |
| `farmId` |  | Identification table of farms that you wish to attach to this private network |
| `natIp` |  | An IP block reserved for the load balancer to reach the servers. |
| `subnet` |  | The IP block of the private network |
| `vlan` |  | Vlan of the private network in the vRack. 0 if the private network is not in a vlan |

#### Retrieve, modify or delete a private network

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `vrackNetworkId` | Yes | The identifier of the private network |

#### Modify the list of farms attached to a private network

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters) |
| `vrackNetworkId` | Yes | The identifier of the private network |
| `farmId` | Yes | Table of farm identifiers that you wish to attach to this private network. The Value "null" removes the vrack network id from all farms where it was configured. |

## Go further

Interact with our user community on <https://community.ovh.com>.