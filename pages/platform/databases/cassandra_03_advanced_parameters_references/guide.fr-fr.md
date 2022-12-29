---
title: Cassandra - Références des paramètres avancés (EN)
slug: cassandra/advanced-parameters-references
excerpt:
section: Cassandre - Guides
order: 030
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/cassandra/advanced-parameters-references/'
---

<style>
th,
td:nth-child(-n+2) {
  white-space:nowrap;
}
</style>

**Last updated 28th December 2022**

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Cassandra according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/fr/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/fr/publiccloud/databases/getting-started/) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](https://docs.ovh.com/fr/publiccloud/databases/advanced-configuration/#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](https://docs.ovh.com/fr/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced parameters from the OVHcloud API.


### Advanced parameters for Cassandra

Below you can find a summary of every configuration option available for Cassandra service:

| Parameter | Value Type | Description |
|:---|:---:|:---|
| `cassandra.batch_size_fail_threshold_in_kb` | long | Fail any multiple-partition batch exceeding this value. 50kb (10x warn threshold) by default. |
| `cassandra.batch_size_warn_threshold_in_kb` | long | Log a warning message on any multiple-partition batch size exceeding this value. 5kb per batch by default. Caution should be taken on increasing the size of this threshold as it can lead to node instability. |
| `cassandra.datacenter` | string | Name of the datacenter to which nodes of this service belong. Can be set only when creating the service. |


## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
