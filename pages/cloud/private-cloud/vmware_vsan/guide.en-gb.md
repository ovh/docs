---
title: 'Using VMware Hyperconvergence with vSAN'
slug: vmware-vsan
excerpt: 'Find out how to use the power of Hyperconvergence for your virtual machines with vSAN'
section: 'VMware vSphere features'
---

**Last updated 30th November 2018**

## Objective


vSAN is a storage solution that combines a group of disks located on a cluster’s VMware hosts, and presents them as a single datastore that can be used for VMs. This architecture, which uses processing and storage capacity distributed across a group of physical hosts, is also called “hyper-converged architecture”. 

Since this datastore is virtualised and managed by vSAN software, it is also referred to as *Software-Defined Storage* (SDS). One of the advantages of vSAN is that it is fully integrated into vSphere, and can be managed directly from vCenter.

The aim of this guide is to explain the concepts and details of setting up vSAN on the OVH Private Cloud.

**Find out how to use the power of Hyperconvergence for your virtual machines with vSAN.**

## Requirements

* an [OVH Private Cloud](https://www.ovh.co.uk/private-cloud/){.external} solution
* at least three vSAN hosts added
* access to the vSphere interface

## Instructions

### Key concepts of vSAN

- **Data protection**

To ensure that your data is protected in the event of a hardware failure on the disks or hosts, you need to define the levels of redundancy you want.

- **Host redundancy**

The first level of redundancy concerns the number of host failures the vSAN cluster must be able to tolerate. This value is named ‘Failure To Tolerate’ (FTT), and it can be between 0 (no redundancy) and 3 (maximum redundancy). Depending on the ‘n’ level set, vSAN will create copies of data blocks and distribute them across each of the hosts. This way, the servers will still remain accessible in the event of a failure. The higher the redundancy level you choose, the more hosts will be required.

* FTT=1:  3 hosts minimum
* FTT=2:  5 hosts minimum
* FTT=3:  7 hosts minimum

- **Disk redundancy**

In addition to host redundancy, vSAN handles disk redundancy with a method called erasure coding. This works similarly to the RAID clusters used by hard disk controllers, but protects the data blocks directly. 

vSAN offers three levels of redundancy.

* **RAID 1**: The default level. Each data block is duplicated across two different hosts (mirror).
* **RAID 5**: Each data block is divided into three data blocks, and a fourth parity block is calculated. This helps find any missing data if one of the data blocks is lost. To write four data blocks, four hosts are needed. With five hosts, the loss of two hosts can be absorbed, since we know that we have at least three data blocks, or two data blocks and a parity block.
* **RAID 6**: Each block is divided into four data blocks, and two parity blocks. This way, the two missing data blocks can be recalculated. As above, to write six data blocks and ensure redundancy, you need an equal number of hosts.

### Turn on vSAN.

#### Turn off high-availability mode (vSphere HA).

vSAN relies on the cluster’s high-availability features. As a result, it is important to ensure that you have turned off this feature before you do anything else.

To turn it off, go to the properties of the cluster you want to turn on vSAN for, in the ‘vSphere Availability’ section. Next, untick the following box:

![](images/vsan_01.png){.thumbnail}

#### vSAN Settings

This guide is based on vSAN’s essential features. As a result, we are using the default options, which are perfectly suited to this usage:

![](images/vsan_03.png){.thumbnail}

The only options we will enable are deduplication and compression. These will help you optimise data storage, by only storing duplicated data once.

This process works by using high-performance flash drives, rather than standard mechanical disks.

![](images/vsan_04.png){.thumbnail}

The network adapters for vSAN traffic are automatically offered.

Click `Next`{.action} to select the disks you want to use for vSAN storage. As soon as you turn on vSAN, the disks are detected automatically.

![](images/vsan_05.png){.thumbnail}

> [!primary]
>
> If you have deployed vSAN before and the disks are already set, they do not need to be selected again. The selection screen is empty, but you can still proceed to the next step.
>
> ![](images/vsan_06.png){.thumbnail}
>

In this new screen, you can check that the settings are all correct before you launch the process.

![](images/vsan_07.png){.thumbnail}

It can take a few minutes to turn on vSAN. Once it has been turned on, you can view the configuration details by clicking on the ‘vSAN’ tab.

![](images/vsan_08.png){.thumbnail}

> [!warning]
>
> It is important to turn on your cluster’s high-availability feature.
>

### Turn off vSAN.

#### Evacuate the datastore.

With vMotion Storage, you can evacuate all of the virtual machines hosted on the vSAN datastore, or delete the machines you are no longer using.

Click on the ‘Datastore’ tab, and check that there are no virtual machines set up on the vSAN datastore.

![](images/vsan_09.png){.thumbnail}

#### Delete disk groups.

If you would like to delete all of the vSAN configuration details for your disks, you can delete the group of disks created by vSAN when you turned it on.

To do this, click on the ‘vSAN’ tab in the cluster properties, and go to the ‘Disk Management’ section.

![](images/vsan_11.png){.thumbnail}

For each of your hosts, select the disk group concerned, and click on the ‘delete’ icon just above it.

You will then be asked to confirm:

![](images/vsan_12.png){.thumbnail}

The first two options are useful if you want to remove a host from a cluster, but keep your vSAN datastore working.

Since you are about to delete the entire datastore, you do not need to migrate your data. You can therefore select the final option: ‘Do not evacuate data’.

The host deletion will take a few minutes.

Repeat this action for each of the nodes in the cluster, until the entire disk group has been deleted:

![](images/vsan_13.png){.thumbnail}

You can ignore any error messages that appear regarding the health of the disk group.

#### Turn off high-availability.

The same way you turned on the high-availability feature, you will need to turn it off on the cluster before you stop vSAN. To do this, go to the cluster properties in the ‘vSphere Availability’ section, then untick the ‘Turn ON vSphere HA” box.

![](images/vsan_14.png){.thumbnail}

#### Turn off vSAN.

Once high-availability has been turned off, you can turn off vSAN.

In the cluster’s properties, click ‘Edit’.

![](images/vsan_16.png){.thumbnail}

Untick the ‘Turn ON vSAN’ box.

![](images/vsan_17.png){.thumbnail}

Click confirm for the request that appears:

![](images/vsan_18.png){.thumbnail}

> [!primary]
>
> If high-availability has not been turned off correctly, you will receive the following error message:
>
> ![](images/vsan_19_FR.png){.thumbnail}
>

Once the operation is complete, you will receive the following confirmation message:

![](images/vsan_20.png){.thumbnail}

> [!warning]
>
> You may need to turn on the high-availability features again after this change, if the cluster continues to host virtual machines stored on external datastores.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
