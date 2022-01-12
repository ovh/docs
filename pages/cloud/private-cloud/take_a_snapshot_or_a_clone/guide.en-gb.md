---
title: Take a snapshot or a clone
excerpt: ''
slug: take_a_snapshot_or_a_clone
section: Maintenance and monitoring
---

**Last Updated on 01/12/2022**

## Objective

VMWare offers the ability to manually take snapshots or clone VMs.

**This guide explains how to execute those tasks**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))


## Instructions

### Take a Snapshot

A snapshot allows you to capture a VM state.<br>
It offers a layer of protection for your VM prior to executing changes as it offers the ability to come back to that state if needed.

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.<br>
Navigate to your VM, right click on it and in the `Snapshot`{.action} menu, select `Take Snapshot`{.action}.

![TAKE](images/en01take.png){.thumbnail}

By default, the snapshot will be named after the current date and time. You may edit it to your preference.<br>
A description may also be added for reference.<br>
If your VM is running, the snapshot process offers two options:
- Snapshot the virtual machine's memory. This will save the VM Ram state, helping with certain applications that may not have commited changes to disk. It should also make your snapshot crash resistant. meaning it can be reverted to without powering off the VM.
- Quiesce guest file system (Needs VMware Tools installed). This will bring your VM to a state that is backup suitable: clearing buffers, committing changes to disks...<br>
If your VM is not running, those options are greyed out.<br>
*We recommend taking snapshots of a turned off VM and if it is not possible, preferably use the Quiesce option over the memory snapshot for added security.*<br>
Click `OK`{.action} when ready.

![SNAP](images/en02snap.png){.thumbnail}


Your snapshot is done.


### Manage Snapshots

You can take multiple snapshots of a single VM repeating the process explained above.<br>
With time, snapshots will consume resources, especially storage, to be maintained and possibly will affect VM performance.<br>
Below is how to revert to or clear snapshots.

#### Revert to Snapshot

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.<br>
Navigate to your VM, right click on it and in the `Snapshots`{.action} menu, select `Manage Snapshots`{.action}.

![MANAGE](images/en03manage.png){.thumbnail}


Check the snapshot tree and select the one you wish to go back to.<br>
Click on `Revert To`{.action}.

![REVERT](images/en04revert.png){.thumbnail}


Confirm by clicking `OK`{.action}.

![CONFIRM](images/en05confirm.png){.thumbnail}


You can click `Done`{.action} as your VM has been recerted to the point chosen.

> [!primary]
>
> If you only have a single snapshot or wish to revert to the last taken snapshot, you can speed up the process by choosing `Revert to Latest Snapshot`{.action} in the `Snapshots`{.action} menu.


#### Clear Snapshot

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.<br>
Navigate to your VM, right click on it and in the `Snapshots`{.action} menu, select `Manage Snapshots`{.action}.

![MANAGE](images/en03manage.png){.thumbnail}


Check the snapshot tree and select the one you wish to delete.<br>
Click on `Delete`{.action}.<br>
*You can also clear all snapshots by clicking `Delete All`{.action}.*

![Delete](images/en06delete.png){.thumbnail}


Confirm by clicking `OK`{.action}.

![CONFIRM](images/en07confirm.png){.thumbnail}


You can click `Done`{.action} as your snapshot was cleared.

> [!primary]
>
> If you wish to clear all snapshots, you can speed up the process by choosing `Delete All Snapshots`{.action} in the `Snapshots`{.action} menu.


### Clone a VM

Cloning allows for quick and efficient deployment of similar VMs.<br>
You can clone a VM into another one or clone it into a template.

#### Clone to VM

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.<br>
Navigate to your VM, right click on it and in the `Clone`{.action} menu, select `Clone to Virtual Machine`{.action}.

![CLONE](images/en08clonevm.png){.thumbnail}


Name the clone VM and select its datacenter location.<br>
Click `Next`{.action}.

