---
title: API Particularities
slug: pca/api
excerpt: Particularities of the Openstack Swift API on OVH Public Cloud Archive
section: Public Cloud Archive
---


## Operations on containers
This section describes particularities brought by OVH to operations regarding containers.


### GET Container inventory
**Description**

Retrieves a container inventory.

**Request Parameters**

|Parameter|Type|Description|Required|
|---|---|---|---|
|policy_extra|Boolean|Include fields containing extra information coming from the storage policy in the response body if requested format is json.|No|

**Response body**

|Field|Type|Description|
|---|---|---|
|policy_retrieval_delay|Integer|Object retrieval delay in seconds if in the *unsealing* state, *null* otherwise.|
|policy_retrieval_state|String|Object retrieval state. Possible values are: *sealed*, *unsealing*, *unsealed*.|


## Operations on objects
This section describes particularities brought by OVH to operations regarding objects.


### GET Object
**Description**

Retrieves an object.

**Error codes**

|Code|Description|
|---|---|
|429|The object unsealing operation is in progress.|

**Response Headers**

|Name|Type|Description|Required|
|---|---|---|---|
|Retry-After|Integer|Object retrieval delay in seconds if the response error code is 429.|No|