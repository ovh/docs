---
title: Cloning a VM
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/clone_a_vm'
excerpt: Learn how to clone an existing virtual machine in vSphere
updated: 2020-11-18
---

**Last updated 18th November 2020**

## Objective

Cloning a VM creates a copy of the source VM.

**This guide explains how to clone a VM.**

## Requirements

- a [Managed Bare Metal infrastructure](https://www.ovhcloud.com/en/managed-bare-metal/)
- a user account with access to [vSphere](/pages/bare_metal_cloud/managed_bare_metal/vsphere-interface) (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we))
- a VM in your cluster

## Instructions

In your [vSphere interface](/pages/bare_metal_cloud/managed_bare_metal/vsphere-interface), navigate to the `Hosts and Clusters` tab of your Managed Bare Metal.

Right-click on the VM to be cloned and click on `Clone`{.action}, then `Clone to virtual machine...`{.action}.

![clone a VM](images/clonevm01.png){.thumbnail}

## Select a name and folder

Name this new VM and set its location in your tree.

![clone a VM](images/clonevm02.png){.thumbnail}

### Select a compute resource

Specify the cluster, host, vApp, or resource pool for this VM.

![clone a VM](images/clonevm03.png){.thumbnail}

### Select storage

Set the storage location (disk space) for this VM. 

The virtual disk type is on "Thin Provision", which means that a virtual disk will be created but will only use the actual disk space used on the storage, regardless of the disk space previously used on the source VM.

More information about disk types can be found in [this guide](/pages/bare_metal_cloud/managed_bare_metal/choosing-disk-type){.external-link}.

You will be able to choose, via the `VM Storage Policy` row, the default storage policy if you have datastores, or the [VM encryption](/pages/bare_metal_cloud/managed_bare_metal/vm_encrypt){.external-link} option.

![clone a VM](images/clonevm04.png){.thumbnail}

### Select clone options

This step allows you to set the network configuration to apply to this VM.

- If you do not check anything, this will not change the network configuration of the new VM compared to the source.

- `Customize the virtual machine's hardware`{.action}: This option allows you to specify the new configurations you want to implement on this new VM.

![clone a VM](images/clonevm05.png){.thumbnail}

> [!warning]
>
> If you did not customise the virtual machine, it is necessary to change the clone configuration before starting it, in order to avoid an IP/MAC conflict. 
>
> In this case, you simply need to uncheck the network adapter in the virtual machine settings once it has been cloned, just before starting it.
>

![clone a VM](images/clonevm06.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.
