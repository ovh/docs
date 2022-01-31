---
title: OVF Tool
slug: ovf-tool
section: Outils de migration des Machines Virtuelles
---

**Last Updated on 31/01/2022**

## Objective

[OVFTOOL](https://www.vmware.com/support/developer/ovf/){.external-link} is an **export/import** tool for VMs using the OVF format (compatible with Windows, Linux and Mac).

**This guide offers a step by step study case on how to use this tool**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))


## Instructions

We'll use the OVFTOOL v4.0 under **Linux Debian**.

![](images/ovftool.png){.thumbnail}

Use the "**ovftool --help"** command to see the application help file and "**ovftool --help examples"** for examples.

![](images/ovftool2.png){.thumbnail}

We'll proceed with an **export** of an **.ovf** virtual machine in pcc-37-187-228-180.ovh.com called SQL3.

Before the **export**, shut the VM down using the "**ovftool powerOffSource**" command as shown below.

![](images/ovftool5.png){.thumbnail}

In the **vCenter** recent tasks, you can see the VM being shut.

We can now export the VM. Type in the following command:

"**ovftool vi://user:password@Dedicatedcloud/datacentre/vm/vmname /destination**"

![](images/ovftool6.png){.thumbnail}

**Export** happens and is successful.

![](images/ovftool7.png){.thumbnail}

To convert an .OVF file into a .VMX one, use the "**ovftool -tt=vmx file.ovf /destination/**" command.

![](images/ovftool8.png){.thumbnail}

![](images/ovftool9.png){.thumbnail}

To **import** the VM in your infrastructure, you need to indicate the destination datastore "**ovftool -ds=datastore file.ovf**"

![](images/ovftool11.png){.thumbnail}

The virtual machine is now **deployed** in your environment.

Finally, **migrating** SQL3 to a new Dedicated Cloud (transfer does not require a third party machine)

![](images/ovftool14.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.



