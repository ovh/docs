---
title: Volume in vSphere und einem Betriebssystem erweitern (EN)
slug: extend-disk
routes:
    canonical: 'https://docs.ovh.com/gb/en/private-cloud/extend-disk/'
excerpt: How to add space to your virtual disk and integrate it in your VM
section: Verwaltung virtueller Maschinen
updated: 2022-01-13
---

**Last Updated on 13th January 2022**

## Objective

We will demonstrate how to use vSphere and OS management tools to add space to your virtual disks for both Windows and Linux.

**This guide offers you a step by step study case to achieve this objective.**

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de))

## Instructions

> [!warning]
>
> Before proceeding with this type of change, we recommend a full backup or a clone of the virtual machine.
>

### Windows VM

In the vSphere interface menu, go to the `Hosts & Clusters`{.action} dashboard.

![MENU](images/en01dash.png){.thumbnail}

On the left side, navigate to the VM you wish to modify, right click on it and select `Edit Settings`{.action}.

![EDIT](images/en02vm.png){.thumbnail}

Find the disk you are extending and modify the size value as needed (in our case, we changed the value from 80 to 100 GB).<br>
Click `OK`{.action}.

![EDIT](images/en03hdd.png){.thumbnail}

You can verify the change was applied in your recent tasks view.

![EDIT](images/en04task.png){.thumbnail}

Log on the VM and go to the "Disk Management" console.<br>
One simple way to do it is to right click on "Start" and select `Disk Management`{.action}.

![WIN](images/en05start.png){.thumbnail}

In the management console, you can see there is 20GB of unallocated space, corresponding to the space added to the virtual disk previously.

![WIN](images/en06unallocated.png){.thumbnail}

Right-click the existing logical disk and select `Extend Volume`{.action}.

![WIN](images/en07extend.png){.thumbnail}

Click `Next`{.action} in the first wizard window.<br>
In the second window, the whole available space will be selected by default. It can be modified if needed. Click `Next`{.action}.<br>
Click `Finish`{.action} in the last window.

![WIN](images/en08wiz.png){.thumbnail}

You can now see your disk fully extended and available.

![WIN](images/en09done.png){.thumbnail}

### Linux VM

> [!primary]
>
> For Linux VMs, we'll use a partition utility. There are many available products and we do not recommend any over the others. Our use of [GParted LiveCD](http://gparted.sourceforge.net/livecd.php) is in no way an endorsement.
> For creating an ISO library and mounting an ISO to a VM, refer to [How to connect an ISO image to a VM](https://docs.ovh.com/gb/en/private-cloud/connect_iso_to_vm/).

In the vSphere interface menu, go to the `Hosts & Clusters`{.action} dashboard.

![MENU](images/en01dash.png){.thumbnail}

On the left side, navigate to the VM you wish to modify, right-click it and select `Edit Settings`{.action}.

![EDIT](images/en10vm.png){.thumbnail}

Connect the utility ISO to your VM ([How to connect an ISO image to a VM](https://docs.ovh.com/gb/en/private-cloud/connect_iso_to_vm/)).<br> 
Find the disk you are expanding and modify the size value as needed (in our case, we changed the value from 20 to 70 GB).<br>

![EDIT](images/en11hdd.png){.thumbnail}

In the `VM Options`{.action} tab, check the "During the next boot, force entry into the BIOS setup screen" box so you can boot on the partition utility.<br>
Click `OK`{.action}.

![EDIT](images/en12bios.png){.thumbnail}

You can verify the change was applied in your recent tasks view.

![EDIT](images/en13task.png){.thumbnail}

Boot (or reboot) the VM and start the partition utiliy.<br>
*Refer to the software developer documentation to boot and get to the management console.*<br>
In the management console, you can see there is 50GB of unallocated space, corresponding to the space added to the virtual disk previously.

![LIN](images/en14unallocated.png){.thumbnail}

Right-click the existing logical volume and select `Resize/Move`{.action}.

![LIN](images/en15extend.png){.thumbnail}

Drag the right arrow to select the whole available space or type 0 in the "Free space following" field.<br>
Click `Resize/Move`{.action}.

![LIN](images/en16wiz.png){.thumbnail}

Click the green checkmark to apply all operations.

![LIN](images/en17apply.png){.thumbnail}

Click `Apply`{.action} to confirm.

![LIN](images/en18confirm.png){.thumbnail}

Click `Close`{.action} when done.

![LIN](images/en19close.png){.thumbnail}

You can now see your volume contains the unallocated space.<br>
We still need to apply the space to the disk.

![LIN](images/en20disk.png){.thumbnail}

Right-click the existing disk and select `Resize/Move`{.action}.

![LIN](images/en21extend.png){.thumbnail}

Drag the right arrow to select the whole available space or type 0 in the "Free space following" field.<br>
Click `Resize`{.action}.

![LIN](images/en22wiz.png){.thumbnail}

Click the green checkmark to apply all operations.

![LIN](images/en23apply.png){.thumbnail}

Click `Apply`{.action} to confirm.

![LIN](images/en18confirm.png){.thumbnail}

Click `Close`{.action} when done.

![LIN](images/en19close.png){.thumbnail}

You can now see your vitual disk is extended and ready for use.<br>

![LIN](images/en24done.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
