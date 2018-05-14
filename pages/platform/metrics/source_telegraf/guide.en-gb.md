---
title: Configure Telegraf
slug: source-telegraf
excerpt: Configure Telegraf for Metrics Data Platform
section: Source
---
**Last updated 15th May, 2018**

## Objective

Telegraf is a go agent written to collect, process, aggregate, and write metrics. In this guide, you will learn how to configure it for Metrics Data Platform.

## Requirements

- a valid Metrics account.
- a UNIX/Linux machine

## Instructions

### What is Telegraf

Telegraf is an agent written in Go for collecting, processing, aggregating, and writing metrics.

Design goals are to have a minimal memory footprint with a plugin system so that developers in the community can easily add support for collecting metrics from local or remote services.

Telegraf is plugin-driven and has the concept of 4 distinct plugins:

- Input Plugins collect metrics from the system, services, or 3rd party APIs
- Processor Plugins transform, decorate, and/or filter metrics
- Aggregator Plugins create aggregate metrics (e.g. mean, min, max, quantiles, etc.)
- Output Plugins write metrics to various destinations
- For more information on Processor and Aggregator plugins please read this.

New plugins are designed to be easy to contribute, we'll eagerly accept pull requests and will manage the set of plugins that Telegraf supports.

### Install Telegraf

To ensure using the last release, please refer to the [Github project](https://github.com/influxdata/telegraf/releases){.external}.

### Configure Telegraf

In the configuration file, you need to add an host, like this:

```toml
# OUTPUTS
[[outputs.influxdb]]
  url = "https://metrics:WRITE_TOKEN@influxdb.REGION.metrics.ovh.net" # required.
  database = "telegraf" # required.
```

Replace `WRITE_TOKEN` and `REGION` by your own information based on Metrics manager. Scollector is now configured!

## Going further

You can exchange with our community of users on [https://community.ovh.com](https://community.ovh.com){.external}.