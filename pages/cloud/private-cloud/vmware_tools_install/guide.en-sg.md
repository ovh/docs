---
title: 'Install VMware tools'
excerpt: ''
slug: install_vmware_tools
section: 'Resource management'
---

The procedure for installing VMware Tools varies depending on the operating system of the virtual machine. For information about the OS-specific procedure, see the VMware [documentation for VMware Tools](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1014294){.external-link}.

Linux (Recent Versions)
-------------------------

Versions
--------

This installation method is valid for the following versions of GNU/Linux:

- Fedora 19 and above
- Debian 7.x and higher
- openSUSE 11.x and higher
- Ubuntu 12.04 LTS and higher
- Red Hat Enterprise Linux 7.0 and higher
- CentOS 7.0 and higher
- Oracle Linux 7.0 and higher
- SUSE Linux Enterprise 11 SP4 and higher

Most recent Linux distributions offer the installation of VMware Tools via their package management systems (under the name *Open VM Tools*). This allows VMware Tools to be maintained in the same way as other components of the VM operating system. If the distribution you are using offers this, you will be able to find the *Open VM Tools* under the package name: *open-vm-tools*.



Linux (Old Versions)
--------------------------

Mount the VMware tools disk from the Vsphere client web, right-click the VM, then select "Guest OS" by validating the "Install VMware Tools" option:

![](images/tools.png){.thumbnail}

Then mount the volume enabled by the following command:

```sh
>     # mount /dev/cdrom /mnt
```

Then unpack the VMwareTools archive (located in /tmp):

```sh
>     $ cd /tmp$ tar xvf /mnt/VMwareTools*.tar.gz $ cd /tmp/vmware-tools-distrib $
>         ./vmware-install.pl default
```

A small tip if you want to default and not prompt: add "default" to the installation line.

Once the installation is complete, the tools disk will automatically be unregistered from the system.

Windows
-------

Once the volume is mounted using the "Install/Upgrade VMware Tools" option, find the disk in the "workstation" of your VM. Double-click it to start the installation of the Tools:

![](images/windows.jpg){.thumbnail}

The installation wizard will then ask you to accept the licenses and select the type of installation (we recommend the "Full Installation"). Once the installation is complete, it will suggest that you restart the machine to propogate the changes. The CD drive will be automatically dismounted at the end of the installation.