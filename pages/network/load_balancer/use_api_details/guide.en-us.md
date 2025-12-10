---
title: Details of API functions
excerpt: Details of API functionalities
updated: 2025-09-29
---

<style>
:root > * {
  --md-api-get-color:#3a87ad;
  --md-api-get-bgcolor:#c9ddf6;
  --md-api-post-color:#468847;
  --md-api-post-bgcolor:#d1e7db;
  --md-api-put-color:#f89406;
  --md-api-put-bgcolor:#f7dec0;
  --md-api-delete-color:#b94a48;
  --md-api-delete-bgcolor:#f4c1bf;
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>');
  --md-shadow-z1:0 0.2rem 0.5rem #0000000d,0 0 0.05rem #0000001a;
  --md-shadow-z2:0 0.2rem 0.5rem #00000040,0 0 0.05rem #00000040;
  --md-shadow-z3:0 0.2rem 0.5rem #0006,0 0 0.05rem #00000059;
}
/* HOOK API */
.ovh-api {
  position:relative !important;
  width:calc(100% - 30px) !important;
  z-index:2 !important;
}
.ovh-api > p {
  display:none !important;
}
.ovh-api-main {
  align-items:center !important;
  border-radius:0 !important;
  box-shadow:none !important;
  display:flex !important;
  font-size:initial !important;
  margin:15px 0 !important;
  overflow:hidden !important;
  padding:0 !important;
  scrollbar-width:thin !important;
}
.ovh-api-main:hover {
  overflow-x:auto !important;
}
.ovh-api-main span {
  font-size:13px !important
}
.ovh-api-main a {
  align-items:center !important;
  display:inline-flex !important;
  height:30px !important;
  text-decoration:none !important;
}
.ovh-api-verb {
  align-items:center !important;
  border-radius:4px !important;
  color:#fff !important;
  display:flex !important;
  font-weight:700 !important;
  height:22px !important;
  justify-content:center !important;
  letter-spacing:1px !important;
  line-height:initial !important;
  margin:0 1ch 0 4px !important;
  padding:2px 0 0 !important;
  position:initial !important;
  text-shadow:none !important;
  vertical-align:initial !important;
  width:9ch !important;
}
.ovh-api-endpoint {
  display: inline !important;
  padding:3px 1ch 0 0 !important;
  white-space:nowrap !important;
}
/* DETAILS */
details {
  margin-top:-15px !important;
  position:relative !important;
}
details summary {
  cursor:pointer !important;
  height:32px !important;
  list-style:none !important;
  outline:none !important;
  position:absolute !important;
  right:0 !important;
  top:-32px !important;
  width:30px !important;
}
details > summary:before {
  background-color:#222c32 !important;
  content:'' !important;
  height:24px !important;
  left:3px !important;
  -webkit-mask-image:var(--md-details-icon) !important;
          mask-image:var(--md-details-icon) !important;
  -webkit-mask-position:center !important;
          mask-position:center !important;
  -webkit-mask-repeat:no-repeat !important;
          mask-repeat:no-repeat !important;
  -webkit-mask-size:contain !important;
          mask-size:contain !important;
  position:absolute !important;
  top:3px !important;
  transition:transform .25s !important;
  width:24px !important;
}
details > summary::-webkit-details-marker {
  /* Hides marker on Safari */
  display:none !important;
}
details[open] {
  border-radius:0 0 4px 4px !important;
  border-top:none !important;
  margin-top:-47px !important;
  padding:40px 15px 15px !important;
}
details[open] > summary {
  right:-1px !important;
  top:-1px !important;
}
details[open] > summary:before {
  transform: rotate(90deg) !important;
}
details p {
  margin:0 0 10px !important;
}
details h6 {
  font-size: 16px !important;
  font-weight:600 !important;
  margin:0 0 20px !important;
  text-transform:uppercase !important;
}
details sup {
  color: #900 !important;
  font-size: 24px !important;
  vertical-align: middle !important;
  padding: 18px 0 0 !important;
}
/* GET */
.ovh-api-main:has(.ovh-api-verb-GET) {
  border:1px solid var(--md-api-get-color) !important;
  border-right:0 !important;
}
.ovh-api-verb.ovh-api-verb-GET {
  background-color: var(--md-api-get-color) !important;
}
.ovh-api:has(.ovh-api-verb-GET) + details > summary {
  border:1px solid var(--md-api-get-color) !important;
  border-left:0 !important;
}
.ovh-api:has(.ovh-api-verb-GET) + details > summary:before {
  background-color:var(--md-api-get-color) !important;
}
.ovh-api:has(.ovh-api-verb-GET) + details[open] {
  border:1px solid var(--md-api-get-color) !important;
  box-shadow:var(--md-shadow-z2), inset 0 30px 0 var(--md-api-get-bgcolor) !important;
}
.ovh-api:has(.ovh-api-verb-GET):not(:has(+ details)) .ovh-api-main{
  border-right:1px solid var(--md-api-get-color) !important;
  width:calc(100% + 29px) !important;
}
/* POST */
.ovh-api-main:has(.ovh-api-verb-POST) {
  border:1px solid var(--md-api-post-color) !important;
  border-right:0 !important;
}
.ovh-api-verb.ovh-api-verb-POST {
  background-color: var(--md-api-post-color) !important;
}
.ovh-api:has(.ovh-api-verb-POST) + details > summary {
  border:1px solid var(--md-api-post-color) !important;
  border-left:0 !important;
}
.ovh-api:has(.ovh-api-verb-POST) + details > summary:before {
  background-color:var(--md-api-post-color) !important;
}
.ovh-api:has(.ovh-api-verb-POST) + details[open] {
  border:1px solid var(--md-api-post-color) !important;
  box-shadow:var(--md-shadow-z2), inset 0 30px 0 var(--md-api-post-bgcolor) !important;
}
.ovh-api:has(.ovh-api-verb-POST):not(:has(+ details)) .ovh-api-main{
  border-right:1px solid var(--md-api-post-color) !important;
  width:calc(100% + 29px) !important;
}
/* PUT */
.ovh-api-main:has(.ovh-api-verb-PUT) {
  border:1px solid var(--md-api-put-color) !important;
  border-right:0 !important;
}
.ovh-api-verb.ovh-api-verb-PUT {
  background-color: var(--md-api-put-color) !important;
}
.ovh-api:has(.ovh-api-verb-PUT) + details > summary {
  border:1px solid var(--md-api-put-color) !important;
  border-left:0 !important;
}
.ovh-api:has(.ovh-api-verb-PUT) + details > summary:before {
  background-color:var(--md-api-put-color) !important;
}
.ovh-api:has(.ovh-api-verb-PUT) + details[open] {
  border:1px solid var(--md-api-put-color) !important;
  box-shadow:var(--md-shadow-z2), inset 0 30px 0 var(--md-api-put-bgcolor) !important;
}
.ovh-api:has(.ovh-api-verb-PUT):not(:has(+ details)) .ovh-api-main{
  border-right:1px solid var(--md-api-put-color) !important;
  width:calc(100% + 29px) !important;
}
/* DELETE */
.ovh-api-main:has(.ovh-api-verb-DELETE) {
  border:1px solid var(--md-api-delete-color) !important;
  border-right:0 !important;
}
.ovh-api-verb.ovh-api-verb-DELETE {
  background-color: var(--md-api-delete-color) !important;
}
.ovh-api:has(.ovh-api-verb-DELETE) + details > summary {
  border:1px solid var(--md-api-delete-color) !important;
  border-left:0 !important;
}
.ovh-api:has(.ovh-api-verb-DELETE) + details > summary:before {
  background-color:var(--md-api-delete-color) !important;
}
.ovh-api:has(.ovh-api-verb-DELETE) + details[open] {
  border:1px solid var(--md-api-delete-color) !important;
  box-shadow:var(--md-shadow-z2), inset 0 30px 0 var(--md-api-delete-bgcolor) !important;
}
.ovh-api:has(.ovh-api-verb-DELETE):not(:has(+ details)) .ovh-api-main{
  border-right:1px solid var(--md-api-delete-color) !important;
  width:calc(100% + 29px) !important;
}
</style>

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

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

