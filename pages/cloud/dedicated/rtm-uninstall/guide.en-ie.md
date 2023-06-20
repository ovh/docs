---
title: Uninstalling the RTM v2 monitoring system
excerpt: Find out how to uninstall the RTM monitoring system on your service(s)
updated: 2023-06-20
---

## Objective

The OVHcloud RTM v2 monitoring system has now been deprecated and its repositories deleted. We therefore recommend that you uninstall this system from your service(s) and remove all related packages.

**The purpose of this guide is to show you how to clean up the packages used by this system.**

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-ie/bare-metal/) with RTM v2 installed
- Administrative (*root*) access to your server via SSH

## Instructions

Log in to your server via SSH and remove the following packages:

### Debian-based distributions

```bash
# apt remove ovh-rtm-binaries
# apt remove ovh-rtm-metrics-toolkit
# apt remove noderig
# apt remove beamium
```

### CentOS 7 / AlmaLinux / Rocky Linux

```bash
# yum remove ovh-rtm-binaries
# yum remove ovh-rtm-metrics-toolkit
# yum remove noderig
# yum remove beamium
```

### Fedora

```bash
# dnf remove ovh-rtm-binaries
# dnf remove ovh-rtm-metrics-toolkit
# dnf remove noderig
# dnf remove beamium
```

Next, you need to delete the repositories.

### Debian / Ubuntu

#### Verify if the packages are installed

```bash
dpkg --list | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

If the command returns no value, this means that the packages are not installed, so you can proceed to the repository verification stage. If not, you can remove them using the command below:

```bash
sudo apt-get remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Verify if the repositories exist

```bash
ls /etc/apt/sources.list.d/
```

If the files `ovh-metrics.list` and `ovh-rtm.list` are not listed, then you have nothing to do. Otherwise, you can delete them using the command below:

```bash
rm -f /etc/apt/sources.list.d/ovh-metrics.list /etc/apt/sources.list.d/ovh-rtm.list
```

### CentOS

#### Verify if the packages are installed

```bash
yum list installed | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

If the command returns no value, this means that the packages are not installed, so you can proceed to the repository verification stage. If not, you can remove them using the command below:

```bash
sudo yum remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Verify if the repositories exist

```bash
ls /etc/yum.repos.d/
```

If the `OVH-metrics.repo` and `OVH-rtm.repo` files are not listed, then you have nothing to do. Otherwise, you can delete them using the command below: 

```bash
rm -f /etc/yum.repos.d/OVH-metrics.repo /etc/yum.repos.d/OVH-rtm.repo
```

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ie/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
