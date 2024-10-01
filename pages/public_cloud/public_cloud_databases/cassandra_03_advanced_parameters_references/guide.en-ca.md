---
title: Cassandra - Advanced parameters references
excerpt: This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Cassandra according to your use cases
updated: 2023-02-06
---

<style>
#content table,
.ovh-documentation table {margin-bottom:25px;overflow:unset !important;}

#content tbody,
.ovh-documentation tbody {display: inline-table !important;width:100% !important;}

#content thead,
.ovh-documentation thead {display:none}

#content tr:nth-child(2n),
.ovh-documentation tr:nth-child(2n) {
  background: none !important;
}
#content td:first-child,
.ovh-documentation td:first-child {
  background:#efefef;
  font-weight:600;
  vertical-align:top;
  width:11ch;
}
</style>

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Cassandra according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](https://api.ovh.com/console/)   

## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](/pages/public_cloud/public_cloud_databases/databases_03_advanced_configuration#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](/pages/public_cloud/public_cloud_databases/databases_03_advanced_configuration#using-api) to find out how to change your advanced parameters from the OVHcloud API.

### Advanced parameters for Cassandra

Below you can find a summary of every configuration option available for Cassandra service:

| | |
|---|---|
| Parameter | `cassandra.batch_size_fail_threshold_in_kb` |
| Value type | long |
| Minimum | 1 |
| Maximum | 1000000 |
| Description | Fail any multiple-partition batch exceeding this value. 50kb (10x warn threshold) by default. |

| | |
|---|---|
| Parameter | `cassandra.batch_size_warn_threshold_in_kb` |
| Value type | long |
| Minimum | 1 |
| Maximum | 1000000 |
| Description | Log a warning message on any multiple-partition batch size exceeding this value. 5kb per batch by default. Caution should be taken on increasing the size of this threshold as it can lead to node instability. |

| | |
|---|---|
| Parameter | `cassandra.datacenter` |
| Value type | string |
| Minimum | |
| Maximum | |
| Description | Name of the datacenter to which nodes of this service belong. Can be set only when creating the service. |

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
