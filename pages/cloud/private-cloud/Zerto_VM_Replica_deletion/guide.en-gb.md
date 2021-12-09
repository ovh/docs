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

**Use the Zerto UI to delete the replica of the VM from the target site.**

## Requirements 

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere as well as Zerto (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- Have [Zerto Virtual Replication](https://docs.ovh.com/gb/en/private-cloud/zerto-virtual-replication-vmware-vsphere-drp/) deployed


## Instructions



## Go further 

Discuss with other Zerto users on <https://community.ovh.com/>.
