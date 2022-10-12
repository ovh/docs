---
title: Details of API functions
slug: api-details
excerpt: Details of API functionalities
section: Getting started
---

## Objective

Description of the different input points in the API for the Load Balancer OVH.

## Prerequisite

## In Practice

### Manage your Load Balancer OVH service via the API

Details of the API functionality for the Load Balancer OVH

- All API calls are made in the section */ipLoadbalancing* available here : [https://ca.api.ovh.com/console/#/ipLoadbalancing](https://ca.api.ovh.com/console/#/ipLoadbalancing){.external}.



> [!warning]
>
> Caution, for compatibility reasons, the entry point of the former
> system Load Balancer OVH is always present in the API /ip/loadBalancing,
> not to be confused with the new /ipLoadbalancing.
> 


> [!primary]
>
> In the calls below all fields marked with an asterisk *
> are mandatory.
> 



> [!primary]
>
> The Frontend, Farm and Server are specific to the
> protocol (among HTTP, TCP or UDP) in which they are defined.
> Although they can be "combined" with each other, this is only possible within
> of the same protocol. Thus, it is not possible to use a Frontend
> UDP with an HTTP Farm. But it is possible (in the absence of other
> limitation) to use an HTTP Frontend with an HTTP Farm.
> 


## Services and zones

### Load Balancer OVH

#### List active services

> [!api]
>
> @api {GET} /ipLoadbalancing
> 

#### List the zones available for the Load Balancer OVH

> [!api]
>
> @api {GET} /ipLoadbalancing/availableZones
> 

#### Return details of a Load Balancer OVH service

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}
>> >
>>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>

#### Modify a Load Balancer OVH service

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>> >
>> > **Ip** *
>> >
>> >> **displayName**
>> >> >
>> >> > The name you want to give to the service (String of characters)
>> >
>> >> **sslConfiguration**
>> >>
>> >> > The SSL configuration you want to assign to the service (Value)
>

#### List the services attached to the Load Balancer OVH

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/allowedServers
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>

#### List existing farms and their type

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/definedFarms
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>> >
>> > **vrackNetworkId**
>> >
>> >> Allows filtering according to the vrack network
>

#### List the areas that can be attached to a Load Balancer OVH service

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableServerZones
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>

#### List the different probes that can be used

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableFarmProbes
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>

#### List the different types of farms that can be used

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableFarmType
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>

#### List the different types of frontends that can be used

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableFrontendType
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>

#### List the different types of routing actions that can be used

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableRouteActions
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>

#### List the different types of routing rules that can be used

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableRouteRules
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>

### Service

#### Get service information

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/serviceInfos
>> >
>>
>
> Parameters:
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>

#### Modify service information

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/serviceInfos
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex: IP-1.2.3.4 (String of characters)
>> >
>> > **Service** *
>> >
>> >> - **automatic**
>> >> >
>> >> > Enables automatic service renewal (Boolean))
>> >>
>> >> - **deleteAtExpiration**
>> >> >
>> >> > Enables the deletion of the service upon expiration. (Boolean)
>> >>
>> >> - **forced**
>> >> >
>> >> > Forces automatic renewal (Boolean)
>> >>
>> >> - **period**
>> >> >
>> >> > Fill in the renewal term (String of characters)
>

### Zones

#### List active zones for a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/zone
>> > 
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, ex. : IP-1.2.3.4 (String of characters)
>

#### Get the details of a zone

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/zone/{name}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **name** *
>> >
>> >> The name of the requested zone
>

#### Delete a zone

The service will be discontinued on the expiry date.

> [!faq]
>
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/zone/{name}/terminate
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for exemple : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **name** *
>> >
>> >> The service will be discontinued on the expiry date.
>

#### Undo the deletion of a zone

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **name** *
>> >
>> >> The name of the zone to be deleted
>

## HTTP Protocol
Accessing HTTP protocol related elements (Frontend, Firmware, etc.).


### HTTP farms


#### List HTTP farms attached to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/farm
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **zone**
>> >
>> >> The name of the zone (String of characters)
>