///

#### Modify a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

**Ip** ^*^

- **displayName**
The name you want to give to the service (String of characters)

- **sslConfiguration**
The SSL configuration you want to assign to the service (Value)

///

#### List the services attached to the OVHcloud Load Balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/allowedServers
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

///

#### List existing farms and their type

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/definedFarms
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

**vrackNetworkId**

Allows filtering according to the vrack network

///

#### List the areas that can be attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableServerZones
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

///

#### List the different probes that can be used

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFarmProbes
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

///

#### List the different types of farms that can be used

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFarmType
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

///

#### List the different types of frontends that can be used

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFrontendType
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

///

#### List the different types of routing actions that can be used

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteActions
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

///

#### List the different types of routing rules that can be used

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteRules
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

///

### Service

#### Get service information

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/serviceInfos
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

///

#### Modify service information

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/serviceInfos
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)

**Service** ^*^

- **automatic**
Enables automatic service renewal (Boolean))

- **deleteAtExpiration**
Enables the deletion of the service upon expiration. (Boolean)

- **forced**
Forces automatic renewal (Boolean)

- **period**
Fill in the renewal term (String of characters)

///

### Zones

#### List active zones for a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/zone
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, ex. : IP-1.2.3.4 (String of characters)

///

#### Get the details of a zone

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/zone/{name}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**name** ^*^

