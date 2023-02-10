---
title: Using Managed Bare Metal within a vRack
slug: using-managed-bare-metal-with-vrack
routes:
    canonical: 'https://docs.ovh.com/asia/en/private-cloud/using-private-cloud-with-vrack/'
excerpt: Find out how to use vRack with a Managed Bare Metal solution
section: OVHcloud Features
order: 02
updated: 2020-11-23
---

**Last updated 23rd November 2020**

## Objective

The OVHcloud vRack feature makes it possible to connect different cloud services with each other, within one or more secure private networks (VLANs).

**This guide explains how to set this up with a Managed Bare Metal infrastructure.**

## Instructions

### OVHcloud Control Panel

After your [Managed Bare Metal infrastructure](https://www.ovhcloud.com/asia/managed-bare-metal/) is delivered, it will be displayed in the section `vRack` (under "Bare Metal Cloud" in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)) and the "datacenter" will be automatically included into a vRack.

![Data centre](images/vRackDatacenter.PNG){.thumbnail}

You can move the "datacenter" of your Managed Bare Metal infrastructure to another vRack by selecting it and clicking on the `Move`{.action} button.

### vSphere client

In the vSphere client, you can find vRack-capable VLANs in the `Networks` section, located in the *vrack* folder.

> [!success]
>
> By default, OVHcloud delivers an infrastructure with 11 VLANs included (VLAN10 to VLAN20).
>

![vlan](images/vRackVsphere.png){.thumbnail}

You can change their settings or create them again by following [this guide](../creation-vlan/).

You can then assign these *Distributed Port Groups* to the network interfaces of your virtual machines.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