#### Adding a new HTTP farm to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/http/farm
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **zone** *
>> >
>> >> The name of the zone (String of characters)
>> >
>> > **displayName**
>> >
>> >> The name you wish to give to your farm (String of characters)
>> >
>> > **balance**
>> >>
>> >> Your farm's load distribution method (Value)
>> >
>> > **port**
>> >
>> >> The listening port on your farm. Inherited from the frontend if undefined (Number, 1..65535)
>> >
>> > **stickiness**
>> >
>> >> The type of connection persistence to use for your farm (Value)
>> >
>> > **probe**
>> >
>> >> The type of probe to use on your farm (Probe HTTP)
>> >> >
>> >> > - **forceSsl**
>> >> >
>> >> >> SSL activation is forced for the probe (Boolean)
>> >> >
>> >> > - **interval**
>> >> >
>> >> >> The interval in seconds between each probe test. Must be greater than 30. Default is 30. (Number)
>> >> >
>> >> > - **match**
>> >> >
>> >> >> The method of correspondence used. default' uses the standard behavior of HAProxy. status' is only supported for HTTP probes (value) [contains, default, internal, matches, status]
>> >> >
>> >> > - **negate**
>> >> >
>> >> >> The behavior of the 'match' operator is reversed (Boolean)
>> >> >
>> >> > - **method**
>> >> >
>> >> >> The HTTP method used in type 'http'. HEAD' can save bandwidth. GET' by default (Value) [HEAD, GET, OPTIONS, internal]
>> >> >
>> >> > - **pattern**
>> >> >
>> >> >> The format of the server response when "UP". Empty for 'default', comma separated status list for 'status', text for 'contains', regular expression for 'matches' (String of characters)
>> >> >
>> >> > - **port**
>> >> >
>> >> >> The port that the probe should use to test the servers attached to your farm. Ignored for 'oco' probes. If not defined, the farm port is used (Number)
>> >> >
>> >> > - **type**
>> >> >
>> >> >> The type of the probe; its operation (Value) [HTTP, internal, MySQL, OCO, PgSQL, SMTP, TCP]
>> >> >
>> >> > - **url**
>> >> >
>> >> >> The address to be used by the probe for HTTP type probes. The type is ignored if this parameter is set to (String of characters)
>

#### Getting the details of an HTTP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your HTTP farm (Number)
>

#### Modify the properties of an HTTP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your HTTP farm (Number)
>> >
>> > **BackendHttp** *
>> >
>> >> - **displayName**
>> >> >
>> >> > The name of the farm (String of characters)
>> >>
>> >> - **balance**
>> >> >
>> >> > The type of load distribution (Value)
>> >>
>> >> - **port**
>> >> >
>> >> > The farm's listening port (Number, 1..65000)
>> >>
>> >> - **probe**
>> >> >
>> >> > The type of probe to be used (HTTP probe)
>> >>
>> >> - **stickiness**
>> >> >
>> >> > The type of connection persistence (Value)
>

#### Delete an HTTP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your HTTP farm (Number)
>

### HTTP Servers

#### List the servers linked to the HTTP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your HTTP farm (Number)
>> >
>> > **cookie**
>> >
>> >> Filter Values by Cookie (String of characters)
>> >
>> > **address**
>> >
>> >> Filter Values by IPv4 address (IPv4)
>> >
>> > **status**
>> >
>> >> Filter Values by server status (Value)
>

#### Adding a server to an HTTP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>> >
>> > **address** *
>> >
>> >> The IPv4 address of your server (IPv4)
>> >
>> > **backup**
>> >
>> >> If your server is configured as a backup server (Boolean)
>> >
>> > **chain**
>> >
>> >> The Value of the Intermediate SSL Certificate (String of characters)
>> >
>> > **cookie**
>> >
>> >> The Value of your Cookie (String of characters)
>> >
>> > **displayName**
>> >
>> >> The name given to your server (String of characters)
>> >
>> > **port**
>> >
>> >> The listening port of your server. Inherited from your farm if not defined (Number, 1..65535)
>> >
>> > **probe**
>> >
>> >> The type of probe to be used (Value)
>> >
>> > **proxyProtocolVersion**
>> >
>> >> The proxyProtocol version to use,
>> >>            see http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Value)
>> >
>> > **ssl** *
>> >
>> >> If the requests sent to your servers need to be encrypted with SSL (Boolean)
>> >
>> > **weight** *
>> >
>> >> The weight of your server for your farm. A server with high weight receives more requests (Number)
>> >
>> > **status** *
>> >
>> >> If your server is activated or not (Boolean)
>

#### Get the details of a server linked to an HTTP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **serverId** *
>> >
>> >> The identifier of your server (Number)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>

#### Modify the properties of an HTTP server

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **serverId** *
>> >
>> >> The identifier of your server-link (Number)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>> >
>> > **BackendHttpServer** *
>> >
>> >> - **backup**
>> >> >
>> >> > If your server is configured as a backup server (Boolean)
>> >>
>> >> - **chain**
>> >> >
>> >> > The Value of the Intermediate SSL Certificate (String of characters)
>> >>
>> >> - **cookie**
>> >> >
>> >> > The Value of your Cookie (String of characters)
>> >>
>> >> - **displayName**
>> >> >
>> >> > The name of your server (String of characters)
>> >>
>> >> - **port**
>> >> >
>> >> > The listening port of your server (Number, 1..65535)
>> >>
>> >> - **probe**
>> >> >
>> >> > The type of probe to be used (Value)
>> >>
>> >> - **proxyProtocolVersion**
>> >> >
>> >> > The proxyProtocol version to use,
>> >> > see http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Value)
>> >>
>> >> - **ssl**
>> >> >
>> >> > If the requests sent to your servers need to be encrypted with SSL (Boolean)
>> >>
>> >> - **status**
>> >> >
>> >> > If your server is activated or not (Boolean)
>> >>
>> >> - **weight**
>> >> >
>> >> > The weight of your server for your farm (Number)
>

