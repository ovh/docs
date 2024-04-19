---
title: Memcached (Object cache)
updated: 2024-01-09
---

## Objective

Memcached is a simple in-memory object store well-suited for application level caching.

See the [Memcached documentation](https://memcached.org) for more information.

Both Memcached and Redis can be used for application caching. As a general rule, Memcached is simpler and thus more widely supported while Redis is more robust. Web PaaS recommends using Redis if possible but Memcached is fully supported if an application favours that cache service.

## Supported versions

You can select the major and minor version. Patch versions are applied periodically for bug fixes and the like. When you deploy your app, you always get the latest available patches.

<table>
    <thead>
        <tr>
            <th>Grid</th>
            <th>Dedicated Gen 3</th>
            <th>Dedicated Gen 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.6 </td>
            <td>None available</td>
            <td>1.4*</thd>
        </tr>
	<tr>
            <td>1.5 </td>
            <td></td>
            <td></thd>
        </tr>
	<tr>
            <td>1.4 </td>
            <td></td>
            <td></thd>
        </tr>
    </tbody>
</table>

\* No High-Availability on  Dedicated Gen 2.

## Relationship reference

Example information is available through the [`PLATFORM_RELATIONSHIPS` environment variable](/pages/web_cloud/web_paas_powered_by_platform_sh/development/development-variables#platformsh-provided-variables)

Note that the information about the relationship can change when an app is redeployed or restarted or the relationship is changed. So your apps should only rely on the `PLATFORM_RELATIONSHIPS` environment variable directly rather than hard coding any values.

```yaml
{
    "service": "memcached",
    "ip": "169.254.228.111",
    "hostname": "3sdm72jgaxge2b6aunxdlzxyea.memcached.service._.eu-3.platformsh.site",
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "memcached.internal",
    "rel": "memcached",
    "scheme": "memcached",
    "type": "memcached:1.6",
    "port": 11211
}
```

## Usage example

### 1. Configure the service

To define the service, use the `memcached` type.

In your ``.platform/services.yaml``:

```yaml
# The name of the service container. Must be unique within a project.
<SERVICE_NAME>:
    type: memcached:<VERSION>
```

Note that changing the name of the service replaces it with a brand new service and all existing data is lost. Back up your data before changing the service.

### 2. Add the relationship

To define the relationship, use the following configuration:

```yaml
# Relationships enable access from this app to a given service.
# The example below shows simplified configuration leveraging a default service (identified from the relationship name) and a default endpoint.
# See the Application reference for all options for defining relationships and endpoints.
relationships:
    <SERVICE_NAME>: 
```

You can define `<SERVICE_NAME>` as you like, as long as it’s unique between all defined services and matches in both the application and services configuration.

With the above definition, the application container now has access to the service via the relationship `<SERVICE_NAME>`.

If you are using PHP, configure the relationship and enable the [PHP memcached extension](/pages/web_cloud/web_paas_powered_by_platform_sh/languages/php/extensions) in your `.platform.app.yaml`. Note that the `memcached` extension requires `igbinary` and `msgpack` as well, but those will be enabled automatically.

```yaml
runtime:
    extensions:
        - memcached
```

For Python you will need to include a dependency for a Memcached library, either via your requirements.txt file or a global dependency. As a global dependency you would add the following to `.platform.app.yaml`:

```yaml
dependencies:
    python:
       python-memcached: '*'
```

## Example Configuration 

### Service Configuration

```yaml
# The name of the service container. Must be unique within a project.
memcached:
    type: memcached:1.6
```

### App configuration
```yaml
# Relationships enable access from this app to a given service.
# The example below shows simplified configuration leveraging a default service (identified from the relationship name) and a default endpoint.
# See the Application reference for all options for defining relationships and endpoints.
relationships:
    memcached: 
```

To use the configured service in your app, add a configuration file similar to the following to your project.

> [!tabs]
> Go
>> [Memcached - Go](https://github.com/ovh/docs/blob/develop/pages/web_cloud/web_paas_powered_by_platform_sh/static/files/fetch/examples/golang/memcached)  
>>
> Java
>> [Memcached - Java](https://github.com/ovh/docs/blob/develop/pages/web_cloud/web_paas_powered_by_platform_sh/static/files/fetch/examples/java/memcached)  
>>
> Node.js
>> [Memcached - Node.js](https://github.com/ovh/docs/blob/develop/pages/web_cloud/web_paas_powered_by_platform_sh/static/files/fetch/examples/nodejs/memcached)  
>>
> PHP
>> [Memcached - PHP](https://github.com/ovh/docs/blob/develop/pages/web_cloud/web_paas_powered_by_platform_sh/static/files/fetch/examples/php/memcached)  
>>
> Python
>> [Memcached - Python](https://github.com/ovh/docs/blob/develop/pages/web_cloud/web_paas_powered_by_platform_sh/static/files/fetch/examples/python/memcached)  
>>
