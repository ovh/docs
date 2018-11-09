---
title: Configure Scollector
slug: source-scollector
excerpt: Configure Scollector for Metrics Data Platform
section: Source
order: 5
---
**Last updated 15th May, 2018**


scollector is a replacement for OpenTSDB's TCollector and can be used to send metrics to a Bosun/OpenTSDB server. In this guide, you will learn how to configure it for Metrics Data Platform.

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

## Going further

You can exchange with our community of users on [https://community.ovh.com](https://community.ovh.com){.external}.