#### Removing a server from an HTTP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **serverId** *
>> >
>> >> The identifier of your server (Number)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>

### Frontends HTTP

#### List HTTP frontends attached to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/frontend
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **defaultFarmId**
>> >
>> >> The identifier of the HTTP farm to which the HTTP frontend is linked (Number)
>> >
>> > **port**
>> >
>> >> The listening port on your frontend (Number, 1..65535)
>> >
>> > **zone**
>> >
>> >> The name of your zone, ex: all (String of characters)
>

#### Add an HTTP frontend to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/http/frontend
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **allowedSource**
>> >
>> >> The list of client IP addresses that have access to the Load Balancer (IPv4)
>> >>
>> >> NB: the filtering is done at the Load Balancer level, so if the Load Balancer and the servers are not in a vRack, your servers are directly accessible from the Internet.
>> >
>> > **dedicatedIpfo**
>> >
>> >> The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])
>> >
>> > **defaultFarmId**
>> >
>> >> The default HTTP farm identifier for your frontend (Number)
>> >
>> > **defaultSslId**
>> >
>> >> The default SSL Certificate ID (Number)
>> >
>> > **disabled**
>> >
>> >> If your HTTP frontend is disabled or enabled (Boolean)
>> >
>> > **displayName**
>> >
>> >> The name of your HTTP frontend (String of characters)
>> >
>> > **hsts**
>> >
>> >> If support for *https strict, HTTP Strict Transport Security* is enabled or disabled (Boolean)
>> >
>> > **httpHeader**
>> >
>> >> The custom *http* header to add (String of characters)
>> >
>> > **port** *
>> >
>> >> The listening port on your frontend (Number, 1..65535)
>> >
>> > **redirectLocation**
>> >
>> >> The redirection URL *http* (String of characters)
>> >
>> > **ssl**
>> >
>> >> Whether requests sent to the HTTP farm should be encrypted with SSL or not (Boolean)
>> >
>> > **zone** *
>> >
>> >> The name of your zone, ex: all (String of characters)
>

### Get the details of an HTTP frontend

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **frontendId** *
>> >
>> >> The identifier of your HTTP frontend (Number)
>

#### Modify the properties of an HTTP frontend

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **frontendId** *
>> >
>> >> The identifier of your HTTP frontend (Number)
>> >
>> > **FrontendHttp** *
>> >
>> >> - **allowedSource**
>> >> >
>> >> > The list of client IP addresses that have access to the Load Balancer (IPv4[])
>> >> >
>> >> > NB: the filtering is done at the Load Balancer level, so if the Load Balancer and the servers are not in a vRack, your servers are directly accessible from the Internet.
>> >>
>> >> - **dedicatedIpfo** 
>> >> >
>> >> > The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])
>> >>
>> >> - **defaultSslId**
>> >> >
>> >> > The default SSL Certificate ID (Number)
>> >>
>> >> - **disabled** 
>> >> >
>> >> > If your HTTP frontend is disabled or enabled (Boolean)
>> >>
>> >> - **displayName** 
>> >> >
>> >> > The name of your HTTP frontend (String of characters)
>> >>
>> >> - **hsts** 
>> >> >
>> >> > If support for *https strict, HTTP Strict Transport Security* is enabled or disabled (Boolean)
>> >>
>> >> - **httpHeader** 
>> >> >
>> >> > The custom *http* header to add (String of characters)
>> >>
>> >> - **ssl** 
>> >> >
>> >> > Whether requests sent to the HTTP farm should be encrypted with SSL or not (Boolean)
>

#### Delete an HTTP frontend

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **frontendId** *
>> >
>> >> The identifier of your frontend (Number)
>

### Routes HTTP
Routes are evaluated one by one, testing their routing rules. The first route validating all its rules sees its action executed, and stops the evaluation of the remaining routes. The order of execution is defined by the type and weight of the route.


#### List the HTTP routes attached to a Load Balancer service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/route
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **frontendId**
>> >
>> >> The identifier of an HTTP frontend (Number)
>

