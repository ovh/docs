---
title: 'Managing vSAN fault domains'
slug: vmware-vsan-fault-domain
excerpt: 'Find out how to manage vSAN fault domains'
section: 'VMware vSphere features'
---

**Last updated 23rd December 2021**

## Objective

The aim of this guide is to explain how vSAN fault domains work and how they are implemented.

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- A deployed [vSan Datastore](https://docs.ovh.com/gb/en/private-cloud/vmware-vsan/)

## Instructions

### How Fault Domain work

A fault domain refers to a set of servers, storage devices, or network components that are grouped within a physical location in the data centre and can be collectively assigned during a failure.

With vSAN, you can group servers into vSAN fault domains, taking into account their physical location.<br>
The advantage is that you have multiple fault domains, so you can benefit from the resilience provided by vSAN. This way, you can replicate the VMs’ objects across these server groups. You can find more details in [this guide](https://core.vmware.com/resource/vmware-vsan-design-guide#sec8-sub3).

The OVHcloud servers provided to you are spread across several racks. This way, you can create vSAN fault domains based on these arrays.

For example, the default vSAN policy (tolerance level FTT=1 with RAID1 (Mirroring)) requires a minimum of 3 failure domains (for 2 replicas + 1 witness object).

### Implementation

It is recommended that you use this procedure when multiple servers are on the same array. Opt for the same number of servers per vSAN fault domain.
This way, data is better distributed, and it has better protection in the event of a fault domain failing.

Each OVHcloud server has information about the bay in which it is hosted.

Go to the `Hosts and Clusters`{.action} menu, click on the server concerned, then on the `Summary`{.action} tab. You can find the information at the Custom Attributes level: attribute **Rack**.

![attribut Rack](images/01.png){.thumbnail}

In the `Hosts and Clusters`{.action} menu, select the cluster concerned, then click the `Configure`{.action} tab and choose the `vSAN`{.action} menu, then `Fault Domains`{.action}.

Simply drag the server into the “Fault Domains” box **+**.

![fault domain](images/02.png){.thumbnail}

Name the fault domain (you can use, for example, the array name) in the “Fault domain name” field, then confirm by clicking `CREATE`{.action}.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/cloud/private-cloud/vmware_vsan_fault_domain/images/03.png" alt="fault domain name" class="thumbnail" width="70%" height="70%">

You can then track the progress of the task to create the fault domain in the `Recent Tasks`{.action} window.

![fault domain](images/04.png){.thumbnail}

Repeat for as many fault domains as there are different arrays.

![adding multiple fault domains](images/05.png){.thumbnail}

If required, add a server to an existing fault domain by moving it to it, then confirm by clicking `MOVE`{.action}.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/cloud/private-cloud/vmware_vsan_fault_domain/images/06.png" alt="adding servers" class="thumbnail" width="70%" height="70%">

Used, available, and total disk space information is displayed by hovering over the fault domain.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/cloud/private-cloud/vmware_vsan_fault_domain/images/07.png" alt="fault domain information" class="thumbnail" width="60%" height="60%">

The vSAN cluster now has data resilience through fault domains.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
