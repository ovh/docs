---
title: 'Delete VM replica from Zerto recovery site'
slug: zerto-vm-replica-deletion
excerpt: 'Remove a VM replica from a recovery site after deletion on the source site'
section: 'OVHcloud services and options'
---

**Last updated 12/09/2021**

## Objective

Once a VM is purposefully deleted from the source site, the Zerto VPG it is part of pauses and goes into error state.
The VM replica files are still on the target datastore.
This document shows how to get the VPG back to normal and delete the VM replica from the target site.

**Use the Zerto UI to delete the VM replica from the target site.**

## Requirements 

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere as well as Zerto (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- Have [Zerto Virtual Replication](https://docs.ovh.com/gb/en/private-cloud/zerto-virtual-replication-vmware-vsphere-drp/) deployed


## Instructions

In the Zerto target site interface menu, check the `VPGs`{.action} and `VMs`{.action} dashboards.<br>
In our example, VPG1 holds two VMs, vm1-zerto and vm2-zerto. The site sync status is functional.

![Dash](images/en01sync.png){.thumbnail}


In the source site vSphere interface, vm2-zerto is purposefully deleted.<br>
Both the VM and its disks are removed.

![VM](images/en02vmdelete.png){.thumbnail}


Back in the Zerto target site interface, the VPG pauses and goes into an error state. The vm2-zerto is also greyed out now.

![VM](images/en03vpgerror.png){.thumbnail}


In the `VPGs`{.action} section, check the VPG1




Click `+ Add`{.action} and select `Add DNAT Rule`{.action}.

![DNAT](images/en03nat.png){.thumbnail}

Set the parameters as follows:

- the interface the traffic will come from (for DNAT, your public facing interface)
- the protocol and possibly sub-protocol targeted
- the source IP or IP range
- if applicable, the source port
- the original destination IP (typically, your public facing IP)
- if applicable, the original port targeted
- the translated destination IP or IP range
- enable or disable the rule
- enable or disable logs on the rule     





## Go further 

Discuss with other Zerto users on <https://community.ovh.com/>.