#### Add a new HTTP route to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/http/route
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **action** *
>> >
>> >> The action triggered when all the rules of your route are validated (RouteHttpAction)
>> >>
>> >> - **status** 
>> >>
>> >> > The expected HTTP return code (Number)
>> >>
>> >> - **target** 
>> >>
>> >> > The farm identifier, or the template for the URL (String of characters)
>> >>
>> >> - **type** 
>> >>
>> >> > The action on your route (String of characters)
>> >
>> > **displayName**
>> >
>> >> The name of your route (String of characters)
>> >
>> > **frontendId**
>> >
>> >> The Identifier of the HTTP frontend for which your route is applied (Number)
>> >
>> > **weight**
>> >
>> >> The priority of your route. (Number) [0 - 255]
>

#### Get the details of an HTTP route

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your route (number)
>

#### Modify the properties of an HTTP route

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/route/{routeId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your route (number)
>> >
>> > **routeHttp** *
>> >
>> >> **action** *
>> >>
>> >> > The action triggered when all the rules of your route are validated (RouteHttpAction)
>> >> >
>> >> > - **status** 
>> >> >
>> >> >> The expected HTTP return code (Number)
>> >> >
>> >> > - **target** 
>> >> >
>> >> >> The farm identifier, or the template for the URL (String of characters)
>> >> >
>> >> > - **type** 
>> >> >
>> >> >> The action on your route (String of characters)
>> >>
>> >> **displayName**
>> >>
>> >> > The name of your route (String of characters)
>> >>
>> >> **frontendId**
>> >>
>> >> > The Identifier of the HTTP frontend for which your route is applied (Number)
>> >>
>> >> **weight**
>> >>
>> >> > The priority of your route. (Number) [0 - 255]
>

#### Delete an HTTP route

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/http/route/{routeId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your route (number)
>

### Routing rules

#### List the routing rules attached to an HTTP route

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your HTTP route (Number)
>

#### Add routing rules attached to an HTTP route

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your HTTP route (Number)
>> >
>> > **field** *
>> >
>> >> The name of the field to be tested with the "match" operator (String of characters)
>> >
>> > **match** *
>> >
>> >> The comparison operator (value) (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >
>> > **negate**
>> >
>> >> The behavior of the operator :code:`match` is reversed (Boolean)
>> >
>> > **pattern**
>> >
>> >> The schema or the regular expression used by the "match" operator (Regex / String of characters)
>> >
>> > **subField**
>> >
>> >> The name of the sub-field, if applicable. Can be a cookie or a header name, for example (String of characters)
>

#### Get the details of a routing rule

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your HTTP route (Number)
>> >
>> > **ruleId** *
>> >
>> >> The identifier of your HTTP routing rule (Number)
>

#### Modify the properties of a routing rule

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your HTTP route (Number)
>> >
>> > **ruleId** *
>> >
>> >> The identifier of your HTTP routing rule (Number)
>> >
>> > **RouteRule** *
>> >
>> >> - **field**
>> >>
>> >> > The name of the field to be tested via the "match" operator (String of characters)
>> >>
>> >> - **match** 
>> >>
>> >> > The comparison operator to use (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >>
>> >> - **negate** 
>> >>
>> >> > If the "match" operator is inverted or not (Boolean)
>> >>
>> >> - **pattern** 
>> >>
>> >> > The Value or regular expression to use with the "match" operator (Regex / String of characters)
>> >>
>> >> - **subField** 
>> >>
>> >> > The name of the sub-field if applicable (String of characters)
>

#### Delete a routing rule

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your HTTP route (Number)
>> >
>> > **ruleId** *
>> >
>> >> The identifier of your HTTP routing rule (Number)
>

## Protocol TCP
Access the elements related to the TCP protocol (Frontend, Farm, etc.).


### TCP Farms

#### List TCP farms attached to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **zone**
>> >
>> >> The name of your zone, ex: all (String of characters)
>

#### Add a new TCP farm to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/farm
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **balance**
>> >
>> >> Your farm's load sharing method (Value)
>> >
>> > **displayName**
>> >
>> >> The name you wish to give to your farm (String of characters)
>> >
>> > **port**
>> >
>> >> The listening port on your farm. Inherited from the frontend if not defined (Number, 1..65535)
>> >
>> > **probe**
>> >
>> >> The type of probe to use on your farm (HTTP probe)
>> >>
>> >> - **forceSsl**
>> >>
>> >> > Activation of the SSL is forced for the probe (Boolean)
>> >>
>> >> - **interval**
>> >>
>> >> > The interval (in seconds) between each probe test. Must be greater than 30. Default is 30 (Number)
>> >>
>> >> - **match**
>> >>
>> >> > The method of correspondence used. default' uses the standard HAProxy behavior. status' is only supported for HTTP probes. (Value) (contains, default, internal, matches, status)
>> >>
>> >> - **negate**
>> >>
>> >> > The behavior of the :code:`match` operator is reversed. (Boolean)
>> >>
>> >> - **method**
>> >>
>> >> > The HTTP method used in :code:`type` 'http'. HEAD' can save bandwidth. GET' by default (Value) (HEAD, GET, OPTIONS, internal)
>> >>
>> >> - **pattern**
>> >>
>> >> > server response when "UP". Empty for 'default', comma separated status list for 'status', text for 'contains', regular expression for 'matches'. (String of characters)
>> >>
>> >> - **port**
>> >>
>> >> > The port that the probe should use to test the servers attached to your farm. Ignored for 'oco' probes. If not defined, the farm port is used (Number)
>> >>
>> >> - **type**
>> >>
>> >> > The type of the probe; its operation (Value) (HTTP, internal, MySQL, OCO, PgSQL, SMTP ou TCP)
>> >>
>> >> - **url**
>> >>
>> >> > The address to be used by the probe for HTTP type probes. The :code:`type` is ignored if this parameter is defined (String of characters)
>> >>
>> > **stickiness**
>> >
>> >> The type of connection persistence to use for your farm (Value)
>> >
>> > **zone** *
>> >
>> >> The name of your zone, ex: all (String of characters)
>

#### Get the details of a TCP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>

#### Modify the properties of a TCP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>> >
>> > **BackendTcp** *
>> >
>> >> - **balance**
>> >>
>> >> > The type of load distribution (Value)
>> >>
>> >> - **displayName** 
>> >>
>> >> > The name of the farm (String of characters)
>> >>
>> >> - **port** 
>> >>
>> >> > The farm's listening port (Number, 1..65000)
>> >>
>> >> - **probe** 
>> >>
>> >> > The type of probe to be used (Sonde TCP)
>> >>
>> >> - **stickiness** 
>> >>
>> >> > The type of connection persistence (Value)
>

#### Delete a TCP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>

### TCP Servers

#### List the servers linked to the TCP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>> >
>> > **cookie**
>> >
>> >> Filter Values by Cookie (String of characters)
>> >
>> > **address**
>> >
>> >> Filter Values by IPv4 address (IPv4)
>> >
>> > **status**
>> >
>> >> Filter Values by Server Status (Value)
>

#### Add a server to a TCP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>> >
>> > **address** *
>> >
>> >> The IPv4 address of your server (IPv4)
>> >
>> > **backup**
>> >
>> >> If your server is configured as a backup server (Boolean)
>> >
>> > **chain**
>> >
>> >> The Value of the Intermediate SSL Certificate (String of characters)
>> >
>> > **displayName**
>> >
>> >> The name given to your server (String of characters)
>> >
>> > **port**
>> >
>> >> The listening port of your server. Inherited from your farm if not defined (Number, 1..65535)
>> >
>> > **probe**
>> >
>> >> The type of probe to be used (Value)
>> >
>> > **proxyProtocolVersion**
>> >
>> >> The proxyProtocol version to use,
>> >> see http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Value)
>> >
>> > **ssl** *
>> >
>> >> If the requests sent to your servers need to be encrypted with SSL (Boolean)
>> >
>> > **weight** *
>> >
>> >> The weight of your server for your farm. A high weight server receives more requests (Number)
>> >
>> > **status** *
>> >
>> >> If your server is activated or not (Boolean)
>

#### Get the details of a server linked to a TCP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **serverId** *
>> >
>> >> The identifier of your server (Number)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
> >

#### Modify the properties of a TCP server

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **serverId** *
>> >
>> >> The identifier of your server-link (Number)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>> >
>> > **BackendTcpServer** *
>> >
>> >> - **backup**
>> >>
>> >> > If your server is configured as a backup server (Boolean)
>> >>
>> >> - **chain** 
>> >>
>> >> > The Value of the Intermediate SSL Certificate (String of characters)
>> >>
>> >> - **displayName** 
>> >>
>> >> > The name of your server (String of characters)
>> >>
>> >> - **port** 
>> >>
>> >> > The listening port of your server (Number, 1..65535)
>> >>
>> >> - **probe** 
>> >>
>> >> > The type of probe to be used (Value)
>> >>
>> >> - **proxyProtocolVersion** 
>> >>
>> >> > The proxyProtocol version to use,
>> >> > see http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Value >> )
>> >>
>> >> - **ssl** 
>> >>
>> >> > If the requests sent to your servers need to be encrypted with SSL (Boolean)
>> >>
>> >> - **status**
>> >>
>> >> > If your server is activated or not (Boolean)
>> >>
>> >> - **weight** 
>> >>
>> >> > The weight of your server for your farm (Number)
>

#### Delete a server from a TCP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **serverId** *
>> >
>> >> The identifier of your server (Number)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>

### Frontends TCP

#### List TCP frontends attached to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/frontend
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **defaultFarmId**
>> >
>> >> The identifier of the TCP farm to which the TCP frontend is linked (Number)
>> >
>> > **port**
>> >
>> >> The listening port on your frontend (Number, 1..65535)
>> >
>> > **zone**
>> >
>> >> The name of your zone, ex: all (String of characters)
>

#### Add a TCP frontend to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/frontend
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **allowedSource**
>> >
>> >> The list of client IP addresses that have access to the Load Balancer (IPv4)
>> >
>> > **dedicatedIpfo**
>> >
>> >> The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])
>> >
>> > **defaultFarmId**
>> >
>> >> The default TCP farm identifier for your frontend (Number)
>> >
>> > **defaultSslId**
>> >
>> >> The default SSL Certificate ID (Number)
>> >
>> > **disabled**
>> >
>> >> If your TCP frontend is disabled or enabled (Boolean)
>> >
>> > **displayName**
>> >
>> >> The name of your TCP frontend (String of characters)
>> >
>> > **port** *
>> >
>> >> The listening port on your frontend (Number, 1..65535)
>> >
>> > **ssl**
>> >
>> >> Whether requests sent to the TCP farm should be encrypted with SSL or not (Boolean)
>> >
>> > **zone** *
>> >
>> >> The name of your zone, ex: all (String of characters)
>

