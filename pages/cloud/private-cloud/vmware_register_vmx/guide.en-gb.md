---
title: Reregister VMs in a new PCC
slug: vsphere-register-vm-vmx
excerpt: Find out how to reregister VMs on a new service from old datastores
section: VMware vSphere features
order: 06
---

**Last updated 22th March 2021**

## Objective

Following an incident, some virtual machines may no longer appear in your vSphere inventory, but all files are still present in the datastores.

**Find out how to reregister VMs from a datastore in your vSphere inventory.**

## Requirements

- access to your vSphere [interface](../login-vsphere-interface/)
- datastores containing the virtual machine files

## Instructions

In your [vSphere interface](../login-vsphere-interface/), go to the `Storage`{.action} view.

![storage view](images/restore-vm-01.png){.thumbnail}

Select a datastore from the list.

![select datastore](images/restore-vm-02.png){.thumbnail}

In the folders for this datastore, select the `.vmx` file and click `Register VM`{.action}.

![reregister VM](images/restore-vm-03.png){.thumbnail}

Fill in the information required, then click `Finish`{.action}.

![enregistrer VM](images/restore-vm-04.png){.thumbnail}

You will need to repeat these same operations for each datastore, and for each VM that needs to be reregistered.

Check the settings of your VMs (name, [portgroup](../creation-vlan-vxlan/), etc...) by right-clicking on each one and then selecting `Edit Settings`{.action}.

![change](images/restore-vm-06.png){.thumbnail}

In the event of a configuration error, an error message will be displayed when you restart the VM. 

You can reactivate a VM by right-clicking on it, then clicking `Power On`{.action}.

![enregistrer VM](images/restore-vm-05.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