The name of the requested zone

///

#### Delete a zone

The service will be discontinued on the expiry date.

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/zone/{name}/terminate
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**name** ^*^

The service will be discontinued on the expiry date.

///

#### Undo the deletion of a zone

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**name** ^*^

The name of the zone to be deleted

///

## HTTP Protocol

Accessing HTTP protocol related elements (Frontend, Firmware, etc.).

### HTTP farms

#### List HTTP farms attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**zone**

The name of the zone (String of characters)

///

#### Adding a new HTTP farm to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**zone** ^*^

The name of the zone (String of characters)

**displayName**

The name you wish to give to your farm (String of characters)

**balance**

Your farm's load distribution method (Value)

**port**

The listening port on your farm. Inherited from the frontend if undefined (Number, 1..65535)

**stickiness**

The type of connection persistence to use for your farm (Value)

**probe**

The type of probe to use on your farm (Probe HTTP)

- **forceSsl**
SSL activation is forced for the probe (Boolean)

- **interval**
The interval in seconds between each probe test. Must be greater than 30. Default is 30. (Number)

- **match**
The method of correspondence used. default' uses the standard behavior of HAProxy. status' is only supported for HTTP probes (value) [contains, default, internal, matches, status]

- **negate**
The behavior of the 'match' operator is reversed (Boolean)

- **method**
The HTTP method used in type 'http'. HEAD' can save bandwidth. GET' by default (Value) [HEAD, GET, OPTIONS, internal]

- **pattern**
The format of the server response when "UP". Empty for 'default', comma separated status list for 'status', text for 'contains', regular expression for 'matches' (String of characters)

- **port**
The port that the probe should use to test the servers attached to your farm. Ignored for 'oco' probes. If not defined, the farm port is used (Number)

- **type**
The type of the probe; its operation (Value) [HTTP, internal, MySQL, OCO, PgSQL, SMTP, TCP]

- **url**
The address to be used by the probe for HTTP type probes. The type is ignored if this parameter is set to (String of characters)

///

#### Getting the details of an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your HTTP farm (Number)

///

#### Modify the properties of an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your HTTP farm (Number)

**BackendHttp** ^*^

- **displayName**
The name of the farm (String of characters)

- **balance**
The type of load distribution (Value)

- **port**
The farm's listening port (Number, 1..65000)

- **probe**
The type of probe to be used (HTTP probe)

- **stickiness**
The type of connection persistence (Value)

///

#### Delete an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your HTTP farm (Number)

///

### HTTP Servers

#### List the servers linked to the HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your HTTP farm (Number)

**cookie**

Filter Values by Cookie (String of characters)

**address**

Filter Values by IPv4 address (IPv4)

**status**

Filter Values by server status (Value)

///

#### Adding a server to an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

**address** ^*^

The IPv4 address of your server (IPv4)

**backup**

If your server is configured as a backup server (Boolean)

**chain**

The Value of the Intermediate SSL Certificate (String of characters)

**cookie**

The Value of your Cookie (String of characters)

**displayName**

The name given to your server (String of characters)

**port**

The listening port of your server. Inherited from your farm if not defined (Number, 1..65535)

**probe**

The type of probe to be used (Value)

**proxyProtocolVersion**

