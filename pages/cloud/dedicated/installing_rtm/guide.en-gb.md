---
title: 'Installing Real Time Monitoring (RTM)'
slug: install-rtm
excerpt: 'Find out how to install Real Time Monitoring using Linux'
section: 'Diagnostic and rescue mode'
---

**Last updated 24th March 2020**

## Objective

With Real Time Monitoring (RTM), you can partially monitor your server and its activity regarding CPU, RAM, disk partitions, etc. To display this information directly in your OVHcloud Control Panel, it's necessary to install the RTM package on your server first.

**This guide explains how to install RTM on Linux.**

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)
- root access via SSH (or via graphical user interface) on your server


## Instructions

> [!primary]
>
> Some firewall restrictions may prevent your infrastructure from being monitored, even if you have added RTM. Please remember to authorise server access for the OVHcloud monitoring IP addresses. You can find the details [this guide](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh).
> 

### RTM on Linux

#### Components

With dedicated servers, RTM gathers real-time information on the CPU, RAM, disks, RAID and hardware. Below, you can find some details regarding the components used.

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

### Installing RTM automatically

Once you have connected to your server via SSH, run the following command:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> This automatic installation may not work on your distribution (depending on certain dependencies). If it produces an error, please proceed with the manual installation, following the instructions outlined in the sections below.
>

### Installing RTM manually

#### Manual installation on Debian/Ubuntu


##### Step 1: Adding OVHcloud repositories

- by using **add-apt-repository**

```sh
#metrics repo
add-apt-repository "deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
# rtm repo
add-apt-repository "deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
```

- by adding them manually

For **Debian**:

`<distribution codename>` is the name of your distribution (for example: "buster").
  
```sh
nano /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

For **Ubuntu**:

`<distribution codename>` is the name of your distribution (for example: "bionic").
  
```sh
nano /etc/apt/sources.list.d/rtm.list

```
Add these lines and save the file:
  
```sh
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
> [!primary]
> 
> Concerning current distributions, please note that the necessary packages might not be included yet in the repositories of up-to-date Linux OS versions. In that case, please use the codename of an older (Ubuntu) version as a workaround.
>


##### Step 2: Installing the apt key

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

##### Step 3: Installing the RTM packages

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### Manual installation on CentOS

Add the RTM and the metrics repository for CentOS:

```sh
nano /etc/yum.repos.d/ovh-rtm.repo
```
Add these lines and save the file:

```sh
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

Install the RTM packages:

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

#### Manual installation on FreeBSD

Add the RTM and the metrics repository for FreeBSD:

```sh
mkdir -p /usr/local/etc/pkg/repos
nano /usr/local/etc/pkg/repos/OVH.conf
```
Add these lines and save the file:

```sh
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
Install the RTM packages:

```sh
pkg install -y noderig beamium ovh-rtm-binaries
pkg install -y ovh-rtm-metrics-toolkit
```
Start the services:

```sh
service noderig start
service beamium start
```

> [!primary]
>**RTM on Windows**
>
The RTM package is currently not compatible with Windows systems. We are continuously developing and improving our services; eventually there will be a Windows option as well.
>


### RTM in the OVHcloud Control Panel

Once you have successfully installed RTM, you can view the monitoring data for your server in the the OVHcloud Control Panel. (It might be necessary to refresh your browser or to log out and log in again). Navigate to the `Server`{.action} section and select your server from the left-hand menu. On the `General information`{.action} tab, scroll down to find the monitoring information.

![Real Time Monitoring](images/rtm_panel.png){.thumbnail}



## Go further

[What are the IP addresses of the OVH monitoring?](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh)

[Visualise your data](https://docs.ovh.com/gb/en/metrics/usecase-visualize)

[Activating and using rescue mode](https://docs.ovh.com/gb/en/dedicated/ovh-rescue)

Join our community of users on <https://community.ovh.com/en/>.