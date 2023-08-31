---
title: Performance tuning
slug: tuning
section: Php
---

**Last updated 31st August 2023**



## Objective  

Once your app is up and running it still needs to be kept fast.
{{< vendor/name >}} offers a wide degree of flexibility in how PHP behaves,
but that does mean you may need to take a few steps to ensure your site is running optimally.

The following recommendations are guidelines only.
They're also listed in about the order to investigate them.

## Upgrade to PHP 8

To make a PHP-based site run faster, the first step is to upgrade the PHP version.
Upgrading the PHP version might require changes to your app.
For more details and recommendations, see the [PHP migration guides](https://www.php.net/manual/en/migration80.php).

To change your PHP version, change the [`type` in your app configuration](../../create-apps/app-reference.md#types).
Before merging to production, test the change on a branch and make sure that your app is working as expected.

## Optimize the FPM worker count

PHP-FPM uses a fixed number of simultaneous worker processes to handle incoming requests.
If more simultaneous requests are received than the number of workers,
then some requests wait until worker processes are available.

The default worker count is set to a conservative default value.
To determine and set the optimal value for your app, see [PHP-FPM sizing](./fpm.md).

## OPcache preloading

OPcache preloading loads selected files into shared memory,
making their content (functions, classes) globally available for requests.
It also removes the need to include these files later.
When OPcache is correctly configured, it can result in significant improvements to both CPU and memory usage.

Consult your framework's documentation to see
if there are recommendations for optimal preload configuration or ready-to-use preload scripts.

OPcache is only available on PHP 7.4+ and uses PHP-CGI.
If your PHP version doesn't support OPcache, this is a good reason to upgrade.

Note that the only way to clear the preload cache is by [restarting PHP-FPM](#restart-php-fpm).

If you have [disabled OPcache timestamp validation](#disable-opcache-timestamp-validation),
you need to clear the OPcache explicitly on deployment (which can be done by restarting PHP-FPM).

### Enable OPcache preloading

To enable preloading, add a variable that specifies a preload script:

```yaml {configFile="app"}
variables:
    php:
        opcache.preload: '{{< variable "PRELOAD_SCRIPT" >}}'
```

`{{< variable "PRELOAD_SCRIPT" >}}` is a file path relative to the [app root](../../create-apps/app-reference.md#root-directory).
It may be any PHP script that calls `opcache_compile_file()`.

The following example uses a `preload.php` file as the preload script.
This script loads all `.php` files in the `vendor` directory (and subdirectories):

```php {location="preload.php"}
<?php
$directory = new RecursiveDirectoryIterator(getenv('PLATFORM_APP_DIR') . '/vendor');
$iterator = new RecursiveIteratorIterator($directory);
$regex = new RegexIterator($iterator, '/^.+\.php$/i', RecursiveRegexIterator::GET_MATCH);

foreach ($regex as $key => $file) {
    // This is the important part!
    opcache_compile_file($file[0]);
}
```

### Configure OPcache

OPcache needs to be tuned before production usage and can be configured the [same way as PHP](./_index.md#customize-php-settings).

Let the app run for a while before tuning OPcache
since the preload script may change some of the configuration.

#### Set the maximum number of cached files

`opcache.max_accelerated_files` is the maximum number of files that OPcache can cache at once.
If this value is lower than the number of files in the app,
the cache becomes less effective because it starts [thrashing](https://en.wikipedia.org/wiki/Thrashing_(computer_science)).

To determine the maximum number of files to cache, follow these steps:

1\. Connect to the container via SSH using the [CLI](../../development/ssh/_index.md)

   by running `webpaas ssh`.
2\. Determine roughly how many `.php` files your app has by running this command from [your app root](../../create-apps/app-reference.md#root-directory):


```bash
find . -type f -name '*.php' | wc -l
```

    Note that the returned valued is an approximation.
    Some apps have PHP code in files that don't end in `.php` or files that are generated at runtime.

3\. Set `opcache.max_accelerated_files` to a value slightly higher than the returned number.

   PHP automatically rounds the value up to the next highest prime number.

An example configuration:

```yaml {configFile="app"}
variables:
    php:
        'opcache.max_accelerated_files': 22000
```

#### Set memory consumption

`opcache.memory_consumption` is the total memory (in megabytes) that OPcache can use with FastCGI.
If the app uses more than this, the cache starts [thrashing](https://en.wikipedia.org/wiki/Thrashing_(computer_science)) and becomes less effective.

Determining the optimal limit to memory consumption requires executing code via a web request to get adequate statistics.
[CacheTool](https://github.com/gordalina/cachetool) is an open-source tool to help you get the statistics.

To determine the total amount of memory to use, follow these steps:

1\. Connect to the container via SSH using the [CLI](../../development/ssh/_index.md)

   by running `webpaas ssh`.
2\. Change to the `/tmp` directory (or any other non-web-accessible writable directory) with `cd /tmp`.

3\. Download CacheTool with `curl -sLO https://github.com/gordalina/cachetool/releases/latest/download/cachetool.phar`.

4\. Make CacheTool executable with `chmod +x cachetool.phar`.

5\. Check the OPcache status for FastCGI commands by running the following command:


```bash
php cachetool.phar opcache:status --fcgi=$SOCKET
```

   The `--fcgi=$SOCKET` option ensures the PHP-FPM process on the server connects through the right socket.
6\. Analyze the output to determine the optimal value for `opcache.memory_consumption`.

   The most important values from CacheTool's output are the following:

   - `Memory used`
   - `Memory free`
   - `Oom restarts` (out of memory restarts)
     If the value is different than 0, you don't have enough memory allocated to OPcache.

   If `Memory free` is too low or `Oom Restarts` too high,
   set a higher value for memory consumption.
7\. Set `opcache.memory_consumption`.

   Note: The unit for `opcache.memory_consumption` is megabytes.

   An example configuration:

```yaml {configFile="app"}
variables:
    php:
        'opcache.memory_consumption': 96
```

8\. [Restart PHP-FPM](#restart-php-fpm) and make sure that OPcache works as expected by rerunning CacheTool

   with the following command:

```bash
php cachetool.phar opcache:status --fcgi=$SOCKET
```

9\. Remove CacheTool by deleting the `cachetools.phar` file with `rm -rf cachetools.phar`.


### Disable OPcache timestamp validation

By default, OPcache checks that the cached version of a file is always up-to-date.
This means that every time a cached file is used, OPcache compares it to the file on disk.
If that file has changed, it gets reloaded and re-cached.
This allows to support apps that generate compiled PHP code from user configuration.

If you know your code isn't going to change outside a new deployment,
you can disable that check and get a small performance improvement.

Timestamp validation can be disabled by adding the following variable to your [app configuration](../../create-apps/_index.md):

```yaml {configFile="app"}
variables:
    php:
        'opcache.validate_timestamps': 0
```

When you have disabled OPcache timestamp validation,
you need to explicitly clear OPcache on deployment by [restarting PHP-FPM](#restart-php-fpm).

Note: If your app generates PHP code at runtime based on user configuration, don't disable timestamp validation.
Doing so would prevent updates to the generated code from being loaded.

## Restart PHP-FPM

To force a restart of PHP-FPM:

1\. Connect to your app container via SSH using the [CLI](../../development/ssh/_index.md) by running `webpaas ssh`.

2\. Run `pkill -f -u "$(whoami)" php-fpm`.


## Optimize your code

To optimize your app, consider using a [profiler](../../increase-observability/integrate-observability/_index.md).
A profiler helps determine what slow spots can be found and addressed and helps improve performance.

The web agency [Pixelant](https://www.pixelant.net/) has released a [log analyzer tool for {{< vendor/name >}}](https://github.com/pixelant/platformsh-analytics)
that offers visualization of access logs to determine how much memory requests are using on average.
It also offers additional insights into the operation of your site and can suggest places to further optimize your configuration or when it's time to increase your plan size.
Note that this tool is maintained by a third party, not by {{< vendor/name >}}.
