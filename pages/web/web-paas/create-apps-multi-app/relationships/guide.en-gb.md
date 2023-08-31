---
title: Define relationships between your multiple apps
slug: relationships
section: Multi-App
---

**Last updated 31st August 2023**



## Objective  

When you set up a project containing multiple applications,
by default your apps can't communicate with each other.
To enable connections, define relationships between apps using the `http` endpoint.

You can't define circular relationships.
If `app1` has a relationship to `app2`, then `app2` can't have a relationship to `app1`.
If you need data to go both ways, consider coordinating through a shared data store,
like a database or [RabbitMQ server](../../add-services-rabbitmq).

Relationships between apps use HTTP, not HTTPS.
This is still secure because they're internal and not exposed to the outside world.

## Relationships example

You have two apps, `app1` and `app2`, and `app1` needs data from `app2`.

In your app configuration for `app1`, define a relationship to `app2`:

```yaml {configFile="apps"}
app1:
  relationships:
    api: "app2:http"
```

Once they're both built, `app1` can access `app2` at the following URL: `http://api.internal`.
The specific URL is always available through the [`PLATFORM_RELATIONSHIPS` variable](../../development-variables/use-variables#use-provided-variables):

```bash
$ echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq '.api[0].host'
api.internal
```