The proxyProtocol version to use,

see http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Value)

**ssl** ^*^

If the requests sent to your servers need to be encrypted with SSL (Boolean)

**weight** ^*^

The weight of your server for your farm. A server with high weight receives more requests (Number)

**status** ^*^

If your server is activated or not (Boolean)

///

#### Get the details of a server linked to an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**serverId** ^*^

The identifier of your server (Number)

**farmId** ^*^

The identifier of your farm (Number)

///

#### Modify the properties of an HTTP server

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**serverId** ^*^

The identifier of your server-link (Number)

**farmId** ^*^

The identifier of your farm (Number)

**BackendHttpServer** ^*^

- **backup**
If your server is configured as a backup server (Boolean)

- **chain**
The Value of the Intermediate SSL Certificate (String of characters)

- **cookie**
The Value of your Cookie (String of characters)

- **displayName**
The name of your server (String of characters)

- **port**
The listening port of your server (Number, 1..65535)

- **probe**
The type of probe to be used (Value)

- **proxyProtocolVersion**
The proxyProtocol version to use,

see http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Value)

- **ssl**
If the requests sent to your servers need to be encrypted with SSL (Boolean)

- **status**
If your server is activated or not (Boolean)

- **weight**
The weight of your server for your farm (Number)

///

#### Removing a server from an HTTP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**serverId** ^*^

The identifier of your server (Number)

**farmId** ^*^

The identifier of your farm (Number)

///

### Frontends HTTP

#### List HTTP frontends attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**defaultFarmId**

The identifier of the HTTP farm to which the HTTP frontend is linked (Number)

**port**

The listening port on your frontend (Number, 1..65535)

**zone**

The name of your zone, ex: all (String of characters)

///

#### Add an HTTP frontend to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**allowedSource**

The list of client IP addresses that have access to the Load Balancer (IPv4)

NB: the filtering is done at the Load Balancer level, so if the Load Balancer and the servers are not in a vRack, your servers are directly accessible from the Internet.

**dedicatedIpfo**

The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])

**defaultFarmId**

The default HTTP farm identifier for your frontend (Number)

**defaultSslId**

The default SSL Certificate ID (Number)

**disabled**

If your HTTP frontend is disabled or enabled (Boolean)

**displayName**

The name of your HTTP frontend (String of characters)

**hsts**

If support for *https strict, HTTP Strict Transport Security* is enabled or disabled (Boolean)

**httpHeader**

The custom *http* header to add (String of characters)

**port** ^*^

The listening port on your frontend (Number, 1..65535)

**redirectLocation**

The redirection URL *http* (String of characters)

**ssl**

Whether requests sent to the HTTP farm should be encrypted with SSL or not (Boolean)

**zone** ^*^

The name of your zone, ex: all (String of characters)

///

### Get the details of an HTTP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId** ^*^

The identifier of your HTTP frontend (Number)

///

#### Modify the properties of an HTTP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId** ^*^

The identifier of your HTTP frontend (Number)

**FrontendHttp** ^*^

- **allowedSource**
The list of client IP addresses that have access to the Load Balancer (IPv4[])

NB: the filtering is done at the Load Balancer level, so if the Load Balancer and the servers are not in a vRack, your servers are directly accessible from the Internet.

- **dedicatedIpfo**
The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])

- **defaultSslId**
The default SSL Certificate ID (Number)

- **disabled**
If your HTTP frontend is disabled or enabled (Boolean)

- **displayName**
The name of your HTTP frontend (String of characters)

- **hsts**
If support for *https strict, HTTP Strict Transport Security* is enabled or disabled (Boolean)

- **httpHeader**
The custom *http* header to add (String of characters)

- **ssl**
Whether requests sent to the HTTP farm should be encrypted with SSL or not (Boolean)

///

#### Delete an HTTP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId** ^*^

The identifier of your frontend (Number)

///

### Routes HTTP

Routes are evaluated one by one, testing their routing rules. The first route validating all its rules sees its action executed, and stops the evaluation of the remaining routes. The order of execution is defined by the type and weight of the route.

#### List the HTTP routes attached to a Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId**

The identifier of an HTTP frontend (Number)

///

#### Add a new HTTP route to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/route
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**action** ^*^

The action triggered when all the rules of your route are validated (RouteHttpAction)

