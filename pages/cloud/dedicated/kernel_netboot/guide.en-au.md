---
title: Starting your server on an OVH kernel
slug: kernel-netboot
excerpt: Find here the steps to start your server on an OVH kernel from the network.
section: Server Management
---


## Requirements
The Netboot is a service offered free by OVH and which allows to start the dedicated server that you rent to OVH on a kernel already compiled. Once configured this way, your server automatically loads the kernel from the network, so you do not have to configure anything else. This method also allows you to update your kernel very simply because OVH compiles the latest version of the kernel as soon as it is available and makes it available on Netboot.

To modify the netboot, you must:

- Have a machine, such as a dedicated server, at OVH.
- Access to the client area.


## Procedure
To start your server on the Netboot, you must configure this functionality from your Customer Space.


### Boot from disk
To start your server on Disk, you must first connect to your client space.

Then, go to the Universe `Cloud`{.action}, then select your server.

In the tab `Server Status`{.action}, section `General Information`{.action}, click `modif`{.action} on the Boot line.

Then select `boot to hard disk`{.action}, click `next`{.action}, and finally confirm confirmation of netboot change.

It only remains to reboot the server so that the new netboot is taken into account.


### Boot from Network mode


> [!primary]
>
> This part is intended for servers running Linux. For Windows, FreeBSD, and Virtualization distributions, only Hard Disk mode selection or Rescue modes are possible.
> 

To start your server on a network kernel, you must first connect to your client space.

Then, go to the Universe `Cloud`{.action}, then select your server.

In the tab `Server Status`{.action}, section `General Information`{.action}, click `modif`{.action} on the Boot line.

Select `Boot in Network mode`{.action}.

You will then have to choose the desired kernel from the list below.

- **Stable Kernel, Vanilla - 64bits.** (Support for CPUFAMILY, SMP, & IPv6)
- **Stable Kernel, hz1000 - 64bits.** (Support for CPUFAMILY, SMP, & IPv6)
- **Stable Kernel, with GRSec - 64bits.** (Support for GRSec, CPUFAMILY, SMP, & IPv6)

Then select the Root Device (partition where the root partition of your server is located).

To determine the Root Device of your server, see the /etc/fstab file on your server.

In SSH:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cat /etc/fstab</span> <span class="output"># <file system> <mount point> <type> <options> <dump> <pass></span> <span class="output">/dev/sda1 / ext3 errors=remount-ro 0 1</span> <span class="output">/dev/sda2 /home ext3 defaults,grpquota,usrquota 1 2</span> <span class="output">/dev/sda3 swap swap defaults 0 0</span> <span class="blank">&nbsp;</span> <span class="output">proc /proc proc defaults 0 0</span> <span class="output">sysfs /sys sysfs defaults 0 0</span> <span class="output">shm /dev/shm tmpfs nodev,nosuid,noexec 0 0</span> </pre></div>
In our example, the Root Device will be /dev/sda1.

All that remains is to validate the change and restart the server so that the netboot is taken into account.


### Boot from Rescue mode
To start your server on a network kernel, you must first connect to your client space.

Then, go to the Universe `Cloud`{.action}, then select your server.

In the tab `Server Status`{.action}, section `General Information`{.action}, click `modif`{.action} on the Boot line.

Select `Boot in Rescue`{.action} mode, then the desired rescue mode for the server. (By default, **rescue64-pro**)

All that remains is to validate the change and restart the server so that the netboot is taken into account.