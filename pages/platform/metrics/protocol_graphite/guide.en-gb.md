---
title: 'Use Graphite'
slug: protocol-graphite
excerpt: 'Get an overview on how to use Graphite for Metrics'
section: Protocol
order: 2
---

**Last updated 15th May, 2018**

## Objective

[Graphite](https://graphiteapp.org/){.external} is the first Time Series platform with analytics capabilities. In this guide, you will learn how to use Graphite protocol with Metrics.

## Requirements

- a valid OVH Metrics account.

## Instructions

### Compatibility

The Graphite API documentation is available at [http://graphite-api.readthedocs.io/en/latest/api.html](http://graphite-api.readthedocs.io/en/latest/api.html){.external}.

We are currently supporting this calls:

|Method|Supported call|limitation|
|---|---|---|
|GET|/render|This path does not support pictures generation|
|GET|/metrics| |
|GET|/metrics/find| |
|GET|/metrics/index.json| |

### Data Model
Graphite's data model uses a dot-separated format that describes a metric name, e.g. :

```
 servers.srv_1.dc.gra1.cpu0.nice;
```

### How to Push data
Since Graphite doesn't support authentication, we've developed a small proxy that fits on your host and accept pushes to `TCP:2003` like Graphite.

It's named [Fossil](https://github.com/ovh/fossil){.external} and it's Open Source.


### How to query

#### Authentification

To query data to the platform, you will need a **READ TOKEN**. Use Basic Auth directly inside the URL to pass it properly, like this :

<pre>https://metrics:[READ_TOKEN]@graphite.[region].metrics.ovh.net</pre>

#### Query using curl

Queries over Graphite are performed with URL based query parameters, json payload or form payload.

> The full documentation is available at [http://graphite-api.readthedocs.io/en/latest/](http://graphite-api.readthedocs.io/en/latest/){.external}.

For example:

```bash
curl 'https://metrics:TOKEN_READ@graphite.gra1.metrics.ovh.net/render?target=maximumAbove(os.cpu, 1048576)'
```

To authenticate requests basic auth is used. You must fill the basic auth password with the read token available in your OVH Metrics Data Platform manager.

## Go further

You can learn how to configure a Grafana Graphite source by following [this guide](../start-grafana).

Join our community of users on <https://community.ovh.com/en/>.