---
title: "Pushing logs from VMware on OVHcloud to Logs Data Platform"
excerpt: "Find out how to enable Hosted Private Cloud VMware on OVHcloud logs forwarding to a Logs Data Platform stream" 
updated: 2024-08-08
---

> [!primary]
> 
> This feature is currently in Beta phase. This guide may be incomplete and updated.
>

## Objective

The purpose of this guide is to show you how to enable log transfer from your Hosted Private Cloud VMware on OVHcloud to Logs Data Platform (LDP), a platform that helps you store, archive, query and view your logs.

## Requirements

- An [OVHcloud customer account](/links/manager).
- One or more Hosted Private Cloud resources.
- An active Logs Data Platform stream with the same account and security level as your Hosted Private Cloud VMware on OVHcloud.
- You need to have followed the guide [Introduction to the Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)
- You must have security options enabled, to check launch [this](#security-options) API call.

## Glossary

- **Logs Data Platform (LDP):** A logs management platform fully managed and secured by OVHcloud. For more information, see the [LDP overview page](/links/manage-operate/ldp).
- **Data Stream:** A logical partition of logs that you create in a Logs Data Platform account and use when ingesting, viewing or querying your logs. Multiple sources can be stored in the same data stream, and the unit can be used to define a log pipeline (retention policy, archiving, live streaming, etc.), access rights and alert policies.
- **Log Transfer:** A feature built into an OVHcloud product to integrate logs for its services into the *Data Stream* of a Logs Data Platform account with the same OVHcloud account. This feature must be enabled by you and for your service. Read this part of the guide to enable it: [Step 1 - How to enable logs transfer via the OVHcloud API](#activation).
- **Log Redirection Subscription:** When enabling logs forwarding for your OVHcloud service to a given *Data Stream* Logs Data Platform, a *subscription* must be created and attached to the *Data Stream* for future management.

## Instructions

> [!primary]
> 
> Please note that **log forwarding** is free to enable, but you will be billed for using the Logs Data Platform service at the standard rate.
> 
> For pricing information, refer to the solution page: [OVHcloud Logs Data Platform](/links/manage-operate/ldp).
>

By enabling logs forwarding to a Logs Data Platform stream, you can collect, index and analyze Hosted Private Cloud VMware on OVHcloud data. Regardless of their origin, this platform offers a variety of access methods depending on the protocol, the level of security and the format desired. The data collected can be easily used, thanks to the multiple APIs and web interfaces available.

For further information on the technical specifications of the Logs Data Platform (ports, protocols, etc.), please refer to our guide [Getting started with the Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

### Logs and labels

#### Available kinds

A *Kind* is a "type" of log that your product generates.

These are the types of logs you want to transfer to your Logs Data Platform. Here are examples that may be available depending on the components of your VMware on OVHcloud Hosted Private Cloud architecture:

- **esxi**: Filtered by application.
- **nsxtEdge**: Everything is redirected, no filter.
- **vcsa**: Filtered by application.
- **nsxtManager**: Filtered by application.

It is perfectly acceptable that a product has only one category.

**Notes**:

- All VMware logs are collected and sent to the Logs Data Platform clusters.
- All VMware appliance logs are processed and marked at the Logs Data Platform.

We provide all the metadata for the identification of VMware Hosted Private Cloud on OVHcloud.

### Step 1 - Verifying security options <a name="security-options"></a>

> [!warning]
>
> If call API reference "disabled", contact the OVHcloud support.
>

#### Via the OVHcloud API:

To check if the security options are present to enable the activation of the feature within your managed OVHcloud HPC VMware vSphere, launch the following API call:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/securityOptions
>
>
> **Parameter**:
>
> - `serviceName`: Your Dedicated Cloud in the form, "pcc-XXX-XXX-XXX-XXX".
>

Example of a return if the option is "enabled":

```Shell
 {
 "state": "delivered"
 }
 "
```

Return example if the option will be "enabled":

```Shell
 {
 "state": "creating"
 }
 “
```

Example of a return if the option is "disabled":

```Shell
 {
  "state": "disabled"
 }
 “
```

### Step 2 - Enable Hosted Private Cloud logs transfer

> [!primary]
> 
> Hosted Private Cloud and LDP resources must belong to the same OVHcloud account. You will need to create a Logs Data Platform beforehand.
>

### Create a Logs Data Platform stream

You can refer to this guide and find out how to manage your streams from the Logs Data Platform section of the OVHcloud Control Panel: [Getting started with the Logs Data Platform.](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

You can retrieve the **streamId** and set it aside (copy and paste). You will need it to activate your Hosted Private Cloud subscription with the Logs Data Platform in question.

### Step 3 - Activate the Logs Data Platform Hosted Private Cloud subscription

#### Via the OVHcloud Control Panel

This feature is not yet available in the Hosted Private Cloud control panel.

#### Via the OVHcloud API <a name="activation"></a>

> [!success]
>
> Read the [Getting started with OVHcloud APIs](/pages/manage_and_operate/api/first-steps) guide to get familiar with using OVHcloud APIv6.

To retrieve the **streamId** of your LDP account, read our guide [Getting started with the Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

> [!api]
> 
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
> 

> **Parameters:**
> 
> - `serviceName`: Your Hosted Private Cloud reference in the form `pcc-XXX-XXX-XXX-XXX`.
> - `kind`: Name of the subscription log type, e.g. "esxi", "nsxtManager", "vcsa", "nsxtEdge".
> - `StreamId`: The destination stream identifier (uuid:"ggb8d894-c491-433e-9c87-50a8bf6fe773").
>

Example:

```shell
@api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription

{
  "kind": "esxi", // The VMware label, the values currently supported are: ["esxi","nsxtManager","vcsa","nsxtEdge"].
  "streamId": "ggb8d894-c491-433e-9c87-50a8bf6fe773", // The LDP stream ID.
}
```

The GET request allows you to list your subscriptions.

### Step 4 - Manage your Data Logs Platform

#### Via the OVHcloud Control Panel

You can refer to this guide to find out how to manage your streams from the Logs Data Platform section of the OVHcloud Control Panel: [Getting started with the Logs Data Platform.](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

#### Via the OVHcloud API

Use the following API calls to list subscriptions to your Hosted Private Cloud account.

**Referencing of all Hosted Private Cloud VMware on OVHcloud API calls**:

| **Method** |                   **Path**                      |                     **Description**                     |
|:-----------:|:----------------------------------------------:|:-------------------------------------------------------:|
|     GET     | /dedicatedCloud/{serviceName}/log/kind         |        Types of logs for your Hosted Private Cloud service |
|     GET     | /dedicatedCloud/{serviceName}/log/kind/{name}  |          Properties of this object.                     |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription |        Log subscriptions for your Hosted Private Cloud service        |
|     POST    | /dedicatedCloud/{serviceName}/log/subscription |    Create a log subscription for your dHosted Private Cloud service   |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId} |           Get this object properties.           |
|   DELETE    | /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId} |  Delete a log subscription for your Hosted Private Cloud service |


- Get the "subscriptionId":

> [!api]
> 
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
>

> **Parameters:**
> 
> - `serviceName`: Service name of your VMware Hosted Private Cloud on OVHcloud service, in the form `pcc-XXX-XXX-XXX-XXX`.
> - `kind`: Name of the Hosted Private Cloud subscription log type (e.g. "esxi").
>

Return example:

```shell
[
  "9a36b2ec-c7d2-411d-acf8-qb64ccffdb54"
]
```

- Disabling your Hosted Private Cloud Log Data Platform subscription:

> [!primary]
> 
> Canceling your Hosted Private Cloud LDP subscription will not delete your streams. The storage used at the time of deactivation is subject to billing.
> 
> **Note**: It is only possible (to date) to delete an entire stream.
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

You will get the **operationId**, which is the identifier that confirms that the deactivation operation has been successful.

Return:

```shell
{
  "operationId": "456eb42e-58r6-4cfd-8r5c-ccr97273712r",
  "serviceName": "ldp-vg-XXXX"
}
```

## Go further

You can follow these guides to take advantage of the Hosted Private Cloud Logs Data Platform features:

- [Logs Data Platform - Listing guides for getting started with Logs Data Platform](/products/observability-logs-data-platform-getting-started).
- [View your logs on a Grafana dashboard](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana).
- [Use the "LDP Tail" cli to watch your Hosted Private Cloud logs live](/pages/manage_and_operate/observability/logs_data_platform/cli_ldp_tail).
- [Push logs from Apache to LDP](/pages/manage_and_operate/observability/logs_data_platform/ingestion_apache).

If you require training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team.

Join our [community of users](/links/community).
