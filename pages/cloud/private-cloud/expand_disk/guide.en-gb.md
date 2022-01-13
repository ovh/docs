---
title: Expand Disk Space in vSphere and in OS
slug: expand-disk
excerpt: How to add space to your virtual disk and integrate it in your VM
legacy_guide_number: g615
section: Maintenance and monitoring
---

**Last Updated on 01/13/2022**


## Objective

We will demonstrate how to use vSphere and OS management tools to add space to your virtual disks for both Windows and Linux.

**This guide offers you a step by step study case to achieve the objective**


## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))


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


Find the disk you are expanding and modify the size value as needed (in our case, changed the value from 80 to 100 Gb).<br>
Click `OK`{.action}.

![EDIT](images/en03hdd.png){.thumbnail}


You can verify the change was applied in your recent tasks view.

![EDIT](images/en04task.png){.thumbnail}


Log on the VM and go to the Disk Management console.<br>
One simple way to do it is to right click on Start and select `Disk Management`{.action}.

![WIN](images/en05start.png){.thumbnail}


In the management console, you can see there is 20GB of unallocated space, corresponding to the space added to the virtual disk previously.

![WIN](images/en06unallocated.png){.thumbnail}


Right click on the existing logical disk and select `Extend Volume`{.action}.

![WIN](images/en07extend.png){.thumbnail}


Click `Next`{.action} in the first wizard window.<br>
In the second window, the whole available space will be selected by default. It can be modified if needed. Click `Next`{.action}.<br>
Click `Finish`{.action} in the last window.

![WIN](images/en08wiz.png){.thumbnail}


You can now see your disk expanded and available.

![WIN](images/en09done.png){.thumbnail}


### Linux VM

> [!primary]
>
> For Linux VMs, we'll use a partition utility. There are many available products and we do not recommend any over the others. Our use of [GParted LiveCD](http://gparted.sourceforge.net/livecd.php) is in no way an endorsement.
> For creating an ISO library and mounting an ISO to a VM, refer to 


In the vSphere interface menu, go to the `Hosts & Clusters`{.action} dashboard.

![MENU](images/en01dash.png){.thumbnail}


On the left side, navigate to the VM you wish to modify, right click on it and select `Edit Settings`{.action}.

![EDIT](images/en02vm.png){.thumbnail}


Find the disk you are expanding and modify the size value as needed (in our case, changed the value from 80 to 100 Gb).<br>
Click `OK`{.action}.

![EDIT](images/en03hdd.png){.thumbnail}


You can verify the change was applied in your recent tasks view.

![EDIT](images/en04task.png){.thumbnail}


Log on the VM and go to the Disk Management console.<br>
One simple way to do it is to right click on Start and select `Disk Management`{.action}.

![WIN](images/en05start.png){.thumbnail}


In the management console, you can see there is 20GB of unallocated space, corresponding to the space added to the virtual disk previously.

![WIN](images/en06unallocated.png){.thumbnail}


Right click on the existing logical disk and select `Extend Volume`{.action}.

![WIN](images/en07extend.png){.thumbnail}


Click `Next`{.action} in the first wizard window.<br>
In the second window, the whole available space will be selected by default. It can be modified if needed. Click `Next`{.action}.<br>
Click `Finish`{.action} in the last window.

![WIN](images/en08wiz.png){.thumbnail}


You can now see your disk expanded and available.

![WIN](images/en09done.png){.thumbnail}





## Go further

Join our community of users on <https://community.ovh.com/en/>.



---
title: How do you see the disk space added to your OS?
excerpt: ''
slug: how_do_you_see_the_disk_space_added_to_your_os
legacy_guide_number: g615
section: Maintenance and monitoring
---


## 
Before proceeding with this type of operation, we recommend you backup your data or clone the virtual machine.


## For Linux
For Linux distributions. You must use a repartitioning utility. There are several ways to do this:


- [7tools Partition Manager](http://www.7tools.com/pm/index.htm)
- [DFSee](http://www.dfsee.com/dfsee/index.php)
- [EASEUS Partition Manager](http://www.partition-tool.com)
- [GParted LiveCD](http://gparted.sourceforge.net/livecd.php)
- [Partition Logic](http://partitionlogic.org.uk)
- [Paragon Partition Manager](http://www.partition-manager.com)
- [System Rescue CD](http://www.sysresccd.org/Main_Page)


For this guide, we opted for GParted, you can find it in the templates that we offer in .iso format.

You now have three methods to boot from the GParted Live CD.

- When starting the VM, when the VMware progress bar appears, press "Esc" to go to the boot order, and select "CD-Rom".
- To achieve this each time, you can change the display time of the VMware bar in "Options" then "Boot Option", then increase the value of the "Power On Boot Delay" in the settings of your VM.
- Still in the Properties, in the  "Options" tab in "Boot Options", check "Force BIOS setup". Once you have validated it, reboot your VM. After updating the disk, go to the CD properties of your VM and select the .iso GParted file.

You must also enable the "Connect at power on" option.
Once in the "Boot" section of the BIOS, and using the arrow keys go to the CD-ROM reader and the "+" key on the keyboard to highlight the hard drive. Thus, your VM will boot using the GParted CD:

![](images/img_126.jpg){.thumbnail}
Now go to "Exit". Select "Exit Saving Changes" and validate:

![](images/img_127.jpg){.thumbnail}
You are now on the boot page of GParted. Validate the GParted Live option:

![](images/img_128.jpg){.thumbnail}
Now select the keyboard and the language that you are using:

![](images/img_129.jpg){.thumbnail}
You are now on the GParted graphic interface:

![](images/img_130.jpg){.thumbnail}
First you must move your swap. Click on it and select "resize". Then, enter "0" in "Free space following (MiB)".
Now select the partition you want to enlarge and click "resize". Increase the partition using the arrow next to the free space until you get the desired size.
So far, nothing has changed in your disk. You must now apply the changes by clicking "Apply". All tasks defined above are now updated.
You can now validate the end of operations, and perform a reboot of your VM with a double click on "Exit".
Your VM will reboot. Your OS will use all the new space that you have allocated.


## For Windows
You must use the Windows Disk Manager. Go to "Server Manager", then "Storage" and "Disk Management". On our disk 0 with the C: volume, 20GB of space is now available. Right-click on the C: volume and choose "Extend Volume ...".
Now specify the space you want to add. In our case, we will allocate all available space. Then confirm the operation.
All disk space is now well assigned to your C: drive

## WARNING!
OVH accepts no liability for any eventual damage to the integrity of your data when using one of these utilities.