#### Get the details of a TCP frontend

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>> >
>>
>
> Parameters :
>
>> >  **serviceName** *
>> >>
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> >  **frontendId** *
>> >>
>> >> The identifier of your frontend TCP (Number)
>> 

#### Modify the properties of a TCP frontend

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **frontendId** *
>> >
>> >> The identifier of your frontend TCP (Number)
>> >
>> > **FrontendTcp** *
>> >
>> >> - **allowedSource**
>> >>
>> >> > The list of client IP addresses that have access to the Load Balancer (IPv4[])
>> >>
>> >> - **dedicatedIpfo** 
>> >>
>> >> > The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])
>> >>
>> >> - **defaultSslId**
>> >>
>> >> > The default SSL Certificate ID (Number)
>> >>
>> >> - **disabled** 
>> >>
>> >> > If your HTTP frontend is disabled or enabled (Boolean)
>> >>
>> >> - **displayName** 
>> >>
>> >> > The name of your HTTP frontend (String of characters)
>> >>
>> >> - **ssl** 
>> >>
>> >> > Whether requests sent to the HTTP farm should be encrypted with SSL or not (Boolean)
>

#### Delete a TCP frontend

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **frontendId** *
>> >
>> >> The identifier of your frontend (Number)
>

### Routes TCP
Routes are evaluated one by one, testing their routing rules. The first route validating all its rules sees its action executed, and stops the evaluation of the remaining routes. The order of execution is defined by the type and weight of the route.


