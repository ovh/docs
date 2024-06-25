---
title: "VMware log forwading to an Logs Data Plateform stream" 
excerpt: "Find out how to enable Hosted Private Cloud VMware on OVHcloud log forwarding to a Logs Data Platform stream" 
updated: 2024-06-25
---

## Objective

The purpose of this guide is to show you how to enable log transfer from your Hosted Private Cloud VMware on OVHcloud to Logs Data Platform (LDP), a platform that helps you store, archive, query and view your logs.

## Requirements

- A OVHcloud customer account.
- You must have one or more Hosted Private Cloud resources.
- an active Logs Data Platform stream with the same account and security level as your Hosted Private Cloud VMware on OVHcloud.
- You need to have followed the guide on ["Introduction to the Logs Data Platform".](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)

## Concepts and Limitations

### Glossary

- **Logs Data Platform:** A log management platform fully managed and secured by OVHcloud. For more information, see the LDP <https://www.ovhcloud.com/fr/logs-data-platform/> overview page.
- **Data Stream:** A logical partition of logs that you create in a Logs Data Platform account and use when ingesting, viewing or querying your logs. Multiple sources can be stored in the same data stream, and the unit can be used to define a log pipeline (retention policy, archiving, live streaming, etc.), access rights and alert policies.
- **Log Transfer:** A feature built into an OVHcloud product to integrate logs for its services into the *Data Stream* of a Logs Data Platform account with the same OVHcloud account. This feature must be enabled by you, and for your service, please read this part of the guide to enable it: [Step 1 - How to enable log transfer via the OVHcloud API ?](#Activation)
- **Log Redirection Subscription:** When enabling log forwarding for your OVHcloud service to a given *Data Stream* Logs Data Platform, a *subscription* must be created and attached to the *Data Stream* for future management.

## In practice

> [!primary]
> 
> Please note that **log forwarding** is free to enable, but you will be billed for using the Logs Data Platform service at the standard rate.
> 
> For pricing, go to the solution page : [OVHcloud Logs Data Platform.](https://www.ovhcloud.com/fr/logs-data-platform/){.external}.
>

By enabling log forwarding to a Logs Data Platform stream, you can collect, index and analyze Hosted
Private Cloud VMware on OVHcloud data. Regardless of their origin, this platform offers a variety of
access methods depending on the protocol, the level of security and the format desired. The data
collected can be easily used, thanks to the multiple APIs and web interfaces available.

For further information on the technical specifications of the Logs Data Platform (ports, protocols, etc.), please refer to our guide: ["Getting started with the Logs Data Platform".](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

### Logs and labels

#### Kind available

A Kind is a "type" of log that your product generates.

These are the type of log you want to transfer to your Logs Data Platform. Here are examples that may be available depending on the components of your VMware on OVHcloud Hosted Private Cloud architecture :

- **esxi**: Filtered by application.
- **nsxtEdge**: Everything is redirected, no filter.
- **vcsa**: Filtered by application.
- **nsxtManager**: Filtered by application.

It is perfectly acceptable that a product has only one category.

**Notes**:
- All VMware logs are collected and sent to the Logs Data Platform clusters.
- All VMware appliance logs are processed and marked at the Logs Data Platform.

We put all the metadata for the identification of VMware Hosted Private Cloud on OVHcloud.

With Hosted Private Cloud (Dedicated Server), you can imagine 3 types of logs.

For example :
1.  Kernel logs.
2.  Auth logs.
3.  Cron logs.

### Step 1 - Enable Hosted Private Cloud log transfer

> [!primary]
> 
> Hosted Private Cloud and LDP resources must belong to the same OVHcloud account. You will need to create a Logs Data Platform beforehand.
>

### Create a Logs Data Platform stream

#### Via the OVHcloud Control Panel :

You can refer to this guide and find out how to manage your streams from the Log Data Platform control panel : [Getting started](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) [|Getting started with the Logs Data Platform.](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

You can retrieve the **streamId** and set it aside (copy and paste). You will need it to activate your Hosted Private Cloud subscription with the Logs Data Platform in question.

### Activate the Logs Data Platform Hosted Private Cloud subscription

#### Via the OVHcloud Control Panel :

This feature is not yet available in the Hosted Private Cloud control panel.

#### Via the OVHcloud API : <a name="Activation"></a>

> [!primary]
> 
> Find out more about OVHcloud API calls: [Getting started with the OVHcloud API](/pages/manage_and_operate/api/first-steps).
>

To retrieve the **streamId** of your LDP account, follow our guide: Getting [started with the Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

> [!api]
> 
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
> 
>
> **Settings:**
> 
> - **serviceName**: Service name of your VMware Hosted Private Cloud on OVHcloud, (pcc-XXX-XXX-XXX-XXX).
> 
> - **kind**: Name of the subscription log type, ["esxi","nsxtManager","vcsa","nsxtEdge"].
> 
> - **streamId**: The destination stream identifier, (uuid:"ggb8d894-c491-433e-9c87-50a8bf6fe773").
>

Example:

``` shell
@api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription

{
  "kind": "esxi", // Le label VMware, les valeurs supportées actuellement sont : ["esxi","nsxtManager","vcsa","nsxtEdge"].
  "streamId": "ggb8d894-c491-433e-9c87-50a8bf6fe773", // L'identifiant du stream LDP.
}
```

The GET request allows you to list your subscriptions.

### Step 2 - Manage your Data Logs Platform

#### Via the OVHcloud Control Panel :

You can refer to this guide and find out how to manage your streams from the Log Data Platform control panel: [Getting started](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) [Getting started with the Logs Data Platform.](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

#### Via the OVHcloud API :

Please use the following API calls to list subscriptions to your Hosted Private Cloud account.

**Referencing of all Hosted Private Cloud VMware on OVHcloud API calls**:

| **Méthode** |                   **Chemin**                   |                     **Description**                     |
|:-----------:|:----------------------------------------------:|:-------------------------------------------------------:|
|     GET     |     /dedicatedCloud/{serviceName}/log/kind     |        Types of logs for your Dedicated Cloud.        |
|     GET     | /dedicatedCloud/{serviceName}/log/kind/{name}  |          Get properties of this object.            |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription |        Log subscriptions for your dedicated cloud.        |
|    POST     | /dedicatedCloud/{serviceName}/log/subscription |    Create a log subscription for your dedicated cloud.   |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription |           Get this object properties.           |
|   DELETE    | /dedicatedCloud/{serviceName}/log/subscription |  Delete a log subscription for your dedicated cloud. |


#### Get "subscriptionId"

> [!api]
> 
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
> 
> **Settings:**
> 
> - **serviceName**: Service name of your VMware Hosted Private Cloud on OVHcloud, (pcc-XXX-XXX-XXX-XXX).
> 
> - **kind**: Name of the Hosted Private Cloud subscription log type ("esxi").
>

Return example:

``` shell
[
  "9a36b2ec-c7d2-411d-acf8-qb64ccffdb54"
]
```

Disable your Hosted Private Cloud Log Data Platform subscription:

> [!primary]
> 
> Canceling your Hosted Private Cloud LDP subscription will not delete your streams. The storage
> used at the time of deactivation is subject to billing.
> 
> **Note**: It is only possible (to date) to delete an entire stream.
>

> [!api]
> 
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
> 
> **Settings:**
> 
> - **serviceName**: Service name of your VMware Hosted Private Cloud on OVHcloud, (pcc-XXX-XXX-XXX-XXX).
> 
> - **subscriptionId**: The log type name of the subscription ("esxi").
>

You will get the **operationId**, which is the identifier that confirms that the deactivation
operation has been successful.

Back:

``` Shell
{
  "operationId": "456eb42e-58r6-4cfd-8r5c-ccr97273712r",
  "serviceName": "ldp-vg-XXXX"
}
```

## Go further

You can follow these guides to take advantage of the Hosted Private Cloud Logs Data Platform features :

- [Logs Data Platform - Listing guides for getting started with Logs Data Platform](https://help.ovhcloud.com/csm/fr-documentation-observability-logs-data-platform-getting-started?id=kb_browse_cat&kb_id=3d4a8129a884a950f07829d7d5c75243&kb_category=e3eec38c1977a5d0476b930e789695d0&spa=1){.external}.
- [View your logs on a Grafana dashboard](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana).
- [Use the "LDP Tail" cli to watch your Hosted Private Cloud logs live](/pages/manage_and_operate/observability/logs_data_platform/cli_ldp_tail).
- [Push logs from Apache to LDP](/pages/manage_and_operate/observability/logs_data_platform/ingestion_apache).

If you require training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/fr/professional-services/){.external} to get a quote and request a custom analysis of your project from our Professional Services team.

Join our [community of users](/links/community).
