---
title: Configure CollectD
slug: source-collectd
excerpt: Configure CollectD for Metrics Data Platform
section: Source
order: 2
---
**Last updated 15th May, 2018**

## Objective

collectd is a Unix daemon that collects, transfers and stores performance data of computers and network equipment. In this guide, you will learn how to configure it for Metrics Data Platform.

## Requirements

- a valid Metrics account.
- a UNIX/Linux machine

## Instructions

### What is CollectD

Collectd gathers metrics from various sources, e.g. the operating system, applications, logfiles and external devices, and stores this information or makes it available over the network.
Those statistics can be used to monitor systems, find performance bottlenecks (i.e. performance analysis) and predict future system load (i.e. capacity planning).

### Install CollectD

To ensure using the last release, please refer to the official installation guide located on [CollectD website](https://collectd.org/download.shtml){.external} CollectD.

### Install Warp 10™ plugin

In order to use CollectD with Metrics, you need to add an additional plugin. You can start by creating a __scripts__ directory

```sh
mkdir -p /etc/collectd/scripts
```

Then, add the Warp 10™ plugin into the availables scripts

```sh
curl -s 'https://raw.githubusercontent.com/ovh/collectd-write-warp10/master/write_warp10.py' > '/etc/collectd/scripts/write_warp10.py'
```

### Configure CollectD

Collectd works with plugins, we need to load the Python one to load our Warp 10™ plugin.

This plugin is developped and maintained by OVH teams on their own infrastructures. It's goal is to push by an efficient way all CollectD metrics into the Metrics platform

to enable it:

add the following lines in the Collectd configuration file (mostly __etc/collectd/collectd.conf__)

```xml
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

```sh
#LoadPlugin apache
```

This is the same thing to monitor HDD temperature:

```sh
#LoadPlugin hddtemp
```

## Going further

You can exchange with our community of users on [https://community.ovh.com](https://community.ovh.com){.external}.