#### List TCP routes attached to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **frontendId**
>> >
>> >> The identifier of a TCP frontend (Number)
>

#### Add a new TCP route to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **action** *
>> >
>> >> The action triggered when all the rules of your route are validated (RouteHttpAction)
>> >>
>> >> - **target** 
>> >>
>> >> > The farm identifier, or the template for the URL (String of characters)
>> >>
>> >> - **type** 
>> >>
>> >> > The action on your route (String of characters)
>> >
>> > **displayName**
>> >
>> >> The name of your route (String of characters)
>> >
>> > **frontendId**
>> >
>> >> The Identifier of the TCP frontend for which your route is applied (Number)
>> >
>> > **weight**
>> >
>> >> The priority of your route. (Number) [0 - 255]
>

#### Get the details of a TCP route

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your route (number)
>

#### Modify the properties of a TCP route

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your route (number)
>> >
>> > **routeTcp** *
>> >
>> >> - **action**
>> >>
>> >> > The action to carry out (routeTcpAction)
>> >> >
>> >> > - **target** 
>> >> >
>> >> >> The farm identifier, or the template for the URL (String of characters)
>> >> >
>> >> > - **type** 
>> >> >
>> >> >> The action on your route (String of characters)
>> >>
>> >> - **displayName** 
>> >>
>> >> > The name of your route (String of characters)
>> >>
>> >> - **frontendId** 
>> >>
>> >> > The TCP frontend for which your route is applied (Number)
>> >>
>> >> - **weight** 
>> >>
>> >> > The priority of your route (Number) [0 - 255]
>

#### Delete a TCP route

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your route (number)
>

### Routing rules

#### List the routing rules attached to a TCP route

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your TCP route (Number)
>

