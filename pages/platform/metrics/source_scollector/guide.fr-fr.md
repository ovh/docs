---
title: Configure Scollector
slug: source-scollector
excerpt: Configure Scollector for Metrics Data Platform
section: Source
order: 5
---
**Last updated 23th August, 2019**

## Objective

[scollector](https://bosun.org/scollector/){.external} is a replacement for OpenTSDB's TCollector and can be used to send metrics to a Bosun/OpenTSDB server. In this guide, you will learn how to configure it for Metrics Data Platform.

## Requirements

- a valid Metrics account.
- a UNIX/Linux machine

## Instructions

### What is Scollector

Scollector have several benefits compared to TCollector:

- scollector uses the HTTP based API, not the older Telnet based API
- scollector is written in Go and is more resource efficient
- scollector integrates with Bosun's metadata (Units, Gauge/Counter, Description) and allows external collectors to provide metadata

OpenTSDB 1.0 uses the tcollector data collection framework. This project aims to make scollector the preferred collector for OpenTSDB 2.0.

### Install Scollector

To ensure using the last release, please refer to the [official installation guide](https://bosun.org/scollector/){.external} to install Scollector.

### Configure Scollector

In the configuration file, you need to add an host, like this:

```toml
Host = "https://metrics:WRITE_TOKEN@opentsdb.REGION.metrics.ovh.net"
```

Replace `WRITE_TOKEN` and `REGION` by your own information based on Metrics manager. Scollector is now configured!

## Go further

- Documentation: [Guides](../product.fr-fr.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
