---
title: OVF Tool (EN)
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ovf_tool'
excerpt: Find out how to export or import virtual machines using the OVF Tool
updated: 2022-01-31
---

**Last updated 31/01/2022**

## Objective

[OVFTOOL](https://www.vmware.com/support/developer/ovf/){.external} is an **export/import** tool for VMs using the OVF format (compatible with Windows, Linux and Mac).

**This guide offers a step by step study case on how to use this tool.**

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl))

## Instructions

We will use the OVFTOOL v4.0 under **Linux Debian**.

![OVF Tool](images/ovftool.png){.thumbnail}

Use the `ovftool --help` command to see the application help file and `ovftool --help examples` for examples.

![OVF Tool](images/ovftool2.png){.thumbnail}

We will proceed with an export of an **.ovf** virtual machine in pcc-37-187-228-180.ovh.com called SQL3.

Before the export, shut the VM down using the `vftool powerOffSource` command as shown below.

![OVF Tool](images/ovftool5.png){.thumbnail}

In the vCenter recent tasks, you can see the VM being shut.

We can now export the VM. Type in the following command:

`ovftool vi://user:password@Dedicatedcloud/datacentre/vm/vmname /destination`

![OVF Tool](images/ovftool6.png){.thumbnail}

Export happens and is successful.

![OVF Tool](images/ovftool7.png){.thumbnail}

To convert an .OVF file into a .VMX one, use the `ovftool -tt=vmx file.ovf /destination/` command.

![OVF Tool](images/ovftool8.png){.thumbnail}

![OVF Tool](images/ovftool9.png){.thumbnail}

To import the VM in your infrastructure, you need to indicate the destination datastore `ovftool -ds=datastore file.ovf`

![OVF Tool](images/ovftool11.png){.thumbnail}

The virtual machine is now deployed in your environment.

Finally, migrating SQL3 to a new Hosted Private Cloud (transfer does not require a third party machine).

![OVF Tool](images/ovftool14.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