- **status**
The expected HTTP return code (Number)

- **target**
The farm identifier, or the template for the URL (String of characters)

- **type**
The action on your route (String of characters)

**displayName**

The name of your route (String of characters)

**frontendId**

The Identifier of the HTTP frontend for which your route is applied (Number)

**weight**

The priority of your route. (Number) [0 - 255]
///

#### Get the details of an HTTP route

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your route (number)

///

#### Modify the properties of an HTTP route

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your route (number)

**routeHttp** ^*^

- **action** ^*^
The action triggered when all the rules of your route are validated (RouteHttpAction)

- **status**
The expected HTTP return code (Number)

- **target**
The farm identifier, or the template for the URL (String of characters)

- **type**
The action on your route (String of characters)

- **displayName**
The name of your route (String of characters)

- **frontendId**
The Identifier of the HTTP frontend for which your route is applied (Number)

- **weight**
The priority of your route. (Number) [0 - 255]
///

#### Delete an HTTP route

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your route (number)

///

### Routing rules

#### List the routing rules attached to an HTTP route

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your HTTP route (Number)

///

#### Add routing rules attached to an HTTP route

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your HTTP route (Number)

**field** ^*^

The name of the field to be tested with the "match" operator (String of characters)

**match** ^*^

The comparison operator (value) (contains, endsWith, exists, in, internal, is, matches, startsWith)

**negate**

The behavior of the operator :code:`match` is reversed (Boolean)

**pattern**

The schema or the regular expression used by the "match" operator (Regex / String of characters)

**subField**

The name of the sub-field, if applicable. Can be a cookie or a header name, for example (String of characters)

///

#### Get the details of a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your HTTP route (Number)

**ruleId** ^*^

The identifier of your HTTP routing rule (Number)

///

#### Modify the properties of a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your HTTP route (Number)

**ruleId** ^*^

The identifier of your HTTP routing rule (Number)

**RouteRule** ^*^

- **field**
The name of the field to be tested via the "match" operator (String of characters)

- **match**
The comparison operator to use (contains, endsWith, exists, in, internal, is, matches, startsWith)

- **negate**
If the "match" operator is inverted or not (Boolean)

- **pattern**
The Value or regular expression to use with the "match" operator (Regex / String of characters)

- **subField**
The name of the sub-field if applicable (String of characters)

///

#### Delete a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your HTTP route (Number)

**ruleId** ^*^

The identifier of your HTTP routing rule (Number)

///

## Protocol TCP

Access the elements related to the TCP protocol (Frontend, Farm, etc.).

### TCP Farms

#### List TCP farms attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**zone**

The name of your zone, ex: all (String of characters)

///

#### Add a new TCP farm to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**balance**

Your farm's load sharing method (Value)

**displayName**

The name you wish to give to your farm (String of characters)

**port**

The listening port on your farm. Inherited from the frontend if not defined (Number, 1..65535)

**probe**

The type of probe to use on your farm (HTTP probe)

- **forceSsl**
Activation of the SSL is forced for the probe (Boolean)

- **interval**
The interval (in seconds) between each probe test. Must be greater than 30. Default is 30 (Number)

- **match**
The method of correspondence used. default' uses the standard HAProxy behavior. status' is only supported for HTTP probes. (Value) (contains, default, internal, matches, status)

- **negate**
The behavior of the :code:`match` operator is reversed. (Boolean)

- **method**
The HTTP method used in :code:`type` 'http'. HEAD' can save bandwidth. GET' by default (Value) (HEAD, GET, OPTIONS, internal)

- **pattern**
server response when "UP". Empty for 'default', comma separated status list for 'status', text for 'contains', regular expression for 'matches'. (String of characters)

- **port**
The port that the probe should use to test the servers attached to your farm. Ignored for 'oco' probes. If not defined, the farm port is used (Number)

- **type**
The type of the probe; its operation (Value) (HTTP, internal, MySQL, OCO, PgSQL, SMTP ou TCP)

- **url**
The address to be used by the probe for HTTP type probes. The :code:`type` is ignored if this parameter is defined (String of characters)

**stickiness**

The type of connection persistence to use for your farm (Value)

**zone** ^*^

The name of your zone, ex: all (String of characters)

///

#### Get the details of a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

