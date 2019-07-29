---
title: Changing a Windows Server product key
excerpt: Find out how to modify your Windows Server product key
slug: windows-key
section: Server Management
---

**Last updated 22nd February 2018**

## Objective

When you install a Windows Server operating system, the product key – also known as a KMS (Key Management Service) key – may not be installed correctly. In such cases, the operating system has been installed with a 120-day trial key. Once this time period elapses, the operating system can no longer be used. 

**This guide will explain how to change the product key for your Windows Server environment.**


## Requirements

- You will need a [dedicated server](https://www.ovh.ie/dedicated_servers/){.external} with Windows installed.
- You need to have a Windows SPLA licence, or have [ordered one](https://www.ovh.ie/dedicated_servers/2014-windows-licences-pricing.xml){.external}.
- You need to have remote desktop access.


## Instructions

### Uninstall the default product key

When your operating system is in trial mode, a default product key is installed. To modify it, open the `Run`{.action} dialogue box (Windows key + `R`{.action}):

![Run dialogue box activation](images/executer.png){.thumbnail}


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

Below is a list of the product keys available for each operating system:

|Operating system|Product key|
|---|---|
|Windows Server 2008 Standard|TM24T-X9RMF-VWXK6-X8JC9-BFGM2|
|Windows Server 2008 Enterprise|YQGMW-MPWTJ-34KDK-48M3W-X4Q6V|
|Windows Server 2008 Datacenter|7M67G-PC374-GR742-YH8V4-TCBY3|
|Windows Server 2008 R2 Standard|YC6KT-GKW9T-YTKYR-T4X34-R7VHC|
|Windows Server 2008 R2 Enterprise|489J6-VHDMP-X63PK-3K798-CPX3Y|
|Windows Server 2008 R2 Datacenter|74YFP-3QFB3-KQT8W-PMXWJ-7M648|
|Windows Server 2012 Standard|XC9B7-NBPP2-83J2H-RHMBY-92BT4|
|Windows Server 2012 Datacenter|48HP8-DN98B-MYWDG-T2DCC-8W83P|
|Windows Server 2012 R2 Standard|D2N9P-3P6X9-2R39C-7RTCD-MDVJX|
|Windows Server 2012 R2 Datacenter|W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9|
|Windows 8.1 Professional|GCRJD-8NW9H-F2CDX-CCM8D-9D6T9|
|Windows Server 2016 Datacenter|CB7KF-BWN84-R7R2Y-793K2-8XDDG|
|Windows Server 2016 Standard|WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY|
|Windows Server 2016 Essentials|JCKRF-N37P4-C2D82-9YXRT-4M63B|
|Windows Server 2019 Standard|N69G4-B89J2-4G8F4-WWYCC-J464C|
|Windows Server 2019 Datacenter|WMDGN-G9PQG-XVVXX-R3X43-63DFG|

Source: [Microsoft MSDN](hhttp://ovh.to/JCXu9TR){.external}.


> [!primary]
>
> Core versions use the same product keys as non-core versions.
> 


### Go to kms.ovh.net

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

Join our community of users on <https://community.ovh.com/en/>.
