---
title: Memcached (Object cache)
updated: 2021-06-03
---



## Objective  

Memcached is a simple in-memory object store well-suited for application level caching.


See the [Memcached](https://memcached.org) for more information.

Both Memcached and Redis can be used for application caching.  As a general rule, Memcached is simpler and thus more widely supported while Redis is more robust.  Web PaaS recommends using Redis if possible but Memcached is fully supported if an application favors that cache service."

## Supported versions

| **Grid** | 
|----------------------------------|  
|  1.4 |  
|  1.5 |  
|  1.6 |  

## Relationship

The format exposed in the ``$PLATFORM_RELATIONSHIPS`` [environment variable](/pages/web_cloud/web_paas_powered_by_platform_sh/development/development-variables#platformsh-provided-variables):

```json  
{
    "service": "memcached16",
    "ip": "169.254.34.86",
    "hostname": "3sdm72jgaxge2b6aunxdlzxyea.memcached16.service._.eu-3.platformsh.site",
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "memcached.internal",
    "rel": "memcached",
    "scheme": "memcached",
    "type": "memcached:1.6",
    "port": 11211
}
```  

## Usage example

In your ``.platform/services.yaml``:


```yaml   
cachemc:
    type: memcached:1.6
```  


Now add a relationship in your `.platform.app.yaml` file:


```yaml   
relationships:
    memcachedcache: "cachemc:memcached"
```  

> You will need to use `memcached` type when defining the service
>
> ```yaml
> # .platform/services.yaml
> service_name:
>       type: memcached:version
> ```
>
> and the endpoint `memcached` when defining the relationship
>
> ```yaml
> # .platform.app.yaml
>  relationships:
>       relationship_name: “service_name:memcached”
> ```
>
> Your `service_name` and `relationship_name` are defined by you, but we recommend making them distinct from each other.
>


If you are using PHP, configure the relationship and enable the [PHP memcached extension](/pages/web_cloud/web_paas_powered_by_platform_sh/languages/php/languages-php/extensions) in your `.platform.app.yaml`.  (Note that the `memcached` extension requires `igbinary` and `msgpack` as well, but those will be enabled automatically.)

```yaml
runtime:
    extensions:
        - memcached
```

For Python you will need to include a dependency for a Memcached library, either via your requirements.txt file or a global dependency.  As a global dependency you would add the following to `.platform.app.yaml`:

```yaml
dependencies:
    python:
       python-memcached: '*'
```

You can then use the service in a configuration file of your application with something like:

> [!tabs]      
> Go     
>> [Memcached - Go](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/golang/memcached)  
>>      
> Java     
>> [Memcached - Java](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/java/memcached)  
>>      
> PHP     
>> [Memcached - PHP](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/php/memcached)  
>>      
> Python     
>> [Memcached - Python](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/python/memcached)  
>>      


