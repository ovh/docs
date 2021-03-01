---
title: 'Setting up a Virtual Machine using Failover IPs and Hyper-V over a vRack'
excerpt: 'How to use Hyper-V with Failover-IPs over a vRack'
slug: foip-vrack-hyperv
section: vRack
---

**Last updated 25th February, 2021**

## Objective

**This guide will take you through the process of installing Hyper-V, associating a virtual switch, and configuring a VM to work with Failover IPs over a vRack.**

## Requirements

- A [vRack](https://www.ovh.com/world/solutions/vrack/) compatible dedicated server with Windows Server installed.
- An ISO for the OS that will be installed on your VM. (CentOS 7 will be used as an example in this guide)
-  A vRack delivered to your OVHcloud account.
-  A Failover IP block of 4 or more IPs.
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager)

## Instructions

This guide assumes that you have already installed Windows Server, connected via Remote Desktop, and have already assigned your dedicated server and IP block to a vRack. For more information on these steps please refer to steps 1 through 4 on our guide: [Configuring the vRack on your Dedicated Servers](../configuring-vrack-on-dedicated-servers).

### Installing Hyper-V

The first step you will need to do is install Hyper-V.

In the Server Manager, click 'Add roles and features'
 
![Installing hyper-v](images/add-roles-features.png){.thumbnail}

On the Wizard, click 'Next' to proceed to the next Page.

![Installing hyper-v](images/add-roles-features-2.png){.thumbnail}

Next, make sure 'Role-Based or feature-based installation' is selected and click 'Next'.

![Installing hyper-v](images/add-roles-features-3.png){.thumbnail}

Next, ensure that 'Select a server from the server pool' is selected and that the server you are working on is selected on the list. Then click 'Next'.

![Installing hyper-v](images/add-roles-features-4.png){.thumbnail}

Next, check 'Hyper-V' and then click 'Next'.

![Installing hyper-v](images/add-roles-features-5.png){.thumbnail}

On the next page, you can simply click 'Next'

![Installing hyper-v](images/add-roles-features-9.png){.thumbnail}

Next, you are asked to identify which network connection on your server you want to use for the virtual switch.

To do this, open a Command Prompt or PowerShell and execute the command ipconfig /all.


Note that in our example Ethernet 2 is the interface used for the vRack, it is possible that the vRack NIC is a different interface. The one that you want will be the interface that does not have the server's main IP or has a self-assigned IP 169.254.x.x.

![check-interface](images/ipconfig.png){.thumbnail}

Once you have this information, go back to the 'Add Roles and Features Wizard' and click 'Next'.


![Installing hyper-v](images/add-roles-features-6.png){.thumbnail}

Next, select the adaptor for the vRack that you identified in the Command Prompt or PowerShell, and click 'Next'.

![Installing hyper-v](images/add-roles-features-7.png){.thumbnail}

The next 2 Pages are for choosing migration and storage options. You can configure those as you please.

Once you reach the confirmation page check 'Restart the destination server automatically if required', click 'Yes', and click 'Install.

![Installing hyper-v](images/add-roles-features-8.png){.thumbnail}


Hyper-V will now install and the server should reboot.


### Creating and Configuring a VM:

Once the server has rebooted, log in and open Hyper-V Manager.

Select your server on the left and click 'New' and select "Virtual Machine"

![create-vm](images/create-vm.png){.thumbnail}

In the 'New Virtual Machine Wizard' Configure the VM as you please. When you get to the 'Configure Networking' step. Make sure to select the virtual switch. Once selected, click 'Next' to continue.

![create-vm](images/create-vm-2.png){.thumbnail}

Once you reach the 'Installation Options' section, be sure to add the ISO for the operating system you are going to install. Click 'Next' to continue.

![create-vm](images/create-vm-3.png){.thumbnail}

When you reach the 'Summary' page, ensure that the Virtual Switch and Operating System settings are correct and click 'Finish'

![create-vm](images/create-vm-4.png){.thumbnail}

### Installing the OS and Configuring the IP

Start the Virtual Machine, the OS installation should start automatically. If not, you will likely get the following error message:

"The unsigned image's hash is not allowed (DB)"

If this occurs, you will need to disable Secure boot.

Turn off the VM and click on 'Settings'

![disable-secure-boot](images/disable-secure-boot.png){.thumbnail}

Next, click on 'Security', deselect 'Enable Secure Boot', then click 'Apply'.

![disable-secure-boot](images/disable-secure-boot-2.png){.thumbnail}

Once done, start the Virtual Machine again.


Configure the Operating System as you prefer


For the networking settings, you will set a static IP.


In our example, the IP block assigned to the vRack is 192.99.134.80/29. The following is the breakdown of the block:

192.99.134.80 -  Network Address (Reserved - Not usable)
192.99.134.81 - First usable IP
192.99.134.82
192.99.134.83
192.99.134.84
192.99.134.85 - Last usable IP
192.99.134.86 - Default Gateway (Reserved - Not usable)
192.99.134.87 - Broadcast Address (Reserved - Not usable)


We are going to be using 192.99.134.81 in our example. The configuration should look like the following


Address: 192.168.134.81
Subnet Mask: 255.255.255.248
Gateway: 192.99.134.86
DNS: 213.186.33.99 (You can put another DNS if you wish)


Once the OS is installed. It should have already be connected.

You can also see how the ifcfg-eth0 file should appear.

![configured](images/configured.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
