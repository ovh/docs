---
title: Using Memcached with Drupal 7.x
slug: memcached
section: Drupal7
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

Web PaaS recommends using Redis for caching with Drupal 7 over Memcached, as Redis offers better performance when dealing with larger values as Drupal tends to produce.  However, Memcached is also available if desired and is fully supported.

## Requirements

### Add a Memcached service

First you need to create a  Memcached service.  In your `.platform/services.yaml` file, add or uncomment the following:

```yaml
cacheservice:
    type: memcached:1.4
```

That will create a service named `cacheservice`, of type `memcached`, specifically version `1.4`.

### Expose the Memcached service to your application

In your `.platform.app.yaml` file, we now need to open a connection to the new Memcached service.  Under the `relationships` section, add the following:

```yaml
relationships:
    cache: 'cacheservice:memcached'
```

The key (left side) is the name that will be exposed to the application in the `PLATFORM_RELATIONSHIPS` [variable](../../development-variables).  The right hand side is the name of the service we specified above (`cacheservice`) and the endpoint (`memcached`).  If you named the service something different above, change `cacheservice` to that.

### Add the Memcached PHP extension

You will need to enable the PHP Memcached extension.  In your `.platform.app.yaml` file, add the following right after the `type` block:

```yaml
# Additional extensions
runtime:
    extensions:
        - memcached
```

### Add the Drupal module

You will need to add the [Memcache](https://www.drupal.org/project/memcache) module to your project.  If you are using a Drush Make file, add the following line to your `project.make` file:

```ini
projects[memcache][version] = 1.6
```

Then commit the

> [!primary]  
> You must commit and deploy your code before continuing, then enable the module. The memcache
> module must be enabled before it is configured in the `settings.platformsh.php` file.
> 

## Configuration

The Drupal Memcache module must be configured via `settings.platformsh.php`.

Place the following at the end of `settings.platformsh.php`. Note the inline comments, as you may wish to customize it further.  Also review the `README.txt` file that comes with the memcache module, as it has a more information on possible configuration options. For instance, you may want to consider using memcache for locking as well and configuring cache stampede protection.

The example below is intended as a "most common case".

```php
<?php

if (!empty($_ENV['PLATFORM_RELATIONSHIPS']) && extension_loaded('memcached')) {
  $relationships = json_decode(base64_decode($_ENV['PLATFORM_RELATIONSHIPS']), true);

  // If you named your memcached relationship something other than "cache", set that here.
  $relationship_name = 'cache';

  if (!empty($relationships[$relationship_name])) {
    // These lines tell Drupal to use memcached as a backend.
    // Comment out just these lines if you need to disable it for some reason and
    // fall back to the default database cache.
    $conf['cache_backends'][] = 'sites/all/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_cache_form'] = 'DrupalDatabaseCache';

    // While we're at it, use Memcache for locking, too.
    $conf['lock_inc'] = 'sites/all/modules/contrib/memcache/memcache-lock.inc';

    foreach ($relationships[$relationship_name] as $endpoint) {
      $host = sprintf("%s:%d", $endpoint['host'], $endpoint['port']);
      $conf['memcache_servers'][$host] = 'default';
    }

    // If using a multisite configuration, adapt this line to include a site-unique
    // value.
    $conf['memcache_key_prefix'] = $PLATFORM_ENVIRONMENT;
  }
}
```
