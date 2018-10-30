---
title: Avoid VM freeze with the Veeam Backup option
excerpt:
slug: eviter-le-freeze-de-vm-avec-l-option-veeam-backup
section: Virtual machine management
---

**Last updated 10/30/2018**

## Objective

In the backup process, you may experience a freeze (~30 seconds) or disk lock when deleting the VM snapshot in the NFS datastore.

This disk lock happens because the VMDK snapshot is mounted on the Backup Proxy which works on a different host.

This problem does not occur if the virtual machine and the Backup Proxy are located on the same host.

**This guide aims to implement the bypass solution, using the VMware DRS mechanism.**

## Requirements

- Have a [Private Cloud](https://www.ovh.co.uk/private-cloud/){.external} offer.
- Have enabled the [Veeam Managed Backup](https://www.ovh.co.uk/private-cloud/options/veeam.xml){.external} Option
- Access to the vSphere management interface.

## Instructions

### Bypass solution overview

Create a DRS rule "Keep VMs together" and add the VMs that need to be backed up, with the Backup Proxy.

You can also create multiple DRS rules, if you have a large number of VMs to backup, and link them with multiple Backup Proxies.

Create another DRS rule "Separate virtual machines" in order to have different Backup Proxies on different ESXi.

The OVH algorithm will ensure that the virtual machine backup process is performed by the Backup Proxy, present on the same ESXi host as the VM.

> [!warning]
>
> Adding a new Backup Proxy will result in an additional cost.
>

### Limitation of this solution

- In large environments, creating multiple DRS rules can be time consuming.
- The user must manually add the new VMs into the DRS rules.
- The different VMs to be backed up but not part of the DRS rules may experience freezes.

### Implementation

To create it, right-click on the cluster, then go to modify the settings.

Create a DRS rule **"Keep virtual machines together"** and add VMs with a Proxy Backup.

In the DRS part, you can add a rule by following the following details.

![](images/image0_7.png){.thumbnail}

Create another DRS rule **"Separate virtual machines"**, in order to keep Backup Proxies on different hosts.

![](images/image0_28.png){.thumbnail}

Create a VM group, enter the group name, and add the host to this rule.

![](images/image1_9.png){.thumbnail}

In summary, you must have an anti-affinity rule so that Backup Proxies are never on the same host.

And as many affinity rules as Backup Proxies.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
