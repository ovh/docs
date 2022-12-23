---
title: Redis - Advanced parameters references
slug: redis/advanced-parameters-references
excerpt:
section: Redis - Guides
order: 080
---
<link rel="stylesheet" href="https://fpillotovh.github.io/icons/icons.css">
<style>
h2 code,
h3 code,
h4 code,
h5 code,
h6 code {
  display:inline-block !important;
  padding-top:0 !important;
}
th,
td:nth-child(-n+2) {
  white-space:nowrap;
}
.child {
  margin-left: 4ch !important;
  position: relative !important;
}
.child:before {
  content: "\ea0d";
  font-family: 'icons' !important;
  font-size: 1.4em;
  left: -3ch;
  position: absolute;
  text-align: center;
  width: 3ch;
}
</style>

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Redis according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/gb/en/publiccloud/databases/getting-started/) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](https://docs.ovh.com/gb/en/publiccloud/databases/advanced-configuration/#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](https://docs.ovh.com/gb/en/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced parameters from the OVHcloud API.


### Advanced parameters for Redis

Below you can find a summary of every configuration option available for Redis service:

| Parameter | Value Type | Description |
|:---|:---:|:---|
| `private_access` | object | **Allow access to selected service ports from private networks** |
| `redis`{.child} | boolean | **Allow clients to connect to redis with a DNS name that always resolves to the service’s private IP addresses. Only available in certain network locations** |
| `privatelink_access` | object | **Allow access to selected service components through Privatelink** |
| `redis`{.child} | boolean | **Enable redis** |
| `public_access` | object | **Allow access to selected service ports from the public Internet** |
| `redis`{.child} | boolean | **Allow clients to connect to redis from the public internet for service nodes that are in a project VPC or another type of private network** |
| `redis_acl_channels_default` | string | **Default ACL for pub/sub channels used when Redis user is created** Determines default pub/sub channels’ ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn’t affect Redis configuration acl-pubsub-default. |
| `redis_io_threads` | integer | **Redis IO thread count** |
| `redis_lfu_decay_time` | integer | **LFU maxmemory-policy counter decay time in minutes** |
| `redis_lfu_log_factor` | integer | **Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies** |
| `redis_notify_keyspace_events` | string | **Set notify-keyspace-events option** |
| `redis_number_of_databases` | integer | **Number of redis databases** Set number of redis databases. Changing this will cause a restart of redis service. |
| `redis_persistence` | string | **Redis persistence** When persistence is ‘rdb’, Redis does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is ‘off’, no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can’t be forked. |
| `redis_pubsub_client_output_buffer_limit` | integer | **Pub/sub client output buffer hard limit in MB** Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan. |
| `redis_ssl` | boolean | **Require SSL to access Redis** |
| `redis_timeout` | integer | **Redis idle connection timeout in seconds** |
