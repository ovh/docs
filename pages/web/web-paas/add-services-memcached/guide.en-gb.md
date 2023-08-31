---
title: Memcached (Object cache)
slug: add-services-memcached
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

See the [Memcached documentation](https://memcached.org) for more information.

Both Memcached and Redis can be used for application caching. As a general rule, Memcached is simpler and thus more widely supported while Redis is more robust. {{< vendor/name >}} recommends using Redis if possible but Memcached is fully supported if an application favors that cache service.

{{% frameworks %}}

- [Drupal](../guides/drupal9/memcached.md)


{{% /frameworks %}}

## Supported versions

{{% major-minor-versions-note configMinor="true" %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 1.6  
- 1.5  
- 1.4 |

{{% relationship-ref-intro %}}

{{% service-values-change %}}

```yaml
{
    "service": "memcached16",
    "ip": "169.254.228.111",
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

{{% endpoint-description type="memcached" php=true python=true /%}}

> [!tabs]      


