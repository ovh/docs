---
title: Configure CollectD
slug: source-collectd
excerpt: Configure CollectD for Metrics Data Platform
section: Source
order: 2
---
**Last updated 23th August, 2019**

## Objective

[CollectD](https://collectd.org/){.external} is a Unix daemon that collects, transfers and stores performance data of computers and network equipment. In this guide, you will learn how to configure it for Metrics Data Platform.

## Requirements

- a valid Metrics account.
- a UNIX/Linux machine

## Instructions

### What is CollectD

Collectd gathers metrics from various sources, e.g. the operating system, applications, logfiles and external devices, and stores this information or makes it available over the network.
Those statistics can be used to monitor systems, find performance bottlenecks (i.e. performance analysis) and predict future system load (i.e. capacity planning).

### Install CollectD

To ensure using the last release, please refer to the official installation guide located on [CollectD website](https://collectd.org/download.shtml){.external}.

### Install Warp 10™ plugin

In order to use CollectD with Metrics, you need to add an additional plugin. You can start by creating a __scripts__ directory

```shell-session
$ mkdir -p /etc/collectd/scripts
```

Then, add the Warp 10™ plugin into the availables scripts

```shell-session
$ curl -s 'https://raw.githubusercontent.com/ovh/collectd-write-warp10/master/write_warp10.py' > '/etc/collectd/scripts/write_warp10.py'
```

### Configure CollectD

Collectd works with plugins, we need to load the Python one to load our Warp 10™ plugin.

This plugin is developped and maintained by OVH teams on their own infrastructures. It's goal is to push by an efficient way all CollectD metrics into the Metrics platform

to enable it:

add the following lines in the Collectd configuration file (mostly __etc/collectd/collectd.conf__)

```text
LoadPlugin python

<Plugin python>
  ModulePath "/etc/collectd/scripts"
  LogTraces true
  Interactive false
  Import "write_warp10"
  <Module write_warp10>
    DefaultLabel host "serverXXX"
    Token "METRICS_WRITE_TOKEN"
    URL "https://warp10.gra1.metrics.ovh.net/api/v0/update"
  </Module>
</Plugin>
```

Finaly, replace **METRICS_WRITE_TOKEN** with a Metrics write token (you can get one on the Metrics manager)

Depanding of your infrastructure, you can explicitly add **Labels** on your metrics, that's what do __DefaultLabel__ directive.

On the example, you can see **gra1** in the URL, each Metrics project is linked to a region (gra1, bhs1, ...) replace it if needed.

### Enable Metrics

A list of basic metrics is shipped on the configuration file, for example if you want to get your Apache metrics, uncomment this line:

```text
#LoadPlugin apache
```

This is the same thing to monitor HDD temperature:

```text
#LoadPlugin hddtemp
```

## Go further

- Documentation: [Guides](../product.en-gb.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
