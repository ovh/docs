---
title: Custom Redis versions
slug: redis
section: Php
---

**Last updated 31st August 2023**



## Objective  

[Redis](../../add-services/redis.md) is a popular structured key-value service, supported by {{< vendor/name >}}.
It's frequently used for caching.

## Install PhpRedis

The [PhpRedis](https://github.com/phpredis/phpredis) extension is available on {{< vendor/name >}}'s PHP container images.
The extension has been known to break its API between versions when removing deprecated functionality.
The version available on each application image is the latest available at the time that PHP version was built,
which if your app is sensitive to PhpRedis versions may not be ideal.

It may happen that the version of the PhpRedis extension available for your PHP version
isn't compatible with your app and upgrading your app isn't feasible.
If so, use the following script as an alternative to download and compile a precise version of the extension.

Do *not* use this approach unless you really need to.
Using the provided PhpRedis extension is preferred in the majority of cases.

To ease the installation of a customer version of PhpRedis, use a [PhpRedis install script](https://github.com/platformsh/snippets/blob/main/src/install-phpredis.sh).
Invoke this script from your build hook, specifying a version.
Any tagged version of the library is acceptable:

```yaml {configFile="app"}
hooks:
    build: |
        set -e
        # Install PhpRedis v5.3.7:
        curl -fsS https://raw.githubusercontent.com/platformsh/snippets/main/src/install-phpredis.sh | { bash /dev/fd/3 5.3.7 ; } 3<&0
```

## Install Relay

Relay is a [Redis](../../add-services/redis.md) client
similar to [PhpRedis](https://github.com/phpredis/phpredis) and
[Predis](https://github.com/predis/predis).
It's intended to be a drop-in replacement for those libraries.

That PHP extension is also a shared in-memory cache like APCu. All retrieved keys are held in the PHP master process’ memory, which is shared across all FPM workers.

That means if the FPM Worker #1 fetches the `users:count` key from Redis,
all other FPM workers instantaneously retrieve that key from Relay without having to communicate with Redis.

To ease the installation of a customer version of Relay, use the [Relay install script](https://github.com/platformsh/snippets/blob/main/src/install-relay.sh).
Invoke this script from your build hook, specifying a version.
Any tagged version of the library is acceptable:

```yaml {configFile="app"}
hooks:
    build: |
        set -e
        # Install Relay v0.6.0:
        curl -fsS https://raw.githubusercontent.com/platformsh/snippets/main/src/install-relay.sh | { bash /dev/fd/3 v0.6.0 ; } 3<&0
```

## Change extension or version

To change the Redis extension or the version you are using, update the build hook and clear the build cache: `webpaas project:clear-build-cache`.

The new version is *not* be used until you clear the build cache.

There's no need to declare the extension in the `runtime` block.
That's only for pre-built extensions.

## What these scripts do

1\. Download the Relay/PhpRedis source code.

2\. Check out the version specified in the build hook.

3\. Compile the extension.

4\. Copy the resulting `relay.so`/`redis.so` file to [your app root](../../create-apps/app-reference.md#root-directory).

5\. Add a line to the `php.ini` file in your app root to enable the extension, creating the file if necessary.


If the script doesn't find a `$PLATFORM_CACHE_DIR` directory defined, it exits silently.
So if you run the build hook locally, it has no effect.