///

#### Modify the properties of a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

**BackendTcp** ^*^

- **balance**
The type of load distribution (Value)

- **displayName**
The name of the farm (String of characters)

- **port**
The farm's listening port (Number, 1..65000)

- **probe**
The type of probe to be used (Sonde TCP)

- **stickiness**
The type of connection persistence (Value)

///

#### Delete a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

///

### TCP Servers

#### List the servers linked to the TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

**cookie**

Filter Values by Cookie (String of characters)

**address**

Filter Values by IPv4 address (IPv4)

**status**

Filter Values by Server Status (Value)

///

#### Add a server to a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

**address** ^*^

The IPv4 address of your server (IPv4)

**backup**

If your server is configured as a backup server (Boolean)

**chain**

The Value of the Intermediate SSL Certificate (String of characters)

**displayName**

The name given to your server (String of characters)

**port**

The listening port of your server. Inherited from your farm if not defined (Number, 1..65535)

**probe**

The type of probe to be used (Value)

**proxyProtocolVersion**

The proxyProtocol version to use,

see http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Value)

**ssl** ^*^

If the requests sent to your servers need to be encrypted with SSL (Boolean)

**weight** ^*^

The weight of your server for your farm. A high weight server receives more requests (Number)

**status** ^*^

If your server is activated or not (Boolean)

///

#### Get the details of a server linked to a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**serverId** ^*^

The identifier of your server (Number)

**farmId** ^*^

The identifier of your farm (Number)

///

#### Modify the properties of a TCP server

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**serverId** ^*^

The identifier of your server-link (Number)

**farmId** ^*^

The identifier of your farm (Number)

**BackendTcpServer** ^*^

- **backup**
If your server is configured as a backup server (Boolean)

- **chain**
The Value of the Intermediate SSL Certificate (String of characters)

- **displayName**
The name of your server (String of characters)

- **port**
The listening port of your server (Number, 1..65535)

- **probe**
The type of probe to be used (Value)

- **proxyProtocolVersion**
The proxyProtocol version to use,

see http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Value  )

- **ssl**
If the requests sent to your servers need to be encrypted with SSL (Boolean)

- **status**
If your server is activated or not (Boolean)

- **weight**
The weight of your server for your farm (Number)

///

#### Delete a server from a TCP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**serverId** ^*^

The identifier of your server (Number)

**farmId** ^*^

The identifier of your farm (Number)

///

### Frontends TCP

#### List TCP frontends attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**defaultFarmId**

The identifier of the TCP farm to which the TCP frontend is linked (Number)

**port**

The listening port on your frontend (Number, 1..65535)

**zone**

The name of your zone, ex: all (String of characters)

///

#### Add a TCP frontend to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/frontend
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**allowedSource**

The list of client IP addresses that have access to the Load Balancer (IPv4)

**dedicatedIpfo**

The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])

**defaultFarmId**

The default TCP farm identifier for your frontend (Number)

**defaultSslId**

The default SSL Certificate ID (Number)

**disabled**

If your TCP frontend is disabled or enabled (Boolean)

**displayName**

The name of your TCP frontend (String of characters)

**port** ^*^

The listening port on your frontend (Number, 1..65535)

**ssl**

Whether requests sent to the TCP farm should be encrypted with SSL or not (Boolean)

**zone** ^*^

The name of your zone, ex: all (String of characters)

///

#### Get the details of a TCP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId** ^*^

The identifier of your frontend TCP (Number)

///

#### Modify the properties of a TCP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId** ^*^

The identifier of your frontend TCP (Number)

**FrontendTcp** ^*^

- **allowedSource**
The list of client IP addresses that have access to the Load Balancer (IPv4[])

- **dedicatedIpfo**
The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])

- **defaultSslId**
The default SSL Certificate ID (Number)

- **disabled**
If your HTTP frontend is disabled or enabled (Boolean)

- **displayName**
The name of your HTTP frontend (String of characters)

- **ssl**
Whether requests sent to the HTTP farm should be encrypted with SSL or not (Boolean)

///

#### Delete a TCP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId** ^*^

The identifier of your frontend (Number)

///

### Routes TCP

Routes are evaluated one by one, testing their routing rules. The first route validating all its rules sees its action executed, and stops the evaluation of the remaining routes. The order of execution is defined by the type and weight of the route.

