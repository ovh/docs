---
title: Grafana - Advanced parameters references
slug: grafana/advanced-parameters-references
excerpt:
section: Grafana - Guides
order: 030
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/grafana/advanced-parameters-references/'
---

<style>
th,
td:nth-child(-n+2) {
  white-space:nowrap;
}
</style>

**Last updated 28th December 2022**

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Grafana according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/es/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/us/es/publiccloud/databases/getting-started/) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using API

Please refer to this [guide](https://docs.ovh.com/us/es/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced parameters from the OVHcloud API.


### Advanced parameters for Grafana

Below you can find a summary of every configuration option available for Grafana service:

| Parameter | Value Type | Description |
|:---|:---:|:---|
| `smtp_server.from_address` | string | Address used for sending emails |
| `smtp_server.host` | string | Server hostname or IP |
| `smtp_server.port` | long | SMTP server port |
| `smtp_server.skip_verify` | boolean | Skip verifying server certificate. Defaults to false |
| `smtp_server.starttls_policy` | string | Either OpportunisticStartTLS, MandatoryStartTLS or NoStartTLS. Default is OpportunisticStartTLS. |


## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
