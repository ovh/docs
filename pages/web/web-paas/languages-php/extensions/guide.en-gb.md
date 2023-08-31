---
title: Extensions
slug: extensions
section: Php
---

**Last updated 31st August 2023**



## Objective  

PHP has a number of [extensions](https://pecl.php.net/) developed by members of the community.
Some of them are available for {{< vendor/name >}} containers.

> [!primary]  
> 
> The information on this page applies to Grid and {{% names/dedicated-gen-3 %}} plans.
> See also [PHP extensions on {{% names/dedicated-gen-2 %}} plans](../../dedicated-gen-2/overview/grid.md#extensions).
> 
> 

You can define the PHP extensions you want to enable or disable:

```yaml {configFile="app"}
runtime:
    extensions:
        - raphf
        - http
        - igbinary
        - redis
    disabled_extensions:
        - sqlite3
```

You can also [include configuration options](../../create-apps/app-reference.md#extensions) for specific extensions.

The following table shows all extensions that are available (Avail) and on by default (Def).
You can turn on the available ones with the `extensions` key
and turn off those on by default with the `disabled_extensions` key.
(Extensions marked with `*` are built in and can't be turned off.)

{{< php-extensions/grid >}}

Some built-in modules are always on:

- `date`

- `filter`

- `hash`

- `json` (from 8.0)

- `libxml`

- `openssl`

- `pcntl`

- `pcre`

- `Reflection`

- `session`

- `SPL`

- `standard`

- `Zend OPcache` (from 5.5)

- `zlib`


To see a complete list of the compiled PHP extensions, run the following [CLI command](../../administration/cli/_index.md):

```bash
webpaas ssh "php -m"
```

## Custom PHP extensions

It's possible to use an extension not listed here,
but it takes slightly more work:

1\. Download the `.so` file for the extension as part of your build hook using `curl` or similar.

   It can also be added to your Git repository if the file isn't publicly downloadable,
   but committing large binary blobs to Git is generally not recommended.

2\. Load the extension using an absolute path by [customizing the PHP settings](./_index.md#customize-php-settings)

   For example, if the extension is named `spiffy.so` and is in your [app root](../../create-apps/app-reference.md#root-directory),
   your configuration looks like the following:

```yaml {configFile="app"}
variables:
    php:
        extension: /app/spiffy.so
```
