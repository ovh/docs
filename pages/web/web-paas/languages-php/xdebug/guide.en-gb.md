---
title: Using Xdebug
slug: xdebug
section: Php
---

**Last updated 31st August 2023**



## Objective  

[Xdebug](https://xdebug.org/) is a real-time debugger extension for PHP.
While usually used for local development, it can also be helpful for debugging aberrant behavior on the server.

As configured on {{< vendor/name >}}, it avoids any runtime overhead for non-debug requests, even in production, and only allows connections via SSH tunnels to avoid any security issues.

Note that Xdebug runs only on your app containers.
So you can't use it for [worker containers](../../create-apps/workers.md).

Also, note that if you use a [custom start command](./_index.md#alternate-start-commands),
Xdebug is automatically disabled.

## Before you begin

The following table shows the PHP versions where Xdebug is available on Grid environments:

{{< php-extensions/single extension="xdebug" >}}

You also need:

- The {{< vendor/name >}} [CLI](../../administration/cli/_index.md)

- A Xdebug-compatible IDE installed on your machine.

    For setup instructions, consult your IDE's Xdebug documentation, such as that for [PHPStorm](https://www.jetbrains.com/help/phpstorm/configuring-xdebug.html).

## 1. Set up Xdebug

Xdebug runs as a second PHP-FPM process used only for debugging requests, leaving the normal process unaffected.

To enable Xdebug, add the following to your [app configuration](../../create-apps/app-reference.md):

```yaml {configFile="app"}
runtime:
    xdebug:
        idekey: {{< variable "YOUR_KEY" >}}
```

{{< variable "YOUR_KEY" >}} can be any arbitrary alphanumeric string.

When that key is defined, {{< vendor/name >}} starts a second PHP-FPM process on the container that's identically configured but also has Xdebug enabled.
Only incoming requests that have an Xdebug cookie or query parameter set are forwarded to the debug PHP-FPM process.
All other requests are directed to the normal PHP-FPM process and thus have no performance impact.

If you have enabled the [router cache](../../define-routes/cache.md),
you need to explicitly add the Xdebug cookie (`XDEBUG_SESSION`) to the cookie allowlist.
Depending on the cookies already listed, the result should look similar to the following:

```yaml {configFile="routes"}
"https://{default}/":
    # ...
    cache:
        enabled: true
        cookies: ['/^SS?ESS/', 'XDEBUG_SESSION']
```

Xdebug has several configuration options available.
They can be set the same way as any other [PHP setting](./_index.md#php-settings).
For a full list of available options, consult the [Xdebug documentation](https://xdebug.org/docs/).

## 2. Use Xdebug

### Open a tunnel

To open an SSH tunnel to the server from a local checkout of your app, run the following [CLI command](../../administration/cli/_index.md) :

```bash
webpaas environment:xdebug
```

That SSH tunnel allows your IDE and the server to communicate debug information securely.

By default, Xdebug operates on port `9003`.
Generally, it's best to configure your IDE to use that port.
To use an alternate port, use the `--port` flag.

To close the tunnel and terminate the debug connection, press <kbd>Ctrl</kbd> + <kbd>C</kbd>.

> [!primary]  
> 
> Note that because you have several virtual machines running but your tunnel is connected to only one of them,
> your requests don't always reach the same host.
> 
> 

### Install an Xdebug helper

While Xdebug can be triggered from the browser by adding a special query parameter, the preferred way is to use a browser plugin helper.
Helpers are available for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/xdebug-helper-for-firefox/)
and [Chrome](https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc).
Their respective plugin pages document how to trigger them when needed.

## 3. Configure your IDE

Follow the instructions for your IDE, such as those for [PHPStorm](https://www.jetbrains.com/help/phpstorm/configuring-xdebug.html).

The common steps for setup usually include:

1\. Configuring the Xdebug debug port and making sure it's set to the expected value (`9003` as default or the value you chose with `--port` when opening the tunnel).

2\. Making sure that external connections are allowed.

3\. Adding a new server for your {{< vendor/name >}} environment.

    The Host should be the hostname of the environment on {{< vendor/name >}} you are debugging.
    The Port should always be `443` and the Debugger set to `Xdebug`.
4\. Ensuring path mappings is enabled.

    This lets you define what remote paths on the server correspond to what path on your local machine.
    In the majority of cases you can just define [your app root](../../create-apps/app-reference.md#root-directory)
    to map to `app`.
5\. Listening for connections.

6\. Starting debugging. While in listen mode, start the `webpaas xdebug` tunnel.

    Use the Xdebug helper plugin for your browser to enable debugging.
    Set a break point in your app, then load a page in your browser.
    The request should pause at the break point and allow you to examine the running app.

## What's next

Learn more about how to [set up Xdebug on Dedicated server clusters](https://community.platform.sh/t/set-up-xdebug-on-dedicated-pro-server-clusters/403).
