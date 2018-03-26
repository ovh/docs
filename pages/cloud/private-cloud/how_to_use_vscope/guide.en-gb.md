---
title: How to use vScope
excerpt: ''
slug: how_to_use_vscope
section: Getting started
---


## Access
You can access vScope via the following url (change according to your private cloud):

https://pcc-178-32-194-8.ovh.com/vScope (please note the capital S)

![](images/img_368.jpg){.thumbnail}
You will be asked to enter a username and password. Just use the admin login that you use to log in to the vSphere Client.
Once you are logged in to the interface, you will arrive directly to an overview of your datacentres:

![](images/img_364.jpg){.thumbnail}


## Filer
On the left-hand side, you will find a list of everything you store as well as their usage statistics.


## Hosts
On this screen, you will find a list of your hosts with the number of cores, VMs, CPUs and RAM used, as well as the network traffic on the host cards (TX = upload and RX = download).
If you double click on the host, you will access another tab with graphs depicting resource usage (RAM, CPU, Network, etc.):

![](images/img_366.jpg){.thumbnail}
You can also zoom in on a specific time period on a graph by left clicking on the graph and selecting the area you want to see:

![](images/img_367.jpg){.thumbnail}
You can choose when you would like to view the graphs (day, week, month, year) at the top of the page in the drop-down menu.


## Virtual machine
In this section, you will find statistics on your virtual machines, including:

- their names
- the datastore in which the VMDK is located, and used and allocated space in the datastore
- the number of snapshots of the machine (taken via the snapshot manager)
- which host the VM is saved to
- its status (power on, off, paused)
- and then CPU and RAM consumption

You will also find information on the disks (bandwidth stats, I/O, latency)

Like with hosts, you can access the graph of the virtual machine and view its other graphs by double clicking on the VM.

