---
title: Spare host delivery and return
slug: spare-host-howto
excerpt: Find out how the replacement of a host works
legacy_guide_number: '2883590'
section: OVH Features
order: 04
---

**Last updated 29th June 2020**

## Objective

OVHcloud guarantees in its contracts the replacement of an inaccessible host.

**This guide explains the details of a host replacement procedure.**

## Instructions

### Delivery of a spare host

If one of your hosts fails, OVHcloud will automatically deliver a free replacement host to your infrastructure to ensure continuity of service.

As soon as this host is delivered, you will receive an email providing information about this host and its IP address, allowing you to easily find it in your vSphere interface.

By default, VMware's [High Availability (HA) service](../vmware-ha-high-availability/) is enabled on your cluster. If you have not disabled it, your virtual machines will automatically restart. If the Distributed Resources Scheduler (DRS) service is enabled and configured in "fully automated" mode, the load distribution on the hosts in your cluster will also be performed automatically.

> [!warning]
> 
> If a CD/DVD drive is still mounted or connected to a VM, the HA service will not be able to restart it on the spare host. It is recommended that you always have the CD/DVD drive as a client device.
>

### What to do after receiving the spare host

Once the original host is functional again, you can return one of the two hosts (the spare host or the original host).

We recommend that you return the original host so that we can run a battery of tests on it (to avoid future failures). You can then keep the spare host. To do this, please follow the [Removing a host server](../remove-host-server/) guide.

OVHcloud can automatically retrieve the original host as soon as it is removed.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
