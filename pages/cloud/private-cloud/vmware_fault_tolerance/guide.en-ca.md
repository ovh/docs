---
title: VMware Fault Tolerance
slug: vmware-fault-tolerance-continuity
excerpt: Find out how to assure continuous availability of your virtual machine by using Fault Tolerance
legacy_guide_number: '2163251'
section: VMware vSphere features
order: 6
---

**Last updated 7th July 2020**

## Objective

The **Fault Tolerance** (FT) functionality of VMware's vSphere allows to protect a virtual machine from hardware failures by cloning the VM on two separate hosts.

![Fault Tolerance](images/FT10v2.gif){.thumbnail}

**This guide explains the usage of Fault Tolerance on your VMs.**

## Requirements

- vSphere HA activated
- Resource reservation equal to 100% of memory
- VMware Tools installed
- Same generation processors
- 4 vCPUs maximum

## Instructions


To activate **Fault Tolerance**, right-click on a VM, then click `Fault Tolerance` and `Turn On Fault Tolerance`.

![Fault Tolerance](images/FT.png){.thumbnail}

A configuration window will open, prompting you to make choices for the secondary VM.

- Datastores

![Fault Tolerance](images/FT1.png){.thumbnail}

- The host

![Fault Tolerance](images/FT2.png){.thumbnail}

Finally, a summary of your choices is displayed. Validate to enable FT on your virtual machine.

![Fault Tolerance](images/FT3.png){.thumbnail}

Your virtual machine is now protected by **Fault Tolerance**, its icon is different and it will show as "primary".

![Fault Tolerance](images/FT4.png){.thumbnail}

Several operations are now available according to your needs.

![Fault Tolerance](images/FT5.png){.thumbnail}

The OVHcloud [Resilience mode](../resilience-mode/) is a good way to test your FT-activated virtual machine for high availability.

## Impossible and incompatible actions

On a virtual machine with **Fault Tolerance** enabled, it is no longer possible to perform certain actions or to use certain devices.

Please refer to [this documentation](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.avail.doc/GUID-F5264795-11DA-4242-B774-8C3450997033.html){.external-link} for more details on the topic. A list of incompatible features and devices is available on [this page](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.avail.doc/GUID-C1749AD4-70E2-406C-864C-719F54BF1BC1.html){.external-link}.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