#### List TCP routes attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId**

The identifier of a TCP frontend (Number)

///

#### Add a new TCP route to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**action** ^*^

The action triggered when all the rules of your route are validated (RouteHttpAction)

- **target**
The farm identifier, or the template for the URL (String of characters)

- **type**
The action on your route (String of characters)

**displayName**

The name of your route (String of characters)

**frontendId**

The Identifier of the TCP frontend for which your route is applied (Number)

**weight**

The priority of your route. (Number) [0 - 255]
///

#### Get the details of a TCP route

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your route (number)

///

#### Modify the properties of a TCP route

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your route (number)

**routeTcp** ^*^

- **action**
The action to carry out (routeTcpAction)

- **target**
The farm identifier, or the template for the URL (String of characters)

- **type**
The action on your route (String of characters)

- **displayName**
The name of your route (String of characters)

- **frontendId**
The TCP frontend for which your route is applied (Number)

- **weight**
The priority of your route (Number) [0 - 255]
///

#### Delete a TCP route

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your route (number)

///

### Routing rules

#### List the routing rules attached to a TCP route

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your TCP route (Number)

///

#### Add routing rules attached to a TCP route

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your TCP route (Number)

**field** ^*^

The name of the field to be tested with the "match" operator (String of characters)

**match** ^*^

The comparison operator (value) (contains, endsWith, exists, in, internal, is, matches, startsWith)

**negate**

The behavior of the :code:`match` operator is reversed. (Boolean)

**pattern**

The schema or the regular expression used by the "match" operator (Regex / String of characters)

**subField**

The name of the sub-field, if applicable. Can be a cookie or a header name, for example (String of characters)

///

#### Get the details of a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your TCP route (Number)

**ruleId** ^*^

The identifier of your HTTP routing rule (Number)

///

#### Modify the properties of a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your TCP route (Number)

**ruleId** ^*^

The identifier of your HTTP routing rule (Number)

**RouteRule** ^*^

- **field**
The name of the field to be tested via the "match" operator (String of characters)

- **match**
The comparison operator to use (contains, endsWith, exists, in, internal, is, matches, startsWith)

- **negate**
If the "match" operator is inverted or not (Boolean)

- **pattern**
The Value or regular expression to use with the "match" operator (Regex / String of characters)

- **subField**
The name of the sub-field if applicable (String of characters)

///

#### Delete a routing rule

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**routeId** ^*^

The identifier of your TCP route (Number)

**ruleId** ^*^

The identifier of your HTTP routing rule (Number)

///

## UDP Protocol

Access the UDP protocol elements (Frontend, Farm, etc.).

### UDP Farms

#### List UDP trusses attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**zone**

The name of your zone, ex: all (String of characters)

///

#### Add a new UDP farm to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**displayName**

The name you wish to give to your farm (String of characters)

**port**

The listening port on your farm. Inherited from the frontend if not defined (Number, 1..65535)

**zone** ^*^

The name of your zone, ex: all (String of characters)

///

#### Get the details of a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

///

#### Modify the properties of a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

**BackendUdp** ^*^

- **displayName**
The name of the farm (String of characters)

- **port**
The farm's listening port (Number, 1..65000)

///

#### Delete a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

///

### UDP Servers

#### List the servers linked to the UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

**address**

Filter Values by IPv4 address (IPv4)

**status**

Filter Values by Server Status (Value)

///

#### Adding a server to a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**farmId** ^*^

The identifier of your farm (Number)

**address** ^*^

The IPv4 address of your server (IPv4)

**displayName**

The name given to your server (String of characters)

**port**

The listening port of your server. Inherited from your farm if not defined (Number, 1..65535)

**status** ^*^

If your server is activated or not (Boolean)

///

#### Get the details of a server linked to a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**serverId** ^*^

The identifier of your server (Number)

**farmId** ^*^

The identifier of your farm (Number)

///

#### Modify the properties of a UDP server

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**serverId** ^*^

The identifier of your server (Number)

**farmId** ^*^

The identifier of your farm (Number)

**BackendUdpServer** ^*^

- **displayName**
The name of your server (String of characters)

- **port**
The listening port of your server (Number, 1..65535)

- **status**
If your server is activated or not (Boolean)

