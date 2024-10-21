---
title: Configuring Jumbo Frames in vRack
excerpt: Learn how to configure Jumbo frames in vRack
updated: 2020-08-17
---

## Objective

Jumbo frames are Ethernet frames with more than 1500 bytes of payload. They can carry up to 9000 bytes of payload. Using them minimizes routing processing time. In the case of vRack, this will optimize traffic on it.

**This guide explains how to configure your Linux distribution to use Jumbo frames within the vRack.**

## Requirements

- a [vRack](https://www.ovh.ie/solutions/vrack/){.external}
- run a shell as root

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-ie/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-ie/compare/) for more information.

> [!primary]
>
> MTU size must be the same on all hosts in the same subnet.
>

## Instructions

### Step 1: Checking MTU

```sh
ip link show | grep mtu
```

### Step 2: Setting new MTU size and test command 

```sh
ip link set <interface name> mtu 9000
```

### Step 3: Making changes permanent

Edit the file `/etc/network/interface` and add the following lines to it:

#### For a DHCP-managed interface

```sh
Auto <interface name>

Iface <interface name> inet dhcp

  Pre-up /sbin/ip link set dev <interface name> up mtu 9000</p>
```

#### For a fixed IP interface

```sh
Auto <interface name>

Iface <interface name> inet static
  mtu 9000
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
