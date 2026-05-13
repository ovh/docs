---
title: Spare host delivery and return
excerpt: Find out how the replacement of a host works
updated: 2026-05-12
---

## Objective

OVHcloud guarantees in its contracts the replacement of an inaccessible host.

**This guide explains the details of a host replacement procedure.**

## Requirements

- An active [Hosted Private Cloud](/links/hosted-private-cloud/vmware) infrastructure.

## Instructions

### Delivery of a spare host

If one of your hosts fails, OVHcloud will automatically deliver a free replacement host to your infrastructure to ensure continuity of service.

As soon as this host is delivered, you will receive an email providing information about this host and its IP address, allowing you to easily find it in your vSphere interface.

By default, VMware's [HA (High Availability)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ha_high_availability) service is enabled on your cluster. If you have not disabled it, your virtual machines will automatically restart. If the [DRS (Distributed Resource Scheduler)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new) service is enabled and configured in "Fully Automated" mode, the load distribution on the hosts in your cluster will also be performed automatically.

> [!warning]
> 
> If a CD/DVD drive is still mounted or connected to a VM, the HA service will not be able to restart it on the spare host. It is recommended that you always have the CD/DVD drive as a client device.
>

### What to do after receiving the spare host

We recommend that you return the original host so that we can run a battery of tests on it (to avoid future failures). You can then keep the spare host. To do this, please follow the [Removing a host server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_host) guide.

> [!warning]
> 
> In the event that one of the two hosts (original or spare) is not returned within 7 days, the spare host will be billed by the hour from the 8th day.
>

## Go further

Join our [community of users](/links/community).
