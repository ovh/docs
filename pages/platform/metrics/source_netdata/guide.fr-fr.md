---
title: Configure Netdata
slug: source-netdata
excerpt: Configure Netdata for Metrics Data Platform
section: Source
order: 1
---
**Last updated 5th September, 2019**

## Objective

Netdata is gaining traction as a distributed, real-time, performance and health monitoring tool for systems and applications. Primarily focused on high granularity real-time insights, Netdata can forward collected time-based data to another tool for long-term storage or cross-nodes analytics.

In this guide, you will learn how you might configure Netdata with Metrics Data Platform using the [Beamium](https://github.com/ovh/beamium){.external} tool and Netdata prometheus format API.

## Requirements

- a valid Metrics account.
- a UNIX/Linux machine with Netdata installed

## Instructions

### Netdata backend configuration

This guide does not cover Netdata overall installation and configuration, you might take a look first at [Netdata Github project](https://github.com/netdata/netdata#quick-start){.external}.

The prometheus API is available by default on the Netdata API endpoint `/api/v1/allmetrics?format=prometheus&help=true` but you can configure its content in the [backends configuration](https://github.com/netdata/netdata/tree/master/backends){.external}.

This example configure a filter on exported metrics.

```ini
[backend]
  enabled = yes
  data source = as collected
  send charts matching = apps.cpu apps.cpu_*
```

### Beamium configuration

We will use Beamium to forward data to Metrics Data Platform as documented [Here](../source_beamium/guide.fr-fr.md){.ref}.

```yaml
scrapers:
  netdata:
    url: "http://127.0.0.1:19999/api/v1/allmetrics?format=prometheus"
    period: 60s

sinks:
  metrics_warp10_endpoint:
    url: "https://warp10.gra1.metrics.ovh.net/api/v0/update"
    token: "WRITE_TOKEN"
    ttl: 1h

labels:
  host: hostname
  host_type: you can add tag for server and retreive it in grafana host list

parameters:
  log-file: /var/log/beamium/beamium.log
  source-dir: /opt/beamium/sources
  sink-dir: /opt/beamium/sinks
```

Don't forget to add your own `WRITE TOKEN`{.action} and configure `period`{.action} according to your needs.

If you are applying this configuration alongside [Real Time Monitoring (RTM)](../../../cloud/dedicated/installing_rtm/guide.fr-fr.md), you may want to filter data sent to Metrics Data Platform sink with the netdata default metric prefix.

```yaml
sinks:
  metrics_warp10_endpoint:
    url: "https://warp10.gra1.metrics.ovh.net/api/v0/update"
    token: "WRITE_TOKEN"
    ttl: 1h
    selector: netdata_*
```

## Go further

- Documentation: [Guides](../product.fr-fr.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
