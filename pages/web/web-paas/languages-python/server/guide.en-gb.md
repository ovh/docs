---
title: Web servers
slug: server
section: Python
---

**Last updated 29th August 2023**



## Objective  

The Python ecosystem offers a number of web servers that can be used to deploy to {{< vendor/name >}}.
The following examples deploy a Django project named `myapp`.
They assume a `myapp/wsgi.py` or `myapp/asgi.py` file  with a callable `application`.
Adjust the examples to fit your framework and app.

## Gunicorn

[Gunicorn](https://docs.gunicorn.org/) is a Python WSGI HTTP Server for Unix
that operates on a pre-fork worker model. 
The Gunicorn server is broadly compatible with various web frameworks, light on server resource usage, and fast.

{{% python-sockets server="Gunicorn" %}}

> [!tabs]      

### Gunicorn workers

These examples define four worker processes with `-w 4`.
For more details on what you can configure, see the [Gunicorn documentation](https://docs.gunicorn.org/en/stable/faq.html#worker-processes).

Workers can also be defined with a custom [worker class](https://docs.gunicorn.org/en/latest/settings.html#worker-class),
such as [Uvicorn](https://www.uvicorn.org/#running-with-gunicorn), [gevent](https://www.gevent.org/),
or [Tornado](https://www.tornadoweb.org/).

For example, to add a Uvicorn worker class to the pip example for Unix,
adjust the start command to the following:

```yaml {configFile="app"}
web:
    upstream:
        socket_family: unix
    commands:
        start: "gunicorn -w 4 -k uvicorn.workers.UvicornWorker -b unix:$SOCKET myapp.wsgi:application"
```

## Daphne

[Daphne](https://github.com/django/daphne) is a HTTP, HTTP2 ,and WebSocket protocol server for ASGI and ASGI-HTTP,
developed to power Django Channels.

{{% python-sockets server="Daphne" %}}

> [!tabs]      

## Uvicorn

[Uvicorn](https://www.uvicorn.org/) is an ASGI web server implementation for Python.

{{% python-sockets server="Uvicorn" %}}

> [!tabs]      

### Uvicorn workers

These examples define four worker processes with `-w 4`.
For more recommendations on this and other settings, see the [Uvicorn documentation](https://www.uvicorn.org/settings/#timeouts).

Instead of the `-w` flag, you can also use the `WEB_CONCURRENCY` variable.
See how to [set variables](../../development/variables/set-variables.md).

## Hypercorn

[Hypercorn](https://hypercorn.readthedocs.io/) is an ASGI and WSGI web server inspired by Gunicorn.

{{% python-sockets server="Hypercorn" %}}

> [!tabs]      

### Hypercorn workers

These examples define four worker processes with `-w 4`.
For more details on what you can configure, see the [Hypercorn documentation](https://hypercorn.readthedocs.io/en/latest/how_to_guides/configuring.html).

Workers can also be defined with a custom [worker class](https://hypercorn.readthedocs.io/en/latest/how_to_guides/configuring.html#configuration-options),
such as Asyncio, Uvloop, or Trio.

For example, to add a Asyncio worker class to the pip example for Unix,
adjust the start command to the following:

```yaml {configFile="app"}
web:
    upstream:
        socket_family: unix
    commands:
        start: "hypercorn myapp.asgi:application -b unix:$SOCKET -w 4 -k asyncio"
```
