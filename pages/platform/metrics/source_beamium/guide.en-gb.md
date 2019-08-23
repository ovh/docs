---
title: Configure Beamium
slug: source-beamium
excerpt: Configure Beamium for Metrics Data Platform
section: Source
order: 1
---
**Last updated 15th May, 2018**

## Objective

Beamium collect metrics from HTTP endpoints like `http://127.0.0.1/metrics`{.action} and supports Prometheus and Warp 10™/Sensision format.

In this guide, you will learn how to configure it for Metrics Data Platform.

## Requirements

- a valid Metrics account.
- a UNIX/Linux machine

## Instructions

### What is Beamium

Beamium collect metrics from HTTP endpoints like `http://127.0.0.1/metrics`{.action} and supports Prometheus and Warp 10™/Sensision format. Once scraped, Beamium can filter and forward data to a Warp 10™ Time Series platform. While acquiring metrics, Beamium uses DFO (Disk Fail Over) to prevent metrics loss due to eventual network issues or unavailable service.

Beamium is written in Rust to ensure efficiency, a very low footprint and deterministic performances.

Beamium key points:

 - **Simple**: Beamium is a single binary that does one thing : scraping then pushing.
 - **Integration**: Beamium fetch Prometheus metrics and so benefits from a large community.
 - **Reliable**: Beamium handle network failure. Never loose data. We guarantee void proof graph ;)
 - **Versatile**: Beamium can also scrape metrics from a directory.
 - **Powerful**: Beamium is able to filter metrics and send them to multiple Warp 10™ platforms.

### Install

To ensure using the last release, please refer to the official installation guide on [Github project](https://github.com/ovh/beamium/releases){.external} to install Beamium.

### Configure

Beamium configuration can be split into 4 parts : **parameters**, **labels**, **scrapers** & **sinks**.

Here is a basic preview of a Beamium configuration using GRA1 cluster (non exhaustive) :

```yaml
scrapers:
  myApp:
    url: http://127.0.0.1:9100/metrics
    period: 10000
    format: prometheus

sinks:
  metrics_warp10_endpoint:
    url: https://warp10.gra1.metrics.ovh.net/api/v0/update
    token: WRITE_TOKEN

labels:
  host: myhost.domain.tld
  pool: backend
  datacenter: gra1

parameters:
  sink-dir: /opt/beamium/sinks
```

Sinks are locations where Beamium can push your data points. They have to be valid Warp 10™ /update endpoints. You can configure multiple sinks. In this configuration, you are defining a sink which is Metrics GRA1 cluster. Don't forget to add your own `WRITE TOKEN`{.action}.

## Going further

You can exchange with our community of users on [https://community.ovh.com](https://community.ovh.com){.external}.
