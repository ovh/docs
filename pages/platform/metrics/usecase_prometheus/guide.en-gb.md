---
title: Push Prometheus data to Metrics
slug: usecase-prometheus
excerpt: Use Metrics Data Platform to replace a Prometheus instance
section: Use cases
order: 5
---
**Last updated 15th May, 2018**

## Objective

[Prometheus](https://prometheus.io/){.external} is an open-source systems monitoring and alerting toolkit originally built at SoundCloud and now maintained independently of any company thanks to the [Cloud Native Computing Foundation](https://cncf.io/){.external}. In this tutorial, you will learn how to push data from Prometheus clients to Metrics using `Beamium`.

## Requirements

- a valid OVH Metrics account.
- a `WRITE` token that can be found on Metrics`s manager
- An application exposing Prometheus format
- A Debian-based machine or one capable of compiling a Rust application

## Instructions

### Install or compile Beamium

We created an open-source application called [Beamium](https://github.com/ovh/beamium){.external} which allows you to scrape Prometheus format and push it to Warp 10™. Once scraped, Beamium can filter and forward data to a Warp 10™ Time Series platform. While acquiring metrics, Beamium uses DFO (Disk Fail Over) to prevent metrics loss due to eventual network issues or unavailable service.

Let's use it! You can either install it on Debian or compile it from source.

With a Debian-based machine:

```bash
sudo lsb_release -a | grep Codename | awk '{print "deb https://last-public-ovh-metrics.snap.mirrors.ovh.net/debian/ " $2 " main"}' >> /etc/apt/sources.list.d/beamium.list
sudo apt-key adv --recv-keys --keyserver https://last-public-ovh-metrics.snap.mirrors.ovh.net/pub.key A7F0D217C80D5BB8
sudo apt-get update
sudo apt-get install beamium
```

With [rustup](https://rustup.rs/){.external}:

```bash
cargo install --git https://github.com/ovh/beamium
```

### Configure it

Beamium is expecting a YAML configuration file. You can find a template [here](https://github.com/ovh/beamium/blob/master/config.sample.yaml){.external}, but here it is:

```yaml
scrapers:
  source1:
    url: http://127.0.0.1:9100/metrics
    period: 10000

sinks:
  sink1:
    url: WARP10_ENDPOINT
    token: WARP10_TOKEN

labels:
  host: my-host

```

Save it somewhere on your disk, and replace the following informations:

* `127.0.0.1:9100` with a valid Prometheus endpoint
* `WARP10_ENDPOINT` with a valid Warp 10™ endpoint, such as "https://warp10.gra1.metrics.ovh.net/api/v0/update"
* `WARP10_TOKEN` with a valid token

> From one configuration file, you can scrape multiples sources. Just add them!

### Run it!

now that the configuration file is ready, you can run Beamium:

```bash
beamium --config /path/to/config.yaml
```

Replace /path/to/config.yaml with the proper path, for example /etc/beamium/config.yaml.

Congratulation! You managed to scrape Prometheus based format and push it to Metrics Data Platform.

## Going further

For more information about Beamium, you can go to the official [Beamium configuration page](../source-beamium). you can also exchange with our community of users on [https://community.ovh.com](https://community.ovh.com).
