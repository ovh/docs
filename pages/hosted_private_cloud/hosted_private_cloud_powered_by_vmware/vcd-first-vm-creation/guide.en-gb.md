---
title: "VCD - Create a new virtual machine"
excerpt: "How to create a new Virtual Machine in vCD"
updated: 2024-04-16
---
## Objective

**This guide details how to create your first virtual machine using two methods:**
**- Creating a virtual machine from an ISO**
**- Creating a virtual machine with a template**

## Requirements

- get a vCD
- An iso of an operating system

## Instructions

### Creating a virtual machine 

To create your virtual machine, first go to the datacentre where you plan to deploy it. Next, navigate to the `Compute` > `Virtual Machine` > `NEW VM` section.

![dashboard vcd](images/vcd-dashboard-vcd.png)

![dashboard vm](images/vcd-vm-dashboad.png)

> [!tabs]
> **From Template**
>> What is a **template**? A template is a preconfigured virtual machine that is used to create new ones. The number of memory, vCPU, network cards (NICs), and storage space are already defined and cannot be changed during deployment. Don't worry, you can change it once the deployment process is complete. This is a basic OVA deployment.
>> Back to creating our virtual machine. Fill in the required fields, then make sure to select the `Type` option as `From Template`. You will then see a dropdown menu of the different models available.
>> ![Menu Vm Creation](images/vcd-creation-template-vm.png)
>> The templates available below are part of the pre-provisioned OVHcloud catalog, and can be used in a way that suits your needs. We provide a bunch of different Linux distributions with and without applications already installed, we also imported some models from the Bitnami catalog (https://bitnami.com/stacks/virtual-machine).
>> In the `Custom Properties` section, you can customize various properties of your virtual machine, such as a specific user, the domain name, its IP address, and many others.
> **From scratch**
>> As for creating from a template, fill in the required fields, however for the option `Type` please select `New`.
>> In the `Boot image` section, you will find preconfigured ISOs provided to you.
>> ![Menu Vm Creation](images/vcd-creation-template-vm.png)
>> The `Compute` section allows you to configure the desired amount of vCPU and memory for this virtual machine.

For the NIC section, you have the option to choose the type of NIC you want. The default type (VMXNET3) is often a good choice if you don't have any special requirements.
Regarding network selection, you will find all available networks in your organization. In our example, we will use "ovh-net-priv", a network we have created for you beforehand. We have enabled a DHCP service on this network and configured it with subnet 192.168.0.0/24.

![Creation VM Storage](images/vcd-creation-vm-network.png)

The IP Mode drop-down list provides different IP assignment modes:

    DHCP - Use the DHCP server (your VM must manage the DHCP even if you select it).
    IP Pool — Selects an IP from the network IP pool.
    Manual IP - You must set the IP manually

>[!warning]
> Warning: this IP mode only allows you to organize your VCD inventory, but you will still need to configure the IP (or DHCP) inside the VM.
>

As for the `Storage Policies` section, you will only find one possibility: the vSAN default storage policy.

You can also add virtual disks in this section if you need more than one.

![Storage Policies](images/vcd-create-vm-storage-policies.png)

To conclude, please review all information provided to ensure accuracy. Next, click `Ok` to launch the virtual machine deployment. Once the deployment is complete, you will see the new VM listed in the selected virtual datacenter.

If you have used the **from scratch** method, you just need to turn on your server and launch the installation of your OS.

## Go further

Join our community of users on <https://community.ovh.com/en/>.