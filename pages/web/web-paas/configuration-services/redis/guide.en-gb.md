---
title: Redis (Object cache)
slug: redis
section: Services
updated: 2021-06-03
---

**Last updated 3rd June 2021**



## Objective  

Redis is a high-performance in-memory object store, well-suited for application level caching.

See the [Redis documentation](https://redis.io/documentation) for more information.

Web PaaS supports two different Redis configurations: One persistent (useful for key-value application data) and one ephemeral (in-memory only, useful for application caching).  Aside from that distinction they are identical.

## Supported versions

| **Grid** | 
|----------------------------------|  
|  3.2 |  
|  4.0 |  
|  5.0 |  
|  6.0 |  

### Deprecated versions

The following versions are available but are not receiving security updates from upstream, so their use is not recommended. They will be removed at some point in the future.

| **Grid** | 
|----------------------------------|  
|  2.8 |  
|  3.0 |  


> [!primary]  
> Versions 3.0 and higher support up to 64 different databases per instance of the service, but Redis 2.8 is configured to support only a single database.
> 

## Ephemeral Redis

The `redis` service type is configured to serve as an LRU cache; its storage is not persistent.  It is not suitable for use except as a disposable cache.

To add an Ephemeral Redis service, specify it in your `.platform/services.yaml` file like so:


```yaml   
cacheredis:
    type: redis:6.0
```  


Data in an Ephemeral Redis instance is stored only in memory, and thus requires no disk space.  When the service hits its memory limit it will automatically evict old cache items according to the [configured eviction rule](#eviction-policy) to make room for new ones.

## Persistent Redis

The `redis-persistent` service type is configured for persistent storage. That makes it a good choice for fast application-level key-value storage.

To add a Persistent Redis service, specify it in your `.platform/services.yaml` file like so:


```yaml   
data:
    type: redis-persistent:6.0
    disk: 256
```  


The `disk` key is required for redis-persistent to tell Web PaaS how much disk space to reserve for Redis' persistent data.

> [!primary]  
> Switching a service from Persistent to Ephemeral configuration is not supported at this time.  To switch between modes, use a different service with a different name.
> 

## Relationship

The format exposed in the ``$PLATFORM_RELATIONSHIPS`` [environment variable](../../development-variables#platformsh-provided-variables):

```json  
{
    "username": null,
    "scheme": "redis",
    "service": "redis6",
    "fragment": null,
    "ip": "169.254.25.97",
    "hostname": "7mnenhdiz7ecraovljrba6pmiy.redis6.service._.eu-3.platformsh.site",
    "public": false,
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "redis.internal",
    "rel": "redis",
    "query": [],
    "path": null,
    "password": null,
    "type": "redis:6.0",
    "port": 6379,
    "host_mapped": false
}
```  

The format is identical regardless of whether it's a persistent or ephemeral service.

## Usage example

In your ``.platform/services.yaml``:


```yaml   
cacheredis:
    type: redis:6.0
```  


If you are using PHP, configure a relationship and enable the [PHP redis extension](../../languages-php/extensions) in your `.platform.app.yaml`.

```yaml
runtime:
    extensions:
        - redis

relationships:
    rediscache: "cacheredis:redis"
```

You can then use the service in a configuration file of your application with something like:

> [!tabs]      
> Java     
>> ``` java     
>> {!> web/web-paas/static/files/fetch/examples/java/redis !}  
>> ```     
> PHP     
>> ``` php     
>> {!> web/web-paas/static/files/fetch/examples/php/redis !}  
>> ```     
> Python     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/redis !}  
>> ```     

## Multiple databases

Redis 3.0 and above are configured to support up to 64 databases.  Redis does not support distinct users for different databases so the same relationship connection gives access to all databases.  To use a particular database, use the Redis [`select` command](https://redis.io/commands/select) through your API library.  For instance, in PHP you could write:

```php
<?php
$redis->select(0);    // switch to DB 0
$redis->set('x', '42');    // write 42 to x
$redis->move('x', 1);    // move to DB 1
$redis->select(1);    // switch to DB 1
$redis->get('x');    // will return 42
```

Consult the documentation for your connection library and Redis itself for further details.

## Eviction policy

On the Ephemeral `redis` service it is also possible to select the key eviction policy.  That will control how Redis behaves when it runs out of memory for cached items and needs to clear old items to make room.

```yaml
cache:
    type: redis:5.0
    configuration:
      maxmemory_policy: allkeys-lru
```

The default value if not specified is `allkeys-lru`, which will simply remove the oldest cache item first.  Legal values are:

* noeviction
* allkeys-lru
* volatile-lru
* allkeys-lfu _(Available as of [Redis 4.0](https://redis.io/topics/lru-cache#the-new-lfu-mode))_
* volatile-lfu _(Available as of [Redis 4.0](https://redis.io/topics/lru-cache#the-new-lfu-mode))_
* allkeys-random
* volatile-random
* volatile-ttl

See the [Redis documentation](https://redis.io/topics/lru-cache#eviction-policies) for a description of each option.

### Using Redis as handler for native PHP sessions

Using the same configuration but with your Redis relationship named `sessionstorage`:

`.platform/services.yaml`


```yaml   
data:
    type: redis-persistent:6.0
    disk: 256
```  


`.platform.app.yaml`

```yaml
relationships:
  sessionstorage: "data:redis"

variables:
    php:
        session.save_handler: redis
        session.save_path: "tcp://sessionstorage.internal:6379"
```
