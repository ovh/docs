---
title: Performance tuning
slug: tuning
section: Php
---

**Last updated 2nd June 2022**



## Objective  

Once your application is up and running it still needs to be kept fast.
Web PaaS offers a wide degree of flexibility in how PHP behaves,
but that does mean you may need to take a few steps to ensure your site is running optimally.

The following recommendations are guidelines only.
They're also listed in approximately the order we recommend investigating them,
although your mileage may vary.

## Upgrade to PHP 7.3+

There is very little purpose to trying to optimize a PHP application on PHP 5.
PHP 7 is generally twice as fast and uses half as much memory as PHP 5,
making it unquestionably the first step to take
when trying to make a PHP-based site run faster.

To change your PHP version,
change the `type` key in your `.platform.app.yaml` to the desired PHP version.
As always, test it on a branch first before merging to production.

## Ensure that the router cache is properly configured

Although not PHP-specific,
a common source of performance issues is a misconfigured cache.
The most common issue is not allowing the right cookies as part of the router cache.
Some cookies, such as session cookies, need to be allowed,
whereas others, such as marketing and analytics cookies,
usually shouldn't be allowed to be part of the cache key.
See more about router cache and cookie entry.

You also need to ensure that your application is sending the correct `cache-control` header.
The router cache obeys whatever cache headers your application sends,
so send it good ones.

Static assets cache headers are set using the `expires` key in `.platform.app.yaml`.
See the `web.locations` documentation for more details.

## Optimize the FPM worker count

PHP-FPM reserves a fixed number of simultaneous worker processes to handle incoming requests.
If more simultaneous requests are received than the number of workers,
then some requests wait.
The default worker count is deliberately set rather conservative
but can be improved in many cases.
See the [PHP-FPM sizing](../fpm/) page
for how to determine and set a more optimal value.

## Enable preloading

PHP 7.4 and later supports preloading code files into shared memory once at server startup,
bypassing the need to include or autoload them later.
Depending on your application doing so can result in significant improvements
to both CPU and memory usage.
If using PHP 7.4 or later, see the PHP Preload instructions
for how to configure it on Web PaaS.
Consult your application's documentation to see
if they have any recommendations for an optimal preload configuration.

If you aren't using PHP 7.4, this is a good reason to upgrade.

Note that the only way to clear the preload cache is by restarting PHP-FPM.
PHP-FPM isn't restarted on every deployment automatically,
so you might want to add that in a `deploy` hook,
such as by including `pkill -f php-fpm` or `sv restart app`.

If you have [disabled OPcache timestamp validation](#disable-opcache-timestamp-validation),
you need to clear the OPcache explicitly on deployment (which can be done by restarting PHP-FPM).

## Configure OPcache

PHP 5.5 and later include an OPcache that's enabled at all times, as it should be.
It may still need to be tuned, however.
The OPcache can be configured using `php.ini` values, which in this case are best set using the `variables` block in `.platform.app.yaml`.

> [!primary]  
> 
> If using OPcache preloading on PHP 7.4 or later,
> configure that first and let the application run for a while
> before tuning the OPcache itself
> as the preload script may change the necessary configuration here.
> 
> 

The most important values to set are:

- `opcache.max_accelerated_files`: The max number of files that the OPcache may cache at once. If this is lower than the number of files in the application, it starts thrashing and becomes less effective.
- `opcache.memory_consumption`: The total memory that the OPcache may use. If the application is larger than this, the cache starts thrashing and becomes less effective.

To determine how many files you have, run this command from your app root:

```bash
find . -type f -name '*.php' | wc -l
```

That reports the number of files in your file tree that end in `.php`.
That may not be perfectly accurate
(some applications have PHP code in files that don't end in `.php`,
it may not catch generated files that haven't been generated yet, and so on),
but it's a reasonable approximation.
Set the `opcache.max_accelerated_files` option to a value slightly higher than this.
Note that PHP automatically rounds the value you specify up to the next highest prime number.

Determining an optimal `opcache.memory_consumption` is a bit harder, unfortunately,
as it requires executing code via a web request to get adequate statistics.
Fortunately there is a command line tool that handles most of that.

Change to the `/tmp` directory (or any other non-web-accessible writable directory)
and install [`CacheTool`](https://github.com/gordalina/cachetool).
It has numerous commands and options,
but you only need the OPcache status for FastCGI command.
The really short version of downloading and using it would be:

```bash
cd /tmp
curl -sLO https://github.com/gordalina/cachetool/releases/latest/download/cachetool.phar
chmod +x cachetool.phar
php cachetool.phar opcache:status --fcgi=$SOCKET
```

The `--fcgi=$SOCKET` option tells the command
how to connect to the PHP-FPM process on the server through the Web PaaS-defined socket.
That command outputs something similar to the following:

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

The most important values for now are the `Memory used`, `Memory free`,
and `Oom restarts` (Out Of Memory Restarts).
If the `Oom restarts` number is high (meaning more than a handful),
it means you don't have enough memory allocated to the OPcache.
In this example, the OPcache is using about half of the 64 MB given to it by default, which is fine.
If `Memory free` is too low or `Oom Restarts` too high,
set a higher value for the memory consumption.

Remember to remove the `cachetools.phar` file once you're done with it.

Your `.platform.app.yaml` file should include a block similar to:

```yaml
variables:
    php:
        'opcache.max_accelerated_files': 22000
        'opcache.memory_consumption': 96
```

(Memory consumption is set in megabytes.)

## Disable OPcache timestamp validation

By default, the OPcache rechecks every file on disk every time it's required
to see if it has changed and so needs to be reloaded and recached.
If you know your code isn't going to change outside of a new deploy,
you can disable that check and often get a small performance improvement.
If you have disabled OPcache timestamp validation,
you need to clear the OPcache explicitly on deployment (which can be done by restarting PHP-FPM).

Note that some applications generate PHP code at runtime based on user configuration.
If your application does that,
you can't disable the timestamp validation
as it would prevent updates to the generated code from being loaded.

The timestamp validation may be disabled with an `ini` setting,
and the easiest way to do so is via `.platform.app.yaml`:

```yaml
variables:
    php:
        'opcache.validate_timestamps': 0
```

## Optimize your code

It's also possible that your own code is doing more work than it needs to.
Profiling and optimizing a PHP application is a much larger topic than fits here,
but Web PaaS recommends enabling Blackfire.io
on your project to determine what slow spots can be found and addressed.

The web agency [Pixelant](https://www.pixelant.net/) has also published a [log analyzer tool for Web PaaS](https://github.com/pixelant/platformsh-analytics).
It works only for PHP scripts,
but offers good visualizations and insights into the operation of your site
that can suggest places to further optimize your configuration
and provide guidance on when it's time to increase your plan size.
(Note that this tool is maintained by a 3rd party, not by Web PaaS.)