![CLONE](images/en09clonename.png){.thumbnail}


Select the clone VM compute location.<br>
Click `Next`{.action}.

![CLONE](images/en10clonecomp.png){.thumbnail}


Select the clone VM storage location.<br>
Click `Next`{.action}.

![CLONE](images/en11clonestor.png){.thumbnail}


Select the options for your clone VM.
- Customize the operating system will trigger sysprep on first use of the VM
- Customize this virtual machine's hardware allows for modification of VM capabilities (HDD size, network elements...)
- Power on virtual machine after creation is not recommended as you may have to apply changes before startup to prevent issues (network conflicts most notably if you use fixed IPs)<br>
Click `Next`{.action}.

![CLONE](images/en12clonecustom.png){.thumbnail}


Review and click `Finish`{.action}.

![CLONE](images/en13clonefinish.png){.thumbnail}


The cloning process will go through and the new VM is ready for you.



## Go further

Join our community of users on <https://community.ovh.com/en/>.

## Prerequisite
You must use the vSphere Client, either by accessing it using your own local client, or by using the RDP connection provided during the activation of your PCC.

The snapshot allows you to capture the state of your VM when you start it. This snapshot includes (according to your choice):

- The status of all disks in the virtual machine.
- The memory contents of the virtual machine.


Snapshots are useful when you need to return several times to the same state, without creating multiple virtual machines. With snapshots, you create restoration positions. You can preserve the basic state of a VM before migrating to another type of operation. Although snapshots provide an "instant" picture of the disk that can be used by backup solutions, we do not recommend you to use snapshots for your own backups of virtual machine. In fact, if you have a large number of snapshots, they will use a lot of disk space and are not protected in case of hardware failure.


## Take a snapshot
Right click on your VM, select "Snapshot" and "Take a Snapshot":

![](images/img_133.jpg){.thumbnail}
You must now specify the name you want to assign to this snapshot, its description, and if you want the memory of the VM to be also included in the snapshot.

Here you have the opportunity to take a snapshot with or without the RAM used by the VM.
If you integrate the RAM to the snapshot, this will increase the execution time of the task, but you will not have to reboot during its restoration. Otherwise, since the RAM is not saved, the task will be faster, but a reboot of the VM will be necessary when restoring.

![](images/img_134.jpg){.thumbnail}


## Snapshot management
You can see all the snapshots of a VM in the snapshot manager. Right click and select "Snapshot", then "Snapshot Manager":

![](images/img_135.jpg){.thumbnail}


## Prerequisite
You must use the vSphere client, either by accessing it through your own local client, or by using the RDP connection that we have provided at your PCC activation.


## Clone a VM
Right click on the VM to clone then select "Clone". Specify the name of your new VM and its location in your tree:

![](images/img_136.jpg){.thumbnail}
Select the cluster that this VM will depend on:

![](images/img_137.jpg){.thumbnail}
Specify the main host of this VM:

![](images/img_138.jpg){.thumbnail}
Now indicate the filer where the disk space of this VM will be stored. Select, for our example, the destination VM that has (or not) the same format as its source. You can use:


- Same Format as Source: the VM created will be identical in all respects to the source;
- Thin provisioned format: create disk, but only use the disk space really used on the filer;
- Thick Format: use the entire disk space corresponding to the VM on the filer.



![](images/img_139.jpg){.thumbnail}
Now we will configure the network to apply to this VM. You have two choices:

- Do not customize: it will make no changes to the network configuration of the new VM from the source;
- Customize using the Customization Wizard: This option allows you to specify the new configurations that you want to implement in this new VM.



![](images/img_140.jpg){.thumbnail}

## WARNING!
IF you did not make a Custom of the virtual machine, it is necessary to change the configuration of the Clone before starting it, to avoid an IP conflict.
In this case, simply uncheck the network card in the virtual machine settings:

![](images/img_141.jpg){.thumbnail}