///

#### Removing a server from a UDP farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**serverId** ^*^

The identifier of your server UDP (Number)

**farmId** ^*^

The identifier of your farm UDP (Number)

///

### Frontends UDP

#### List UDP frontends attached to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**defaultFarmId**

The identifier of the UDP farm to which the UDP frontend is linked (Number)

**port**

The listening port on your frontend (Number, 1..65535)

**zone**

The name of your zone, ex: all (String of characters)

///

#### Add a UDP frontend to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/frontend
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**dedicatedIpfo**

The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])

**defaultFarmId** ^*^

The default UDP farm identifier for your frontend (Number)

**disabled**

If your UDP frontend is disabled or enabled (Boolean)

**displayName**

The name of your UDP frontend (String of characters)

**port** ^*^

The listening port on your frontend (Number, 1..65535)

**zone** ^*^

The name of your zone, ex: all (String of characters)

///

#### Get the details of a UDP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId** ^*^

The identifier of your frontend UDP (Number)

///

#### Modify the properties of a UDP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId** ^*^

The identifier of your frontend UDP (Number)

**FrontendUdp** ^*^

- **dedicatedIpfo**
The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])

- **disabled**
If your UDP frontend is disabled or enabled (Boolean)

- **displayName**
The name of your UDP frontend (String of characters)

///

#### Delete a UDP frontend

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**frontendId** ^*^

The identifier of your frontend UDP (Number)

///

## Other features

### Additional IP

#### List Additional IPs routed on a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/failover
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

///

### Service Status

#### Obtenir l'état des instances d'un service OVHcloud Load Balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/instancesState
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

///

#### List the output IPs used by OVH for NAT

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/natIp
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

///

#### Apply changes to a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/refresh
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

///

### SSL Certificates

#### List SSL certificates of a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**fingerprint**

Lists the fingerprint of the SSL certificate (String of characters)

**serial**

Lists the identification number of the SSL certificate (String of characters)

**type**

Type of SSL certificate (Value)

///

#### Add a new SSL object

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/ssl
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**certificate** ^*^

Adding the SSL certificate (String of characters)

**chain**

Adding the intermediate SSL certificate (String of characters)

**key** ^*^

Adding the private key (String of characters)

///

#### Get the details of an SSL object

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl/{id}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**id** ^*^

The identifier of your SSL certificate (Number)

///

#### Delete an SSL object

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**id** ^*^

The identifier of your SSL certificate (Number)

///

### Tasks

#### List current tasks for a OVHcloud Load Balancer service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**action** ^*^

Consultation of available tasks (Values)

///

#### Get the details of a task

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task/{id}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**id** ^*^

The identifier of your task (Number)

///

### Contact

#### Initiate a contact change

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/changeContact
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**contactAdmin**

The OVH NIC to be configured for the Admin contact of this service (String of characters)

**contactBilling**

The OVH NIC to be configured for the Admin contact of this service (String of characters)

**contactTech**

The OVH NIC to be configured for the Admin contact of this service (String of characters)

///

### vRack

#### Description of the private networks attached to the load balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/vrack/network
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**subnet**

Allows to filter according to the network used

**vlan**

Allows to filter according to the vlan used

///

#### Add a private network in the vRack

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/vrack/network
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**displayName**

The name you want to give to the network (String of characters)

**farmId**

Identification table of farms that you wish to attach to this private network

**natIp**

An IP block reserved for the load balancer to reach the servers.

**subnet**

The IP block of the private network

**vlan**

Vlan of the private network in the vRack. 0 if the private network is not in a vlan

///

#### Retrieve a private network

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**vrackNetworkId** ^*^

The identifier of the private network

///

#### Modify a private network

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**vrackNetworkId** ^*^

The identifier of the private network

///

#### Delete a private network

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**vrackNetworkId** ^*^

The identifier of the private network

///

#### Modify the list of farms attached to a private network

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
>

/// details | &nbsp;

<h6>Paramètres :</h6>

**serviceName** ^*^

The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)

**vrackNetworkId** ^*^

The identifier of the private network

**farmId** ^*^

Table of farm identifiers that you wish to attach to this private network. The Value "null" removes the vrack network id from all farms where it was configured.

///

## Go further

Interact with our user community on <https://community.ovh.com.

