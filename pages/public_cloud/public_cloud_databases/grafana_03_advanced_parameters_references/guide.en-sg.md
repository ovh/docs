---
title: Grafana - Advanced parameters references
excerpt: This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Grafana according to your use cases
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

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Grafana according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-sg/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](https://api.ovh.com/console/)   

## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using API

Please refer to this [guide](/pages/public_cloud/public_cloud_databases/databases_03_advanced_configuration#using-api) to find out how to change your advanced parameters from the OVHcloud API.

### Advanced parameters for Grafana

Below you can find a summary of every configuration option available for Grafana service:

| | |
|---|---|
| Parameter | `smtp_server.from_address` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | |
| Description | Address used for sending emails |

| | |
|---|---|
| Parameter | `smtp_server.host` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | |
| Description | Server hostname or IP |

| | |
|---|---|
| Parameter | `smtp_server.port` |
| Value type | long |
| Minimum | 1 |
| Maximum | 65535  |
| Values | |
| Description | SMTP server port |

| | |
|---|---|
| Parameter | `smtp_server.skip_verify` |
| Value type | boolean |
| Minimum | |
| Maximum | |
| Values | |
| Description | Skip verifying server certificate. Defaults to false |

| | |
|---|---|
| Parameter | `smtp_server.starttls_policy` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | "MandatoryStartTLS", "NoStartTLS", "OpportunisticStartTLS" |
| Description | Either OpportunisticStartTLS, MandatoryStartTLS or NoStartTLS. Default is OpportunisticStartTLS. |

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
