---
title: Delete VM replica from Zerto recovery site
excerpt: Remove a VM replica from a recovery site after deletion on the source site
updated: 2021-12-09
---

**Last updated 09th December 2021**

## Objective

Once a VM is purposefully deleted from the source site, the Zerto VPG it is part of pauses and goes into error state.<br>
The VM replica files are still on the target datastore.<br>
This document shows how to get the VPG back to normal and delete the VM replica from the target site.

**Use the Zerto UI to delete the VM replica from the target site.**

## Requirements 

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://us.ovhcloud.com/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere as well as Zerto (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we))
- A deployed [Zerto Virtual Replication](/pages/cloud/private-cloud/zerto_virtual_replication_as_a_service)

## Instructions

In the Zerto target site interface menu, check the `VPGs`{.action} and `VMs`{.action} dashboards.<br>
In our example, VPG1 holds two VMs, vm1-zerto and vm2-zerto. The site sync status is functional.

![Dash](images/en01sync.png){.thumbnail}

In the source site vSphere interface, vm2-zerto is purposefully deleted.<br>
Both the VM and its disks are removed.

![VM](images/en02vmdelete.png){.thumbnail}

Back in the Zerto target site interface, the VPG pauses and goes into an error state. The vm2-zerto is also greyed out now.

![VM](images/en03vpgerror.png){.thumbnail}

In the `VPGs`{.action} section, check the VPG1 box and in the `Actions`{.action} menu, click `Edit VPG`{.action}.

![VPG](images/en04vpgedit.png){.thumbnail}

In `VMs`{.action}, remove vm2-zerto from the `Selected VMS` (check the box then click the arrow back).<br>
Click `Done`{.action}.

![VPG](images/en05vpgremove.png){.thumbnail}

Click `No`{.action} in the warning window as there is no typical need to save the recovery disk.

![VPG](images/en06warning.png){.thumbnail}

The VPG will sync and will get back to a functional state with only one VM left.

![DONE](images/en07green.png){.thumbnail}

## Go further 

Discuss with other Zerto users on <https://community.ovh.com/>.
