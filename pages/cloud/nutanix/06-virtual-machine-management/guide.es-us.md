---
title: Gestión de las máquinas virtuales (EN)
slug: virtual-machine-management
routes:
    canonical: 'https://docs.ovh.com/gb/en/nutanix/virtual-machine-management/'
excerpt: Discover virtual machine management in Prism Central
section: Primeros pasos
order: 09
---

**Last updated 10th May 2022**

## Objective

Find out how to manage virtual machines in a Nutanix cluster, and how to create and migrate a virtual machine.

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>
> Some software requires a licence such as Microsoft products, so make sure that all installed systems and software have these licences.

## Requirements

- a Nutanix cluster in your OVHcloud account
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)
- You must be connected to Prism Central on the cluster

## Overview of Virtual Machine Management in Prism Central

The Nutanix system uses the same interfaces to manage storage and virtualisation, it can be installed with multiple hypervisors (**Hyper-V, VMware ESXi, AHV**). **AHV** comes with Nutanix without the need to purchase additional licences for the hypervisor. 

The OVHcloud solution is delivered with the **AHV hypervisor**.

**AHV** enables:

- Using virtual machines on Windows and Linux.
- Migrating virtual machines from one node to another in a cluster.
- Micro-segmentation and network security between virtual machines using **Flow** software. 

The **Move** tool makes it easy to migrate existing virtual machines in other environments (**ESXi, Hyper-V & AWS**) to Nutanix and its **AHV** hypervisor.

