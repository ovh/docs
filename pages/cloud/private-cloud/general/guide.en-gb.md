---
title: General
excerpt: ''
slug: general
legacy_guide_number: g597
section: Getting started
---


## 
The high specificity of this product over others, is that it installs directly on the hardware layer (known as Bare Metal hypervisor). It is not necessary to install an operating system
on the "Host" to install VMware ESXi.
VMware ESXi is a hypervisor that allows for precise resource management to each virtual machine and better performance.
A virtual machine is actually an assembly of several files.
This file system has several characteristics, the most significant being that it is capable of handling
multiple concurrent connections.
ESXi also has very specific mechanisms for managing shared memory, such as recovering unused memory plus de-fragmenting and decompressing memory pages.


## 
This tool allows you to migrate a virtual machine from one ESXi server to another "hot", i.e.: without any downtime. This is possible when the host servers use compatible microprocessors (those Hosts proposed by OVH are compatible) and the storage space files of the virtual machine are shared on a SAN or NAS.


## 
This tool allows load balancing across multiple ESXi servers.
Several modes are available. For example, it is possible to let DRS to automatically manage resource allocations between ESXi servers.
DRS is based on the mechanism of VMotion to move virtual machines between ESXi servers within the same cluster. You can also create rules to group or separate VMs on one or more ESXi. (E.g.: a primary and secondary AD).


## 
This vCenter option created an associated cluster of ESXi servers.
The "vLockstep" Technology, on which the FT cluster is held, allows the VM's secondary server to run the VM's primary server in parallel. Only the primary server can write to the disk or to the network: the secondary server runs the same VM, in parallel, without realising what has been written.
In the event the primary server fails, the vCenter will be disabled. This allows the secondary server to take charge and ensure the continuity of this VM's operations.

## WARNING! ! !
This feature is not supported on the Private Cloud at the moment.


## 
vCenter is a management tool to centrally administer all the virtual machines and physical hosts in a virtual environment. Through this interface, it is also possible to manage:

- Monitoring alarms (CPU / RAM);
- Templates (skins of preconfigured operating systems);
- option usage (HA, VMotion, DRS).



