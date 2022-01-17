---
title: Check a slow machine
excerpt: ''
slug: check_a_slow_machine
section: Maintenance and monitoring
---

**Last Updated on 17th January 2022**

## Objective

Use the vSphere monitoring tools to troubleshoot a slow VM.

**This guide offers a step by step study case to achieve the objective**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))


## Instructions

You have three levels of monitoring accessible in vSphere to troubleshoot issues.
- VM
- Cluster
- Storage

### VM Monitoring

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.<br>
Navigate to your VM and select it.<br>
The `Monitor`{.action} tab presents performance `Overview`{.action}.<br>
You may see real-time metrics or choose to check a timeframe to see performance evolution.<br>
You may also change the view to dif on more specific subjects.

![](images/en01vm.png){.thumbnail}

You may also use the `Utilization`{.action} section to help your investigations.

### Cluster monitoring

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.<br>
Navigate to your Cluster and select it.<br>
The `Monitor`{.action} tab presents performance `Overview`{.action}.<br>
You may see real-time metrics or choose to check a timeframe to see performance evolution.<br>
You may also change the view to dif on more specific subjects.

![](images/en02cluster.png){.thumbnail}

You may also use the `Resource Allocation`{.action} and `Utilization`{.action} sections to help your investigations.

> [!primary]
>
> Resource Pools can be accessed and monitored in the same way clusters are.
> 

### Storage monitoring

In the vSphere interface menu, go to the `Storage`{.action} dashboard.<br>
Navigate to your datastore and select it.<br>
The `Monitor`{.action} tab presents performance `Overview`{.action}.<br>
You may see real-time metrics or choose to check a timeframe to see performance evolution.<br>
You may also change the view to dif on more specific subjects.

![](images/en03storage.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.


