---
title: Using Redis with Drupal 7.x
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

There are two options for using Redis with Drupal on Web PaaS, you can either use the [PhpRedis](https://github.com/nicolasff/phpredis)
extension or the [Predis](http://github.com/nrk/predis) library.  PhpRedis requires a PHP extension and should therefore be faster in most situations. Predis is written entirely in PHP and so would require no PHP extension to install locally, but at the cost of some performance.

If you are unsure which to use, we recommend using PhpRedis.

## Requirements

### Add a Redis service

First you need to create a Redis service.  In your `.platform/services.yaml` file,
add or uncomment the following:

```yaml
rediscache:
    type: redis:5.0
```

That will create a service named `rediscache`, of type `redis`, specifically version `3.0`.

### Expose the Redis service to your application

In your `.platform.app.yaml` file, you now need to open a connection to the new Redis service.  Under the `relationships` section, add the following:

```yaml
relationships:
    redis: "rediscache:redis"
```

The key (left side) is the name that will be exposed to the application in the PLATFORM_RELATIONSHIPS variable.  The right hand side is the name of the service you specified above (`rediscache`) and the endpoint (`redis`).  If you named the service something different above, change `rediscache` to that.

### Add the Redis PHP extension

Because the Redis extension for PHP has been known to have BC breaks at times, we do not bundle a specific verison by default.  Instead, we provide a script to allow you to build your desired version in the build hook.  See the [PHP-Redis page](/pages/web_cloud/web_paas_powered_by_platform_sh/languages-php/redis) for a simple-to-install script and instructions.

(Skip this part if using Predis.)

### Add the Drupal module

You will need to add the [Redis](https://www.drupal.org/project/redis) module to your project.

If you are using Drush Make, you can add these lines to your `project.make` file:

```ini
projects[redis][version] = 3.15
```

To use the Predis library, also add it to your make file:

```ini
libraries[predis][download][type] = get
libraries[predis][download][url] = https://github.com/nrk/predis/archive/v1.0.3.tar.gz
libraries[predis][directory_name] = predis
libraries[predis][destination] = libraries
```

## Configuration

To make use of the Redis cache you will need to set some Drupal variables. You can either do this in your `settings.php` file or by setting WebPaas Variables directly via the management console.  In general, using the `settings.php` file is easier.

### Via settings.php

To configure Drupal 7 to use our Redis server for caching, place the following at the end of `settings.php`, after the include directive for `settings.local.php`:

```php
<?php

if (!empty($_ENV['PLATFORM_RELATIONSHIPS'])) {
  $relationships = json_decode(base64_decode($_ENV['PLATFORM_RELATIONSHIPS']), TRUE);
  if (!empty($relationships['redis'])) {
    $conf['redis_client_host'] = $relationships['redis'][0]['host'];
    $conf['redis_client_port'] = $relationships['redis'][0]['port'];
    $conf['redis_client_interface'] = 'PhpRedis';
    $conf['cache_backends'][]       = 'sites/all/modules/contrib/redis/redis.autoload.inc';
    $conf['cache_default_class']    = 'Redis_Cache';
    // The 'cache_form' bin must be assigned to non-volatile storage.
    $conf['cache_class_cache_form'] = 'DrupalDatabaseCache';
    // The 'cache_field' bin must be transactional.
    $conf['cache_class_cache_field'] = 'DrupalDatabaseCache';
  }
}
```

If using Predis, change the `PhpRedis` reference to `Predis` (case-sensitive).
If your redis module is not installed in `sites/all/modules/contrib`, modify the
`cache_backends` line accordingly.

### Via the management console

Alternatively, add the following environment variables using the Web PaaS management console.
Note, if you set a directory in the make file you will need to alter the variables to match.

`drupal:cache_backends`

```bash
[
   "sites/all/modules/contrib/redis/redis.autoload.inc"
]
```

> [!primary]  
> Remember to tick the JSON Value box.
> 


Use the actual path to your Redis module in case it is in a different location. For example: `sites/all/modules/redis`. The
location used above is the default when using Drush on Web PaaS.

`drupal:redis_client_host`

```bash
redis.internal
```

`drupal:cache_default_class`

```bash
Redis_Cache
```

`drupal:cache_class_cache_form`

```bash
DrupalDatabaseCache
```

`drupal:cache_class_cache_field`

```bash
DrupalDatabaseCache
```

And finally, set the client interface to either `PhpRedis` or `Predis`.

`drupal:redis_client_interface`

```bash
PhpRedis
```

Or

```bash
Predis
```

### Verifying Redis is running
Run this command in a SSH session in your environment `redis-cli -h redis.internal info`. You should run it before you push all this new code to your repository.

This should give you a baseline of activity on your Redis installation. There should be very little memory allocated to the Redis cache.

After you push this code, you should run the command and notice that allocated memory will start jumping.

> [!primary]  
> If you use Domain Access and Redis, ensure that your Redis settings (particularly `$conf['cache_backends']`)
> are included before the Domain Access `settings.inc` file - see [this Drupal.org issue](https://www.drupal.org/node/2008486#comment-7782941) for more information.
> 
