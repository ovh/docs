---
title: 'Installing Real Time Monitoring (RTM)'
slug: install-rtm
excerpt: 'Find out how to install Real Time Monitoring on Linux and Windows'
section: 'Diagnostic and rescue mode'
---

**Last updated 6th August 2019**

## Objective

With Real Time Monitoring (RTM), you can partially monitor your server and its activity. In the OVH Control Panel, you can find information on the CPU (Central Processing Unit), RAM (Random Access Memory), disk partitions, open ports, etc. To display this information, you will need to install the RTM package.

**This guide will explain how to install RTM on Linux and Windows.**

## Requirements

- access via SSH (or via your graphical user interface) on your Linux server (root access)
- remote desktop access to your Windows server (*administrator* access)
- access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}

## Instructions

Once you have installed RTM on the OVH Control Panel, you can monitor your server in the `Dedicated`{.action} section. On the main page for your server, you can find the monitoring information under `Real Time Monitoring`:

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Some firewall restrictions may stop your infrastructure from being monitored, even if you have added RTM. Please remember to authorise server access for the OVH monitoring IP addresses. You can find more details for this [here](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external}.
> 

### RTM on Linux
With dedicated servers, RTM gathers real-time information on the CPU, RAM, disks, RAID and hardware.


#### Component

##### Beamium

https://github.com/ovh/beamium

Beamium collects HTTP terminal metrics, such as _http://127.0.0.1:9100/metrics_, and supports the Prometheus Sensision formats. 

Once it has been implemented, Beamium can filter and transfer data to a Warp 10™ Time Series platform. When metrics are collected, it uses DFO (Disk Failover) to avoid any potential loss linked to network issues or unavailable services.

Beamium is written in Rust to guarantee efficiency, a low footprint, and high performance.

Configuration example:

```sh
# noderig endpoint to fetch
scrapers:
  noderig:
    url: http://127.0.0.1:9100/metrics
    format: sensision
    period: 60000

# Warp10 platform to send data
sinks:
  metrics:
    url: https://rtm.ovh.net/
    token: 526873a6b912637ee4c44b525413
    Size : 1000000
    selector: (os|rtm).*
    ttl: 60

labels:
  host: hostname
  host_type: you can add tag for server and retrieve it in grafana host list

parameters:
  source-dir: /opt/beamium/sources
  sink-dir: /opt/beamium/sinks
  log-level: 1
  scan-period: 60000
  log-file: /var/log/beamium/beamium.log
```
The configuration file will be filled in automatically once the installation is complete.

##### Noderig

https://github.com/ovh/noderig

Noderig collects an operating system’s metrics, and exposes them via an HTTP URL (http://127.0.0.1:9100/metrics). Each collector can be easily configured using a basic level cursor.

Noderig metrics:

* CPU
* Memory
* Load
* Disk
* Net
* External collectors

Configuration example:

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

##### RTM Binaries

**rtmHardware**:

- Collects information on the hardware, such as the motherboard, PCI devices, disk health, etc. Also collects information on the software, such as the kernel and BIOS version.

**rtmHourly**:

- Collects information on the top processes, open ports, and the number of ongoing processes.

**rtmRaidCheck**:

- Verifies the health of the RAID (if available).

### Automatically install RTM on Linux.

Once you have connected to your server via SSH, run the following command:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> This automatic installation may not work on your distribution (depending on certain dependencies). If it does not work, please proceed with manual installation, following the instructions outlined further down.
>


#### Manual installation on Debian/Ubuntu.

Add the RTM and the metrics repository for Debian:

`<distribution codename>` is the name of your distribution (e.g. 'jessie').
  
```sh
vi /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Add the RTM and the metrics repository for Ubuntu:

`<distribution codename>` is the name of your distribution (e.g. 'xenial').
  
```sh
vi /etc/apt/sources.list.d/rtm.list
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
Install the apt key:

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

Install the RTM packets:

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### CentOS

Add the RTM and the metrics repository for CentOS:

```sh
vi /etc/yum.repos.d/ovh-rtm.repo

[rtm]
name=OVH RTM RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.rtm.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgkey=http://last.public.ovh.rtm.snap.mirrors.ovh.net/ovh_rtm.pub

[metrics]
name=OVH METRICS RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.metrics.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgkey=http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key
```

Install the RTM packets:

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

### FreeBSD

Add the RTM and the metrics repository for FreeBSD:

```sh
mkdir -p /usr/local/etc/pkg/repos 

vi /usr/local/etc/pkg/repos/OVH.conf

# OVH mirror
RTM: {
  url: "http://last.public.ovh.rtm.snap.mirrors.ovh.net/FreeBSD-pkg/${ABI}/latest",
  mirror_type: "none",
  enabled: yes
}
Metrics: {
  url: "http://last-public-ovh-metrics.snap.mirrors.ovh.net/FreeBSD-pkg/${ABI}/latest",
  mirror_type: "none",
  enabled: yes
}
```
Install the RTM packets:

```sh
pkg install -y noderig beamium ovh-rtm-binaries
pkg install -y ovh-rtm-metrics-toolkit
```
Start the services:

```sh
service noderig start
service beamium start
```

### Install RTM on Windows.

The RTM packet is not yet compatible with Windows (although it will be compatible soon).

## Go further

[What are the IP addresses of the OVH monitoring?](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external}

[Visualize your data](https://docs.ovh.com/gb/en/metrics/usecase-visualize/){.external}

Join our community of users on <https://community.ovh.com/en/>.