---
title: Performance tuning
slug: tuning
section: Php
---

**Last updated 26th February 2021**



## Objective  

Once your application is up and running it still needs to be kept fast.  Web PaaS offers a wide degree of flexibility in how PHP behaves, but that does mean you may need to take a few steps to ensure your site is running optimally.

The following recommendations are guidelines only.  They're also listed in approximately the order we recommend investigating them, although your mileage may vary.

## Upgrade to PHP 7.3+

There is very little purpose to trying to optimize a PHP application on PHP 5.  PHP 7 is generally twice as fast and uses half as much memory as PHP 5, making it unquestionably the first step to take when trying to make a PHP-based site run faster.

To change your PHP version, change the `type` key in your `.platform.app.yaml` to the desired PHP version.  As always, test it on a branch first before merging to `master`.

## Ensure that the router cache is properly configured

Although not PHP-specific, a common source of performance issues is a misconfigured cache.  The most common issue is not allowing the right cookies as part of the router cache. Some cookies, such as session cookies, need to be allowed, whereas others, such as marketing and analytics cookies, usually shouldn't be allowed to be part of the cache key. See the [router cache](../../configuration-routes/cache) documentation, and the [cookie entry](../../configuration-routes/cache#cookies) specifically.

You will also need to ensure that your application is sending the correct `cache-control` header.  The router cache will obey whatever cache headers your application sends, so send it good ones.

Static assets cache headers are set using the `expires` key in `.platform.app.yaml`.  See the [`web.locations`](../../configuration-app/web#locations) documentation for more details.

## Optimize the FPM worker count

PHP-FPM reserves a fixed number of simultaneous worker processes to handle incoming requests.  If more simultaneous requests are received than the number of workers then some requests will wait.  The default worker count is deliberately set rather conservative but can be improved in many cases.  See the [PHP-FPM sizing](../fpm) page for how to determine and set a more optimal value.

## Enable preloading

PHP 7.4 and later supports preloading code files into shared memory once at server startup, bypassing the need to include or autoload them later.  Depending on your application doing so can result in significant improvements to both CPU and memory usage.  If using PHP 7.4 or later, see the [PHP Preload instructions](../#opcache-preloading) for how to configure it on Web PaaS and consult your application's documentation to see if they have any recommendations for an optimal preload configuration.

If you are not using PHP 7.4, this is a good reason to upgrade.

## Configure opcache

PHP 5.5 and later include an opcache that is enabled at all times, as it should be.  It may still need to be tuned, however.  The opcache can be configured using `php.ini` values, which in this case are best set using the `variables` block in `.platform.app.yaml`.

> [!primary]  
> If using opcache preloading on PHP 7.4 or later, configure that first and let the application run for a while before tuning the opcache itself as the preload script may change the necessary configuration here.
> 

The most important values to set are:

* `opcache.max_accelerated_files`: The max number of files that the opcache may cache at once.  If this is lower than the number of files in the application it will begin thrashing and become less effective.
* `opcache.memory_consumption`: The total memory that the opcache may use.  If the application is larger than this the cache will start thrashing and become less effective.

To determine how many files you have, run this command from the root of your application:

```bash
find . -type f -name '*.php' | wc -l
```

That will report the number of files in your file tree that end in `.php`.  That may not be perfectly accurate (some applications have PHP code in files that don't end in `.php`, it may not catch generated files that haven't been generated yet, etc.) but it's a reasonable approximation.  Set the `opcache.max_accelerated_files` option to a value slightly higher than this.  Note that PHP will automatically round the value you specify up to the next highest prime number, for reasons long-lost to the sands of time.

Determining an optimal `opcache.memory_consumption` is a bit harder, unfortunately, as it requires executing code via a web request to get adequate statistics.  Fortunately there is a command line tool that will handle most of that.

Change to the `/tmp` directory (or any other non-web-accessible writable directory) and install [`CacheTool`](https://github.com/gordalina/cachetool).  It has numerous commands and options, but we're only interested in the opcache status for FastCGI command.  The really short version of downloading and using it would be:

```bash
cd /tmp
curl -sLO https://github.com/gordalina/cachetool/releases/latest/download/cachetool.phar
chmod +x cachetool.phar
php cachetool.phar opcache:status --fcgi=$SOCKET
```

The `--fcgi=$SOCKET` option tells the command how to connect to the PHP-FPM process on the server through the Web PaaS-defined socket.  That command will output something similar to the following:

```bash
+----------------------+---------------------------------+
| Name                 | Value                           |
+----------------------+---------------------------------+
| Enabled              | Yes                             |
| Cache full           | No                              |
| Restart pending      | No                              |
| Restart in progress  | No                              |
| Memory used          | 29.65 MiB                       |
| Memory free          | 34.35 MiB                       |
| Memory wasted (%)    | 0 b (0%)                        |
+----------------------+---------------------------------+
| Cached scripts       | 1528                            |
| Cached keys          | 2609                            |
| Max cached keys      | 32531                           |
| Start time           | Mon, 18 Jun 2018 18:19:32 +0000 |
| Last restart time    | Never                           |
| Oom restarts         | 0                               |
| Hash restarts        | 0                               |
| Manual restarts      | 0                               |
| Hits                 | 8554                            |
| Misses               | 1594                            |
| Blacklist misses (%) | 0 (0%)                          |
| Opcache hit rate     | 84.29247142294                  |
+----------------------+---------------------------------+
```

The most important values for now are the `Memory used`, `Memory free`, and `Oom restarts` (Out Of Memory Restarts).  If the `Oom restarts` number is high (meaning more than a handful) it means you don't have enough memory allocated to the opcache.  In this example the opcache is using about half of the 64 MB given to it by default, which is fine.  If `Memory free` is too low or `Oom Restarts` too high, set a higher value for the memory consumption.

Remember to remove the `cachetools.phar` file once you're done with it.

Your `.platform.app.yaml` file will end up including a block similar to:

```yaml
variables:
    php:
        'opcache.max_accelerated_files': 22000
        'opcache.memory_consumption': 96
```

(Memory consumption is set in megabytes.)

## Disable opcache timestamp validation

By default, the opcache will recheck every file on disk every time it is required to see if it has changed, and thus needs to be reloaded and recached.  If you know your code is not going to change outside of a new deploy, however, you can disable that check and often get a small performance improvement.

Note that some applications will generate PHP code at runtime based on user configuration.  If your application does that, you cannot disable the timestamp validation as it would prevent updates to the generated code from being loaded.

The timestamp validation may be disabled with an ini setting, and the easiest way to do so is via `.platform.app.yaml`:

```yaml
variables:
    php:
        'opcache.validate_timestamps': 0
```


