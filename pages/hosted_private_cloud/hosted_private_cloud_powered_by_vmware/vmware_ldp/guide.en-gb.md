---
title: "Logs Data Platform - Managed VMware Logs Forwarding"
excerpt: "Find out how to enable Logs Forwarding from a managed VMware vSphere on OVHcloud towards a Logs Data Platform stream" 
updated: 2024-08-23
---

> [!primary]
> 
> This feature is currently in Beta phase. This guide may be incomplete and might be updated regularly.
>

## Objective

**Learn how to enable Log Forwarding on managed VMware vSphere towards a Logs Data Platform stream.**

## Requirements

- An [OVHcloud customer account](/links/manager).
- One or more Hosted Private Cloud resources.
- An active Logs Data Platform stream with the same account and security level as your Hosted Private Cloud VMware on OVHcloud. To check it, launch [this API call](#security-options).
- You need to have followed the guide [Introduction to the Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)
- You must have `logForwarder` enabled. To check it, launch [this API call](#security-options).

> [!primary]
>
> Read the [Getting started with OVHcloud APIs](/pages/manage_and_operate/api/first-steps) guide to get familiar with using OVHcloud APIv6.

## Instructions

> [!primary]
> Please note that enabling **log forwarding** is free, but you will be billed for using a Logs Data Platform stream, based on the standard rate for storing logs in a "Database as a Service" (dbaas).
>
> Your logs are manipulated for security and observability reasons in the Logs Data Platform private clusters. For more information on LDP pricing, see the page LDP on [this link](/links/manage-operate/ldp).
>

By enabling logs forwarding to a Logs Data Platform stream, you can collect, index and analyze Hosted Private Cloud VMware on OVHcloud data. Regardless of their origin, this platform offers a variety of access methods depending on the protocol, the level of security and the format desired. The data collected can be easily used, thanks to the multiple APIs and web interfaces available.

For further information on the technical specifications of the Logs Data Platform (ports, protocols, etc.), please refer to our guide [Getting started with the Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

**Logs and labels**

**Available kinds**

A *Kind* is a "type" of log that your product generates.

These are the types of logs you want to transfer to your Logs Data Platform. Here are examples that may be available depending on the components of your VMware on OVHcloud Hosted Private Cloud architecture:

- `esxi`: Only some applications are filtered.
- `nsxtEdge`: Everything is forwarded, no filter.
- `vcsa`: Only some applications are forwarded.
- `nsxtManager`: Only some applications are filtered.

### Step 1 - Enable Log Forwarder in managed vSphere

> [!warning]
> If the `logForwarder` pack is not enabled within your pack options (base or advanced security), [contact the OVHcloud support teams](https://help.ovhcloud.com/csm?id=csm_get_help).
>
> If you want the `logForwarder` feature without the advanced security and base packs, contact OVHcloud support teams to enable it manually.
>

<a name="security-options"></a>

#### Via the OVHcloud API

**Referencing all API calls for security packs**:

| **Méthode** | **Chemin**                                                          | **Description**                           |
|:-----------:|:--------------------------------------------------------------------|:------------------------------------------|
|     GET     | /dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix   | Get security options compatibility matrix |
|     GET     | /dedicatedCloud/{serviceName}/securityOptions/dependenciesTree      | Get security options dependencies tree    |
|     GET     | /dedicatedCloud/{serviceName}/securityOptions/pendingOptions        | Get pending activation security options   |
|    POST     | /dedicatedCloud/{serviceName}/securityOptions/resumePendingEnabling | Retry pending security option activation  |

To check the options required to enable the `logForwarder` feature to work within your managed VMware vSphere. Launch the following API call:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix
>

Leave the 2 available booleans `showIncompatible`, `showInternal` empty.


Here is an example of a return, if the option required to work is not enabled:

```json
@api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix

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

### Step 2 - Logs Data Platform subscription for managed vSphere

#### Via the OVHcloud Control Panel

This feature is not yet available in the Hosted Private Cloud control panel.

#### Via the OVHcloud API <a name="activation"></a>

To retrieve the **streamId** of your LDP account, read our guide [Getting started with the Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

> [!api]
> 
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
> 

> **Parameters:**
> 
> - `serviceName`: Your Hosted Private Cloud reference, e.g. `pcc-XXX-XXX-XXX-XXX`.
> - `kind`: Name of the subscription log filter type, e.g. `esxi`, `nsxtManager`, `vcsa`, `nsxtEdge`.
> - `StreamId`: The destination stream identifier, e.g. uuid:`ggb8d894-c491-433e-9c87-50a8bf6fe773`.
>

```json
@api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription

{
 "kind": "esxi", // The VMware label, the values currently supported are: `esxi`, `nsxtManager`, `vcsa`, `nsxtEdge`.
 "streamId": "ggb8d894-c491-433e-9c87-50a8bf6fe773", // The Logs Data Platfrom stream ID.
}
```

The GET request allows you to list your subscriptions IDs.

### Step 3 - Create a Logs Data Platform stream

> [!primary]
> Hosted Private Cloud and LDP resources must belong to the same OVHcloud account.
>

#### Via the OVHcloud control panel

You can refer to this guide to find out how to manage your streams via the Logs Data Platform control panel: [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

Retrieve the **streamId** and save (copy/paste) it. You will need it to activate your Hosted Private Cloud subscription with the Logs Data Platform stream in question.

In the next step, we will look at how to create a stream.

### Step 4 - Manage your Data Logs Platform streams

#### Via the OVHcloud Control Panel

You can refer to this guide to find out how to manage your streams from the Logs Data Platform section of the OVHcloud Control Panel: [Getting started with the Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

#### Via the OVHcloud API

Use the following API calls to list subscriptions to your Hosted Private Cloud account.

**Referencing all LDP API calls for managed VMware vSphere**:

| **Method** | **Path**                                                        | **Description**                                                  |
|:-----------:|:----------------------------------------------------------------|:-----------------------------------------------------------------|
|     GET     | /dedicatedCloud/{serviceName}/log/kind                          | Types of logs for your Hosted Private Cloud service              |
|     GET     | /dedicatedCloud/{serviceName}/log/kind/{name}                   | Properties of this object                                        |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription                  | Log subscriptions for your Hosted Private Cloud service          |
|     POST    | /dedicatedCloud/{serviceName}/log/subscription                  | Create a log subscription for your dHosted Private Cloud service |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId} | Get this object properties                                       |
|   DELETE    | /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId} | Delete a log subscription for your Hosted Private Cloud service  |

**HPC LDP**: Logs Data Platform within Hosted Private Cloud.

**How to get the `subscriptionId`** ?

> [!api]
> 
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
>

> **Parameters:**
> 
> - `serviceName`: Service name of your VMware Hosted Private Cloud on OVHcloud service, in the form `pcc-XXX-XXX-XXX-XXX`.
> - `kind`: Name of the Hosted Private Cloud subscription log type (e.g. "esxi").
>
> Return example:
>

```json
[
 "9a36b2ec-c7d2-411d-acf8-qb64ccffdb54"
]
```

**How to disable your Hosted Private Cloud Log Data Platform subscription**?

> [!primary]
> 
> Canceling your Hosted Private Cloud LDP subscription will not delete your streams. The storage used at the time of deactivation is subject to billing.
> 
> **Note**: It is only possible (for now) to delete an entire stream.
>

> [!api]
> 
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>

> **Parameters:**
> 
> - `serviceName`: Service name of your VMware Hosted Private Cloud on OVHcloud, in the form `pcc-XXX-XXX-XXX-XXX`.
> - `subscriptionId`: The log type name of the subscription (e.g. "esxi").
>

Return:

```json
{
 "operationId": "456eb42e-58r6-4cfd-8r5c-ccr97273712r",
 "serviceName": "ldp-vg-XXXX"
}
```

You will get the **operationId**, which is the identifier that confirms that the deactivation operation has been successful.

## Go further

**Glossary**

- **Logs Data Platform (LDP):** A logs management platform fully managed and secured by OVHcloud. For more information, see the [LDP overview page](/links/manage-operate/ldp).
- **Data Stream:** A logical partition of logs that you create in a Logs Data Platform account and use when ingesting, viewing or querying your logs. Multiple sources can be stored in the same data stream, and the unit can be used to define a log pipeline (retention policy, archiving, live streaming, etc.), access rights and alert policies.
- **Log Transfer:** A feature built into an OVHcloud product to integrate logs for its services into the *Data Stream* of a Logs Data Platform account with the same OVHcloud account. This feature must be enabled by you and for your service. Read this part of the guide to enable it: [Step 2 - Logs Data Platform subscription for managed vSphere via the API](#activation).
- **Log Redirection Subscription:** When enabling logs forwarding for your OVHcloud service to a given *Data Stream* Logs Data Platform, a *subscription* must be created and attached to the *Data Stream* for future management.

You can follow these guides to take advantage of the Hosted Private Cloud Logs Data Platform features:

- [Logs Data Platform - Listing guides for getting started with Logs Data Platform](/products/observability-logs-data-platform-getting-started).
- [View your logs on a Grafana dashboard](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana).
- [Use the "LDP Tail" cli to watch your Hosted Private Cloud logs live](/pages/manage_and_operate/observability/logs_data_platform/cli_ldp_tail).
- [Push logs from Apache to LDP](/pages/manage_and_operate/observability/logs_data_platform/ingestion_apache).

If you require training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team.

Join our [community of users](/links/community).
