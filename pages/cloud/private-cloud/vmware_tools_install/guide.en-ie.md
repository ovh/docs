---
title: Installing VMware tools
excerpt: 'Find out how to install VMware tools on Linux or Windows'
updated: 2022-02-01
---

**Last updated 1st February 2022**

## Objective

VMware Tools improve the performance of a virtual machine and enable many of its simple features to be used in VMware products.

**This guide explains the steps you need to follow in order to proceed with installing them.**

## Requirements

- A user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie))

## Instructions

The procedure for installing VMware Tools varies depending on the operating system of the virtual machine. For information about the specific procedure for each OS, see the VMware [documentation for VMware Tools](https://kb.vmware.com/s/article/1014294){.external-link}.

### Linux

#### Recent versions

Most recent Linux distributions offer the installation of VMware Tools via their package management systems, under the name [*Open VM Tools*](https://kb.vmware.com/s/article/2073803){.external-link}.

This allows VMware Tools to be kept up-to-date in the same way as other components of the VM's operating system. 

If the distribution you are using offers it, you can find the *Open VM Tools* under the following package name: *open-vm-tools*

This installation method is valid at least for the following GNU/Linux versions:

- Fedora 19 and above
- Debian 7.x and above
- openSUSE 11.x and later
- Ubuntu 12.04 LTS and later
- Red Hat Enterprise Linux 7.0 and later
- CentOS 7.0 and above
- Oracle Linux 7.0 and later
- SUSE Linux Enterprise 11 SP4 and later


#### Previous Versions

To mount the VMware tools disk from the Vsphere web client, right-click on the VM, then click on `Guest OS`{.action} and finally on `Install VMware Tools`{.action}. 

![installer VMware Tools](images/tools.png){.thumbnail}

Then mount the volume activated by the command:

```sh
> # mount /dev/cdrom /mnt
```

Then unzip the VMwareTools archive. Here, in /tmp.

```sh
> cd /tmp 
> tar xvf /mnt/VMwareTools*.tar.gz
> cd vmware-tools-distrib
> ./vmware-install.pl default
```

> [!primary]
>
> If you want to keep suggested answers and not be interrupted during installation, add "default" as an argument to the installation line.
>

Once the installation is complete, the tools disk will be automatically unregistered from the system.

### Windows

Once the volume has been mounted via the “Install/Upgrade VMware Tools” option, find the disk in your VM’s “workstation”. Double-click on it to launch the Tools installation:

![VMware tools windows](images/windows.jpg){.thumbnail}

The installation wizard will then launch and ask to accept the licences and the type of installation to choose (We recommend that you install it completely).

Once the installation is complete, it will offer to restart the machine to take into account the modifications. The CD drive will be automatically unmounted at the end of the installation.

## Go further

Join our community of users on <https://community.ovh.com/en/>.