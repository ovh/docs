---
title: Swoole
slug: swoole
section: Php
---

**Last updated 31st August 2023**



## Objective  

Swoole is a PHP extension that extends PHP core with a coroutine based asynchronous network application framework designed for building large scale concurrent systems.

Unlike PHP-FPM’s stateless operating, Swoole relies on establishing persistent connections with every user, sending and receiving data in real-time.

[Swoole](https://github.com/swoole/swoole-src) and [Open Swoole](https://openswoole.com/) are two forked libraries pursuing that goal.

> [!primary]  
> Swoole requires PHP 7.3+.
> 
> The Swoole installation script is compatible up to PHP 8.0.
> 

Check the documentation related to [Laravel Octane on {{< vendor/name >}}](../../guides/laravel/deploy/octane.md).

{{% swoole %}}

## Use

Override the default web server with a [custom start command](./_index.md#alternate-start-commands).
Octane should listen on a TCP socket.

```yaml {configFile="app"}
web:
    upstream:
        socket_family: tcp
        protocol: http
    commands:
        start: php {{<variable "PATH_TO_SWOOLE_START_COMMAND" >}} --port=$PORT
    locations:
        "/":
            passthru: true
            scripts: false
            allow: false
```
