---
title: Using VMware Hyperconvergence with vSAN
slug: vmware-vsan
excerpt: Use the power of Hyperconvergence with vSAN
section: VMware vSphere features
order: 10
---

**Last updated 21st December 2021**

## Objective

Find out how to use the power of Hyperconvergence for your virtual machines with vSAN.

**This guide explains how to set up VMware vSAN on OVHcloud Hosted Private Cloud.**

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-ca/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca))
- At least three vSAN hosts

## Instructions

### What is vSAN?

vSAN is an object storage solution offered by VMware. It gathers a set of disks situated directly on your VMware hosts, and presents them as a single datastore. This is known as Software-Defined Storage or SDS. One of the advantages of vSAN is that it is fully integrated into vSphere, and can be managed directly from vCenter.

For full concept review and technical specifications, check out the [Official VMware VSAN page](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vsan-planning.doc/GUID-18F531E9-FF08-49F5-9879-8E46583D4C70.html){.external}

### Setting up vSAN

#### Turn off vSphere HA

vSAN relies on the cluster’s high-availability features. Before you start any operation, you have to ensure that you have turned it off.

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.

![Menu](images/en01hosts.png){.thumbnail}

On the left side, select your cluster, go in the `Configure`{.action} tab then `vSphere Availability`{.action}.<br>
Click the `Edit`{.action} button.

![Menu](images/en02cluster.png){.thumbnail}

Turn off vSphere HA and click `OK`{.action}.

![HA](images/en03ha.png){.thumbnail}

#### Turn on vSAN Service

In the Cluster configuration menu, go down to `vSAN`{.action} / `Services`{.action} and click on `Configure`{.action}.

![VSAN](images/en04vsan.png){.thumbnail}

This guide is based on vSAN’s essential features so we will be using the default options.<br>
All of our hosts are on the same site. We'll select `Single site cluster` and click `Next`{.action}.

![VSAN](images/en05vsantype.png){.thumbnail}

We recommend using Deduplication and Compression to optimize storage.<br>
Click `Next`{.action}.

![VSAN](images/en06vsanservices.png){.thumbnail}


The Claim disks window assigns avalaible disks to cache or capacity (see [Official VMware VSAN page](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vsan-planning.doc/GUID-18F531E9-FF08-49F5-9879-8E46583D4C70.html){.external} for explanation) depending on types and sizes. You can customize it to your need.<br>
Click `Next`{.action}.

![VSAN](images/en07vsanclaim.png){.thumbnail}

With three hosts, fault domain is set up automatically and a single failure will be tolerated.<br>
Click `Next`{.action}.

![VSAN](images/en08vsanfault.png){.thumbnail}

Verify the settings in the summary window then click `Finish`{.action}.

![VSAN](images/en09vsanready.png){.thumbnail}

Go back to the cluster configuration and turn vSphere HA back on.<br>
Your datastore is visible in the storage section and available to use.

![VSAN](images/en10vsandata.png){.thumbnail}

> [!warning]
>
> For performance and resilience reasons, VMware recommends not using more than 70% of the volume of a vSAN datastore.
>

### Turn off vSAN

Before turning off vSAN, make sure to evacuate all of the virtual machines hosted on the datastore, or delete the machines you are no longer using.
Click on the ‘Datastore’ tab, and check that there are no virtual machines set up on the vSAN datastore.

![VSAN](images/en11vsanvm.png){.thumbnail}

#### Delete disk groups.

To delete all of the vSAN configuration details for your disks, you need to delete the group of disks created by vSAN when you turned it on.<br>
In the Cluster configuration menu, go down to `vSAN`{.action} / `Disk Management`{.action}.<br>
For each disk group, click on `...`{.action} then `Remove`{.action}.<br>

![VSAN](images/en12vsanremove.png){.thumbnail}

You are given the option to migrate data. With an empty datastore, there is No data migration necessary.<br>
Click on `Remove`{.action}.

![VSAN](images/en13vsanmig.png){.thumbnail}

Repeat for each of the nodes in the cluster, until the entire disk group has been cleared.<br>
You can safely ignore  error messages regarding the health of the disk group.

#### Turn off Services.

The same way you turned off the high-availability feature to set up vSAN, you will need to turn it off before you stop vSAN.

![HA](images/en03ha.png){.thumbnail}

Once high-availability has been turned off, you can stop the vSAN service in the cluster properties by clicking `Turn Off vSAN`{.action}

![SERVICE](images/en14vsanoff.png){.thumbnail}

Confirm by clicking ‘Turn Off’ in the next window.

![SERVICE](images/en15vsanconfirm.png){.thumbnail}

vSan is now off.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