#### Add routing rules attached to a TCP route

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your TCP route (Number)
>> >
>> > **field** *
>> >
>> >> The name of the field to be tested with the "match" operator (String of characters)
>> >
>> > **match** *
>> >
>> >> The comparison operator (value) (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >
>> > **negate**
>> >
>> >> The behavior of the :code:`match` operator is reversed. (Boolean)
>> >
>> > **pattern**
>> >
>> >> The schema or the regular expression used by the "match" operator (Regex / String of characters)
>> >
>> > **subField**
>> >
>> >> The name of the sub-field, if applicable. Can be a cookie or a header name, for example (String of characters)
>

#### Get the details of a routing rule

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your TCP route (Number)
>> >
>> > **ruleId** *
>> >
>> >> The identifier of your HTTP routing rule (Number)
>

#### Modify the properties of a routing rule

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your TCP route (Number)
>> >
>> > **ruleId** *
>> >
>> >> The identifier of your HTTP routing rule (Number)
>> >
>> > **RouteRule** *
>> >
>> >> - **field**
>> >>
>> >> > The name of the field to be tested via the "match" operator (String of characters)
>> >>
>> >> - **match** 
>> >>
>> >> > The comparison operator to use (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >>
>> >> - **negate** 
>> >>
>> >> > If the "match" operator is inverted or not (Boolean)
>> >>
>> >> - **pattern** 
>> >>
>> >> > The Value or regular expression to use with the "match" operator (Regex / String of characters)
>> >>
>> >> - **subField** 
>> >>
>> >> > The name of the sub-field if applicable (String of characters)
>

#### Delete a routing rule

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **routeId** *
>> >
>> >> The identifier of your TCP route (Number)
>> >
>> > **ruleId** *
>> >
>> >> The identifier of your HTTP routing rule (Number)
>

## UDP Protocol
Access the UDP protocol elements (Frontend, Farm, etc.).


### UDP Farms

#### List UDP trusses attached to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/farm
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **zone**
>> >
>> >> The name of your zone, ex: all (String of characters)
>

#### Add a new UDP farm to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/udp/farm
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **displayName**
>> >
>> >> The name you wish to give to your farm (String of characters)
>> >
>> > **port**
>> >
>> >> The listening port on your farm. Inherited from the frontend if not defined (Number, 1..65535)
>> >
>> > **zone** *
>> >
>> >> The name of your zone, ex: all (String of characters)
>

#### Get the details of a UDP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>

#### Modify the properties of a UDP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>> >
>> > **BackendUdp** *
>> >
>> >> - **displayName**
>> >>
>> >> > The name of the farm (String of characters)
>> >>
>> >> - **port** 
>> >>
>> >> > The farm's listening port (Number, 1..65000)
>

#### Delete a UDP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>

### UDP Servers

#### List the servers linked to the UDP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>> >
>> > **address**
>> >
>> >> Filter Values by IPv4 address (IPv4)
>> >
>> > **status**
>> >
>> >> Filter Values by Server Status (Value)
>

#### Adding a server to a UDP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>> >
>> > **address** *
>> >
>> >> The IPv4 address of your server (IPv4)
>> >
>> > **displayName**
>> >
>> >> The name given to your server (String of characters)
>> >
>> > **port**
>> >
>> >> The listening port of your server. Inherited from your farm if not defined (Number, 1..65535)
>> >
>> > **status** *
>> >
>> >> If your server is activated or not (Boolean)
>

#### Get the details of a server linked to a UDP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **serverId** *
>> >
>> >> The identifier of your server (Number)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>

#### Modify the properties of a UDP server

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **serverId** *
>> >
>> >> The identifier of your server (Number)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm (Number)
>> >
>> > **BackendUdpServer** *
>> >
>> >> - **displayName**
>> >>
>> >> > The name of your server (String of characters)
>> >>
>> >> - **port** 
>> >>
>> >> > The listening port of your server (Number, 1..65535)
>> >>
>> >> - **status**
>> >>
>> >> > If your server is activated or not (Boolean)
>

#### Removing a server from a UDP farm

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **serverId** *
>> >
>> >> The identifier of your server UDP (Number)
>> >
>> > **farmId** *
>> >
>> >> The identifier of your farm UDP (Number)
>

### Frontends UDP

#### List UDP frontends attached to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/frontend
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **defaultFarmId**
>> >
>> >> The identifier of the UDP farm to which the UDP frontend is linked (Number)
>> >
>> > **port**
>> >
>> >> The listening port on your frontend (Number, 1..65535)
>> >
>> > **zone**
>> >
>> >> The name of your zone, ex: all (String of characters)
>

#### Add a UDP frontend to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/udp/frontend
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **dedicatedIpfo**
>> >
>> >> The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])
>> >
>> > **defaultFarmId** *
>> >
>> >> The default UDP farm identifier for your frontend (Number)
>> >
>> > **disabled**
>> >
>> >> If your UDP frontend is disabled or enabled (Boolean)
>> >
>> > **displayName**
>> >
>> >> The name of your UDP frontend (String of characters)
>> >
>> > **port** *
>> >
>> >> The listening port on your frontend (Number, 1..65535)
>> >
>> > **zone** *
>> >
>> >> The name of your zone, ex: all (String of characters)
>

