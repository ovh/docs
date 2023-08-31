---
title: Redis (Object cache)
slug: add-services-redis
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

[Redis](https://redis.io/documentation) is a multi-model database that allows you to store data in memory
for high-performance data retrieval and key-value storage.
{{< vendor/name >}} supports two different Redis configurations:

- [Ephemeral](#ephemeral-redis): to set up a non-persistent cache for your application

- [Persistent](#persistent-redis): to set up fast persistent storage for your application


{{% frameworks %}}

- [Drupal](../guides/drupal9/redis.md)

- [Ibexa DXP](../guides/ibexa/deploy.md#cache-and-sessions)

- [Jakarta EE](../guides/jakarta/deploy.md#redis)

- [Micronaut](../guides/micronaut/redis.md)

- [Quarkus](../guides/quarkus/redis.md)

- [Spring](../guides/spring/redis.md)

- [WordPress](../guides/wordpress/redis.md)


{{% /frameworks %}}

## Supported versions

{{% major-minor-versions-note configMinor="true" %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
| - 7.0  
- 6.2 |

{{% deprecated-versions %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
| - 6.0  
- 5.0  
- 4.0  
- 3.2  
- 3.0  
- 2.8 |

Note that versions 3.0 and higher support up to 64 different databases per instance of the service,
while Redis 2.8 only supports a single database.

## Service types

Depending on your needs,
you can set up Redis as [ephemeral](#ephemeral-redis) or [persistent](#persistent-redis).

### Ephemeral Redis

By default, Redis is an ephemeral service that serves as a non-persistent cache.
Ephemeral Redis stores data only in memory and requires no disk space.
When the service reaches its memory limit, it triggers a cache cleanup.
To customize those cache cleanups, set up an [eviction policy](#eviction-policy).

Make sure your app doesn't rely on ephemeral Redis for persistent storage as it can cause issues.
For example, if a container is moved during region maintenance,
the `deploy` and `post_deploy` hooks don't run and an app that treats the cache as permanent shows errors.

To prevent data from getting lost when a container is moved or shut down,
you can use the [persistent Redis](#persistent-redis) configuration.
Persistent Redis provides a cache with persistent storage.

### Persistent Redis

By default, Redis is an [ephemeral](#ephemeral-redis) service that stores data in memory.
This allows for fast data retrieval,
but also means data can be lost when a container is moved or shut down.

To solve this issue, configure your Redis service as persistent.
Persistent Redis stores data on a disk,
restoring it if the container restarts.

To switch from persistent to ephemeral Redis,
set up a new service with a different name.

## Usage example

{{% endpoint-description type="redis" php=true /%}}

> [!tabs]      

## Multiple databases

Redis 3.0 and above support up to 64 databases.
But you can't set up different access rights to each database.
When you set up a relationship connection,
access to all of the databases is automatically granted.

The way to access a particular database depends on the [client library](https://redis.io/clients) you're using:

> [!tabs]      

{{% relationship-ref-intro %}}

{{% service-values-change %}}

```yaml
{
    "username": null,
    "scheme": "redis",
    "service": "redis6",
    "fragment": null,
    "ip": "169.254.22.75",
    "hostname": "7mnenhdiz7ecraovljrba6pmiy.redis6.service._.eu-3.platformsh.site",
    "port": 6379,
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "redis.internal",
    "rel": "redis",
    "path": null,
    "query": [],
    "password": null,
    "type": "redis:6.0",
    "public": false,
    "host_mapped": false
}
```

The format of the relationship is identical whether your Redis service is [ephemeral](#ephemeral-redis) or [persistent](#persistent-redis).

## Eviction policy

When [ephemeral Redis](#ephemeral-redis) reaches its memory limit,
it triggers a cache cleanup.
To customize those cache cleanups, set up an eviction policy such as the following:

```yaml {configFile="app"}
web:
    cache:
        type: redis:5.0
        configuration:
            maxmemory_policy: allkeys-lfu
```

The following table presents the possible values:

| Value             | Policy description                                                                                          |
|-------------------|-------------------------------------------------------------------------------------------------------------|
| `allkeys-lru`     | Removes the oldest cache items first. This is the default policy when `maxmemory_policy` isn't set.         |
| `noeviction`      | New items aren’t saved when the memory limit is reached.                                                    |
| `allkeys-lfu`     | Removes least frequently used cache items first.                                                            |
| `volatile-lru`    | Removes least recently used cache items with the `expire` field set to `true`.                              |
| `volatile-lfu`    | Removes least frequently used cache items with the `expire` field set to `true`.                            |
| `allkeys-random`  | Randomly removes cache items to make room for new data.                                                     |
| `volatile-random` | Randomly removes cache items with the `expire` field set to `true`.                                         |
| `volatile-ttl`    | Removes cache items with the `expire` field set to `true` and the shortest remaining `time-to -live` value. |

For more information on the different policies,
see the official [Redis documentation](https://redis.io/docs/reference/eviction/).

## Access your Redis service through the Redis CLI

After you've [configured your Redis service](#usage-example),
you can access it using the [Redis CLI](https://redis.io/docs/ui/cli/).

Retrieve the hostname and port you can connect to
through the `PLATFORM_RELATIONSHIPS` [environment variable](../../development/variables/use-variables.md#use-provided-variables).
To do so, run the `webpaas relationships` command.

After you've retrieved the hostname and port, [open an SSH session](../development/ssh/_index.md).
To access your Redis service, run the following command:

```bash
redis-cli -h {{< variable "HOSTNAME" >}} -p {{< variable "PORT" >}}
```

If you have a Grid project, note that the `CONFIG GET` and `CONFIG SET` admin commands are restricted.
To get the current configuration, run the following command:

```bash
redis-cli -h {{< variable "HOSTNAME" >}} -p {{< variable "PORT" >}} info
```

## Use Redis as a handler for PHP sessions

A PHP session allows you to store different data for each user through a unique session ID.
By default, PHP handles sessions using files.
But you can use Redis as a session handler,
which means Redis stores and retrieves the data saved into sessions.

To set up Redis as your session handler, add a configuration similar to the following:


```yaml   
data:
    type: redis-persistent:7.0
    disk: 256
```  


```yaml {configFile="app"}
relationships:
    sessionstorage: "data:redis"

variables:
    php:
        session.save_handler: redis
        session.save_path: "tcp://{{< variable "HOSTNAME" >}}:{{< variable "PORT" >}}"
```