For more information on **AHV**, see the [Go further](#gofurther) section of this guide.

## Instructions

The following instructions show the creation of a virtual machine in Windows Server 2022 and the migration of a virtual machine.

### Creating a Virtual Machine for a Windows 2022 Operating System

Installing a virtual machine on Windows Server 2022 requires a particular setup because Microsoft does not provide the driver for the **AHV** hypervisor disk controller.

#### Creating a Windows Server 2022 VM
 
In the left-hand menu of **Prism Central**, expand `Compute & Storage`{.action} and click `VMs`{.action}

![Prism Central Dashboard - VM Menu](images/PrismCentralDashBooardWithVMMenu.PNG){.thumbnail}

Click the `Create VM`{.action} button.

![Prism Central dashboard - VM management](images/PrismCentralDashVmDashBoard.PNG){.thumbnail}

Type a name in `Name`{.action}, choose the options in `VM Properties`{.action} and click `Next`{.action}

![Creating a virtual machine - Step 1](images/CreateVM01.PNG){.thumbnail}

##### **Adding a system disk**

Click the `Attach Disk`{.action} button.

![Creating a virtual machine - Step 2](images/CreateVM02.PNG){.thumbnail}

Enter **60** in the `Capacity` field and click `Save`{.action} to create a 60 GB disk.

![Creating a virtual machine - Step 3](images/CreateVM03.PNG){.thumbnail}

##### **Adding Windows Server 2022 Installation ISO Image**

The image must be imported before it can be used in a new virtual machine.

For more information on importing images, see the [Go further](#gofurther) section of this guide.

Click `Attach Disk`{.action}.

![Creating a virtual machine - Step 4](images/CreateVM04.PNG){.thumbnail}

Change the `Type`{.action} settings to **CD-ROM**, `Operation`{.action} to **Clone from Image**, `Image`{.action} to **WS2022EN.ISO**.

Click `Save`{.action}.

![Creating a virtual machine - Step 5](images/CreateVM05.PNG){.thumbnail}

##### **Adding an ISO image containing AHV-specific drivers** 

This image contains the disk controller driver and should also be imported. It is available on the Nutanix website if you have a Nutanix customer account.

Click `Attach Disk`{.action}.

![Creating a virtual machine - Step 6](images/CreateVM06.PNG){.thumbnail}

Change the `Type`{.action} settings to **CD-ROM**, `Operation`{.action} to **Clone from Image**, `Image`{.action} to **Nutanix-VirtIO-1.1.7.iso**.

Click `Save`{.action}.

![Creating a virtual machine - Step 7](images/CreateVM07.PNG){.thumbnail}

##### **Network configuration**

Click `Attach Subnet`{.action}.

![Creating a virtual machine - Step 8](images/CreateVM08.PNG){.thumbnail}

Leave the default fields and click `Save`{.action}.

![Creating a virtual machine - Step 9](images/CreateVM09.PNG){.thumbnail}

Click `Next`{.action}.

![Creating a virtual machine - Step 10](images/CreateVM10.PNG){.thumbnail}

Select your timezone and click `Next`{.action}.

![Creating a virtual machine - Step 11](images/CreateVM11.PNG){.thumbnail}

Click `Create VM`{.action}.

![Creating a virtual machine - Step 12](images/CreateVM12.PNG){.thumbnail}

The newly created virtual machine will then appear in the dashboard.

![VM dashboard - VM Created](images/CreateVM13.PNG){.thumbnail}.
 
#### Windows Server 2022 setup

Select the virtual machine on which you want to install Windows Server 2022, by ticking the box to the left of the VM.

![Installation - WS2022 - Launch](images/InstallWS2022-01.PNG){.thumbnail}

##### **Powering on the virtual machine**

Click the `Actions`{.action} menu then `Power ON`{.action}.

![Installation - WS2022 - Startup ](images/InstallWS2022-02.PNG){.thumbnail}

##### **Launching the console**

Click the `Actions`{.action} menu then `Launch Console`{.action}.

![Installation - WS2022 - Interface Connection ](images/InstallWS2022-03.PNG){.thumbnail}

##### **Starting the installation**

Choose your local settings and click `Next`{.action}.

![Installation - WS2022 - Etape1](images/InstallWS2022-04.PNG){.thumbnail}

Click `Install now`{.action}.

![Installation - WS2022 - Step2](images/InstallWS2022-05.PNG){.thumbnail}

Select **Windows Server 2022 Standard (Desktop Experience)** and click `Next`{.action}.

![Installation - WS2022- Etape3](images/InstallWS2022-06.PNG){.thumbnail}

Review the Microsoft software licence terms and conditions, accept them and click `Next`{.action}.

![Installation - WS2022](images/InstallWS2022-07.PNG){.thumbnail}

Click `Custom: Install Microsoft Server Operating System only (advanced)`{.action}.

![Installation - WS2022](images/InstallWS2022-08.PNG){.thumbnail}

Click on `Load driver`{.action}.

![Installation - WS2022- Step4](images/InstallWS2022-09.PNG){.thumbnail}

Click `Browse`{.action}.

![Installation - WS2022- Step5](images/InstallWS2022-10.PNG){.thumbnail}

Select the correct folder `e:\Windows Server 2022\amd64` and click `OK`{.action}.

![Installation - WS2022- Step5](images/InstallWS2022-11.PNG){.thumbnail}

Select these drivers:

* `Nutanix VirtIO Balloon Driver`{.action}
* `Nutanix VirtIO Ethernet Adapter`{.action}
* `Nutanix VirtIO SCSI pass-through controller`{.action}
* `QEMU FWCfg Device`{.action}

Click `Next`{.action}.

![Installation - WS2022- Step6](images/InstallWS2022-12.PNG){.thumbnail}

The 60 GB disk will appear, click `Next`{.action}.

![Installation - WS2022- Step6](images/InstallWS2022-13.PNG){.thumbnail}

Enter and confirm the password in both fields and click `Finish`{.action}.

![Installation - WS2022- Step9](images/InstallWS2022-14.PNG){.thumbnail}

Windows Server 2022 and WS2022 specific drivers for the **AHV** hypervisor have been installed.

![Installation - WS2022- Step9](images/InstallWS2022-15.PNG){.thumbnail}

#### Installing NGT (Nutanix Guest Tools)

NGT are tools that enable better interaction with Nutanix, particularly in terms of backups and snapshots.

Start the virtual machine console, right-click a CDROM drive, and click `Eject`{.action}.

![NGT Installation 1](images/Ngt-Installation01.png){.thumbnail}

Go back to Prism Central and select the virtual machine.

![NGT Installation 2](images/Ngt-Installation02.png){.thumbnail}

On the `Actions`{.action} menu, click `Install NGT`{.action}.

![NGT Installation 3](images/Ngt-Installation03.png){.thumbnail}

Click `Confirm & Enter Password`{.action}. 

![NGT Installation 4](images/Ngt-Installation04.png){.thumbnail}

Click `Skip and Mount`{.action}.

![NGT Installation 5](images/Ngt-Installation05.png){.thumbnail}

Return to the virtual machine console and right-click the CDROM drive containing the NGT.

Click `Install Nutanix Guest Tools`{.action}.

![NGT Installation 6](images/Ngt-Installation06.png){.thumbnail}

Review the terms and conditions, accept them, then click `Install`{.action}.

![NGT Installation 7](images/Ngt-Installation07.png){.thumbnail}

The installation will then begin.

![NGT Installation 8](images/Ngt-Installation08.png){.thumbnail}

Once the installation is complete, close the installation wizard using the `Close`{.action} button.

![NGT Installation 9](images/Ngt-Installation09.png){.thumbnail}

The installation of a virtual machine on Windows is then complete.

### Migrating a virtual machine

Migrating a virtual machine involves moving a hot VM from one node to another in a cluster. 

If you have several clusters and the appropriate licences, you can also migrate a VM from one cluster to another. 

This guide only shows you how to migrate a VM within the same cluster.

In Prism Central VM Management, click `WS2022N`{.action}.

![Migrate - VM01](images/MigrateVM01.PNG){.thumbnail}

Check which node the VM is currently running on. It is displayed next to **Host**.

![Migrate - VM02](images/MigrateVM02.PNG){.thumbnail}

Click the `More`{.action} button, then `Migrate`{.action}.

![Migrate - VM03](images/MigrateVM03.PNG){.thumbnail}

Choose a destination node.

![Migrate - VM04](images/MigrateVM04.PNG){.thumbnail}

The name of the new node will appear in front of **Host** if the migration is complete.

![Migrate - VM05](images/MigrateVM05.PNG){.thumbnail}

## Go further <a name="gofurther"></a>

[Presentation of a Nutanix cluster](https://docs.ovh.com/es/nutanix/nutanix-hci/)

[Importing images into Nutanix](https://docs.ovh.com/es/nutanix/image-import/)

[Nutanix documentation on AHV](https://portal.nutanix.com/page/documents/details?targetId=AHV-Admin-Guide-v5_20:AHV-Admin-Guide-v5_20)

[Nutanix licences](https://www.nutanix.com/products/software-options)

Join our community of users on <https://community.ovh.com/en/>.
