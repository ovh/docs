---
title: 'Installing Real Time Monitoring (RTM)'
slug: install-rtm
excerpt: 'This guide explains how to install RTM on Linux or Windows'
section: 'Diagnostic and rescue mode'
---

**Last updated 15th April 2019**

## Objective

With Real Time Monitoring (RTM), you can partially monitor your server and its activity. In the OVHcloud Control Panel, you will find information on the CPU (Central Processing Unit), RAM (Random Access Memory), open ports, etc. To view this information, you need to install the RTM package.

**This guide will explain how to install RTM on Linux.**

## Requirements

- You need to be logged in via SSH (or your graphical user interface) on your Linux server (*root* access).
- You need to be logged in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}.

## Instructions

Once you have installed the RTM via the OVH Control Panel, you can monitor your server in the `Dedicated`{.action} section. On the main page for your server, you can find the monitoring information under `Real Time Monitoring`:

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Some firewall restrictions could prevent your infrastructure from being monitored, even though you have added the RTM. Don’t forget to give OVHcloud monitoring IP addresses access to your server. You can find more details [here](../monitoring-ip-ovh/){.external}.
> 

### RTM in Linux
On dedicated servers, RTM collects disk, RAID and hardware information.


#### Component

##### Beamium

Beamium collects metrics from HTTP endpoints like _http://127.0.0.1/metrics_, and supports Prometheus and Warp10/Sensision formats. 

Once scraped, Beamium can filter and forward data to a Warp10 Time Series platform. While acquiring metrics, Beamium uses DFO (Disk Fail Over) to prevent metrics loss due to network issues or unavailable services.

Beamium is written in Rust to ensure efficiency, a very low footprint, and deterministic performance.

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


##### Noderig

Noderig collects OS metrics and exposes them through a Sensision HTTP endpoint. Each collector is easily configurable, thanks to a simple level cursor.

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

##### Rtm-binaries

**rtmHardware**:

-Collects hardware information like motherboard, pci devices, disk health etc., and also software information, like kernel version and bios version.

**rtmHourly**:

-Collects top memory process, listen ports, number of processes up, and actives.

**rtmRaidCheck**:

-Checks RAID health.

### Installing RTM on Linux

Once you have logged in to your server via SSH, simply run the following command:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```

> [!primary]
> 
> This installation may not work on your distribution, in this case, please try to proceed to a manual installation described above.
>

### Debian/Ubuntu manual installation

Add RTM and metrics repository for Debian:
where `<distribution codename>` is your distribution name (eg: 'jessie')

```sh
vi /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Add RTM and metrics repository for Ubuntu:
where `<distribution codename>` is your distribution name (eg: 'xenial')
```sh
vi /etc/apt/sources.list.d/rtm.list
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
Install repository key:

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

Install RTM packages:

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

### CentOS

Add RTM and metrics repository for CentOS:

```sh
vi /etc/yum.repos.d/ovh-rtm.repo

[rtm]
name=OVH RTM RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.rtm.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgcheck=0
gpgkey=http://last.public.ovh.rtm.snap.mirrors.ovh.net/ovh_rtm.pub

[metrics]
name=OVH METRICS RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.metrics.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgcheck=0
gpgkey=http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key
```

##### Install RTM client:


```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

### FreeBSD

Add RTM and metrics repository for FreeBSD:

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
Install RTM client :

```sh
pkg install -y noderig beamium ovh-rtm-binaries
pkg install -y ovh-rtm-metrics-toolkit
```
Start services :
```sh
service noderig start
service beamium start
```

### Install RTM on Windows

The RTM client is not yet compatible on windows. (work in progress)

### Uninstall RTMv1

The legacy monitoring tool is automatically removed from your system if you install this version.

#### Manual uninstall (legacy monitoring tool)

In order to remove the legacy monitoring tool, please proceed theses steps:

- Remove directory "/usr/local/rtm":
```sh
rm -Rf /usr/local/rtm
```

- Remove crontab :
Edit the file /etc/crontab and remove the line with "rtm"
* it looks like */1 * * * * root /usr/local/rtm/bin/rtm XX > /dev/null 2> /dev/null

## Go further

[What are the IP addresses of the OVHcloud monitoring?](../monitoring-ip-ovh/){.external}

[Visualize your data](../metrics/usecase-visualize/){.external}

Join our community of users on <https://community.ovh.com/en/>.
