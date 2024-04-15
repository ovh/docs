---
title: "vRack Services - Exposing a Managed Service on your vRack (EN)"
excerpt: "Discover how to expose your managed service on the vRack using the vRack Services product, using the Service Endpoint feature."
updated: 2024-04-15
flag: hidden
---

## Introduction

The vRack Services product allows you to benefit from network services on the vRack private network. By creating a Service Endpoint, you can expose an OVHcloud managed service with a private IP address on your vRack. This ensures that all communications with your managed service remain private and secure as they never leave your private network, which is isolated from other clients and the public network. It's also quick and easy to configure, either via the API or the control panel The first managed service to support Service Endpoint is [Enterprise File Storage](https://www.ovhcloud.com/fr/storage-solutions/enterprise-file-storage/){.external}. Other OVHcloud managed services will support Service Endpoint in the future.

For more information on the vRack Private Network, please visit this [page](https://www.ovhcloud.com/fr/network/vrack/){.external}.

![global schema](images/global_schema_20240410.png){.thumbnail}

## Objective

This article explains how to expose your managed service on the vRack using the vRack Services product, using the Service Endpoint functionality.

## Overview

There are 3 main components to setting up this configuration:

1.&nbsp;<ins>vRack Service</ins>   
The vRack Services product is the main component of your configuration and must be activated in a selected region and associated with a vRack. The selected region must match the location of your managed service. The managed service will be available from the selected region and will be accessible to all servers connected to the vRack, regardless of the region.
   
2.&nbsp;<ins>Subnet</ins>  
The vRack Services product uses the concept of a subnet to define a range of private IP addresses that can be used to communicate with managed services. Generally speaking, subnets divide a larger network into segments, each with a specific range of IP addresses. This logical division allows for efficient management of resources and traffic flow within your network.
   
3.&nbsp;<ins>Service Endpoint</ins>   
The Service Endpoint is your access point to the managed service. It is associated with a subnet and has one or more automatically assigned private IP addresses.

## Instructions

There are 3 steps to configuring a Service Endpoint:

1. Activate and configure vRack services
2. Create a subnet and address range for the managed services
3. Create the Service Endpoint

These 3 steps can be performed via either the API or the Customer Interface and are described in detail below.

### Manager

#### Activate and configure vRack Services

vRack Services is activated and configured by assigning it a name and a region.

It is a regional service. You must therefore select the region in which you intend to use it. To benefit from the Service Endpoint, you must select the region corresponding to your OVHcloud managed service.

![overview 01](images/03-VRS-v2.png){.thumbnail}

You must have a vRack to activate vRack Services. If you do not have one at this stage, you can order one. 
You are under no obligation to order one at this stage, you can do so later and return to the vRack Services creation process.

![overview 01](images/04-VRS-v2.png){.thumbnail}

Once the vRack Services activation request has been made, you will be taken to the list of vRack Services. You can associate a vRack with a vRack Services directly from this page.

![overview 01](images/05-VRS-v2.png){.thumbnail}

Connecting to a vRack is simple, just select the vRack you want from the list here.

![overview 01](images/06-VRS-v2.png){.thumbnail}

#### Create a subnet

To create a subnet, you need to enter 4 pieces of information:

- Its name
- Its address range
- The service range : the address range reserved for managed services.
    - This range must be a subset of the subnet address range and its size must be between /27 and /29.
    - Addresses in this range must not be used by other nodes connected to the vRack.
- A VLAN on which you can expose this subnet. You can choose not to have a VLAN.

![overview 01](images/10-VRS-v2.png){.thumbnail}

If not, you will be prompted to enter the VLAN number.

![overview 01](images/12-VRS.png){.thumbnail}

After a short setup time, you'll be able to view and, most importantly, manage this subnet by going to this tab.

![overview 01](images/14-VRS-v2.png){.thumbnail}

#### Create a Service Endpoint

The actions to be taken are very simple. All you need to do is enter 3 pieces of information:

- The type of service to be managed.
- The name of the managed service.
- The desired subnet.

![overview 01](images/16-VRS.png){.thumbnail}

Once you have requested the creation of the Service Endpoint, you will be taken to the list of Service Endpoints. A banner will display the creation status of your Service Endpoint.

![overview 01](images/17-VRS.png){.thumbnail}

In a few moments, your new Service Endpoint will be configured and available.

![overview 01](images/18-VRS.png){.thumbnail}

#### List of your vRacks Services

This screen lists the various vRack Services that have been declared.

![overview 01](images/01-VRS-v2.png){.thumbnail}

#### Overview

This first tab contains all the general information related to the selected vRack Services.

![overview 01](images/07-VRS.png){.thumbnail}

In the `Subnet`{.action} tab, which contains no information when a Services vRack is created, lists the subnets created and available for the selected Services vRack.

In the `Service Endpoints`{.action} tab, which does not contain any information when a Services vRack is created, contains the list of Services Endpoints created and available for the selected Services vRack.

Note that in order to create a Service Endpoint, you must first go through the subnet creation phase.

### API

This section covers the actions that can be performed using the API. This includes creating subnets and Service Endpoints, associating vRack Services with a vRack, and managing these services with detailed instructions. These actions highlight the operational capabilities of vRack Services and how they can be used to enhance and secure your network infrastructure.

You must first authenticate via this [page](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#auth){.external}.

<ins>Actions :</ins>

#### 1. List vRack Services
First, you need to list your vRack services to get the ID of the vRack Services on which you want to perform your actions.

Here is the relevant section of the API page available at this [url](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#get-/vrackServices/resource){.external}

![image](https://github.com/ovh/docs/assets/60412/7cdeb9c2-5a6e-4ca8-9403-8aede124e6d8)

Here is the command line :

``` bash
curl -X GET "https://eu.api.ovh.com/v2/vrackServices/resource" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTGSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTM3MDhFNjRDMDA4MDEiLCJraW5kIjoib9F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc1MDE4MWFkODQ2MDVhYTA2MTY2ODNkNDIxOGEzMWZjMzZkZjM1NzExODFhYmM4ODY4OTliMmRlZjUwZTcxNDEiLCJpYXQiOjE3MTI3NTQ4Mzd9.TKbH0KW7stkOLWfNYMUdFfMSOYHubFLWWrF6CodVFDGHFE4yWiehGUqdgdUN1g9CC23sqr7M-fUvfHMmcpfPCg" \
```

The ID used in our example is `vrs-a8y-v9a-x5m-f4u`

#### 2. List all managed services that are eligible for the vRack Services in question.

Here is the relevant section of the API page, accessible via this [url](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#get-/vrackServices/resource/-vrackServicesId-/eligibleManagedService){.external}

![image](https://github.com/ovh/docs/assets/60412/3da50fd3-be4b-479b-a7b3-f3449406b6d7)

Here is the command line :

``` bash
curl -X GET "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a8y-v9a-x5m-f4u/eligibleManagedService" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTGSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTM3MDhFNjRDMDA4MDEiLCJraW5kIjoib9F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc1MDE4MWFkODQ2MDVhYTA2MTY2ODNkNDIxOGEzMWZjMzZkZjM1NzExODFhYmM4ODY4OTliMmRlZjUwZTcxNDEiLCJpYXQiOjE3MTI3NTQ4Mzd9.TKbH0KW7stkOLWfNYMUdFfMSOYHubFLWWrF6CodVFDGHFE4yWiehGUqdgdUN1g9CC23sqr7M-fUvfHMmcpfPCg" \
```

The ids of the managed services used in our example below are as follows:

- `urn:v1:eu:resource:storageNetApp:examples-26ca-4fa4-a53e-79c2d0948z45`
- `urn:v1:eu:resource:storageNetApp:examples-9f3b-43a9-8908-c7ab1ac7e58f`

#### 3. Request vRack Services configuration updates

Here is the relevant section of the API page available at this [url](https://eu.api.ovh.com/console-preview/?section=%2FvrackServices&branch=v2#put-/vrackServices/resource/-vrackServicesId-){.external}

![image](https://github.com/ovh/docs/assets/60412/146cc671-6fdd-47ed-a741-5982bb9e07a8)

This is the only route that manages any updates to the vRack Services configuration. It works as follows :

1. You define a new target specification in the body of the request.
2. If this specification is validated, you get the resource back with the updated targetSpec and checksum values.
3. The request is processed by one or more asynchronous tasks aimed at reconciling the current state with the targetSpec.

The checksum helps to detect cases of concurrency in update requests. If the checksum value queried differs from that returned in response to your original request, this means that processing of your request has been completed and that another request is being processed.

<ins>Configuration without interruption</ins>

The request can combine any of the following actions without interruption (i.e. the service will not be interrupted during the update)
- Update the display name of the vRack service
- Create a subnet
- Delete a subnet with no Service Endpoints
- Update a subnet:
    - Update the display name
    - Create one or more Service endpoints    
 
Note that a Subnet with multiple Service Endpoints can be created in the same request body. 

Note that deleting a Subnet will also delete the embedded Service Endpoints.

<ins>Non-transparent configuration actions</ins>

Modifying the Subnet characteristics listed below will cause a service interruption while the update is being processed. This is because they are interpreted as deleting the existing subnet and creating a new subnet with the characteristics provided. 

The IPs assigned to the managed services will be re-elected and may therefore change:
- changes to the Subnet ServiceRange
- changes to the Subnet Vlan
- changes to the Subnet CIDR
- delete a Subnet with Service Endpoints
- delete one or more Service Endpoints

The Endpoint Services of the integrated services will also be deleted and recreated, which implies fluctuating accessibility in the vRack for all the managed services concerned.

The vrackId is a read-only attribute because the vRack/vRackServices association is managed by the vRack API.

#### 4. Complete example, for a given vRack Services, of modifying its displayName and attaching an Endpoint Service to it

For this section, please read the `Actions` section above. 

<ins>1. Get the `checksum` and `targetSpec` of the given Services vRack</ins> 

Action formulated with a `GET`{.action} :

``` bash
curl -X GET "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6ImNkNDg5Mzg2ZTAyOGEzNjA1NDQ0ZmUwZTFjZjU5ZWI4ZTdmMzhkNjMwNmJhNzFlZDdhZWY1YmNmNGIxNWU5OGQiLCJpYXQiOjE3MTMxNzE2MTB9.h7HWtfCRhXV51P8QZSZfl0OEI_nagATzaI9lvYKOp4IV_-Jew5HFh970TWFtZnGoLTgY9DVP6qyCvB5qu2RZAg" \
```

Return API call:

``` bash
{
  "checksum": "609cf69014e57abfb3d892133692ac6f",
  "createdAt": "2024-03-20T14:10:27.836606Z",
  "currentState": {
    "displayName": "My_vRackServices",
    "productStatus": "DRAFT",
    "region": "LIM",
    "subnets": [
      {
        "cidr": "10.120.0.0/16",
        "displayName": null,
        "serviceEndpoints": [],
        "serviceRange": {
          "cidr": "10.120.0.0/29",
          "remainingIps": 3,
          "reservedIps": 5,
          "usedIps": 0
        },
        "vlan": null
      }
    ],
    "vrackId": "pn-xyzzz"
  },
  "currentTasks": [],
  "id": "vrs-a9y-v91-xnm-f5u",
  "resourceStatus": "READY",
  "targetSpec": {
    "displayName": "My_vRackServices",
    "subnets": [
      {
        "cidr": "10.120.0.0/16",
        "displayName": null,
        "serviceEndpoints": [],
        "serviceRange": {
          "cidr": "10.120.0.0/29"
        },
        "vlan": null
      }
    ]
  },
  "updatedAt": "2024-04-15T07:59:54.265287Z",
  "iam": {
    "id": "a912f8ea-7b17-4bef-88e0-9c9376578xxx",
    "urn": "urn:v1:eu:resource:vrackServices:vrs-a9y-v91-xnm-f5u"
  }
}

```

<ins>2. Change the displayName and attach an Endpoint Service to it</ins>

Action formulated with the `PUT`{.action} - Update in progress:

``` bash
curl -X PUT "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6ImNkNDg5Mzg2ZTAyOGEzNjA1NDQ0ZmUwZTFjZjU5ZWI4ZTdmMzhkNjMwNmJhNzFlZDdhZWY1YmNmNGIxNWU5OGQiLCJpYXQiOjE3MTMxNzE2MTB9.h7HWtfCRhXV51P8QZSZfl0OEI_nagATzaI9lvYKOp4IV_-Jew5HFh970TWFtZnGoLTgY9DVP6qyCvB5qu2RZAg"\
 -H "content-type: application/json" \
 -d '{"checksum":"609cf69014e57abfb3d892133692ac6f","targetSpec":{"displayName":"My_vRackServices_updated","subnets":[{"cidr":"10.120.0.0/16","displayName":null,"serviceEndpoints":[{"managedServiceURN":"urn:v1:eu:resource:storageNetApp:f88c7410-f920-443b-ab1b-8c699a1c3xxx"}],"serviceRange":{"cidr":"10.120.0.0/29"},"vlan":null}]}}' \
```
<br>

Return API call :

``` bash
{
  "checksum": "add878be3bb736263590d03fd000b113",
  "createdAt": "2024-03-21T16:37:49.276927Z",
  "currentState": {
    "displayName": "My_vRackServices",
    "productStatus": "DRAFT",
    "region": "LIM",
    "subnets": [
      {
        "cidr": "10.0.0.0/24",
        "displayName": null,
        "serviceEndpoints": [],
        "serviceRange": {
          "cidr": "10.0.0.0/29",
          "remainingIps": 3,
          "reservedIps": 5,
          "usedIps": 0
        },
        "vlan": null
      }
    ],
    "vrackId": "pn-xyzzz"
  },
  "currentTasks": [
    {
      "id": "cfa1a6a6-fb0a-11ee-a63c-4277d8ca4yyy",
      "link": "/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u",
      "status": "PENDING",
      "type": "VrackServicesUpdate"
    }
  ],
  "id": "vrs-a9y-v91-xnm-f5u",
  "resourceStatus": "UPDATING",
  "targetSpec": {
    "displayName": "My_vRackServices_updated",
    "subnets": [
      {
        "cidr": "10.120.0.0/16",
        "displayName": null,
        "serviceEndpoints": [
          {
            "managedServiceURN": "urn:v1:eu:resource:storageNetApp:f88c7410-f920-443b-ab1b-8c699a1c3xxx"
          }
        ],
        "serviceRange": {
          "cidr": "10.120.0.0/29"
        },
        "vlan": null
      }
    ]
  },
  "updatedAt": "2024-04-15T09:30:34.683716Z"
}
```

> [!primary]
>
> Notable points:
>
> - `targetSpec` updated with the request and we also have a new `checksum`.
> - `resourceStatus` changed to `UPDATING`.
> - `currentTasks` : asynchronous processing in progress
> 

<ins>3. A final GET to check that the asynchronous actions have been completed</ins>.

> [!warning]
>
> Expected result: a Services vRack with `ressourceStatus` set to `READY`. If this is not the case, repeat the `GET` a few moments later.
>

Action formulated with `GET`{.action} :

``` bash
curl -X GET "https://eu.api.ovh.com/v2/vrackServices/resource/vrs-a9y-v91-xnm-f5u" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6ImNkNDg5Mzg2ZTAyOGEzNjA1NDQ0ZmUwZTFjZjU5ZWI4ZTdmMzhkNjMwNmJhNzFlZDdhZWY1YmNmNGIxNWU5OGQiLCJpYXQiOjE3MTMxNzE2MTB9.h7HWtfCRhXV51P8QZSZfl0OEI_nagATzaI9lvYKOp4IV_-Jew5HFh970TWFtZnGoLTgY9DVP6qyCvB5qu2RZAg" \
```

Return API call:

``` bash
{
  "checksum": "add878be3bb736263590d03fd000b113",
  "createdAt": "2024-03-21T16:37:49.276927Z",
  "currentState": {
    "displayName": "My_vRackServices_updated",
    "productStatus": "ACTIVE",
    "region": "LIM",
    "subnets": [
      {
        "cidr": "10.120.0.0/16",
        "displayName": null,
        "serviceEndpoints": [
          {
            "endpoints": [
              {
                "description": "Nominal",
                "ip": "10.120.0.1"
              }
            ],
            "managedServiceURN": "urn:v1:eu:resource:storageNetApp:f88c7410-f920-443b-ab1b-8c699a1c3xxx"
          }
        ],
        "serviceRange": {
          "cidr": "10.120.0.0/29",
          "remainingIps": 2,
          "reservedIps": 5,
          "usedIps": 1
        },
        "vlan": null
      }
    ],
    "vrackId": "pn-xyzzz"
  },
  "currentTasks": [],
  "id": "vrs-a9y-v91-xnm-f5u",
  "resourceStatus": "READY",
  "targetSpec": {
    "displayName": "My_vRackServices_updated",
    "subnets": [
      {
        "cidr": "10.120.0.0/16",
        "displayName": null,
        "serviceEndpoints": [
          {
            "managedServiceURN": "urn:v1:eu:resource:storageNetApp:f88c7410-f920-443b-ab1b-8c699a1c3xxx"
          }
        ],
        "serviceRange": {
          "cidr": "10.120.0.0/29"
        },
        "vlan": null
      }
    ]
  },
  "updatedAt": "2024-04-15T09:31:16.562864Z",
  "iam": {
    "id": "1a8317c9-5020-4b55-bae4-1c01955b00bb",
    "urn": "urn:v1:eu:resource:vrackServices:vrs-a9y-v91-xnm-f5u"
  }
}
```

> [!primary]
>
> Notable points:
>
> - `currentState` is completely aligned with the `targetSpec` so `resourceStatus` changes to `READY`.
> - The `productStatus` is set to `ACTIVE` because the current vRack Services configuration allows the Endpoint Service to be accessed from the vRack.
> - The IP allocated to the Managed Service is "10.120.0.1".
> - There are still 2 assignable IPs in the ServiceRange.
>


## Constraints and limits

### vRack Services

- A vRack Services is attached to a single region.
- Within a vRack, it is not possible to create several vRack Services in the same region.
- A maximum of 20 vRack Services can be created per user account.
- Several vRack Services can be associated with the same vRack. In this way, the customer can make the managed services accessible from different regions.
- The managed service to be exposed must be part of the same region as the vRack Services.

**Note :** Bandwidth capacity between the managed service and the hosts consuming the service is not guaranteed directly by the vRack Services product. Contractual bandwidth guarantees are provided by OVHcloud services such as managed services (e.g. Enterprise File Storage) or services consuming the managed service (e.g. bare metal servers, HPC clusters, public cloud instances).

### Subnet

- The subnet address range must conform to RFC 1918.
- The length of the subnet range is between /16 and /24.
- Modifying the subnet range will cause an interruption of the associated service endpoints (during the reconfiguration period).
- The valid VLAN ID range is from 2 to 4094. The value "null" is allowed (no VLAN / untagged).
- Each subnet address range must be unique for a given vRack Services. Overlaps are detected and discarded when the subnet is created.
    - During the beta, a maximum of 1 subnet per vRack Services can be defined by the customer.
- Modifying the VLAN ID will cause an interruption of the associated service endpoints (during the reconfiguration period).
- Each VLAN ID must be unique for a given vRack Services.
- The first and last IP addresses of the subnet cannot be used and therefore must not be configured on any of the servers connected to the vRack associated with the vRack Services.

### Service Range

- The range must be a subset of the subnet range.
- The range size is between /27 and /29.
- It is not possible to change the address range of the managed service once it has been created.

### Service Endpoint

- To ensure subnet consistency, the Service Endpoint creation request will be rejected if the pool of remaining IPs on the subnet does not match the number of IP addresses required by the managed service.
- Service Range IP addresses are allocated to one managed service at a time.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
