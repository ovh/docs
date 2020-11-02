---
deprecated: true
title: 'Installing Real Time Monitoring (RTM)'
slug: install-rtm
excerpt: 'Learn how to install Real Time Monitoring on Linux or Windows'
section: 'Diagnostic and rescue mode'
---

**Last updated 22th October 2018**

## Objective

With Real Time Monitoring (RTM), you can partially monitor your server and its activity. In your Control Panel, you will find information on the CPU (Central Processing Unit), RAM (Random Access Memory), open ports, etc. To view this information, you need to install the RTM package.

**This guide will explain how to install RTM on Linux or Windows**

## Requirements

- You need to be logged in via SSH (or on your graphical user interface) on your Linux server (*root* access).
- You need to be logged in to the remote desktop on your Windows server (*administrator* access).
- You need to be logged in to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instructions

Once you have installed the RTM via your Control Panel, you can monitor your server in the `Dedicated`{.action} section. On the main page for your server, you can find the monitoring information under `Real Time Monitoring`:

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Some firewall restrictions could prevent your infrastructure from being monitored, even though you have added the RTM. Don’t forget to give OVH monitoring IP addresses access to your server. 
> 

### RTM in Linux
On dedicated server, RTM collect disk, RAID information and hardware information.


#### Component

1. ##### Beamium

Beamium collect metrics from HTTP endpoints like _http://127.0.0.1/metrics_ and supports Prometheus and Warp 10™/Sensision format. 

Once scraped, Beamium can filter and forward data to a Warp 10™ Time Series platform. While acquiring metrics, Beamium uses DFO (Disk Fail Over) to prevent metrics loss due to eventual network issues or unavailable service.

Beamium is written in Rust to ensure efficiency, a very low footprint and deterministic performances.

Configuration example :

```sh
# noderig endpoint to fetch
scrapers:
  noderig:
    url: http://127.0.0.1:9100/metrics
    format: sensision
    period: 60000

# Warp 10™ platform to send data
sinks:
  metrics:
    url: https://rtm.ovh.net/
    token: 57e05f1526873a6b912637ee4c44b525413f6764db700494ff6c4014
    size: 1000000
    selector: (os|rtm).*
    ttl: 60

labels:
  host: hostname
  host_type: you can add tag for server and retreive it in grafana host list

parameters:
  source-dir: /opt/beamium/sources
  sink-dir: /opt/beamium/sinks
  log-level: 1
  scan-period: 60000
  log-file: /var/log/beamium/beamium.log
```


2. ##### Noderig

Noderig collect OS metrics and expose them through a Sensision HTTP endpoint. Each collector is easily configurable, thanks to a simple level cursor

Noderig metrics:

* CPU
* Memory
* Load
* Disk
* Net
* External collectors

Configuration example :

```sh
cpu: 1
mem: 1
load: 2
disk: 2
net: 2
net-opts:
  interfaces:
    - eth0
    - eth1
period: 60000
collectors: /opt/noderig
```

3. ##### Rtm-binaries

**rtmHardware** :

-Collect hardware information like motherboard, pci devices, disk health... and solftware information like kernel version, bios version.

**rtmHourly** :

-Collect top memory process, listen ports, number of process up and actives.

**rtmRaidCheck** :

-Check raid health.

### Installing RTM in Linux

Once you have logged in via SSH on your server, simply run the following command:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```

### Debian/Ubuntu Manual installation

Add rtm and metrics repository for debian

```sh
vi /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Add rtm and metrics repository for ubuntu

```sh
vi /etc/apt/sources.list.d/rtm.list
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
Install repository key

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

Install Rtm packages

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### CentOS

Add rtm and metrics repository for CentOS

```sh
vi /etc/yum.repos.d/ovh-rtm.repo

[rtm]
name=OVH RTM RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.rtm.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
gpgcheck=1
gpgkey=http://last.public.ovh.rtm.snap.mirrors.ovh.net/ovh_rtm.pub

[metrics]
name=OVH METRICS RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.metrics.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
gpgcheck=1
gpgkey=http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key
```

##### Install RTM Client


```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

### Installing RTM in Windows

Once you are logged in to the remote desktop, take the following steps:

- Install ActivePerl if you have never installed RTM before. You can download it here: <http://www.activestate.com/activeperl/>
- Download and install the latest version of RTM here: <ftp://ftp.ovh.net/made-in-ovh/rtm/windows/>
- Right-click on the file and then click `Run as administrator`{.action}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
