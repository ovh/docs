---
title: InfluxDB (Database service)
slug: add-services-influxdb
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

It exposes an HTTP API for client interaction. See the [InfluxDB documentation](https://docs.influxdata.com/influxdb) for more information.

## Supported versions

{{% major-minor-versions-note configMinor="true" %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 2.7  
- 2.3 |

{{% image-versions-legacy "influxdb" %}}

## Deprecated versions

The following versions are still available in your projects,
but they're at their end of life and are no longer receiving security updates from upstream.

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 2.2  
- 1.8  
- 1.7  
- 1.3  
- 1.2 |

To ensure your project remains stable in the future,
switch to a [supported version](#supported-versions).
See more information on [how to upgrade to version 2.3 or later](#upgrade-to-version-23-or-later).

{{% relationship-ref-intro %}}

{{% service-values-change %}}

```yaml
    {
      "host": "influxdb27.internal",
      "hostname": "3xqrvge7ohuvzhjcityyphqcja.influxdb27.service._.ca-1.platformsh.site",
      "cluster": "jqwcjci6jmwpw-main-bvxea6i",
      "service": "influxdb27",
      "type": "influxdb:2.7",
      "rel": "influxdb",
      "scheme": "http",
      "username": "admin",
      "password": "ChangeMe",
      "port": 8086,
      "path": null,
      "query": {
        "org": "main",
        "bucket": "main",
        "api_token": "d85b1219ee8cef8f84d33216257e44d51ddd52e89ae7acbd5ab1d01d320e2f7f"
      },
      "fragment": null,
      "public": false,
      "host_mapped": false,
      "ip": "169.254.99.35"
    }
```

## Usage example

{{% endpoint-description type="influxdb" /%}}

```php
<?php
// This assumes a fictional application with an array named $settings.
if (getenv('PLATFORM_RELATIONSHIPS')) {
	$relationships = json_decode(base64_decode($relationships), TRUE);

	// For a relationship named 'influxtimedb' referring to one endpoint.
	if (!empty($relationships['influxtimedb'])) {
		foreach ($relationships['influxtimedb'] as $endpoint) {
			$settings['influxdb_host'] = $endpoint['host'];
			$settings['influxdb_port'] = $endpoint['port'];
			break;
		}
	}
}
```

## Export data

To export your data from InfluxDB, follow these steps:

1\. Install and set up the [`influx` CLI](https://docs.influxdata.com/influxdb/cloud/tools/influx-cli/).

2\. Connect to your InfluxDB service with the [{{< vendor/name >}} CLI](../administration/cli/_index.md):


```bash
platform tunnel:single
```

   This opens an SSH tunnel to your InfluxDB service on your current environment and produces output like the following:

```bash
SSH tunnel opened to influxdb at: http://127.0.0.1:30000
```

3\. Get the username, password and token from the [relationship](#relationship-reference) by running the following command:


```bash
platform relationships -P {{<variable "RELATIONSHIP_NAME" >}}
```

4\. Adapt and run [InfluxDB's CLI export command](https://docs.influxdata.com/influxdb/v2.3/reference/cli/influx/backup/).


``` bash
influx backup --host {{< variable "URL_FROM_STEP_2" >}} --token {{< variable "API_TOKEN_FROM_STEP_3" >}}
```

## Upgrade to version 2.3 or later

### From a previous 2.x version

From version 2.3 onward, the structure of relationships changes.

If you're using a prior 2.x version, your app might currently rely on pulling the `bucket`, `org`, `api_token`,
or `user` values available in the [`PLATFORM_RELATIONSHIPS` environment variable](../development/variables/use-variables.md#use-provided-variables).

If so, to ensure your upgrade is successful, make the following changes to your connection logic:

- Rename the `user` key to `username`.

- Move the `org`, `bucket` and  `api_token` keys so they're contained in a dictionary under the `query` key.


If you're relying on any other attributes connecting to InfluxDB, they remain accessible as top-level keys from the [`PLATFORM_RELATIONSHIPS` environment variable](../development/variables/use-variables.md#use-provided-variables), aside from those addressed above:


```yaml
    {
      "host": "influxdb27.internal",
      "hostname": "3xqrvge7ohuvzhjcityyphqcja.influxdb27.service._.ca-1.platformsh.site",
      "cluster": "jqwcjci6jmwpw-main-bvxea6i",
      "service": "influxdb27",
      "type": "influxdb:2.7",
      "rel": "influxdb",
      "scheme": "http",
      "username": "admin",
      "password": "ChangeMe",
      "port": 8086,
      "path": null,
      "query": {
        "org": "main",
        "bucket": "main",
        "api_token": "d85b1219ee8cef8f84d33216257e44d51ddd52e89ae7acbd5ab1d01d320e2f7f"
      },
      "fragment": null,
      "public": false,
      "host_mapped": false,
      "ip": "169.254.99.35"
    }
```

### From a 1.x version

From version 2.3 onward, InfluxDB includes an upgrade utility that can convert databases from previous versions to version 2.3 or later.

To upgrade from a 1.x version to 2.3 or later,
change the service version in your `{{< vendor/configfile "services" >}}` file and push your project.
Any existing data you had in your 1.x system is automatically upgraded for you into the 2.3+ system.

> [!primary]  
> 
> During an upgrade from a 1.x version to a 2.3 version or later,
> a new admin password and a new admin API token are automatically generated.
> Previous credentials can't be retained.</br>
> You can retrieve your new credentials through the [`PLATFORM_RELATIONSHIPS` environment variable](../development/variables/use-variables.md#use-provided-variables) or by running `webpaas relationships`.
> 
> 