#### Get the details of a UDP frontend

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **frontendId** *
>> >
>> >> The identifier of your frontend UDP (Number)
>

#### Modify the properties of a UDP frontend

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **frontendId** *
>> >
>> >> The identifier of your frontend UDP (Number)
>> >
>> > **FrontendUdp** *
>> >
>> >> - **dedicatedIpfo**
>> >>
>> >> > The list of IP addresses of the remote servers to which your Load Balancer is connected (IPv4[])
>> >>
>> >> - **disabled** 
>> >>
>> >> > If your UDP frontend is disabled or enabled (Boolean)
>> >>
>> >> - **displayName** 
>> >>
>> >> > The name of your UDP frontend (String of characters)
>

#### Delete a UDP frontend

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **frontendId** *
>> >
>> >> The identifier of your frontend UDP (Number)
>

## Other features

### Additional IP

#### List Additional IPs routed on a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/failover
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>

### Service Status

#### Obtenir l'état des instances d'un service Load Balancer OVH

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/instancesState
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>

#### List the output IPs used by OVH for NAT

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/natIp
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>

#### Apply changes to a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>

### SSL Certificates

#### List SSL certificates of a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/ssl
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **fingerprint**
>> >
>> >> Lists the fingerprint of the SSL certificate (String of characters)
>> >
>> > **serial**
>> >
>> >> Lists the identification number of the SSL certificate (String of characters)
>> >
>> > **type**
>> >
>> >> Type of SSL certificate (Value)
>

#### Add a new SSL object

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/ssl
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **certificate** *
>> >
>> >> Adding the SSL certificate (String of characters)
>> >
>> > **chain**
>> >
>> >> Adding the intermediate SSL certificate (String of characters)
>> >
>> > **key** *
>> >
>> >> Adding the private key (String of characters)
>

#### Get the details of an SSL object

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/ssl/{id}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **id** *
>> >
>> >> The identifier of your SSL certificate (Number)
>

#### Delete an SSL object

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/ssl/{id}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **id** *
>> >
>> >> The identifier of your SSL certificate (Number)
>

### Tasks

#### List current tasks for a Load Balancer OVH service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/task
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **action** *
>> >
>> >> Consultation of available tasks (Values)
>

#### Get the details of a task

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/task/{id}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **id** *
>> >
>> >> The identifier of your task (Number)
>

### Contact

#### Initiate a contact change

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/changeContact
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **contactAdmin**
>> >
>> >> The OVH NIC to be configured for the Admin contact of this service (String of characters)
>> >
>> > **contactBilling**
>> >
>> >> The OVH NIC to be configured for the Admin contact of this service (String of characters)
>> >
>> > **contactTech**
>> >
>> >> The OVH NIC to be configured for the Admin contact of this service (String of characters)
>

### Vrack

#### Description of the private networks attached to the load balancer

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/vrack/network
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **subnet**
>> >
>> >> Allows to filter according to the network used
>> >
>> > **vlan**
>> >
>> >> Allows to filter according to the vlan used
>

#### Add a private network in the vRack

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/vrack/network
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **displayName**
>> >
>> >> The name you want to give to the network (String of characters)
>> >
>> > **farmId**
>> >
>> >> Identification table of farms that you wish to attach to this private network
>> >
>> > **natIp**
>> >
>> >> An IP block reserved for the load balancer to reach the servers.
>> >
>> > **subnet**
>> >
>> >> The IP block of the private network
>> >
>> > **vlan**
>> >
>> >> Vlan of the private network in the vRack. 0 if the private network is not in a vlan
>

#### Retrieve, modify or delete a private network

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>> > @api {PUT} /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **vrackNetworkId** *
>> >
>> >> The identifier of the private network
>

#### Modify the list of farms attached to a private network

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
>> >
>>
>
> Parameters :
>
>> > **serviceName** *
>> >
>> >> The identifier of your Load Balancer, for example : "loadbalancer-abcdef0123456789" (String of characters)
>> >
>> > **vrackNetworkId** *
>> >
>> >> The identifier of the private network
>> >
>> > **farmId** *
>> >
>> >> Table of farm identifiers that you wish to attach to this private network. The Value "null" removes the vrack network id from all farms where it was configured.
>

## Go further

Interact with our user community on <https://community.ovh.com>.
