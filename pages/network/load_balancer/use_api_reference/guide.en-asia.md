---
title: Load Balancer API Quick Reference
excerpt: Quick description of the different API functions used to manage the Load Balancer
updated: 2025-09-29
---

## List of API functions

This section briefly describes the main functions of the API for the OVHcloud Load Balancer under /ipLoadbalancing.

For a comprehensive reference to the API functions of the OVHcloud Load Balancer service, please consult [this detailed guide](/pages/network/load_balancer/use_api_details).

> [!primary]
>
> The Frontends, Farms and Servers are specific to the protocol (HTTP, TCP or UDP) in which they are defined.
> Compatibility between these components is only possible within the same protocol.
> For example, an HTTP Frontend can only be paired with an HTTP Farm, and cannot be used with a UDP Farm.
> 

> [!warning]
>
> Each category that falls under Frontend, Farm and Server management consists of 3 API functions, one for each protocol (HTTP, TCP or UDP).
> You must execute the API function that corresponds to the specific protocol of the desired service.
> 

## Frontend

### Return the list of IDs of existing frontends

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend
> 

### Create a frontend

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/frontend
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/frontend
> 

### Return the parameters applied to a frontend

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 

### Edit parameters related to a particular frontend

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 

### Delete a frontend

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frntendId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 

## Server farm

### Return the list of IDs of existing farms

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm
> 

### Create a Farm

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm
> 

### Return the parameters applied to a farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
> 

### Edit parameters related to a particular farm

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
> 

### Delete a Farm

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
> 

## Server

### Return the list of server IDs linked to a particular farm

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
> 

### Creates a server for a particular farm

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
> 

### Return the parameters of a particular server

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
> 

### Edit settings for a particular server

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
> 

### Delete a server

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
> 

## SSL certificates

### Return the list of SSL certificates

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl
> 

### Create an SSL certificate

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/ssl
> 

### Return the settings for a particular SSL Certificate

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl/{id}
> 

### Delete an SSL certificate 

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
> 

## Tasks

### Applies the changes to the Load Balancer configuration

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

### Return the list of task IDs

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task
> 

### Return the status of a particular task

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task/{id}
> 
