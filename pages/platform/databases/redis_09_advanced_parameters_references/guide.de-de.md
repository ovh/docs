---
title: Redis - Advanced parameters references
slug: redis/advanced-parameters-references
excerpt:
section: Redis - Guides
order: 080
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/redis/advanced-parameters-references/'
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

**Last updated 6th February 2023**

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Redis according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/de/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/de/publiccloud/databases/getting-started/) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](https://docs.ovh.com/de/publiccloud/databases/advanced-configuration/#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](https://docs.ovh.com/de/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced parameters from the OVHcloud API.


### Advanced parameters for Redis

Below you can find a summary of every configuration option available for Redis service:

| | |
|---|---|
| Parameter | `redis_acl_channels_default` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | "allchannels", "resetchannels" |
| Description | Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Redis configuration acl-pubsub-default. |


| | |
|---|---|
| Parameter | `redis_io_threads` |
| Value type | long |
| Minumum | 1 |
| Maximum | 32 |
| Values | |
| Description | Redis IO thread count |


| | |
|---|---|
| Parameter | `redis_lfu_decay_time` |
| Value type | long |
| Minumum | 1 |
| Maximum | 120 |
| Values | |
| Description | LFU maxmemory-policy counter decay time in minutes |


| | |
|---|---|
| Parameter | `redis_lfu_log_factor` |
| Value type | long |
| Minumum | 0 |
| Maximum | 100 |
| Values | |
| Description | Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies |


| | |
|---|---|
| Parameter | `redis_notify_keyspace_events` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | |
| Description | Set notify-keyspace-events option |


| | |
|---|---|
| Parameter | `redis_number_of_databases` |
| Value type | long |
| Minumum | 1 |
| Maximum | 128 |
| Values | |
| Description | Set number of redis databases. Changing this will cause a restart of redis service. |


| | |
|---|---|
| Parameter | `redis_persistence` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | "off", "rdb" |
| Description | When persistence is 'rdb', Redis does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked. |


| | |
|---|---|
| Parameter | `redis_pubsub_client_output_buffer_limit` |
| Value type | long |
| Minumum | 32 |
| Maximum | 512 |
| Values | |
| Description | Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan. |


| | |
|---|---|
| Parameter | `redis_ssl` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Values | |
| Description | Require SSL to access Redis |


| | |
|---|---|
| Parameter | `redis_timeout` |
| Value type | long |
| Minumum | 0 |
| Maximum | 31536000 |
| Values | |
| Description | Redis idle connection timeout in seconds |




## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/de/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
