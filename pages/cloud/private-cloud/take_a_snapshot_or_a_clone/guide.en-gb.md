---
title: Take a snapshot or a clone
excerpt: ''
slug: take_a_snapshot_or_a_clone
section: Maintenance and monitoring
---


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

