---
title: "Setting up a Virtual Machine using Failover IPs and Hyper-V over a vRack"
excerpt: "How to use Hyper-V with Failover-IPs over a vRack"
slug: foip-vrack-hyperv
section: vRack
---

**Last updated 25th February 2021**

## Objective

**This guide will take you through the process of installing Hyper-V, associating a virtual switch, and configuring a VM to work with Failover IPs over a vRack.**

## Requirements

- A [vRack](https://www.ovh.com/sg/solutions/vrack/) compatible dedicated server with Windows Server installed
- An ISO for the OS that will be installed on your VM (CentOS 7 will be used as an example in this guide)
- A vRack delivered to your OVHcloud account
- A Failover IP block of 4 or more IPs
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-sg/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-sg/compare/) for more information.

## Instructions

This guide assumes that you have already installed Windows Server, connected via Remote Desktop, and have already assigned your dedicated server and IP block to a vRack. For more information on these steps please refer to steps 1 through 4 on our guide: [Configuring the vRack on your dedicated servers](../configuring-vrack-on-dedicated-servers).

### Installing Hyper-V

The first step you will need to do is install Hyper-V.

In the Server Manager, click `Add roles and features`{.action}.
 
![Installing hyper-v](images/add-roles-features.png){.thumbnail}

On the Wizard, click `Next`{.action} to proceed to the next page.

![Installing hyper-v](images/add-roles-features-2.png){.thumbnail}

Make sure "Role-Based or feature-based installation" is selected and click `Next`{.action}.

![Installing hyper-v](images/add-roles-features-3.png){.thumbnail}

Ensure that "Select a server from the server pool" is selected and that the server you are working on is selected on the list. Then click `Next`{.action}.

![Installing hyper-v](images/add-roles-features-4.png){.thumbnail}

In the server roles list, check "Hyper-V" and then click `Next`{.action}.

![Installing hyper-v](images/add-roles-features-5.png){.thumbnail}

On the "Features" page, you can simply click `Next`{.action}.

![Installing hyper-v](images/add-roles-features-9.png){.thumbnail}

Next, you are asked to identify which network connection on your server you want to use for the virtual switch.

To do this, open a Command Prompt or PowerShell and execute the command `ipconfig /all`.

Note that in our example `Ethernet 2` is the interface used for the vRack. However, it is possible that the vRack NIC is a different interface in your configuration. The correct one to select will be the interface that does not have the server's main IP address or has a self-assigned IP (169.254.x.x).

![check-interface](images/ipconfig.png){.thumbnail}

Once you have this information, go back to the 'Add Roles and Features Wizard' and click `Next`{.action}.


![Installing hyper-v](images/add-roles-features-6.png){.thumbnail}

Now select the adapter for the vRack that you identified in the Command Prompt or PowerShell, and click `Next`{.action}.

![Installing hyper-v](images/add-roles-features-7.png){.thumbnail}

The next two pages are for choosing migration and storage options. You can configure those as you please.

Once you reach the confirmation page, check "Restart the destination server automatically if required" and click `Yes`{.action}, then `Install`{.action}.

![Installing hyper-v](images/add-roles-features-8.png){.thumbnail}

Hyper-V will now install and the server should reboot.

### Creating and Configuring a VM

Once the server has rebooted, log in and open Hyper-V Manager.

Select your server on the left and click `New`{.action}. Select "Virtual Machine" in the context menu.

![create-vm](images/create-vm.png){.thumbnail}

In the "New Virtual Machine Wizard", you can configure the VM as you please. When you reach the "Configure Networking" step, make sure to select the virtual switch. Once selected, click `Next`{.action} to continue.

![create-vm](images/create-vm-2.png){.thumbnail}

In the "Installation Options" section, be sure to add the ISO for the operating system you are going to install. Click `Next`{.action} to continue.

![create-vm](images/create-vm-3.png){.thumbnail}

When you reach the "Summary" page, ensure that the "Network" (Virtual Switch) and "Operating System" settings are correct and click `Finish`{.action}.

![create-vm](images/create-vm-4.png){.thumbnail}

### Installing the OS and Configuring the IP

When you start the virtual machine, the OS installation should launch automatically. If not, you will likely get the following error message:

>"The unsigned image's hash is not allowed (DB)"

If this occurs, you will need to disable "Secure Boot".

Turn off the VM and click on `Settings`{.action}.

![disable-secure-boot](images/disable-secure-boot.png){.thumbnail}

Next, open the "Security" section, deselect "Enable Secure Boot", then click `Apply`{.action}.

![disable-secure-boot](images/disable-secure-boot-2.png){.thumbnail}

Once done, start the Virtual Machine again.

Configure the operating system as you prefer.
<br>As for the networking settings, you will need to set a static IP.

In our example, the IP block assigned to the vRack is 192.xxx.xxx.80/29. The following is the breakdown of the block:

192.xxx.xxx.80 - Network Address (Reserved - Not usable)
<br>192.xxx.xxx.81 - First usable IP
<br>192.xxx.xxx.82
<br>192.xxx.xxx.83
<br>192.xxx.xxx.84
<br>192.xxx.xxx.85 - Last usable IP
<br>192.xxx.xxx.86 - Default Gateway (Reserved - Not usable)
<br>192.xxx.xxx.87 - Broadcast Address (Reserved - Not usable)

Using 192.xxx.xxx.81 for this example, the configuration should look like the following:

Address: 192.xxx.xxx.81
<br>Subnet Mask: 255.255.255.248
<br>Gateway: 192.xxx.xxx.86
<br>DNS: 213.186.33.99 (You can put another DNS if you wish.)

Once the OS is installed, it should have a network connection established.

You can also see in the example below how the `ifcfg-eth0` file should appear.

![configured](images/configured.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
