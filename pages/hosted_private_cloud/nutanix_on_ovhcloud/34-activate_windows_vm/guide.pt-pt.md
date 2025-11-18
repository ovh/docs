---
title: Ativar VMs do Windows instaladas no Nutanix pela OVHcloud (EN)
excerpt: 'Find out how to activate a Windows Server virtual machine installed on a Nutanix by OVHcloud solution with an OVHcloud SPLA licence'
updated: 2022-12-21
---

## Objective

**This tutorial describes how to activate Windows licences provided by OVHcloud on a Nutanix by OVHcloud solution.**

> [!warning]
> This tutorial will show you how to use one or more OVHcloud solutions with external tools, and will describe the actions to be carried out in a specific context. You may need to adapt the instructions according to your situation.
>
> If you encounter any difficulties performing these actions, please contact a [specialist service provider](/links/partner) and/or discuss the issue with our community. You can find more information in the [Go further](#go-further) section of this tutorial.
>

## Requirements

- A Nutanix cluster in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)
- You must be connected to the cluster via Prism Central
- A Windows licence provided by OVHcloud
- A virtual machine running Windows Server. You can use this guide to install a virtual machine on Windows: [Virtual Machine Management](/pages/hosted_private_cloud/nutanix_on_ovhcloud/06-virtual-machine-management)
- The virtual machine connects to the Internet through the rtvRack (e.g. via the default gateway)

## Instructions

### Uninstall the default product key

When your operating system is in trial mode, a default product key is installed. To modify it, open the `Run`{.action} dialogue box by pressing the Windows key on your keyboard + `R`{.action}.

![Activate run tools](images/01-run01.png){.thumbnail}

![Run](images/01-run02.png){.thumbnail}

In this box, enter the following command:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Install the new product key

You can now install the new product key. To do so, go back to the `Run`{.action} box, and enter the following command:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ipk PRODUCT KEY
```

You can find the product keys for supported versions of Windows Server in the table available on the [official Microsoft web page](https://learn.microsoft.com/en-gb/windows-server/get-started/kms-client-activation-keys).

> [!primary]
>
> Core versions use the same product keys as non-core versions.
>

### Associate your product key

To associate your key with our automated activation system, enter the command below in the `Run`{.action} dialogue box:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net
```

### Activate the system

Lastly, to activate your Windows operating system, simply enter the command below:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
