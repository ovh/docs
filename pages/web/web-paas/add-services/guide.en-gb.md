---
title: Add services
slug: add-services
section: Add-Services
hidden: true
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} includes many services, so you don't have to subscribe to external cache or search engine services.
Because the services are included in your project, you can manage them through Git
and they're backed up together with the rest of your project.

Your project defines the services configuration in a file named `{{< vendor/configfile "services" >}}`.
If you don't need any services (such as for a static website), you don't need to include this configuration.

Read on to see how to add services.

![Services](images/relationships.png "0.50")

## Add a service

Adding a service is a two-step process.

### 1. Configure the service

All service configuration happens in the `{{< vendor/configfile "services" >}}` file in your Git repository.

Configure your service in the following pattern:

```yaml {configFile="services"}
{{<variable "SERVICE_NAME" >}}:
    type: {{<variable "SERVICE_TYPE" >}}:{{<variable "VERSION" >}}
    # Other options...
```

An example service configuration for two databases might look like this:

```yaml {configFile="services"}
database1:
    type: mariadb:10.5
    disk: 2048
database2:
    type: postgresql:13
    disk: 1024
```

This YAML file is a dictionary defining all of the services you want to use.
The top-level key is a custom service name, which you use to identify the service in step 2.
You can give it any name you want with lowercase alphanumeric characters, hyphens, and underscores.

> [!primary]  
> 
> Changing the service name is interpreted as creating an entirely new service.
> This **removes all data in that service**.
> Always back up your data before changing existing services in your `{{< vendor/configfile "services" >}}` file.
> 
> 

#### Service options

The following table presents the keys you can define for each service:

| Name            | Type       | Required          | Description |
| --------------- | ---------- | ----------------- | ----------- |
| `type`          | `string`   | Yes               | One of the [available services](#available-services) in the format `type:version`. |
| `disk`          | `integer`  | For some services | The size in [MB](../other/glossary.md#mb) of the [persistent disk](#disk) allocated to the service. Can't be set for memory-resident-only services such as `memcache` and `redis`. Limited by your plan settings. |
| `size`          | `string`   |                   | How many CPU and memory [resources to allocate](#size) to the service. Possible values are `AUTO`, `S`, `M`, `L`, `XL`, `2XL`, and `4XL`. Limited by your plan settings.<BR><BR>When `AUTO` applies, available resources are automatically balanced out based on the number of containers on your plan, so that no container is oversized compared to the others. To view the actual sizes of your containers, check the **Environment Configuration** section in your deployment [activity logs](../increase-observability/logs/access-logs.md#activity-logs). |
| `configuration` | dictionary | For some services | Some services have additional specific configuration options that can be defined here, such as specific endpoints. See the given service page for more details. |
| `relationships` | dictionary | For some services | Some services require a relationship to your app. The content of the dictionary has the same type as the `relationships` dictionary for [app configuration](../create-apps/app-reference.md#relationships). The `endpoint_name` for apps is always `http`. |



##### Disk

{{% disk-space-mb %}}

{{% disk-downsize type="service" %}}

##### Size

Resources are distributed across all containers in a project from the total available from your [plan size](../administration/pricing/_index.md).

By default, {{< vendor/name >}} allocates CPU and memory resources to each container automatically.
Some services are optimized for high CPU load, some for high memory load.
If your plan is sufficiently large for bigger containers, you can increase the size of your service container.

Note that service containers in development environments are always set to size `S`.

### 2. Connect the service

Once you have configured a service, you need to create a relationship to connect it to an app.
This is done in your [app configuration for relationships](../create-apps/app-reference.md#relationships).

The relationship follows this pattern:

```yaml {configFile="app"}
relationships:
    {{< variable "RELATIONSHIP_NAME" >}}: "{{< variable "SERVICE_NAME" >}}:{{< variable "ENDPOINT" >}}"
```

An example relationship to connect to the databases given in the [example in step 1](#1-configure-the-service):

```yaml {configFile="app"}
relationships:
    mysql_database: "database1:mysql"
    postgresql_database: "database2:postgresql"
```

As with the service name, you can give the relationship any name you want
with lowercase alphanumeric characters, hyphens, and underscores.
It helps if the service name and relationship name are different, but it isn't required.

Each service offers one or more endpoints for connections, depending on the service.
An endpoint is a named set of credentials to give access to other apps and services in your project.
If you don't specify one in the [service configuration](#service-options), a default endpoint is created.
The default endpoint varies by service, generally being its type (such as `mysql` or `solr`).

## Available services

The following table presents the available service types and their versions.
Add them to the `type` key of the [service configuration](#1-configure-the-service) in the format `type:version`.

<!-- To update the versions in this table, use docs/data/registry.json -->
{{% supported-services %}}

### Service versions

These services generally follow [semantic versioning conventions](https://semver.org/).
You can select the major version, but the latest compatible minor is applied automatically and can’t be overridden.
Patch versions are applied periodically for bug fixes and the like.
When you deploy your app, you always get the latest available patches.

## Service timezones

All services have their system timezone set to UTC by default.
For some services, you can change the timezone for the running service
(this doesn't affect the container itself and so logs are still in UTC).

* [MySQL](./mysql/_index.md#service-timezone)
* [PostgreSQL](./postgresql.md#service-timezone)

## Connect to a service

For security reasons, you can't access services directly through HTTP.
You can connect through your app or by opening an SSH tunnel to access the service directly.

> [!tabs]      
