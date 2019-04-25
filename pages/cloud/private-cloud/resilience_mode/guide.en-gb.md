---
title: 'Using resilience mode'
slug: resilience-mode
excerpt: 'Find out how to use OVH resilience mode'
legacy_guide_number: '7766742'
section: 'OVH Features'
---

**Last updated 30th October 2018**

## Objective

Resilience mode is a tool developed by OVH, which simulates an outage on one of your host servers. You can use it to check that High Availability (HA) and Fault Tolerance (FT) systems work correctly in clusters that form **development environments**.

**This guide will show you how to use OVH resilience mode.**

## Requirements

* an [OVH Private Cloud](https://www.ovh.co.uk/private-cloud/){.external} solution
* access to the vSphere interface



## Instructions

Before you proceed, ensure that:

- the host server is in a cluster
- the High Availability (HA) option is activated
- another host server in the cluster is available and working properly

> [!warning]
>
> This is a test for a **development environment**. You should not carry out this test on a **production environment**.
> 


### Activate resilience mode.

Once you have logged in to the vSphere client, go to the inventory for your host servers and cluster. Select the server concerned by right-clicking on it, then click `OVH Dedicated Cloud`{.action}, and `Resilience`{.action}.

![Right-click on the host to activate resilience mode](images/resilience_01.png){.thumbnail}

Once you have checked that all the requirements are met, click `Next`{.action}.

![Check requirements and confirm](images/resilience_02.png){.thumbnail}

You will need to check the terms of use and confirm your agreement before launching the test. Once you have ticked the `I accept the terms of the failure simulation agreement`{.action} box, click `Next`{.action}.

![Confirm terms of use](images/resilience_03.png){.thumbnail}

The activation request has now been processed.

![Activating resilience mode](images/resilience_04.png){.thumbnail}

In a few minutes, the host server will become unavailable.

![Host unavailable](images/resilience_05.png){.thumbnail}


### Deactivate resilience mode

To finish the simulation, click on resilience mode again.

![Finalise the simulation](images/resilience_06.png){.thumbnail}

The deactivation request has now been processed.

![Deactivating resilience mode](images/resilience_07.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
