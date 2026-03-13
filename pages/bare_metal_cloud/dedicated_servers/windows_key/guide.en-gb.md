---
title: 'Change a Windows Server product key'
excerpt: 'Find out how to modify your Windows Server product key'
updated: 2022-07-07
---

## Objective

When you install a Windows Server operating system, the product key – also known as a KMS (Key Management Service) key – may not be installed correctly. In such cases, the operating system has been installed with a 120-day trial key. Once this time period elapses, the operating system can no longer be used. 

**This guide will show you how to change the product key for your Windows Server environment.**

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/os/server-windows/) with Windows installed in your OVHcloud account
- A Windows SPLA licence in your OVHcloud account
- Administrative access to your server via remote desktop connection

## Instructions

### Uninstall the default product key

When your operating system is in trial mode, a default product key is installed. To modify it, open the `Run`{.action} dialogue box by pressing the Windows key on your keyboard + `R`{.action}.

![Run](images/executer2.png){.thumbnail}

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

> [!primary]
>
> If you are using a VPS or Public Cloud instance, you will need to use `kms.cloud.ovh.net`.
> 

### Activate the system

Lastly, to activate your Windows operating system, simply enter the command below:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Go further

Join our [community of users](/links/community).
