---
title: Use Prometheus
slug: protocol-prometheus
excerpt: Get an overview on how to use Prometheus for Metrics
section: Protocol
order: 5
---

**Last updated 15th May, 2018**

## Objective

Prometheus is another open-source monitoring system that takes its root as a clone of Borgmon from Google. In this guide, you will learn how to use Prometheus protocol with Metrics.

## Requirements

- a valid OVH Metrics account.

## Instructions

### Compatibility

| API    | Method | Supported |
|--------|--------|-----------|
| /api/v1/query | GET   |  <i class="fas fa-check"></i> |
| /api/v1/query_range | GET   |  <i class="fas fa-check"></i> |
| /api/v1/series | GET   |  <i class="fas fa-check"></i> |
| /api/v1/label/&lt;label_name>&gt;/values | GET   |  <i class="fas fa-check"></i> |
| /metrics/job/&lt;some_job&gt; | POST  |  <i class="fas fa-check"></i> |

> PromQL by Metrics is quite new has not been extensively tested. If you have any feedback : OVH Community.

### How to Push data

Prometheus is using the [pull-based approach](https://prometheus.io/docs/introduction/faq/#why-do-you-pull-rather-than-push?){.external} to gather metrics. We developed an open-source tool called `Beamium` in order to scrape metrics in Prometheus format. Please see the [dedicated guide to use Beamium](/docs/usecases/beamium/){.external}.

In case you need to push, we also support the [PushGateway](https://prometheus.io/docs/instrumenting/pushing/){.external} with the following URL:

<pre>https://metrics:[WRITE_TOKEN]@prometheus.[region].metrics.ovh.net</pre>


### How to query data

#### Authentification

To push data to the platform, you will need a **WRITE TOKEN**. Use Basic Auth directly inside the URL to pass it properly, like this :

<pre>https://metrics:[WRITE_TOKEN]@influxdb.[region].metrics.ovh.net</pre>

#### Use PromQL

PromQL is a **Query Language** for Prometheus. It offers basic query capabilities, like OpenTSDB, plus a way to use operators between two series. All query documentation is available [here](https://prometheus.io/docs/prometheus/latest/querying/basics/){.external}


## Going further

You can learn how to configure a Grafana Prometheus source by following [this guide](../start-grafana).

You can also exchange with our community of users on [https://community.ovh.com](https://community.ovh.com){.external}.