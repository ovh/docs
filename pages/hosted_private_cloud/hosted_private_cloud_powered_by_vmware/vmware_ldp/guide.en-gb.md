---
title: "Logs Data Platform - Collect VMware on OVHcloud logs"
excerpt: "Find out how to subscribe and enable log forwarder in order to transfer VMware on OVHcloud logs to a Logs Data Platform stream"
updated: 2024-09-25
---

> [!primary]
> This feature is currently in beta phase. To date, the Logs Data Platform infrastructure does not offer the same qualification levels (such as SecNumCloud, PCI-DSS, HDS) as with a VMware on OVHcloud environment. However, you can still activate it.
>

## Objective

**Learn how to collect VMware on OVHcloud logs into a Logs Data Platform stream.**

## Requirements

- An a [OVHcloud customer account](/links/manager).
- A [VMware on OVHcloud](/links/hosted-private-cloud/vmware) environnement with a Logs Data Platform active stream. 
    - If you are not familiar with all the LDP *Stream* configuration possibilities, simply create a new one with the default options (indexing & websocket enabled, long-term storage disabled) for the purpose of this guide.
- You must have followed the guide [Introduction to Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).
- You must have the `logForwarder` enabled. To verify this, run [the following API call](#security-options).
- An active Logs Data Platform, to launch the subscription within your VMware vSphere managed on OVHcloud.

## Instructions

> [!primary]
> Please note that enabling **log forwarding** is free.
>
> However, to ensure that your Logs Data Platform dedicated cluster works properly, storage fees and charges for using the catalogue of managed services (Graylogs, OpenSearch, Logstash, etc.) may apply at the standard rate.
>

By enabling log transfers to a Logs Data Platform stream, you can collect, index and analyze data from a VMware on OVHcloud service. Regardless of their origin, this platform offers a variety of access methods depending on the protocol, the level of security and the format desired. The data collected can be easily used, thanks to the multiple APIs and web interfaces available.

For more information on the Logs Data Platform technical specifications (ports, protocols, etc.), read the guide [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

**Logs and labels**

**Available kinds**

A kind is a "type" of log that your product generates.

These are the types of logs you want to transfer to your Logs Data Platform. Here are examples that may be available depending on the components of your VMware on OVHcloud architecture:

- `esxi`: Only some applications are redirected.
- `nsxtEdge`: Everything is redirected, no filter.
- `vcsa`: Filtered by application.
- `nsxtManager`: Filtered by application.

### Step 1 - Enable Log Forwarder for VMware on OVHcloud

> [!warning]
> If the `logForwarder` pack is not activated within your options base pack (base or advanced security), [contact OVHcloud support](https://help.ovhcloud.com/csm?id=csm_get_help).
>
> If you would like to use the `logForwarder` feature without the basic and advanced security packs, [contact OVHcloud support](https://help.ovhcloud.com/csm?id=csm_get_help) to enable it manually.
>

#### Via the OVHcloud API <a name="security-options"></a>

> [!primary]
> If you are not familiar with using the OVHcloud APIv6, please refer to our guide on [Getting started with the OVHcloud API](/pages/manage_and_operate/api/first-steps).
>

**Referencing of all security pack API calls**:

| **Method** | **Path**                                                          | **Description**                                                             |
|:------------:|:---------------------------------------------------------------|:-----------------------------------------------------------------------
|     GET     | /dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix   | Get Security Options Compatibility Matrix                 |
|     GET     | /dedicatedCloud/{serviceName}/securityOptions/dependenciesTree      | Get Dependencies Tree for Security Options              |
|     GET     | /dedicatedCloud/{serviceName}/securityOptions/pendingOptions        | Get security options pending activation                   |
|    POST     | /dedicatedCloud/{serviceName}/securityOptions/resumePendingEnabling | Retry activation of pending security option                   |

To check the options required to enable the `logForwarder` feature to work within your VMware vSphere managed on OVHcloud, run the following API call:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix
>

Leave empty the two available `showIncompatible` and `showInternal` Boolean fields.

Here is an example of a return, if the option required to work is not enabled:

```json
[
 {
  description: "Deploy a syslog forwarder to gather all VMware logs of a Private Cloud"
  state: "disabled"
  name: "logForwarder"
  compatible: true
  enabled: false
  reason: null
 }
]
```

### Step 2 - Create a Logs Data Platform stream

> [!primary]
> VMware on OVHcloud and Logs Data Platform resources must belong to the same OVHcloud account.
>
> Your logs are manipulated for security and observability purposes in the Logs Data Platform private clusters. For more information on LDP pricing, please visit the LDP page available via [this link](/links/manage-operate/ldp).
>

To create a subscription, a stream is required. You can create a temporary stream in order to subscribe to your subscription with the `streamId` and the API POST call from step 3.

#### Via the OVHcloud Control Panel

You can refer to this guide to find out how to create a stream via the Logs Data Platform interface: [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

#### Via the OVHcloud API

To create a stream, an LDP `serviceName` is required. This `serviceName` refers to a unique ID of your LDP account (for example `ldp-xx-XXXXX`).

For this reason, you will need to have a temporary LDP account in advance to create a temporary stream.

Here is the API call for creating a stream:

> [!api]
>
> @api {v1} /dbaas/logs POST /dbaas/logs/{serviceName}/output/graylog/stream
>

> **Parameters**:
>
> - `description`: Description of your LDP stream.
> - `title`: Title of your LDP stream.
>

Return:

```json
{
  "aliasId": null,
  "createdAt": "2024-08-28T12:25:13.544323+02:00",
  "dashboardId": null,
  "encryptionKeyId": null,
  "indexId": null,
  "inputId": null,
  "operationId": "e34f7a06-386b-4602-8d16-d45249197d40",
  "osdId": null,
  "roleId": null,
  "serviceName": "ldp-pu-66281",
  "state": "RUNNING",
  "streamId": null,
  "subscriptionId": null,
  "tokenId": null,
  "updatedAt": "2024-08-28T12:25:13.554173+02:00"
}
```

Retrieve the `streamId` and save it (copy and paste) in a text editor. You will need it to activate your VMware on OVHcloud subscription with the temporary Logs Data Platform stream in question.

In the next step, we will look at how to attach your managed vSphere subscription to a temporary LDP stream.

### Step 3 - Create a logs subscription for VMware on OVHcloud

> [!warning]
> To have an active Logs Data Platform subscription with VMware on OVHcloud, you must have an active stream.
>
> To date, if you want to have a stream on the same account and with the same level of security as your VMware on OVHcloud environment, you must transfer this stream to your private infrastructure. You are responsible for the transfer and for the level of security you want..
>
> You can refer to the [Logs Data Platform documentation](/pages/manage_and_operate/observability/logs_data_platform/getting_started_responsibility_model) for more information on the levels of security and responsibilities available.
>

#### Via the OVHcloud Control Panel

This feature is not yet available in the VMware on OVHcloud section of the Control Panel.

#### Via the OVHcloud API <a name="activation"></a>

Use the following API calls to list subscriptions for your VMware on OVHcloud account.

**Referencing API calls:**

| **Method** | **Path**                                                                                               | **Description**                                             |
|:------------:|:-------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|
|     GET     | /dedicatedCloud/{serviceName}/log/kind                                                                 | - List all Log kind available for your VMware on OVHcloud   |
|     GET     | /dedicatedCloud/{serviceName}/log/kind/{name}                                                          | - List availables kind name (ESXI/NSX-T EDGE, MANAGER/VCSA) |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription                                                         | - List your VMware on OVHcloud subcriptions                 |
|    POST     | /dedicatedCloud/{serviceName}/log/subscription                                                         | - Create an LDP VMware OVHcloud subscription                |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription                                                         | - List properties of this object                            |
|   DELETE    | /dedicatedCloud/{serviceName}/log/subscription                                                         | - Delete an LDP VMware on OVHcloud subscription             |

To retrieve the **streamId** from your LDP account, please refer to the guide [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
>

> **Parameters**:
>
> - `serviceName` : Name of the managed vSphere service, (e.g.: `pcc-XXX-XXX-XXX-XXX`).
> - `kind`: VMware Kind that the forwarder uses (e.g.: Available: `nsxtEdge ┃ vcsa ┃ nsxtManager ┃ esxi`).
> - `streamId`: Destination stream identifier (e.g.: uuid: `ggb8d894-c491-433e-9c87-50a8bf6fe773`).
>

Example of input parameters for the API call:

```json
{
  "serviceName": "pcc-XXX-XXX-XXX-XXX",
  "kind": "esxi",
  "streamId": "Null",
}
```

With the GET request, you can list the stream IDs in your subscription.

### Step 4 - Manage your VMware on OVHcloud logs

> [!primary]
> If you want to know all the services and features offered by Log Data Platform, go to the dedicated page via [this link](/links/manage-operate/ldp).
>

You can manage your LDP streams using the OVHcloud API, or using the `Bare Metal`{.action} > `Logs Data Platform`{.action} section of the OVHcloud Control Panel, or via the Graylog UI and the OpenSearch UI.

#### Via the OVHcloud Control Panel

You can refer to this guide to find out how to manage your streams in the `Log Data Platform`{.action} section of the OVHcloud Control Panel: [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

#### Via the OVHcloud API

**How do I get the `subscriptionId`**?

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
>

> **Parameters**:
>
> - `serviceName` : Service name of your managed vSphere (e.g.: `pcc-XXX-XXX-XXX-XXX`).
> - `kind` : Name of the VMware kind that the forwarder uses (e.g.: `nsxtEdge ┃ vcsa ┃ nsxtManager ┃ esxi`).
>

**How to list your available Kind**?

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/kind/{name}
>

> **Parameters**:
>
> - `name` : Name of the kind of VMware the forwarder uses (e.g.: Available: `nsxtEdge ┃ vcsa ┃ nsxtManager ┃ esxi`).
> - `serviceName` : Service name of your managed vSphere (e.g.: `pcc-XXX-XXX-XXX-XXX`).
>

Examples of returns for different Kind:

**Kind name: NSX-T Edge**

```json
{
  "name": "nsxtEdge",
  "createdAt": "2024-05-31T22:17:40+02:00",
  "kindId": "Null",
  "displayName": "NSX-T Edges",
  "additionalReturnedFields": [
    "priority",
    "application_name",
    "level",
    "comp",
    "s2comp",
    "subcomp"
  ],
  "updatedAt": "2024-05-31T22:17:40+02:00"
}
```

**Kind name: NSX-T Manager**

```json
  "displayName": "NSX-T Manager",
  "kindId": "Null",
  "additionalReturnedFields": [
    "priority",
    "application_name",
    "level",
    "comp",
    "s2comp",
    "subcomp"
  ],
  "createdAt": "2024-05-31T22:17:40+02:00",
  "updatedAt": "2024-05-31T22:17:40+02:00",
  "name": "nsxtManager"
}
```

**Kind name: VCSA**

```json
{
  "name": "vcsa",
  "createdAt": "2024-05-31T22:17:40+02:00",
  "additionalReturnedFields": [
    "priority",
    "application_name",
    "level"
  ],
  "updatedAt": "2024-05-31T22:17:40+02:00",
  "kindId": "Null",
  "displayName": "VCSA"
}
```

**Kind name: ESXI**

```json
{
  "kindId": "Null",
  "displayName": "esxi",
  "name": "esxi",
  "createdAt": "2024-04-26T22:27:57+02:00",
  "updatedAt": "2024-04-26T22:27:57+02:00",
  "additionalReturnedFields": [
    "level",
    "application_name"
  ]
}
```

### Step 5 - Disable your Logs Data Platform subscription

> [!primary]
> Canceling your Logs Data Platform subscription with VMware on OVHcloud does not mean deleting your streams. The storage used at the time of deactivation is subject to billing.
>
> **Note**: As of this date, you can only delete a stream in its entirety. It is not possible to remove only certain granular inputs.
>

> [!api]
>
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>

> **Parameters**:
>
> - `serviceName` : Service name of your managed vSphere (e.g.: `pcc-XXX-XXX-XXX-XXX`).
> - `subscriptionId`: subscription ID of your LDP subscription (e.g.: `8e729f36-3e5d-4e08-9723-62b2b39c857a`).
>

Return:

```json
{
 "operationId": "456eb42e-58r6-4cfd-8r5c-ccr97273712r",
 "serviceName": "ldp-vg-XXXX"
}
```

You will get an `operationId` which is the identifier used to confirm that the deactivation operation has been carried out.

## Go further

**Glossary**

- **Logs Data Platform:** Logs Management Platform, fully managed and secured by OVHcloud. For more information, see [the LDP Solution Overview page](/links/manage-operate/ldp).
- **Data Stream:** Logical partition of logs that you create in a Logs Data Platform account and use when ingesting, viewing or querying your logs. Multiple sources can be stored in the same data stream, and the unit can be used to define a log pipeline (retention policy, archiving, live streaming, etc.), access rights and alert policies.
- **Log transfer:** A feature built into an OVHcloud product to integrate logs for its services into the *Data Stream* of a Logs Data Platform account in the same OVHcloud account. This feature must be enabled by you and for your service. Refer to this part of the guide to activate it: [Step 2 - Logs Data Platform subscription for a managed vSphere via the API](#activation)
- **Log redirection subscription:** When enabling log forwarding for your OVHcloud service to a given *Data Stream* Logs Data Platform, a *subscription* must be created and attached to the *Data Stream* for future management.

You can refer to these guides to take advantage of the Logs Data Platform features:

- [Logs Data Platform - Getting started documentation](/products/observability-logs-data-platform-getting-started))
- [View your logs in a Grafana dashboard](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana)
- [Use the "LDP Tail" cli to watch your logs live](/pages/manage_and_operate/observability/logs_data_platform/cli_ldp_tail)
- [Push logs from Apache to LDP](/pages/manage_and_operate/observability/logs_data_platform/ingestion_apache)

If you require training or technical support to implement our solutions, please contact your sales representative or click [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
